"""
cPanel / CloudLinux Passenger entry point for https://api.csolvetechnology.com/

If you see HTTP 500, open: tmp/startup.log  (created in this folder)
"""

from __future__ import annotations

import os
import sys
import traceback
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
TMP_DIR = BASE_DIR / "tmp"
LOG_FILE = TMP_DIR / "startup.log"

# Critical for SQLite / relative paths under Passenger
os.chdir(str(BASE_DIR))

if str(BASE_DIR) not in sys.path:
    sys.path.insert(0, str(BASE_DIR))

candidate_sites = []

venv_dir = BASE_DIR / ".venv"
if (venv_dir / "lib").exists():
    candidate_sites.extend(sorted((venv_dir / "lib").glob("python*/site-packages")))
if (venv_dir / "Lib" / "site-packages").exists():
    candidate_sites.append(venv_dir / "Lib" / "site-packages")

home = Path.home()
candidate_sites.extend(home.glob("virtualenv/*/3.*/lib/python*/site-packages"))
candidate_sites.extend(
    (BASE_DIR.parent / "virtualenv").glob("*/3.*/lib/python*/site-packages")
)

virtual_env = os.environ.get("VIRTUAL_ENV")
if virtual_env:
    ve = Path(virtual_env)
    candidate_sites.extend(sorted((ve / "lib").glob("python*/site-packages")))
    if (ve / "Lib" / "site-packages").exists():
        candidate_sites.append(ve / "Lib" / "site-packages")

for site in reversed(candidate_sites):
    site_str = str(site)
    if site.exists() and site_str not in sys.path:
        sys.path.insert(0, site_str)


def _load_env(env_file: Path) -> None:
    if not env_file.exists():
        return
    try:
        from dotenv import load_dotenv

        load_dotenv(env_file)
        return
    except Exception:
        pass
    for line in env_file.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))


def _write_log(message: str) -> None:
    try:
        TMP_DIR.mkdir(parents=True, exist_ok=True)
        LOG_FILE.write_text(message, encoding="utf-8")
    except Exception:
        pass


_load_env(BASE_DIR / ".env")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")

try:
    from django.core.wsgi import get_wsgi_application

    application = get_wsgi_application()
    _write_log("Django WSGI application started successfully.\n")
except Exception:
    error_text = traceback.format_exc()
    _write_log(error_text)

    def application(environ, start_response):
        body = (
            "Csolve API failed to start. Check tmp/startup.log on the server.\n\n"
            + error_text
        ).encode("utf-8")
        start_response(
            "500 Internal Server Error",
            [
                ("Content-Type", "text/plain; charset=utf-8"),
                ("Content-Length", str(len(body))),
            ],
        )
        return [body]

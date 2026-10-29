"""
cPanel / CloudLinux Passenger entry point for https://api.csolvetechnology.com/

cPanel → Setup Python App:
  - Domain: api.csolvetechnology.com
  - Application root: folder that contains THIS file
  - Application URL: /
  - Startup file: passenger_wsgi.py
  - Entry point: application
Then install requirements, migrate, collectstatic, Restart.
"""

from __future__ import annotations

import os
import sys
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent

if str(BASE_DIR) not in sys.path:
    sys.path.insert(0, str(BASE_DIR))

candidate_sites = []

# Local .venv
venv_dir = BASE_DIR / ".venv"
if (venv_dir / "lib").exists():
    candidate_sites.extend(sorted((venv_dir / "lib").glob("python*/site-packages")))
if (venv_dir / "Lib" / "site-packages").exists():
    candidate_sites.append(venv_dir / "Lib" / "site-packages")

# cPanel Setup Python App virtualenv
# Example: /home/USER/virtualenv/api/3.11/lib/python3.11/site-packages
home = Path.home()
candidate_sites.extend(home.glob("virtualenv/*/3.*/lib/python*/site-packages"))
candidate_sites.extend(
    (BASE_DIR.parent / "virtualenv").glob("*/3.*/lib/python*/site-packages")
)

# VIRTUAL_ENV when Passenger sets it
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

# Load .env before Django boots
env_file = BASE_DIR / ".env"
if env_file.exists():
    try:
        from dotenv import load_dotenv

        load_dotenv(env_file)
    except Exception:
        for line in env_file.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, value = line.split("=", 1)
            os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")

from django.core.wsgi import get_wsgi_application  # noqa: E402

application = get_wsgi_application()

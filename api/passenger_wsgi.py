"""
cPanel Passenger WSGI entry point for https://api.csolvetechnology.com/

cPanel → Setup Python App:
  Application root: /home/<user>/.../api   (this folder)
  Application startup file: passenger_wsgi.py
  Application Entry point: application
"""

from __future__ import annotations

import os
import sys
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent

# Ensure project root is importable.
if str(BASE_DIR) not in sys.path:
    sys.path.insert(0, str(BASE_DIR))

# Prefer packages from the local virtualenv (created by cPanel or manually).
VENV_DIR = BASE_DIR / ".venv"
candidate_sites = []
if (VENV_DIR / "lib").exists():
    for path in sorted((VENV_DIR / "lib").glob("python*/site-packages")):
        candidate_sites.append(path)
if (VENV_DIR / "Lib" / "site-packages").exists():
    candidate_sites.append(VENV_DIR / "Lib" / "site-packages")

for site in reversed(candidate_sites):
    site_str = str(site)
    if site_str not in sys.path:
        sys.path.insert(0, site_str)

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")

from django.core.wsgi import get_wsgi_application  # noqa: E402

application = get_wsgi_application()

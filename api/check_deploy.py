"""
Run inside the cPanel Python App virtualenv:

  python check_deploy.py

Prints common misconfiguration issues that cause HTTP 500.
"""

from __future__ import annotations

import os
import sys
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
os.chdir(BASE_DIR)
sys.path.insert(0, str(BASE_DIR))

print("Python:", sys.version)
print("CWD:", Path.cwd())
print("BASE_DIR:", BASE_DIR)
print()

required_modules = [
    "django",
    "rest_framework",
    "corsheaders",
    "dotenv",
    "PIL",
    "whitenoise",
]

missing = []
for name in required_modules:
    try:
        __import__(name if name != "dotenv" else "dotenv")
        print(f"[OK] import {name}")
    except Exception as exc:
        missing.append(name)
        print(f"[MISSING] {name}: {exc}")

print()
env_path = BASE_DIR / ".env"
print(".env exists:", env_path.exists())
print("db.sqlite3 exists:", (BASE_DIR / "db.sqlite3").exists())
print("passenger_wsgi.py exists:", (BASE_DIR / "passenger_wsgi.py").exists())
print("staticfiles exists:", (BASE_DIR / "staticfiles").exists())
print("media exists:", (BASE_DIR / "media").exists())

if missing:
    print("\nInstall missing packages with:")
    print("  pip install -r requirements.txt")
    sys.exit(1)

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")
try:
    import django

    django.setup()
    from django.conf import settings

    print("\nDEBUG:", settings.DEBUG)
    print("ALLOWED_HOSTS:", settings.ALLOWED_HOSTS)
    print("DATABASE:", settings.DATABASES["default"]["NAME"])
    print("\nDjango setup: OK")
except Exception as exc:
    print("\nDjango setup FAILED:")
    print(exc)
    sys.exit(1)

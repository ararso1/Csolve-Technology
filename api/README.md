# Csolve Technology API (Django)

Production host: **https://api.csolvetechnology.com/**

Uses **SQLite** (`db.sqlite3`) for both local and production. Content is managed in Django Admin; the Next.js site reads public APIs.

## Local setup

```bash
cd api
python -m venv .venv
# Windows:
.\.venv\Scripts\activate
# Linux/macOS:
# source .venv/bin/activate

pip install -r requirements.txt
cp .env.example .env          # Windows: copy .env.example .env
python manage.py migrate
python manage.py createsuperuser
python manage.py seed_gallery
python manage.py runserver
```

- Health: http://127.0.0.1:8000/
- Admin: http://127.0.0.1:8000/admin/
- Gallery: http://127.0.0.1:8000/api/gallery/

## cPanel production (Passenger)

1. Create subdomain **api.csolvetechnology.com** pointing at the `api` application folder.
2. **Setup Python App** in cPanel:
   - Application root: the `api` directory
   - Startup file: `passenger_wsgi.py`
   - Entry point: `application`
3. Create/select a virtualenv and install deps:
   ```bash
   pip install -r requirements.txt
   ```
4. Create `.env` from `.env.production.example` and set a strong `DJANGO_SECRET_KEY`.
5. Run:
   ```bash
   python manage.py migrate
   python manage.py collectstatic --noinput
   python manage.py createsuperuser
   python manage.py seed_gallery   # optional first seed
   ```
6. Ensure `db.sqlite3`, `media/`, and `.env` are writable by the app user.
7. Restart the Python app in cPanel.

Keep SQLite as-is — do not switch to MySQL/Postgres unless you intentionally change the project later.

## Frontend

Live frontend should call:

```
NEXT_PUBLIC_API_URL=https://api.csolvetechnology.com
```

Local frontend override in `frontend/.env.local`:

```
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

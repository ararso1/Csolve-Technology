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

### Important (fixes Apache 404)

A response like **“The resource requested could not be found on this server!”** means Apache/LiteSpeed is answering — Passenger/Django is **not** attached to the subdomain yet.

1. Upload the full `api` folder to the server (must include `passenger_wsgi.py`, `config/`, `content/`, `manage.py`, `requirements.txt`).
2. In cPanel create subdomain **api.csolvetechnology.com**.
3. **Setup Python App**:
   - **Application domain**: `api.csolvetechnology.com` (not only a path under public_html)
   - **Application root**: the folder that contains `passenger_wsgi.py`
   - **Application URL**: `/`
   - **Startup file**: `passenger_wsgi.py`
   - **Entry point**: `application`
4. Open the app’s terminal / virtualenv and install:
   ```bash
   pip install -r requirements.txt
   ```
5. Create `.env` from `.env.production.example` (strong `DJANGO_SECRET_KEY`, `DJANGO_DEBUG=False`).
6. Run:
   ```bash
   python manage.py migrate
   python manage.py collectstatic --noinput
   python manage.py createsuperuser
   python manage.py seed_gallery
   ```
7. Make sure subdomain **document root = application root** (same folder as `passenger_wsgi.py`).
8. Click **Restart** on the Python app.
9. Confirm:
   - https://api.csolvetechnology.com/ → `{"status":"ok","service":"csolve-api"}`
   - https://api.csolvetechnology.com/api/gallery/
   - https://api.csolvetechnology.com/admin/

If cPanel did not write Passenger lines into `.htaccess`, copy `.htaccess.cpanel.example` → `.htaccess` and replace `YOUR_CPANEL_USER` / Python version.

### HTTP 500 troubleshooting

1. In the Python App terminal run:
   ```bash
   pip install -r requirements.txt
   python check_deploy.py
   python manage.py migrate
   python manage.py collectstatic --noinput
   ```
2. Restart the Python app.
3. Open these log files in the `api` folder:
   - `tmp/startup.log` — Passenger/Django boot errors
   - `tmp/django_errors.log` — runtime errors
4. Temporarily set in `.env`:
   ```
   DJANGO_DEBUG=True
   ```
   Restart, reload https://api.csolvetechnology.com/, read the traceback, then set `DJANGO_DEBUG=False` again.

Keep SQLite as-is — do not switch to MySQL/Postgres unless you intentionally change later.

## Frontend

Live frontend should call:

```
NEXT_PUBLIC_API_URL=https://api.csolvetechnology.com
```

Local frontend override in `frontend/.env.local`:

```
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

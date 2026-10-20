# Csolve Technology API (Django)

The `content` app manages website data (gallery first; team, partners, blogs, events, contact, etc. next).

Content is managed in Django Admin. The Next.js site reads published data from public APIs.

## Setup

```bash
cd api
python -m venv .venv
.\.venv\Scripts\activate          # Windows
# source .venv/bin/activate       # macOS / Linux

pip install -r requirements.txt
copy .env.example .env            # Windows
python manage.py migrate
python manage.py createsuperuser
python manage.py seed_gallery
python manage.py runserver
```

- Admin: http://127.0.0.1:8000/admin/
- Gallery API: http://127.0.0.1:8000/api/gallery/
- Categories: http://127.0.0.1:8000/api/gallery/categories/
- Items: http://127.0.0.1:8000/api/gallery/items/?category=software

## Frontend

Set in `frontend/.env.local`:

```
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

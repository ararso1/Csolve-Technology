"""
Seed gallery categories and items from the previous static frontend data.

Usage:
  python manage.py seed_gallery
  python manage.py seed_gallery --clear
"""

from pathlib import Path

from django.core.files import File
from django.core.management.base import BaseCommand
from django.conf import settings

from content.models import GalleryCategory, GalleryItem


CATEGORIES = [
    {"slug": "software", "label": "Software & ERP", "order": 1},
    {"slug": "websites", "label": "Websites", "order": 2},
    {"slug": "mobile", "label": "Mobile Apps", "order": 3},
    {"slug": "ai", "label": "AI & Innovation", "order": 4},
    {"slug": "community", "label": "Community", "order": 5},
    {"slug": "infrastructure", "label": "Infrastructure", "order": 6},
]

ITEMS = [
    {
        "slug": "enterprise-ops",
        "title": "Enterprise Operations Platform",
        "category": "software",
        "image": "works/01.jpg",
        "size": "large",
        "order": 1,
    },
    {
        "slug": "gov-portal",
        "title": "Public Service Portal",
        "category": "websites",
        "image": "works/02.jpg",
        "size": "tall",
        "order": 2,
    },
    {
        "slug": "field-app",
        "title": "NGO Field Reporting App",
        "category": "mobile",
        "image": "works/03.jpg",
        "size": "normal",
        "order": 3,
    },
    {
        "slug": "ai-assistant",
        "title": "AI Support Assistant",
        "category": "ai",
        "image": "works/04.jpg",
        "size": "normal",
        "order": 4,
    },
    {
        "slug": "erp-dashboard",
        "title": "ERP Business Dashboard",
        "category": "software",
        "image": "service/erp.jpg",
        "size": "wide",
        "order": 5,
    },
    {
        "slug": "software-dev",
        "title": "Custom Software Delivery",
        "category": "software",
        "image": "service/software.jpg",
        "size": "normal",
        "order": 6,
    },
    {
        "slug": "ai-lab",
        "title": "AI Solution Workshop",
        "category": "ai",
        "image": "service/ai.jpg",
        "size": "tall",
        "order": 7,
    },
    {
        "slug": "cyber-ops",
        "title": "Cybersecurity Operations",
        "category": "infrastructure",
        "image": "service/cybersecurity.jpg",
        "size": "normal",
        "order": 8,
    },
    {
        "slug": "digital-class",
        "title": "Digital Classroom Support",
        "category": "community",
        "image": "community/education.jpg",
        "size": "normal",
        "order": 9,
    },
    {
        "slug": "student-access",
        "title": "Student Digital Access",
        "category": "community",
        "image": "community/students.jpg",
        "size": "wide",
        "order": 10,
    },
    {
        "slug": "library-hub",
        "title": "Digital Library Initiative",
        "category": "community",
        "image": "community/library.jpg",
        "size": "normal",
        "order": 11,
    },
    {
        "slug": "volunteer-day",
        "title": "Community Volunteering Day",
        "category": "community",
        "image": "community/volunteer.jpg",
        "size": "tall",
        "order": 12,
    },
    {
        "slug": "computer-lab",
        "title": "Computer Lab Setup",
        "category": "infrastructure",
        "image": "community/computers.jpg",
        "size": "normal",
        "order": 13,
    },
    {
        "slug": "web-experience",
        "title": "Modern Web Experience",
        "category": "websites",
        "image": "works/05.jpg",
        "size": "normal",
        "order": 14,
    },
    {
        "slug": "mobile-product",
        "title": "Mobile Product Interface",
        "category": "mobile",
        "image": "works/06.jpg",
        "size": "large",
        "order": 15,
    },
    {
        "slug": "product-design",
        "title": "Product Design Sprint",
        "category": "websites",
        "image": "project/05.jpg",
        "size": "normal",
        "order": 16,
    },
    {
        "slug": "team-workshop",
        "title": "Delivery Workshop",
        "category": "software",
        "image": "project/07.jpg",
        "size": "normal",
        "order": 17,
    },
    {
        "slug": "infra-network",
        "title": "Network Infrastructure",
        "category": "infrastructure",
        "image": "project/09.jpg",
        "size": "wide",
        "order": 18,
    },
]


class Command(BaseCommand):
    help = "Seed gallery categories and items for Csolve Technology"

    def add_arguments(self, parser):
        parser.add_argument(
            "--clear",
            action="store_true",
            help="Delete existing gallery data before seeding",
        )

    def handle(self, *args, **options):
        if options["clear"]:
            GalleryItem.objects.all().delete()
            GalleryCategory.objects.all().delete()
            self.stdout.write(self.style.WARNING("Cleared existing gallery data."))

        frontend_img = (
            Path(settings.BASE_DIR).parent / "frontend" / "public" / "assets" / "img"
        )

        categories = {}
        for data in CATEGORIES:
            cat, created = GalleryCategory.objects.update_or_create(
                slug=data["slug"],
                defaults={
                    "label": data["label"],
                    "order": data["order"],
                    "is_active": True,
                },
            )
            categories[data["slug"]] = cat
            self.stdout.write(
                f"{'Created' if created else 'Updated'} category: {cat.label}"
            )

        for data in ITEMS:
            category = categories[data["category"]]
            item, created = GalleryItem.objects.update_or_create(
                slug=data["slug"],
                defaults={
                    "title": data["title"],
                    "category": category,
                    "size": data["size"],
                    "order": data["order"],
                    "is_published": True,
                },
            )

            source = frontend_img / data["image"]
            if source.exists() and (created or not item.image):
                with source.open("rb") as fh:
                    item.image.save(source.name, File(fh), save=True)
                self.stdout.write(f"  Attached image: {source.name}")
            elif not source.exists():
                self.stdout.write(
                    self.style.WARNING(f"  Missing image file: {source}")
                )

            self.stdout.write(
                f"{'Created' if created else 'Updated'} item: {item.title}"
            )

        self.stdout.write(self.style.SUCCESS("Gallery seed complete."))

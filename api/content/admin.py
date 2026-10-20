from django.contrib import admin
from .models import GalleryCategory, GalleryItem


@admin.register(GalleryCategory)
class GalleryCategoryAdmin(admin.ModelAdmin):
    list_display = ("label", "slug", "order", "is_active")
    list_editable = ("order", "is_active")
    list_filter = ("is_active",)
    search_fields = ("label", "slug")
    prepopulated_fields = {"slug": ("label",)}


@admin.register(GalleryItem)
class GalleryItemAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "category",
        "size",
        "order",
        "is_published",
        "updated_at",
    )
    list_editable = ("order", "is_published", "size")
    list_filter = ("is_published", "category", "size")
    search_fields = ("title", "slug")
    prepopulated_fields = {"slug": ("title",)}
    autocomplete_fields = ("category",)
    readonly_fields = ("created_at", "updated_at")

from django.db import models


class GalleryCategory(models.Model):
    slug = models.SlugField(unique=True, max_length=64)
    label = models.CharField(max_length=120)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["order", "label"]
        verbose_name_plural = "gallery categories"

    def __str__(self):
        return self.label


class GalleryItem(models.Model):
    class Size(models.TextChoices):
        NORMAL = "normal", "Normal"
        WIDE = "wide", "Wide"
        TALL = "tall", "Tall"
        LARGE = "large", "Large"

    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, max_length=120)
    category = models.ForeignKey(
        GalleryCategory,
        on_delete=models.PROTECT,
        related_name="items",
    )
    image = models.ImageField(upload_to="gallery/%Y/%m/")
    size = models.CharField(
        max_length=16,
        choices=Size.choices,
        default=Size.NORMAL,
    )
    order = models.PositiveIntegerField(default=0)
    is_published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["order", "-created_at"]

    def __str__(self):
        return self.title

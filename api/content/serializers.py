from rest_framework import serializers
from .models import GalleryCategory, GalleryItem


class GalleryCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryCategory
        fields = ("id", "slug", "label", "order")


class GalleryItemSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source="category.slug")
    categoryLabel = serializers.CharField(source="category.label")
    image = serializers.SerializerMethodField()

    class Meta:
        model = GalleryItem
        fields = (
            "id",
            "slug",
            "title",
            "category",
            "categoryLabel",
            "image",
            "size",
            "order",
        )

    def get_image(self, obj):
        request = self.context.get("request")
        if not obj.image:
            return None
        url = obj.image.url
        if request is not None:
            return request.build_absolute_uri(url)
        return url

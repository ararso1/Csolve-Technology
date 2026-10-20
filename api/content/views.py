from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import GalleryCategory, GalleryItem
from .serializers import GalleryCategorySerializer, GalleryItemSerializer


class GalleryCategoryListView(generics.ListAPIView):
    """Public list of active gallery categories."""

    serializer_class = GalleryCategorySerializer

    def get_queryset(self):
        return GalleryCategory.objects.filter(is_active=True)


class GalleryItemListView(generics.ListAPIView):
    """Public list of published gallery items. Optional ?category=slug filter."""

    serializer_class = GalleryItemSerializer

    def get_queryset(self):
        qs = GalleryItem.objects.filter(
            is_published=True,
            category__is_active=True,
        ).select_related("category")
        category = self.request.query_params.get("category")
        if category and category != "all":
            qs = qs.filter(category__slug=category)
        return qs


class GalleryBundleView(APIView):
    """
    Convenience endpoint: categories + items in one response
    for the Next.js gallery page.
    """

    def get(self, request):
        categories = GalleryCategory.objects.filter(is_active=True)
        items = GalleryItem.objects.filter(
            is_published=True,
            category__is_active=True,
        ).select_related("category")

        category_param = request.query_params.get("category")
        if category_param and category_param != "all":
            items = items.filter(category__slug=category_param)

        return Response(
            {
                "categories": GalleryCategorySerializer(
                    categories, many=True, context={"request": request}
                ).data,
                "items": GalleryItemSerializer(
                    items, many=True, context={"request": request}
                ).data,
            }
        )

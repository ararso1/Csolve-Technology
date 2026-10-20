from django.urls import path
from .views import GalleryBundleView, GalleryCategoryListView, GalleryItemListView

urlpatterns = [
    path("", GalleryBundleView.as_view(), name="gallery-bundle"),
    path("categories/", GalleryCategoryListView.as_view(), name="gallery-categories"),
    path("items/", GalleryItemListView.as_view(), name="gallery-items"),
]

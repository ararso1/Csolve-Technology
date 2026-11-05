from django.conf import settings
from django.contrib import admin
from django.http import JsonResponse
from django.urls import include, path, re_path
from django.views.static import serve

admin.site.site_header = "Csolve Technology Admin"
admin.site.site_title = "Csolve Admin"
admin.site.index_title = "Manage website content"


def health(_request):
    return JsonResponse({"status": "ok", "service": "csolve-api"})


urlpatterns = [
    path("", health, name="health"),
    path("admin/", admin.site.urls),
    path("api/gallery/", include("content.urls")),
]

# Always serve uploaded media (DEBUG=False on cPanel skips django.conf.urls.static).
# Required for gallery images at /media/...
urlpatterns += [
    re_path(
        r"^media/(?P<path>.*)$",
        serve,
        {"document_root": settings.MEDIA_ROOT},
    ),
]

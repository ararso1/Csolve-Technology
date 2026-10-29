from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.http import JsonResponse
from django.urls import include, path

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

# Serve uploaded media on cPanel (SQLite + local media folder).
# Static files are handled by WhiteNoise.
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

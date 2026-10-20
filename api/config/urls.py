from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

admin.site.site_header = "Csolve Technology Admin"
admin.site.site_title = "Csolve Admin"
admin.site.index_title = "Manage website content"

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/gallery/", include("content.urls")),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

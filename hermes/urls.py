from django.contrib import admin
from django.urls import path
from django.contrib.sitemaps.views import sitemap
from core.sitemap import StaticViewSitemap
from core import views

sitemaps = {
    'static': StaticViewSitemap,
}

urlpatterns = [
    path('admin/', admin.site.urls),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps},
         name='django.contrib.sitemaps.views.sitemap'),
    path('developer/', views.developer, name='developer'),
] 
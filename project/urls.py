
from django.contrib import admin
from django.urls import path, include, re_path
from .views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/teams/', include('teams.urls')),
    path('api/players/', include('players.urls')),
    path('api/formations/', include('formations.urls')),
    path('api/auth/', include('jwt_auth.urls')),
    re_path(r'^.*$', index)

]

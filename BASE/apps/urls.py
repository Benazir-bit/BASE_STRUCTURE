from django.conf.urls import url, include
from rest_framework import routers
from .api import *
from knox import views as knox_views
from django.urls import path

app_name = 'apps'

#router = routers.DefaultRouter()
#router.register('api/users', UserViewSet, 'api_users')

urlpatterns = [
    # Auth API
    path('api/auth', include('knox.urls')),
    path('api/auth/login', LoginAPI.as_view(), name="login"),
    path('api/auth/password/', PasswordAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'),

  
]

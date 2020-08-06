from django.urls import path, include, re_path
from . import views

app_name = "frontend"

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.index, name="index"),
    re_path(r'^app/.*$', views.index, name='index'),
]

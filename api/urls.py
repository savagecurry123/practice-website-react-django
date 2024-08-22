from django.urls import path
from . import views

urlpatterns = [
    path('welcome/', views.welcome),
    path('users/', views.users),
    path('add_user/', views.add_user),
]
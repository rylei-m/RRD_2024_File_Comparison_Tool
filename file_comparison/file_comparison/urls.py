# file_comparison/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from comparisons import views

router = DefaultRouter()
router.register(r'documents', views.DocumentViewSet, basename='document')
router.register(r'compare', views.ComparisonViewSet, basename='compare')

urlpatterns = [
    path('api/', include(router.urls)),
]


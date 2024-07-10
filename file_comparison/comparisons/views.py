from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.response import Response
from .models import Document, ComparisonResult
from .serializers import DocumentSerializer, ComparisonResultSerializer


class DocumentViewSet(viewsets.ModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer


class ComparisonViewSet(viewsets.ViewSet):
    def create(self, request):
        #logic here later
        pass
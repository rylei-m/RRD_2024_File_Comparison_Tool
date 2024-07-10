from rest_framework import serializers
from .models import Document, ComparisonResult

class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ['id', 'file', 'uploaded_at']

class ComparisonResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = ComparisonResult
        fields = ['id', 'document_1', 'document_2', 'result', 'created_at']

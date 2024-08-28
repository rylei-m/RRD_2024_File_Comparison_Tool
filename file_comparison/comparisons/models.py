from django.db import models

class Document(models.Model):
    file = models.FileField(upload_to='documents/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

class ComparisonResult(models.Model):
    document_1 = models.ForeignKey(Document, related_name='document_1', on_delete=models.CASCADE)
    document_2 = models.ForeignKey(Document, related_name='document_2', on_delete=models.CASCADE)
    result = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
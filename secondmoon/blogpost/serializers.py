from rest_framework import serializers

class BlogpostSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=1000)
    date = serializers.DateTimeField()
    content = serializers.CharField()
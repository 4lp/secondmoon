from .models import Blogpost
from .serializers import BlogpostSerializer
from rest_framework import viewsets

class BlogpostViewSet(viewsets.ModelViewSet):
    queryset = Blogpost.objects.all()
    serializer_class = BlogpostSerializer


    def getBlogpost(self, request):
        blogpost = self.get_object()
        return blogpost
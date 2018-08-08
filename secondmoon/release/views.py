from .models import Release
from .serializers import ReleaseSerializer
from rest_framework import viewsets

class ReleaseViewSet(viewsets.ModelViewSet):
    queryset = Release.objects.all()
    serializer_class = ReleaseSerializer


    def getRelease(self, request):
        release = self.get_object()
        return release

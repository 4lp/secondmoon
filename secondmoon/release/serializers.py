from rest_framework import serializers

class ReleaseSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=1000)
    date = serializers.DateTimeField()
    album_info = serializers.CharField()
    #image = serializers.SerializerMethodField() 
    image = serializers.CharField(max_length=1000) 
    bc_code = serializers.CharField(max_length=1000)
    optional_content = serializers.CharField()
    optional_html = serializers.CharField()

    #def get_image(self, instance):
        # returning image url if there is an image else blank string
        #return instance.image.url if instance.image else ''

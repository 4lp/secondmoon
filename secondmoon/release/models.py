from django.db import models

class Release(models.Model):
    name = models.CharField(max_length=1000)
    date = models.DateTimeField()
    album_info = models.TextField()
    image = models.CharField(max_length=1000) 
    bc_code = models.CharField(max_length=1000)
    optional_content = models.TextField(blank=True)
    optional_html = models.TextField(blank=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['date']

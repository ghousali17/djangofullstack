from rest_framework import serializers
from articles.models import Article



#Converts the JSON data sent form front end to Models. 
class ArticleSerializer(serializers.ModelSerializer):
	class Meta:
		model = Article
		fields = ('id','title', 'content')
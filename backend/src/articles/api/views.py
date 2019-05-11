from rest_framework.generics import ListAPIView, RetrieveAPIView
from articles.models import Article
from .serializers import ArticleSerializer

class ArticleListView(ListAPIView):
	queryset = Article.objects.all() #applies this query and then the serialiser below to result 
	#and send as JSON to front end. 
	serializer_class = ArticleSerializer #serialization model to help 

class ArticleDetailView(RetrieveAPIView):
	queryset = Article.objects.all()
	serializer_class = ArticleSerializer #serialization model to help 

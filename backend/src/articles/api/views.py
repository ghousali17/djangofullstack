'''from rest_framework.generics import (
	ListAPIView, 
	RetrieveAPIView, 
	CreateAPIView,
	UpdateAPIView,
	DestroyAPIView
	)

class ArticleListView(ListAPIView):
	queryset = Article.objects.all() #applies this query and then the serialiser below to result 
	#and send as JSON to front end. 
	serializer_class = ArticleSerializer #serialization model to help 

class ArticleDetailView(RetrieveAPIView):
	queryset = Article.objects.all()
	serializer_class = ArticleSerializer #serialization model to help 

class ArticleCreateView(CreateAPIView): #We use the create api view to sort it, look at urls too
	queryset = Article.objects.all()
	serializer_class = ArticleSerializer #serialization model to help 

class ArticleUpdateView(UpdateAPIView): #We use the create api view to sort it, look at urls too
	queryset = Article.objects.all()
	serializer_class = ArticleSerializer #serialization model to help 

class ArticleDeleteView(DestroyAPIView): #We use the create api view to sort it, look at urls too
	queryset = Article.objects.all()
	serializer_class = ArticleSerializer #serialization model to help 
'''

from articles.models import Article
from .serializers import ArticleSerializer
from rest_framework import viewsets

class ArticleViewSet(viewsets.ModelViewSet):   #accomplishing the same thing as we did before in commented part 
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
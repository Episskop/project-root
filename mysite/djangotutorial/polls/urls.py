from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# Инициализация DefaultRouter для API
router = DefaultRouter()
router.register(r'questions', views.QuestionViewSet)
router.register(r'choices', views.ChoiceViewSet)

app_name = "polls"

urlpatterns = [
    # HTML-представления
    path("", views.IndexView.as_view(), name="index"),
    path("<int:pk>/", views.DetailView.as_view(), name="detail"),
    path("<int:pk>/results/", views.ResultsView.as_view(), name="results"),
    path("<int:question_id>/vote/", views.vote, name="vote"),

    # API маршруты
    path("api/", include(router.urls)),  # API будет доступен по /polls/api/
]

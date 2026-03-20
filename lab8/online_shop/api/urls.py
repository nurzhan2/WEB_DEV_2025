from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('products/', views.products_list),
    path('products/<int:id>/', views.product_detail),
    path('categories/', views.categories_list),
    path('categories/<int:id>/', views.category_detail),
    path('categories/<int:id>/products/', views.category_products),
    path('products-html/', views.products_html),
    path('products/create/', views.create_product),

    path('', views.home_page),
    path('admin/', admin.site.urls),
]
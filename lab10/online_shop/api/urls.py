#from django.contrib import admin
#from django.urls import path, include
#from . import views
#from rest_framework.routers import DefaultRouter 
#from .views import CategoryViewSet , ProductViewset


#router = DefaultRouter()
#router.register('categories', CategoryViewSet)
#router.register('products' , ProductViewset)


#urlpatterns = [
    
    #path('products/', views.products_list),
    #path('products/<int:id>/', views.product_detail),
    #path('categories/', views.categories_list),
    #path('categories/<int:id>/', views.category_detail),
    #path('categories/<int:id>/products/', views.category_products),
    #path('products-html/', views.products_html),
    #path('products/create/', views.create_product),

    

    #path('', include(router.urls)),
    #path('', views.home_page),
    #path('admin/', admin.site.urls),
#]

#urlpatterns = [
#    path('', include(router.urls)),
#    path('products-html/', views.products_html),
#]

from django.urls import path
from api.views import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
    products_html,
)

urlpatterns = [
    path('products/', ProductListAPIView.as_view(), name='product-list'),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view(), name='product-detail'),

    path('categories/', CategoryListAPIView.as_view(), name='category-list'),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view(), name='category-detail'),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view(), name='category-products'),

    path('products-html/', products_html, name='products-html'),
]

#fbv
"""   
from django.urls import path
from api.views import (
    products_list,
    product_detail,
    products_html,
)

urlpatterns = [
    path('products/', products_list, name='product-list'),
    path('products/<int:product_id>/', product_detail, name='product-detail'),
    path('products-html/', products_html, name='products-html'),
]
"""
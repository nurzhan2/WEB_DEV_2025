from django.urls import path
from api.views.common import products_html
from api.views.mixins import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)

urlpatterns = [
    path('products/', ProductListAPIView.as_view(), name='mixins-product-list'),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view(), name='mixins-product-detail'),

    path('categories/', CategoryListAPIView.as_view(), name='mixins-category-list'),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view(), name='mixins-category-detail'),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view(), name='mixins-category-products'),

    path('products-html/', products_html, name='mixins-products-html'),
]
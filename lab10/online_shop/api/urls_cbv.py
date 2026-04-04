from django.urls import path
from api.views.common import products_html
from api.views.cbv import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)

urlpatterns = [
    path('products/', ProductListAPIView.as_view(), name='cbv-product-list'),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view(), name='cbv-product-detail'),

    path('categories/', CategoryListAPIView.as_view(), name='cbv-category-list'),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view(), name='cbv-category-detail'),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view(), name='cbv-category-products'),

    path('products-html/', products_html, name='cbv-products-html'),
]
from django.urls import path
from api.views.common import products_html
from api.views.fbv import (
    products_list,
    product_detail,
    categories_list,
    category_detail,
    category_products,
)

urlpatterns = [
    path('products/', products_list, name='fbv-product-list'),
    path('products/<int:product_id>/', product_detail, name='fbv-product-detail'),

    path('categories/', categories_list, name='fbv-category-list'),
    path('categories/<int:category_id>/', category_detail, name='fbv-category-detail'),
    path('categories/<int:category_id>/products/', category_products, name='fbv-category-products'),

    path('products-html/', products_html, name='fbv-products-html'),
]
from django.shortcuts import render
from api.models import Product, Category


def home_page(request):
    products = Product.objects.all()
    categories = Category.objects.all()
    return render(request, 'api/home.html', {
        'products': products,
        'categories': categories,
    })


def products_html(request):
    products = Product.objects.all()
    return render(request, 'api/products.html', {
        'products': products,
    })
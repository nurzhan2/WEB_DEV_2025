"""
URL configuration for online_shop project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
"""

from django.contrib import admin
from django.urls import path , include
from api import views

urlpatterns = [
    path('', views.home_page),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]

"""

from django.contrib import admin
from django.urls import path, include
from api.views.common import home_page

urlpatterns = [
    path('', home_page),
    path('admin/', admin.site.urls),

    path('api/fbv/', include('api.urls_fbv')),
    path('api/cbv/', include('api.urls_cbv')),
    path('api/mixins/', include('api.urls_mixins')),
    path('api/generics/', include('api.urls_generics')),
]
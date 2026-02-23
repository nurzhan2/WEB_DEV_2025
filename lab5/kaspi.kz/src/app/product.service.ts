import { Injectable } from '@angular/core';
import { ProductInfo } from './product-info';
import { Category } from './category.model';

@Injectable({ providedIn: 'root' })
export class ProductService {

    




  categories: Category[] = [
    { id: 1, name: 'Гаджеты' },
    { id: 2, name: 'Еда' },
    { id: 3, name: 'Красота' },
    { id: 4, name: 'Другое' }
  ];

  products: ProductInfo[] = [

        {
          id:1,
          categoryId:4,
          likes:188,
          name: 'Зарядное устройство Apple 20W USB-C Power Adapter белый',
          description: `      
          Адаптер питания Apple USB‑C мощностью 20 Вт дает возможность быстро и эффективно заряжать гаджеты. Проверяется на основном сайте через QR на оригинальность. Этот адаптер совместим с любыми устройствами Apple, оснащенными портом USB-C: смартфон, планшет или смарт-часы.
          
          `,
          photoURL: ['assets/charger.jpg'],
          rating : 4.7,
          link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000'
        },
        { 
          id:2,
          categoryId:4,
          likes:344,
          name: 'Характеристики Наушники OEM P9 серебристый',
          description: `      
          Типгарнитура
          Видполноразмерные
          Назначениедля любых задач
          Подключениебеспроводное
          Тип акустического оформлениязакрытые
          Частота воспроизведения20-20000 Гц
          Импеданс32.0 Ом
          Чувствительность96.0 дБ
          Вес250.0 г
    
    
          `,
          photoURL: ['assets/naush.jpg'],
          rating: 4.9,
          link: 'https://kaspi.kz/shop/p/oem-p9-serebristyi-116112464/?c=750000000'
        },
        {
          id:3,
          categoryId:1,
          likes:34,
          name: 'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый',
          description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. ',
          photoURL: ['assets/iphon.jpeg'],
          rating: 5.0,
          link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000'
        },
        {
          id:4,
          categoryId:1,
          likes:22,
          name: 'Ноутбук Apple MacBook Air 13 2022 13.6" / 8 Гб / SSD 256 Гб / macOS / MLXW3',
          description: `
          Максимальная частота процессора3400.0 МГц
          ПроцессорApple M2
          Базовая частота процессора2000.0 МГц
          Количество ядер процессора8 ядер
          `,
          photoURL: ['assets/macjpg.jpg'],
          rating: 4.8,
          link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000'
        },
        { 
          id:5,
          categoryId:4,
          likes:666,
          name: 'Миксер 7Speeds белый',
          description: `      
          Типручной
          Мощность260.0 Вт
          Число скоростей7
          Количество насадок2
          Насадкивенчик для взбивания, крюки для теста
          ТурборежимДа
          Материал корпусапластик
          `,
          photoURL: ['assets/bljpg.jpg'],
          rating: 4.8,
          link: 'https://kaspi.kz/shop/p/7speeds-belyi-109891608/?c=750000000'
        },
        { 
          id:6,
          categoryId:4,
          likes:101,
          name: 'Подставка под запястье Стандарт 150608436 белый',
          description: `
          Основные характеристики
          Типдинамический
          Конструкцияпетличный (клипса)
          Назначениеуниверсальный
          Тип подключениябеспроводной
          Чувствительность36.0 дБ
          РадиосистемаНет
          `
          ,
          photoURL: ['assets/mysh.jpeg'],
          rating: 4.9,
          link: 'https://kaspi.kz/shop/p/standart-150608436-belyi-129976123/?c=750000000'
        },
        { 
          id:7,
          categoryId:4,
          likes:365,
          name: 'Вешалка напольная, izox, металл, 110x150 см, черный',
          description: `
    Материалполиуретановый эластомер
    Цветбелый
    Ширина90.0 мм
    ДополнительноПодушка для запястья для снятия напряжения с кисти цвет молочный      `,
          photoURL: ['assets/vesh.jpeg'],
          rating: 4.5,
          link: 'https://kaspi.kz/shop/p/hoco-flash-micro-sd-16gb-101010299/?c=750000000'
        },
        { 
          id:8,
          categoryId:1,
          likes:355,
          name: 'Планшет Samsung Galaxy Tab A9+ 5G 11 дюйм 8 Гб/128 Гб серебристый',
          description: `      
         
    Ширина257.1 мм
    Вес480.0 г
                `,
          photoURL: ['assets/pl.jpg'],
          rating: 4.8,
          link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-5g-11-djuim-8-gb-128-gb-serebristyi-114175605/?c=750000000'
        },
        {
          id:9,
          categoryId:3,
          likes:222,
          name: 'DMND спонж скошенный, спонж капля полиуретан 2 шт',
          description: `      
          Спонж для макияжа идеально наносит и растушёвывает косметическое средство, создавая идеальное покрытие. Прекрасно подходит для профессионального макияжа.
          `,
          photoURL: ['assets/tan.jpg'],
          rating: 4.1,
          link: 'https://kaspi.kz/shop/p/dmnd-sponzh-skoshennyi-sponzh-kaplja-poliuretan-2-sht-104557208/?c=750000000'
        },
        { 
          id:10,
          categoryId:2,
          likes:109,
          name: 'Детское пюре Агуша банан, манго, яблоко, груша 90 г',
          description: `      
          Фруктовое пюре Агуша из яблок, груш, бананов и манго. Гомогенизированное. Создано для детей от 6 месяцев. Возьмите на прогулку вкусный перекус от Агуша! Особенности: 100% натурально, без крахмала, без добавления сахара, готово к употреблению, удобно взять с собой на прогулку.'
          `,
          photoURL: ['assets/agu.jpg'],
          rating: 4.8,
          link: 'https://kaspi.kz/shop/p/agusha-banan-mango-jabloko-grusha-90-g-101670844/?c=750000000'
        },
        { 
          id:11,
          categoryId:1,
          likes:233,
          name : "Смартфон Apple iPhone 17 Pro 256Gb оранжевый",
          description:"Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.",
          photoURL :["assets/64168413.jpg"],
          rating:5.0,
          link: "https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000"
        },
        { 
          id:12,
          categoryId:1,
          likes:156,
          name : "Смартфон Apple iPhone 13 128Gb белый",
          description:"Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко.",
          photoURL :["assets/64209083007006.jpg"],
          rating:5.0,
          link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000"
        },
        { 
          id:13,
          categoryId:3,
          likes:34,
          name : "Groinneya TJ-05 пучковые C 0.03 мм черный mix 8-16 мм",
          description:"Преобразите свой взгляд с помощью пучковых накладных ресниц Groinneya! Эти ресницы идеально подходят для создания объёмного и выразительного эффекта, который подчеркнёт вашу индивидуальность.",
          photoURL :["assets/ресницы.jpeg"],
          rating:4.3,
          link: "https://kaspi.kz/shop/p/groinneya-tj-05-puchkovye-c-0-03-mm-chernyi-mix-8-16-mm-130803713/?c=750000000"
        },
        
        { 
          id:14,
          categoryId:3,
          likes:13,
          name : "MISS TAIS Mauve карандаш 765",
          description:"Сочетание идеальной гипоаллергенной формулы и деревянного корпуса из калифорнийского кедра делает нанесение макияжа не только комфортным, но и предпочтительным для женщин, обладающих чувствительной кожей или, например, носящих контактные линзы.",
          photoURL :["assets/карандаш.jpeg"],
          rating:4.5,
          link:"https://kaspi.kz/shop/p/miss-tais-mauve-karandash-765-100155528/?c=750000000"
        },
        { 
          id:15,
          categoryId:3,
          likes:56,
          name : "Маска для лица гидрогелевая Bio-collagen mask 4 шт",
          description:"Bio Collagen Mask— это эффективное средство для ухода за кожей лица. Маска содержит коллаген, который помогает увлажнить и укрепить кожу, делая её более упругой и эластичной.",
          photoURL :["assets/maska.jpg"],
          rating:4.9,
          link:"https://kaspi.kz/shop/p/maska-dlja-litsa-gidrogelevaja-bio-collagen-mask-4-sht-138594998/?c=750000000"
        },
        { 
          id:16,
          categoryId:3,
          likes:90,
          name : "Набор кисточек для макияжа 13 шт 13",
          description:"Кисти для макияжа - это незаменимый инструмент для создания идеального макияжа. С их помощью можно легко и быстро нанести тени, румяна, хайлайтер и другие косметические средства на лицо",
          photoURL :["assets/kistochki.jpg"],
          rating:3.9,
          link:"https://kaspi.kz/shop/p/nabor-kistochek-dlja-makijazha-13-sht-13-108283366/?c=750000000"
        },
        { 
          id:17,
          categoryId:2,
          likes:355,
          name : "Заготовка Лукоморье свекла отварная Кубики измельченная 470 г",
          description:"Маринованная свекла — это стерилизованный продукт, готовый к употреблению.",
          photoURL :["assets/113586396.jpeg"],
          rating:4.9,
          link:"https://kaspi.kz/shop/p/lukomor-e-svekla-otvarnaja-kubiki-izmel-chennaja-470-g-159231412/?c=750000000"
        },
    
        { 
          id:18,
          categoryId:2,
          likes:123,
          name : "Mfood.kz лазанья мясная с томатным соусом 200 г",
          description:"паста",
          photoURL :["assets/112226662.jpg"],
          rating:4.0,
          link:"https://kaspi.kz/shop/p/mfood-kz-lazan-ja-mjasnaja-s-tomatnym-sousom-200-g-158874138/?c=750000000"
        },
        { 
          id:19,
          categoryId:2,
          likes:890,
          name : "Заготовка Clever Foods набор для оливье 900 г",
          description:"Набор для Оливье весом 930 грамм (например, Clever foods) — это готовая смесь из отварного картофеля, моркови и огурцов , нарезанных кубиком.",
          photoURL :["assets/108867895.jpeg"],
          rating:4.3,
          link:"https://kaspi.kz/shop/p/clever-foods-nabor-dlja-oliv-e-900-g-157955109/?c=750000000"
        },
        { 
          id:20,
          categoryId:2,
          likes:909,
          name : "IL Pako шашлык традиционный 1500 г",
          description:"«Традиционный шашлык» Вес: 1,5 кг.",
          photoURL :["assets/113485187.jpeg"],
          rating:5.0,
          link:"https://kaspi.kz/shop/p/il-pako-shashlyk-traditsionnyi-1500-g-156547678/?c=750000000"
        },
    
    



  ];

  getProductsByCategory(id: number) {
    return this.products.filter(p => p.categoryId === id);
  }
}
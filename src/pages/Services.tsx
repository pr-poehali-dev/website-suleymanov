import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from "@/components/ui/icon"

const Services = () => {
  const services = [
    {
      id: "landing",
      name: "Landing Page",
      icon: "Rocket",
      description: "Одностраничный сайт для продвижения товара или услуги",
      features: {
        start: [
          "Адаптивный дизайн",
          "Форма обратной связи",
          "Базовая SEO-оптимизация",
          "Интеграция метрики",
          "SSL-сертификат"
        ],
        basic: [
          "Все из тарифа Старт",
          "Анимации и эффекты",
          "Интеграция с CRM",
          "Настройка рекламных кампаний",
          "Техподдержка 1 месяц"
        ],
        premium: [
          "Все из тарифа Базовый",
          "A/B тестирование",
          "Расширенная аналитика",
          "Интеграция с мессенджерами",
          "Техподдержка 3 месяца"
        ]
      },
      prices: { start: "35 000", basic: "52 000", premium: "78 000" }
    },
    {
      id: "showcase",
      name: "Сайт-витрина",
      icon: "Store",
      description: "Многостраничный сайт для представления компании и услуг",
      features: {
        start: [
          "До 5 страниц",
          "Каталог услуг",
          "Форма обратной связи",
          "Базовая SEO-оптимизация",
          "Адаптивный дизайн"
        ],
        basic: [
          "Все из тарифа Старт",
          "До 10 страниц",
          "Блог/новости",
          "Интеграция с соцсетями",
          "Расширенная SEO"
        ],
        premium: [
          "Все из тарифа Базовый",
          "Неограниченное количество страниц",
          "Личный кабинет",
          "Мультиязычность",
          "Продвинутая аналитика"
        ]
      },
      prices: { start: "18 000", basic: "32 000", premium: "50 000" }
    },
    {
      id: "info",
      name: "Информационный сайт",
      icon: "FileText",
      description: "Корпоративный сайт с полным функционалом",
      features: {
        start: [
          "До 15 страниц",
          "Система управления контентом",
          "Каталог с фильтрами",
          "Форма обратной связи",
          "Базовая SEO"
        ],
        basic: [
          "Все из тарифа Старт",
          "До 30 страниц",
          "Модуль новостей",
          "Галерея проектов",
          "Интеграция с картами"
        ],
        premium: [
          "Все из тарифа Базовый",
          "Неограниченные страницы",
          "Система комментариев",
          "Рассылки",
          "API интеграции"
        ]
      },
      prices: { start: "34 000", basic: "78 000", premium: "92 000" }
    },
    {
      id: "ecommerce",
      name: "Интернет-магазин",
      icon: "ShoppingCart",
      description: "Полнофункциональный магазин для онлайн-продаж",
      features: {
        start: [
          "До 100 товаров",
          "Корзина и оформление заказов",
          "Личный кабинет покупателя",
          "Интеграция с платежными системами",
          "Управление складом"
        ],
        basic: [
          "Все из тарифа Старт",
          "До 1000 товаров",
          "Система скидок и купонов",
          "Множественные способы доставки",
          "Отзывы о товарах"
        ],
        premium: [
          "Все из тарифа Базовый",
          "Неограниченное количество товаров",
          "Программа лояльности",
          "Интеграция с 1С",
          "Мобильное приложение"
        ]
      },
      prices: { start: "60 000", basic: "92 000", premium: "120 000" }
    }
  ]

  const additionalServices = [
    { name: "Настройка хостинга и установка сайта", price: "1 000", icon: "Server" },
    { name: "Настройка домена", price: "1 000", icon: "Globe" },
    { name: "Техническое обслуживание", price: "25 000/мес", icon: "Settings" },
    { name: "SEO-оптимизация", price: "от 15 000", icon: "Search" },
    { name: "Интеграция сторонних сервисов", price: "5 000", icon: "Link" },
    { name: "Создание логотипа", price: "8 000", icon: "Palette" },
    { name: "Копирайтинг (за страницу)", price: "3 000", icon: "PenTool" },
    { name: "Фотосъемка товаров", price: "2 000/товар", icon: "Camera" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Code2" size={24} className="text-primary" />
              <span className="text-xl font-bold">SULEYMANOV</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => window.location.href = '/'}>
                <Icon name="Home" size={16} className="mr-2" />
                Главная
              </Button>
              <Button size="sm">Обсудить проект</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">Услуги</Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Создание сайтов под ключ
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный спектр услуг по разработке современных сайтов на WordPress. 
            От лендингов до сложных интернет-магазинов.
          </p>
        </div>

        {/* Main Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Основные услуги</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-blue-600/5">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon name={service.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <Tabs defaultValue="start" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="start">Старт</TabsTrigger>
                      <TabsTrigger value="basic">Базовый</TabsTrigger>
                      <TabsTrigger value="premium">Премиум</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="start" className="mt-4">
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary mb-2">
                            {service.prices.start} ₽
                          </div>
                          <Badge variant="outline">Базовый функционал</Badge>
                        </div>
                        <ul className="space-y-2">
                          {service.features.start.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <Icon name="CheckCircle" size={16} className="text-green-500" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="basic" className="mt-4">
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary mb-2">
                            {service.prices.basic} ₽
                          </div>
                          <Badge variant="outline">Расширенный функционал</Badge>
                        </div>
                        <ul className="space-y-2">
                          {service.features.basic.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <Icon name="CheckCircle" size={16} className="text-green-500" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="premium" className="mt-4">
                      <div className="space-y-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary mb-2">
                            {service.prices.premium} ₽
                          </div>
                          <Badge className="bg-gradient-to-r from-primary to-blue-600">
                            Максимальный функционал
                          </Badge>
                        </div>
                        <ul className="space-y-2">
                          {service.features.premium.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <Icon name="CheckCircle" size={16} className="text-green-500" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>
                  </Tabs>
                  
                  <Button className="w-full mt-6">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Заказать {service.name.toLowerCase()}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Дополнительные услуги</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3 text-sm">{service.name}</h3>
                  <Badge variant="secondary" className="text-sm font-bold">
                    {service.price} ₽
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Процесс работы</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Обсуждение", desc: "Выявляем ваши потребности и цели", icon: "MessageCircle" },
              { step: "2", title: "Планирование", desc: "Создаем техническое задание и макеты", icon: "FileText" },
              { step: "3", title: "Разработка", desc: "Верстаем и программируем функционал", icon: "Code2" },
              { step: "4", title: "Запуск", desc: "Тестируем и публикуем готовый сайт", icon: "Rocket" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Icon name={item.icon as any} size={24} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary/10 to-blue-600/10 border-primary/20">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Готовы начать проект?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Обсудим ваши задачи и подберем оптимальное решение. 
              Первая консультация бесплатно!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (995) 070-64-97
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Icon name="Mail" size={20} className="mr-2" />
                support@suleymanov.su
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Code2" size={20} className="text-primary" />
            <span className="text-lg font-bold">SULEYMANOV</span>
          </div>
          <p className="text-slate-400 text-sm mb-4">
            ИП Сулейманов Сергей Родионович • ИНН: 432800926838
          </p>
          <div className="text-xs text-slate-500">
            <a href="/privacy" className="hover:text-slate-300 transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Services
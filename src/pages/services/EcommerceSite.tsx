import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const EcommerceSite = () => {
  const [selectedPlan, setSelectedPlan] = useState<"start" | "basic" | "premium">("start")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    description: "",
    budget: "",
    timeline: "",
    additionalServices: [] as string[]
  })

  const plans = {
    start: {
      name: "Старт",
      price: "60 000",
      features: [
        "До 100 товаров",
        "Корзина и оформление заказов",
        "Личный кабинет покупателя",
        "Интеграция с платежными системами",
        "Управление складом"
      ]
    },
    basic: {
      name: "Базовый",
      price: "92 000",
      features: [
        "Все из тарифа Старт",
        "До 1000 товаров",
        "Система скидок и купонов",
        "Множественные способы доставки",
        "Отзывы о товарах"
      ]
    },
    premium: {
      name: "Премиум",
      price: "120 000",
      features: [
        "Все из тарифа Базовый",
        "Неограниченное количество товаров",
        "Программа лояльности",
        "Интеграция с 1С",
        "Мобильное приложение"
      ]
    }
  }

  const additionalServices = [
    { id: "hosting", name: "Настройка хостинга", price: "1 000" },
    { id: "domain", name: "Настройка домена", price: "1 000" },
    { id: "seo", name: "SEO-оптимизация", price: "15 000" },
    { id: "logo", name: "Создание логотипа", price: "8 000" },
    { id: "copywriting", name: "Копирайтинг", price: "3 000" },
    { id: "photos", name: "Фотосъемка товаров", price: "2 000" },
    { id: "integration", name: "Интеграция 1С", price: "25 000" },
    { id: "training", name: "Обучение персонала", price: "15 000" }
  ]

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(serviceId)
        ? prev.additionalServices.filter(id => id !== serviceId)
        : [...prev.additionalServices, serviceId]
    }))
  }

  const calculateTotal = () => {
    const basePrice = parseInt(plans[selectedPlan].price.replace(" ", ""))
    const additionalPrice = formData.additionalServices.reduce((sum, serviceId) => {
      const service = additionalServices.find(s => s.id === serviceId)
      return sum + (service ? parseInt(service.price.replace(" ", "")) : 0)
    }, 0)
    return (basePrice + additionalPrice).toLocaleString()
  }

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
              <Button variant="ghost" size="sm" onClick={() => window.location.href = '/services'}>
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Назад к услугам
              </Button>
              <Button variant="ghost" size="sm" onClick={() => window.location.href = '/'}>
                <Icon name="Home" size={16} className="mr-2" />
                Главная
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">Интернет-магазин</Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Создание интернет-магазина
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полнофункциональный магазин для онлайн-продаж с интеграцией платежных систем,
            складским учетом и системой управления заказами.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Service Info */}
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="ShoppingCart" size={24} className="text-primary" />
                  Функционал интернет-магазина
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Каталог товаров с фильтрами и поиском",
                    "Корзина и процесс оформления заказов",
                    "Личный кабинет покупателя",
                    "Система управления заказами",
                    "Интеграция с платежными системами",
                    "Различные способы доставки",
                    "Складской учет и управление остатками",
                    "Система скидок и промокодов",
                    "Отзывы и рейтинги товаров",
                    "Административная панель",
                    "Аналитика продаж",
                    "Email-уведомления"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Icon name="CheckCircle" size={20} className="text-green-500" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon name="CreditCard" size={24} className="text-primary" />
                  Интеграции
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Платежные системы:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• ЮКасса (Яндекс)</li>
                      <li>• Сбербанк</li>
                      <li>• Тинькофф</li>
                      <li>• PayPal</li>
                      <li>• Robokassa</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Системы учета:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• 1С:Предприятие</li>
                      <li>• МойСклад</li>
                      <li>• Битрикс24</li>
                      <li>• amoCRM</li>
                      <li>• Wildberries API</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Plans */}
            <Card>
              <CardHeader>
                <CardTitle>Выберите тариф</CardTitle>
                <CardDescription>Все тарифы включают базовый функционал</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={selectedPlan} onValueChange={(value) => setSelectedPlan(value as any)}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="start">Старт</TabsTrigger>
                    <TabsTrigger value="basic">Базовый</TabsTrigger>
                    <TabsTrigger value="premium">Премиум</TabsTrigger>
                  </TabsList>
                  
                  {Object.entries(plans).map(([key, plan]) => (
                    <TabsContent key={key} value={key} className="mt-4">
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-primary mb-2">
                          {plan.price} ₽
                        </div>
                        <Badge variant={key === "premium" ? "default" : "outline"}>
                          {plan.name}
                        </Badge>
                      </div>
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Icon name="CheckCircle" size={16} className="text-green-500" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Order Form */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Заказать интернет-магазин</CardTitle>
                <CardDescription>
                  Заполните форму и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+7 (999) 000-00-00"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Компания *</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    placeholder="Название компании"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Описание проекта *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Опишите товары, количество, особенности бизнеса, нужные интеграции..."
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Бюджет</Label>
                    <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите бюджет" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="60-100k">60-100 тыс. ₽</SelectItem>
                        <SelectItem value="100-150k">100-150 тыс. ₽</SelectItem>
                        <SelectItem value="150-200k">150-200 тыс. ₽</SelectItem>
                        <SelectItem value="200k+">от 200 тыс. ₽</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Сроки</Label>
                    <Select value={formData.timeline} onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите сроки" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2months">1-2 месяца</SelectItem>
                        <SelectItem value="2-3months">2-3 месяца</SelectItem>
                        <SelectItem value="3-4months">3-4 месяца</SelectItem>
                        <SelectItem value="flexible">Гибкие сроки</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Additional Services */}
                <div className="space-y-3">
                  <Label>Дополнительные услуги</Label>
                  {additionalServices.map((service) => (
                    <div key={service.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={service.id}
                        checked={formData.additionalServices.includes(service.id)}
                        onCheckedChange={() => handleServiceToggle(service.id)}
                      />
                      <label
                        htmlFor={service.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1"
                      >
                        {service.name}
                      </label>
                      <Badge variant="outline">{service.price} ₽</Badge>
                    </div>
                  ))}
                </div>

                {/* Total Price */}
                <Card className="bg-primary/5">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Итого:</span>
                      <span className="text-2xl font-bold text-primary">
                        {calculateTotal()} ₽
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Тариф: {plans[selectedPlan].name}
                      {formData.additionalServices.length > 0 && ` + ${formData.additionalServices.length} доп. услуг`}
                    </div>
                  </CardContent>
                </Card>

                <Button className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    политикой конфиденциальности
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EcommerceSite
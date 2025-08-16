import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const Index = () => {
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
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Портфолио</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
              <Button size="sm">Обсудить проект</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6">WordPress-разработчик</Badge>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Профессиональная разработка сайтов под ключ
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Быстрые, безопасные и удобные сайты на WordPress. 3 года опыта, 20+ реализованных проектов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Обсудить проект
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (995) 070-64-97
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Обо мне</h2>
            <p className="text-lg text-muted-foreground mb-6">
              WordPress-разработчик с 3-летним опытом. Реализовал 20+ проектов: лендинги, 
              сайты-витрины, интернет-магазины. Делаю удобные и современные сайты под ключ.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">года опыта</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">проектов</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-full flex items-center justify-center">
              <Icon name="User" size={120} className="text-primary/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-20 bg-slate-50/50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Услуги</h2>
          <p className="text-xl text-muted-foreground">Полный спектр решений для вашего бизнеса</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { name: "Landing Page", icon: "Rocket", prices: ["35 000 ₽", "52 000 ₽", "78 000 ₽"] },
            { name: "Сайт-витрина", icon: "Store", prices: ["18 000 ₽", "32 000 ₽", "50 000 ₽"] },
            { name: "Информационный сайт", icon: "FileText", prices: ["34 000 ₽", "78 000 ₽", "92 000 ₽"] },
            { name: "Интернет-магазин", icon: "ShoppingCart", prices: ["60 000 ₽", "92 000 ₽", "120 000 ₽"] }
          ].map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Icon name={service.icon as any} size={24} className="text-primary" />
                </div>
                <CardTitle className="text-lg">{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Старт</span>
                    <span className="font-semibold">{service.prices[0]}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Базовый</span>
                    <span className="font-semibold">{service.prices[1]}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Премиум</span>
                    <span className="font-semibold text-primary">{service.prices[2]}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-blue-600/5 border-primary/20">
          <CardHeader>
            <CardTitle>Дополнительные услуги</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Настройка хостинга", price: "1 000 ₽" },
                { name: "Настройка домена", price: "1 000 ₽" },
                { name: "Техническое обслуживание", price: "25 000 ₽/мес" },
                { name: "SEO-оптимизация", price: "от 15 000 ₽" },
                { name: "Интеграция сервисов", price: "5 000 ₽" }
              ].map((service, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="text-sm">{service.name}</span>
                  <Badge variant="secondary">{service.price}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Портфолио</h2>
          <p className="text-xl text-muted-foreground">Примеры реализованных проектов</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-primary/10 to-blue-600/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Globe" size={80} className="text-primary mx-auto mb-4" />
                  <Badge className="mb-2">Сайт-витрина</Badge>
                  <div className="text-2xl font-bold">FamTravel43.ru</div>
                </div>
              </div>
              <CardContent className="p-8">
                <CardTitle className="mb-4">Турагентство семейных туров</CardTitle>
                <CardDescription className="text-base mb-6">
                  Подбор семейных туров с каталогом, фильтрами и формой заявки. 
                  Адаптивный дизайн, интеграция мессенджеров, быстрая загрузка.
                </CardDescription>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-green-500" />
                    <span className="text-sm">Адаптивный дизайн</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-green-500" />
                    <span className="text-sm">Интеграция мессенджеров</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-green-500" />
                    <span className="text-sm">Быстрая загрузка</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg mb-6">
                  <p className="italic text-muted-foreground">
                    "Сергей сделал сайт быстро и без доработок. Удобно пользоваться!"
                  </p>
                </div>

                <Button className="w-full">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Посмотреть сайт
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20 bg-slate-50/50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-xl text-muted-foreground">Готов обсудить ваш проект</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Связаться со мной</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Icon name="Phone" size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Телефон</div>
                  <div className="text-muted-foreground">+7 (995) 070-64-97</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Icon name="Mail" size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-muted-foreground">support@suleymanov.su</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Icon name="User" size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold">ИП Сулейманов Сергей Родионович</div>
                  <div className="text-muted-foreground">ИНН: 432800926838</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                WhatsApp
              </Button>
              <Button variant="outline" className="flex-1">
                <Icon name="Send" size={16} className="mr-2" />
                Telegram
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Форма обратной связи</CardTitle>
              <CardDescription>Оставьте заявку и я свяжусь с вами в течение часа</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Имя</label>
                <Input placeholder="Ваше имя" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Телефон</label>
                <Input type="tel" placeholder="+7 (999) 999-99-99" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Сообщение</label>
                <Textarea placeholder="Расскажите о вашем проекте..." rows={4} />
              </div>
              <Button className="w-full">
                <Icon name="Send" size={16} className="mr-2" />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Code2" size={24} className="text-primary" />
            <span className="text-xl font-bold">SULEYMANOV</span>
          </div>
          <p className="text-slate-400 mb-4">WordPress-разработчик • Создание сайтов под ключ</p>
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (995) 070-64-97
            </Button>
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
              <Icon name="Mail" size={16} className="mr-2" />
              support@suleymanov.su
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const Privacy = () => {
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
              <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Назад
              </Button>
              <Button size="sm">Обсудить проект</Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Политика конфиденциальности и обработки персональных данных</h1>
          <p className="text-muted-foreground">
            Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Info" size={20} className="text-primary" />
                1. Общие положения
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="mb-4">
                Настоящая Политика конфиденциальности и обработки персональных данных (далее — «Политика») 
                действует в отношении всех сведений, которые может получить Индивидуальный предприниматель 
                Сулейманов Сергей Родионович (ИНН: 432800926838) о пользователе во время использования 
                им сайта и сервисов.
              </p>
              <p>
                Использование сайта означает безоговорочное согласие пользователя с настоящей Политикой 
                и указанными в ней условиями обработки его персональных данных.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Database" size={20} className="text-primary" />
                2. Персональные данные пользователей
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">2.1. Состав персональных данных</h4>
                  <p className="text-muted-foreground mb-3">Мы можем собирать следующие персональные данные:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Фамилия, имя, отчество</li>
                    <li>Номер телефона</li>
                    <li>Адрес электронной почты</li>
                    <li>Сведения о проекте и требованиях</li>
                    <li>IP-адрес и данные о браузере</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2.2. Цели обработки</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Связь с клиентом и предоставление услуг</li>
                    <li>Выполнение договорных обязательств</li>
                    <li>Информирование о новых услугах</li>
                    <li>Улучшение качества сервиса</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Shield" size={20} className="text-primary" />
                3. Правовые основания и способы обработки
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">3.1. Правовые основания</h4>
                  <p className="text-muted-foreground text-sm">
                    Обработка персональных данных осуществляется на основании:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                    <li>Согласия субъекта персональных данных</li>
                    <li>Выполнения договора</li>
                    <li>Законных интересов оператора</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3.2. Способы обработки</h4>
                  <p className="text-muted-foreground text-sm">
                    Обработка персональных данных осуществляется с использованием средств автоматизации 
                    и без использования таких средств. Мы применяем организационные и технические меры 
                    для защиты персональных данных.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Clock" size={20} className="text-primary" />
                4. Сроки обработки и хранения данных
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm">
                  <strong>Срок обработки:</strong> Персональные данные обрабатываются в течение времени, 
                  необходимого для достижения целей обработки.
                </p>
                <p className="text-sm">
                  <strong>Срок хранения:</strong> Данные хранятся не дольше, чем этого требуют цели 
                  их обработки, но не более 5 лет с момента последнего взаимодействия.
                </p>
                <p className="text-sm">
                  <strong>Удаление данных:</strong> По истечении сроков хранения или по запросу субъекта 
                  персональные данные подлежат уничтожению.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Users" size={20} className="text-primary" />
                5. Права субъектов персональных данных
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-muted-foreground text-sm mb-3">Вы имеете право:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Icon name="CheckCircle" size={16} className="text-green-500 mt-0.5" />
                      <span className="text-sm">Получать информацию об обработке ваших данных</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="CheckCircle" size={16} className="text-green-500 mt-0.5" />
                      <span className="text-sm">Требовать уточнения или исправления данных</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="CheckCircle" size={16} className="text-green-500 mt-0.5" />
                      <span className="text-sm">Отзывать согласие на обработку</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Icon name="CheckCircle" size={16} className="text-green-500 mt-0.5" />
                      <span className="text-sm">Требовать удаления персональных данных</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="CheckCircle" size={16} className="text-green-500 mt-0.5" />
                      <span className="text-sm">Обращаться в надзорные органы</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Icon name="CheckCircle" size={16} className="text-green-500 mt-0.5" />
                      <span className="text-sm">Получать копию обрабатываемых данных</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Cookie" size={20} className="text-primary" />
                6. Файлы cookies и метрики
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm">
                  <strong>Cookies:</strong> Сайт может использовать файлы cookies для улучшения 
                  пользовательского опыта и аналитики.
                </p>
                <p className="text-sm">
                  <strong>Веб-аналитика:</strong> Для анализа посещаемости могут использоваться 
                  сервисы Яндекс.Метрика и Google Analytics.
                </p>
                <p className="text-sm">
                  <strong>Управление:</strong> Вы можете отключить cookies в настройках браузера, 
                  но это может ограничить функциональность сайта.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Mail" size={20} className="text-primary" />
                7. Контактная информация
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm">
                  По всем вопросам, связанным с обработкой персональных данных, 
                  вы можете обращаться:
                </p>
                <div className="bg-slate-50 p-4 rounded-lg space-y-2">
                  <div className="flex items-center gap-2">
                    <Icon name="User" size={16} className="text-primary" />
                    <span className="text-sm"><strong>ИП:</strong> Сулейманов Сергей Родионович</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Hash" size={16} className="text-primary" />
                    <span className="text-sm"><strong>ИНН:</strong> 432800926838</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Mail" size={16} className="text-primary" />
                    <span className="text-sm"><strong>Email:</strong> support@suleymanov.su</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Phone" size={16} className="text-primary" />
                    <span className="text-sm"><strong>Телефон:</strong> +7 (995) 070-64-97</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="FileText" size={20} className="text-primary" />
                8. Изменения в политике
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Данная Политика может изменяться. Новая редакция Политики вступает в силу 
                с момента ее размещения на сайте, если иное не предусмотрено новой редакцией. 
                Действующая редакция всегда находится на данной странице.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button onClick={() => window.history.back()} size="lg">
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            Вернуться на главную
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Code2" size={20} className="text-primary" />
            <span className="text-lg font-bold">SULEYMANOV</span>
          </div>
          <p className="text-slate-400 text-sm">
            ИП Сулейманов Сергей Родионович • ИНН: 432800926838
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Privacy
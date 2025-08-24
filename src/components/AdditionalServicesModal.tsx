import Modal from '@/components/ui/modal';
import Icon from '@/components/ui/icon';

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  icon: string;
}

interface AdditionalServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

const additionalServices: Record<string, Service[]> = {
  landing: [
    {
      id: 'seo-basic',
      name: 'SEO оптимизация',
      description: 'Настройка метатегов, структурированных данных, sitemap.xml',
      price: '15 000 ₽',
      features: [
        'Настройка метатегов',
        'Оптимизация скорости загрузки',
        'Создание sitemap.xml',
        'Настройка robots.txt',
        'Базовая внутренняя перелинковка'
      ],
      icon: 'Search'
    },
    {
      id: 'analytics',
      name: 'Настройка аналитики',
      description: 'Google Analytics, Яндекс.Метрика, цели и события',
      price: '8 000 ₽',
      features: [
        'Google Analytics 4',
        'Яндекс.Метрика',
        'Настройка целей',
        'Отслеживание событий',
        'Пиксель Facebook/VK'
      ],
      icon: 'BarChart3'
    },
    {
      id: 'copywriting',
      name: 'Копирайтинг',
      description: 'Написание продающих текстов и заголовков',
      price: '25 000 ₽',
      features: [
        'Анализ целевой аудитории',
        'Создание УТП',
        'Написание заголовков',
        'Продающие тексты',
        'Призывы к действию'
      ],
      icon: 'PenTool'
    }
  ],
  showcase: [
    {
      id: 'crm-integration',
      name: 'Интеграция с CRM',
      description: 'Подключение к AmoCRM, Битрикс24, HubSpot',
      price: '20 000 ₽',
      features: [
        'Настройка API подключения',
        'Передача лидов в CRM',
        'Автоматические воронки',
        'Сегментация клиентов',
        'Отчеты по конверсии'
      ],
      icon: 'Users'
    },
    {
      id: 'multilang',
      name: 'Мультиязычность',
      description: 'Перевод сайта на несколько языков',
      price: '30 000 ₽',
      features: [
        'Переключатель языков',
        'Профессиональный перевод',
        'SEO для разных языков',
        'Локализация контента',
        'Управление переводами'
      ],
      icon: 'Globe'
    }
  ],
  info: [
    {
      id: 'admin-panel',
      name: 'Панель администратора',
      description: 'Система управления контентом для клиента',
      price: '40 000 ₽',
      features: [
        'Редактирование контента',
        'Управление новостями',
        'Галерея изображений',
        'Пользователи и права',
        'Резервное копирование'
      ],
      icon: 'Settings'
    },
    {
      id: 'blog-system',
      name: 'Система блога',
      description: 'Полнофункциональный блог с комментариями',
      price: '35 000 ₽',
      features: [
        'Создание статей',
        'Система комментариев',
        'Категории и теги',
        'RSS лента',
        'Поиск по статьям'
      ],
      icon: 'BookOpen'
    }
  ],
  ecommerce: [
    {
      id: 'payment-systems',
      name: 'Платежные системы',
      description: 'Подключение онлайн-оплаты',
      price: '25 000 ₽',
      features: [
        'Яндекс.Касса/ЮKassa',
        'Сбербанк Эквайринг',
        'PayPal интеграция',
        'Криптовалютные платежи',
        'Рассрочка и кредиты'
      ],
      icon: 'CreditCard'
    },
    {
      id: 'warehouse',
      name: 'Система складского учета',
      description: 'Управление остатками и поставками',
      price: '50 000 ₽',
      features: [
        'Учет остатков товаров',
        'Автоматическое списание',
        'Уведомления о низких остатках',
        'Интеграция с поставщиками',
        'Отчеты по движению товаров'
      ],
      icon: 'Package'
    }
  ]
};

export default function AdditionalServicesModal({ isOpen, onClose, service }: AdditionalServicesModalProps) {
  if (!service) return null;

  const services = additionalServices[service.id] || [];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Дополнительные услуги - ${service.name}`} size="xl">
      <div className="space-y-6">
        <p className="text-gray-600">
          Расширьте функционал вашего проекта с помощью дополнительных услуг
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((additionalService) => (
            <div key={additionalService.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon name={additionalService.icon as any} size={20} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {additionalService.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {additionalService.description}
                  </p>
                  <div className="text-lg font-bold text-blue-600">
                    {additionalService.price}
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Включает:</h4>
                {additionalService.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="Check" size={14} className="text-green-500 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Добавить к заказу
              </button>
            </div>
          ))}
        </div>

        {services.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Для данного типа проекта дополнительные услуги находятся в разработке
          </div>
        )}

        <div className="flex justify-end pt-4 border-t">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Закрыть
          </button>
        </div>
      </div>
    </Modal>
  );
}
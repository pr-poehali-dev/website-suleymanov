import Icon from '@/components/ui/icon';

interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  icon: string;
  color: string;
  buttonText: string;
}

const promotions: Promotion[] = [
  {
    id: 'first-order',
    title: 'Скидка 20% на первый заказ',
    description: 'Для новых клиентов при заказе любого типа сайта',
    discount: '20%',
    validUntil: '31 августа',
    icon: 'Gift',
    color: 'blue',
    buttonText: 'Получить скидку'
  },
  {
    id: 'package-deal',
    title: 'Сайт + продвижение',
    description: 'При заказе сайта SEO-продвижение со скидкой 30%',
    discount: '30%',
    validUntil: '15 сентября',
    icon: 'TrendingUp',
    color: 'green',
    buttonText: 'Узнать подробнее'
  },
  {
    id: 'redesign',
    title: 'Редизайн сайта',
    description: 'Обновление дизайна существующего сайта за полцены',
    discount: '50%',
    validUntil: '30 сентября',
    icon: 'Palette',
    color: 'purple',
    buttonText: 'Заказать редизайн'
  }
];

interface PromotionsSectionProps {
  onDiscussProject: () => void;
}

export default function PromotionsSection({ onDiscussProject }: PromotionsSectionProps) {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'text-blue-600',
      badge: 'bg-blue-600 text-white',
      button: 'bg-blue-600 hover:bg-blue-700 text-white'
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200', 
      icon: 'text-green-600',
      badge: 'bg-green-600 text-white',
      button: 'bg-green-600 hover:bg-green-700 text-white'
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      icon: 'text-purple-600', 
      badge: 'bg-purple-600 text-white',
      button: 'bg-purple-600 hover:bg-purple-700 text-white'
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🔥 Актуальные акции
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Специальные предложения для экономии на создании вашего сайта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotions.map((promotion) => (
            <div
              key={promotion.id}
              className={`relative p-6 rounded-2xl border-2 ${colorClasses[promotion.color as keyof typeof colorClasses].bg} ${colorClasses[promotion.color as keyof typeof colorClasses].border} hover:shadow-lg transition-all duration-300 hover:scale-105`}
            >
              {/* Скидка */}
              <div className={`absolute -top-4 -right-4 w-16 h-16 ${colorClasses[promotion.color as keyof typeof colorClasses].badge} rounded-full flex items-center justify-center text-xl font-bold shadow-lg`}>
                -{promotion.discount}
              </div>

              {/* Иконка */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 ${colorClasses[promotion.color as keyof typeof colorClasses].bg} rounded-xl flex items-center justify-center`}>
                  <Icon 
                    name={promotion.icon as any} 
                    size={24} 
                    className={colorClasses[promotion.color as keyof typeof colorClasses].icon}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    {promotion.title}
                  </h3>
                </div>
              </div>

              {/* Описание */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                {promotion.description}
              </p>

              {/* Срок действия */}
              <div className="flex items-center gap-2 mb-6 text-sm text-gray-500">
                <Icon name="Clock" size={16} />
                Действует до {promotion.validUntil}
              </div>

              {/* Кнопка */}
              <button
                onClick={onDiscussProject}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${colorClasses[promotion.color as keyof typeof colorClasses].button}`}
              >
                {promotion.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="mt-12 p-6 bg-white rounded-2xl border border-gray-200">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Icon name="Info" size={24} className="text-yellow-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">
                Как получить скидку?
              </h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Свяжитесь с нами любым удобным способом</li>
                <li>• Укажите промокод при обсуждении проекта</li>
                <li>• Скидка применяется автоматически при оформлении заказа</li>
                <li>• Акции не суммируются между собой</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
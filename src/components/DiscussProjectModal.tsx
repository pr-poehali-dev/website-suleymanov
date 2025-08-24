import { useState } from 'react';
import Modal from '@/components/ui/modal';
import Icon from '@/components/ui/icon';

interface DiscussProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DiscussProjectModal({ isOpen, onClose }: DiscussProjectModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    budget: '',
    deadline: '',
    description: '',
    contactMethod: 'phone'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Отправка формы:', formData);
    // Здесь будет логика отправки
    onClose();
  };

  const projectTypes = [
    'Landing Page',
    'Сайт-витрина',
    'Информационный сайт',
    'Интернет-магазин',
    'Корпоративный портал',
    'Другое'
  ];

  const budgetRanges = [
    'До 30 000 ₽',
    '30 000 - 60 000 ₽',
    '60 000 - 100 000 ₽',
    '100 000 - 200 000 ₽',
    'Более 200 000 ₽'
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Обсудить проект" size="lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Контактная информация */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Имя *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Ваше имя"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Телефон *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="+7 (___) ___-__-__"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="your@email.com"
          />
        </div>

        {/* Детали проекта */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Тип проекта *
            </label>
            <select
              required
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Выберите тип</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Бюджет
            </label>
            <select
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Выберите бюджет</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Желаемые сроки
          </label>
          <input
            type="text"
            value={formData.deadline}
            onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Например: 2-3 недели, к концу месяца"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Описание проекта *
          </label>
          <textarea
            required
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Расскажите о вашем проекте, целях, требованиях..."
          />
        </div>

        {/* Способ связи */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Удобный способ связи
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="contactMethod"
                value="phone"
                checked={formData.contactMethod === 'phone'}
                onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                className="mr-2"
              />
              <Icon name="Phone" size={16} className="mr-1" />
              Звонок
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="contactMethod"
                value="telegram"
                checked={formData.contactMethod === 'telegram'}
                onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                className="mr-2"
              />
              <Icon name="MessageCircle" size={16} className="mr-1" />
              Telegram
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="contactMethod"
                value="email"
                checked={formData.contactMethod === 'email'}
                onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                className="mr-2"
              />
              <Icon name="Mail" size={16} className="mr-1" />
              Email
            </label>
          </div>
        </div>

        {/* Кнопки */}
        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Отмена
          </button>
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <Icon name="Send" size={16} />
            Отправить заявку
          </button>
        </div>
      </form>
    </Modal>
  );
}
import { useState, useEffect } from 'react';
import Modal from '@/components/ui/modal';
import Icon from '@/components/ui/icon';

interface ScrollPromoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDiscussProject: () => void;
}

export default function ScrollPromoModal({ isOpen, onClose, onDiscussProject }: ScrollPromoModalProps) {
  const [timeLeft, setTimeLeft] = useState(300); // 5 минут в секундах

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleGetDiscount = () => {
    onClose();
    onDiscussProject();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <div className="text-center">
        {/* Заголовок с эмодзи */}
        <div className="mb-6">
          <div className="text-4xl mb-3">🎉</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Специальное предложение!
          </h2>
          <p className="text-gray-600">
            Только сейчас - скидка 25% на создание сайта
          </p>
        </div>

        {/* Таймер */}
        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Icon name="Clock" size={20} />
            <span className="font-medium">Предложение истекает через:</span>
          </div>
          <div className="text-3xl font-bold font-mono">
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Преимущества */}
        <div className="space-y-3 mb-6 text-left">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="Check" size={16} className="text-green-600" />
            </div>
            <span className="text-gray-700">Экономия до 20 000 ₽</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="Check" size={16} className="text-green-600" />
            </div>
            <span className="text-gray-700">Бесплатная консультация по проекту</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="Check" size={16} className="text-green-600" />
            </div>
            <span className="text-gray-700">Гарантия качества и поддержка</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="Check" size={16} className="text-green-600" />
            </div>
            <span className="text-gray-700">Быстрые сроки выполнения</span>
          </div>
        </div>

        {/* Условия */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-2">
            <Icon name="Info" size={16} className="text-yellow-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-yellow-800 text-left">
              <strong>Условия акции:</strong> Скидка действует при заказе любого типа сайта. 
              Не суммируется с другими скидками. Предложение ограничено по времени.
            </div>
          </div>
        </div>

        {/* Кнопки */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleGetDiscount}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Icon name="Gift" size={16} />
            Получить скидку 25%
          </button>
          <button
            onClick={onClose}
            className="sm:w-auto px-6 py-3 text-gray-500 hover:text-gray-700 transition-colors text-sm"
          >
            Не сейчас
          </button>
        </div>

        {/* Дополнительная мотивация */}
        <div className="mt-4 text-xs text-gray-500">
          💡 Более 500 клиентов уже воспользовались нашими акциями
        </div>
      </div>
    </Modal>
  );
}
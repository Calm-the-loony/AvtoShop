import React, { useState } from 'react';
import '../styles/Services.css';

const services = [
  { 
    name: "Ремонт выхлопной системы", 
    icon: "🚗",
    description: "Полная диагностика и ремонт выхлопной системы автомобиля.",
    price: "от 3000 ₽",
    time: "1-2 часа"
  },
  { 
    name: "Ремонт тормозной системы", 
    icon: "🛠️",
    description: "Ремонт и замена деталей тормозной системы автомобиля.",
    price: "от 2500 ₽",
    time: "2-3 часа"
  },
  { 
    name: "Ремонт двигателя", 
    icon: "⚙️",
    description: "Диагностика и ремонт двигателя для всех марок автомобилей.",
    price: "от 5000 ₽",
    time: "3-5 часов"
  },
  { 
    name: "Полное сервисное обслуживание", 
    icon: "🔧",
    description: "Плановое обслуживание вашего автомобиля с проверкой всех систем.",
    price: "от 4500 ₽",
    time: "4 часа"
  },
  { 
    name: "Замена масла", 
    icon: "🛢️",
    description: "Замена масла и фильтров для вашего автомобиля.",
    price: "от 1500 ₽",
    time: "30 минут"
  },
  { 
    name: "Установка парктроника", 
    icon: "📡",
    description: "Установка системы парктроника для безопасной парковки.",
    price: "от 2500 ₽",
    time: "1-2 часа"
  },
  { 
    name: "Ремонт ходовой части", 
    icon: "🚙",
    description: "Ремонт и замена элементов ходовой части автомобиля.",
    price: "от 4000 ₽",
    time: "2-3 часа"
  },
  { 
    name: "Ремонт стартеров", 
    icon: "🔌",
    description: "Ремонт стартеров всех марок автомобилей.",
    price: "от 3000 ₽",
    time: "1-2 часа"
  },
  { 
    name: "Компьютерная диагностика", 
    icon: "💻",
    description: "Полная диагностика автомобиля с помощью современного оборудования.",
    price: "от 1500 ₽",
    time: "30 минут"
  },
  { 
    name: "Ремонт автоэлектрики", 
    icon: "⚡",
    description: "Ремонт системы электрооборудования автомобиля.",
    price: "от 2000 ₽",
    time: "1-3 часа"
  },
  { 
    name: "Чистка форсунок", 
    icon: "💧",
    description: "Чистка и обслуживание топливных форсунок для оптимальной работы двигателя.",
    price: "от 2000 ₽",
    time: "1 час"
  },
  { 
    name: "Промывка инжектора", 
    icon: "🚿",
    description: "Промывка инжектора для улучшения работы двигателя и экономии топлива.",
    price: "от 2500 ₽",
    time: "1-2 часа"
  },
  { 
    name: "Сигнализация", 
    icon: "🔔",
    description: "Установка сигнализации для защиты вашего автомобиля.",
    price: "от 3000 ₽",
    time: "1-2 часа"
  },
  { 
    name: "Ремонт КПП", 
    icon: "⚙️",
    description: "Ремонт коробки передач (КПП) различных марок автомобилей.",
    price: "от 6000 ₽",
    time: "4-6 часов"
  },
  { 
    name: "Ремонт генераторов", 
    icon: "🔋",
    description: "Ремонт генераторов и системы зарядки автомобиля.",
    price: "от 3500 ₽",
    time: "2-3 часа"
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleClick = (service) => {
    setSelectedService(service === selectedService ? null : service); // Toggle selected service
  };

  return (
    <section className="services" id="services">
      <div className="services__container">
        <h2 className="services__title">Наши услуги</h2>
        <div className="services__grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service__card"
              onClick={() => handleClick(service)} // Click handler
            >
              <div className="service__icon">
                {service.icon}
              </div>
              <h3 className="service__name">{service.name}</h3>

              {/* Show details when the service is selected */}
              {selectedService === service && (
                <div className="service__details">
                  <p><strong>Описание:</strong> {service.description}</p>
                  <p><strong>Цена:</strong> {service.price}</p>
                  <p><strong>Время работы:</strong> {service.time}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    name: "Александр Иванов",
    text: "Очень доволен ремонтом двигателя. Быстро, качественно и по разумной цене. Теперь езжу спокойно.",
    date: "март 2025",
    rating: 5,
  },
  {
    name: "Елена Петрова",
    text: "Профессиональный подход, вежливый персонал. Обращалась по замене масла и проверке тормозов — всё супер.",
    date: "февраль 2025",
    rating: 4,
  },
  {
    name: "Сергей Козлов",
    text: "Установили парктроник — всё сделали чётко и аккуратно. Спасибо, рекомендую этот автосервис!",
    date: "январь 2025",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">Отзывы клиентов</h2>
        <div className="testimonials__grid">
          {testimonials.map((review, index) => (
            <div key={index} className="testimonial__card">
              <div className="testimonial__header">
                <h3 className="testimonial__name">{review.name}</h3>
                <span className="testimonial__date">{review.date}</span>
              </div>
              <p className="testimonial__text">“{review.text}”</p>
              <div className="testimonial__rating">
                {'⭐'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

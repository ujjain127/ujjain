import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      role: "CEO at TechCorp",
      image: "/testimonial1.jpg",
      quote: "Working with this team was an absolute pleasure. They delivered exceptional results that exceeded our expectations.",
      rating: 5
    },
    // Add more testimonials here
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="section-subtitle">Testimonials</span>
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-description">
            I've worked with many clients across different industries. 
            Here's what they have to say about our collaboration.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p className="quote">{testimonial.quote}</p>
              </div>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} />
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials; 
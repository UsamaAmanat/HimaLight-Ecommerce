import React from "react";
import { StarFilled } from "@ant-design/icons";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Fashion Enthusiast",
      message:
        "Amazing quality and selection! I found the perfect pair of glasses that match my style perfectly.",
      rating: 5,
      image: "https://via.placeholder.com/60?text=SJ",
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Professional",
      message:
        "Excellent customer service and fast shipping. The products are exactly as described.",
      rating: 5,
      image: "https://via.placeholder.com/60?text=MC",
    },
    {
      id: 3,
      name: "Emma Wilson",
      title: "Student",
      message:
        "Great variety and affordable prices. I've already recommended this store to my friends!",
      rating: 4,
      image: "https://via.placeholder.com/60?text=EW",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>What Our Customers Say</h2>
          <p>
            Join thousands of satisfied customers who have found their perfect
            eyewear with us
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <StarFilled
                    key={i}
                    className={
                      i < testimonial.rating ? "star-filled" : "star-empty"
                    }
                  />
                ))}
              </div>
              <p className="testimonial-message">{testimonial.message}</p>
              <div className="testimonial-author">
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

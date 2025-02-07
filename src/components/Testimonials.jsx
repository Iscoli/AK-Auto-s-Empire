



const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael Johnson",
      rating: 5,
      comment: "Ak Auto's Empire made my car buying experience seamless. Professional service and incredible selection!",
    },
    {
      id: 2,
      name: "Sarah Williams",
      rating: 4.5,
      comment: "Traded in my old car with ease. The team was knowledgeable and gave me a fair price.",
    },
    {
      id: 3,
      name: "David Rodriguez",
      rating: 5,
      comment: "Found my dream SUV at Ak Auto's Empire. Their inventory is top-notch and prices are competitive.",
    },
  ];

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-primary">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-4 md:p-6 rounded-xl testimonial-card"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded-full mr-4 overflow-hidden">
                  <img
                    src="/api/placeholder/64/64"
                    alt="Customer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-primary">{testimonial.name}</h3>
                  <div className="text-yellow-400">
                    {Array.from({ length: 5 }, (_, i) => (
                      <i
                        key={i}
                        className={`fas fa-star ${
                          i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                      ></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
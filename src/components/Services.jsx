
import { motion } from "framer-motion";






const Services = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="py-20 bg-blue-900"
    id="services"
  >
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
      >
        Our Services
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: "🚗",
            title: "Vehicle Sales",
            description: "Find your perfect match from our premium selection.",
          },
          {
            icon: "🔄",
            title: "Trade-In",
            description:
              "Upgrade your ride with our hassle-free trade-in process.",
          },
          {
            icon: "🤝",
            title: "Financing",
            description: "Flexible financing options tailored to your needs.",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-xl"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Services;

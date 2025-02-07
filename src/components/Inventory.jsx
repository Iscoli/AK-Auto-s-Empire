import Ak2 from "../assets/sedan4.jpg";
import Ak3 from "../assets/ak3.jpg";
import Ak4 from "../assets/Ak4.jpg";

const Inventory = () => {
  const cars = [
    {
      id: 1,
      image:Ak2,
      title: "Luxury Sedan",
      description: "Experience unmatched comfort and style.",
    },
    {
      id: 2,
      image:Ak3,
      title: "Family SUV",
      description: "Perfect for family adventures.",
    },
    {
      id: 3,
      image: Ak4,
      title: "Rugged Truck",
      description: "Built for heavy-duty tasks.",
    },
  ];

  return (
    <section id="inventory" className="py-12 md:py-20 bg-white mt:50px">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-primary">
          Our Current Inventory
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-background p-4 md:p-6 rounded-xl shadow-lg hover-scale"
            >
              <img
                src={car.image}
                alt={car.title}
                className="w-full h-48 object-cover rounded-lg mb-4 max-w-full"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-primary">
                {car.title}
              </h3>
              <p className="text-gray-700 mb-4">{car.description}</p>
              <button className="bg-primary text-background px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-opacity-90 transition-all">
                Contact Us
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inventory;

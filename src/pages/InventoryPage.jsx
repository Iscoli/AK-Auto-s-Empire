import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const InventoryPage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [vehiclesPerPage] = useState(6); // Number of vehicles per page
  const [isPaginating, setIsPaginating] = useState(false); // Pagination loading state

  const fetchVehicles = async () => {
    try {
      const response = await fetch("/api/listings");

      if (!response.ok) {
        throw new Error("Failed to fetch vehicles");
      }

      const data = await response.json();

      // Transform API data
      const transformedVehicles = data.records.map((vehicle) => ({
        id: vehicle.id,
        name: `${vehicle.make} ${vehicle.model}`,
        year: vehicle.year,
        price: vehicle.price,
        mileage: vehicle.mileage,
        image: vehicle.primaryPhotoUrl || "/api/placeholder/400/300",
        bodyType: vehicle.bodyType || "unknown",
        condition: vehicle.condition || "unknown",
        location: "20 Clinton Avenue, Kado Estate, Abuja", // Hardcoded location
        dealerName: "AK Auto's Empire", // Hardcoded dealer name
      }));

      setVehicles(transformedVehicles);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching vehicles:", err);
      setError("Failed to load vehicles. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  // Pagination logic
  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
  const currentVehicles = vehicles.slice(indexOfFirstVehicle, indexOfLastVehicle);

  // Change page
  const paginate = (pageNumber) => {
    setIsPaginating(true); // Start pagination loading
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setIsPaginating(false); // End pagination loading
    }, 500); // Simulate a delay for the spinner (adjust as needed)
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-2xl text-blue-900">Loading...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="text-2xl text-red-600 mb-4">{error}</div>
          <button
            onClick={fetchVehicles}
            className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-blue-900 text-white py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-bold text-center mb-6"
          >
            Our Inventory
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center text-blue-200 mb-12"
          >
            Discover your perfect vehicle from our extensive collection
          </motion.p>
        </div>
      </motion.section>

      {/* Vehicles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {isPaginating ? ( // Show spinner if paginating
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {currentVehicles.map((vehicle, index) => (
                  <motion.div
                    key={vehicle.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-xl overflow-hidden"
                  >
                    <div className="relative h-48">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-4 py-1 rounded-full font-bold">
                        {vehicle.year}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">
                        {vehicle.name}
                      </h3>
                      <p className="text-2xl text-yellow-400 font-bold mb-4">
                        {vehicle.price}
                      </p>
                      <div className="space-y-2 mb-4">
                        <p className="text-gray-600">Mileage: {vehicle.mileage}</p>
                        <p className="text-gray-600">Location: {vehicle.location}</p>
                        <p className="text-gray-600">Dealer: {vehicle.dealerName}</p>
                        <div className="flex gap-2">
                          <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm">
                            {vehicle.bodyType}
                          </span>
                          <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm">
                            {vehicle.condition}
                          </span>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors"
                      >
                     Contact Us 
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav>
                  <ul className="flex space-x-2">
                    {Array.from({ length: Math.ceil(vehicles.length / vehiclesPerPage) }).map(
                      (_, index) => (
                        <li key={index}>
                          <button
                            onClick={() => paginate(index + 1)}
                            className={`px-4 py-2 rounded-lg ${
                              currentPage === index + 1
                                ? "bg-blue-900 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                          >
                            {index + 1}
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                </nav>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default InventoryPage;





// import { useEffect, useState } from "react";
// import axios from "axios";

// export const InventoryPage = () => {
//   const [vehicles, setVehicles] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("/api/vehicles")
//       .then((response) => {
//         // Log the entire response to see what you are getting
//         console.log("Fetched vehicles:", response.data);
//         setVehicles(response.data.records);
//       })
//       .catch((err) => {
//         console.error("Error fetching vehicles:", err);
//         setError(err);
//       });
//   }, []);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (vehicles.length === 0) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {vehicles.map((vehicle) => (
//         <div key={vehicle.id}>
//           <h2>
//             {vehicle.year} {vehicle.make} {vehicle.model}
//           </h2>
//           <img
//             src={vehicle.primaryPhotoUrl}
//             alt={`${vehicle.make} ${vehicle.model}`}
//             className="w-full"
//           />
//           <p>Price: {vehicle.price}</p>
//           <p>Mileage: {vehicle.mileage}</p>
//           <p>
//             Location: {vehicle.city}, {vehicle.state}
//           </p>
//           {/* More vehicle details as needed */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default InventoryPage;


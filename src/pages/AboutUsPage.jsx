import { motion } from "framer-motion";
import Akin from "../assets/AkAutos.png";
import AK from "../assets/AkAutos.png";


// About Us Page
export const AboutUsPage = () => {
  const teamMembers = [
    {
      name: "Olaegbe John Akinola",
      role: "Founder & CEO",
      image: Akin,
      bio: "With over 15 years in the automotive industry, Mr Akinola founded AK Auto's Empire with a vision to revolutionize the car buying experience in Abuja.",
    }
    // {
    //   name: "Sarah Ibrahim",
    //   role: "Sales Director",
    //   image: "/api/placeholder/300/300",
    //   bio: "Sarah brings 10 years of luxury automotive sales experience, ensuring our clients receive unparalleled service.",
    // },
    // {
    //   name: "Michael Okonkwo",
    //   role: "Service Manager",
    //   image: "/api/placeholder/300/300",
    //   bio: "Michael leads our service department with expertise in maintaining and servicing luxury vehicles.",
    // },
  ];

  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description: "AK Auto's Empire was established in Abuja",
    },
    {
      year: "2018",
      title: "Expansion",
      description: "Opened our flagship showroom in Kado Estate",
    },
    {
      year: "2020",
      title: "Service Center",
      description: "Launched our state-of-the-art service center",
    },
    {
      year: "2023",
      title: "Award Winner",
      description: "Named Best Luxury Car Dealership in Abuja",
    },
  ];

  return (
    <div className="pt-20">
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center text-blue-200 mb-12 max-w-3xl mx-auto"
          >
            Delivering excellence in automotive retail since 2015
          </motion.p>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2015, AK Auto&apos;s Empire has grown from a small
                dealership to one of Abuja&apos;s premier automotive retailers.
                Our journey began with a simple mission: to provide exceptional
                vehicles and outstanding service to our community.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we&apos;re proud to be a trusted name in the automotive
                industry, serving customers across Nigeria with a wide selection
                of premium vehicles and comprehensive automotive services.
              </p>
              <div className="bg-blue-100 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-blue-800">
                  To provide our clients with exceptional automotive solutions
                  through personalized service, quality vehicles, and unwavering
                  integrity.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96"
            >
              <img
                src={AK}
                alt="Our Showroom"
                className="rounded-xl shadow-xl w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start mb-8"
              >
                <div className="w-24 flex-shrink-0">
                  <span className="text-xl font-bold text-yellow-400">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-grow bg-white p-6 rounded-xl shadow-lg ml-4">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden"
              >
                <div className="h-64 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-yellow-400 font-bold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "We strive for excellence in every aspect of our business, from the vehicles we select to the service we provide.",
              },
              {
                title: "Integrity",
                description:
                  "We conduct our business with unwavering honesty and transparency, building trust with every interaction.",
              },
              {
                title: "Customer Focus",
                description:
                  "Our customers are at the heart of everything we do. Their satisfaction is our ultimate measure of success.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-blue-800 p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold text-yellow-400 mb-4">
                  {value.title}
                </h3>
                <p className="text-blue-200">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage
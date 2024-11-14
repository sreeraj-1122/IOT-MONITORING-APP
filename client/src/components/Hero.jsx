// src/components/Hero.js
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="bg-gray-100 text-gray-800  flex justify-center items-center h-screen "
      style={{
        backgroundImage: `url(${"https://www.rrms.com/wp-content/uploads/2022/03/iot_hero_3.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-8 rounded ">
        <h1 className="text-4xl font-bold text-white mb-4">
          Unlock the Power of IoT with IoTMonitor
        </h1>
        <p className="text-lg text-white mb-6">
          Experience seamless monitoring and control of your IoT devices in
          real-time. Our platform provides intuitive dashboards, alerts, and
          analytics to help you optimize your IoT ecosystem.
        </p>
        <Link
          to="/login"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
        >
          Login to Your Account
        </Link>
      </div>
    </section>
  );
};

export default Hero;

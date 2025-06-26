
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-red-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-1/3 w-14 h-14 bg-green-400 rounded-full animate-pulse"></div>
      </div>
      
      <div className="text-center px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Profile Picture */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-red-500 to-green-500 rounded-full p-1 animate-fade-in">
            <img 
              src="/lovable-uploads/c457923c-7466-48ef-8a93-2208926b2ed7.png" 
              alt="Awaru Shanthan - UI/UX Designer" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          <span className="text-gray-800">Awaru</span>
          <span className="text-red-600 ml-2">Shanthan</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
          Creative <span className="text-red-600 font-semibold">UI/UX</span> & 
          <span className="text-green-600 font-semibold ml-2">Graphic Designer</span>
          <br />
          <span className="text-lg sm:text-xl">Turning Ideas into Impactful Designs</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <button
            onClick={scrollToPortfolio}
            className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View My Work
          </button>
          <button
            onClick={scrollToAbout}
            className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

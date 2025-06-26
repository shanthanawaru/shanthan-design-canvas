
import { ArrowDown, Download, Mail } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="mb-6">
              <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Available for Freelance
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Hello, I'm
              <br />
              <span className="text-blue-600">Awaru Shanthan</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              Creative <span className="text-blue-600 font-semibold">UI/UX Designer</span> & 
              <span className="text-green-600 font-semibold ml-2">Visual Artist</span>
              <br />
              <span className="text-lg text-gray-500">Crafting digital experiences that inspire</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 font-semibold"
              >
                <Mail size={20} />
                Let's Work Together
              </button>
              <button
                onClick={scrollToAbout}
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center gap-2 font-semibold"
              >
                <Download size={20} />
                Download CV
              </button>
            </div>
            
            <div className="flex items-center gap-8 text-gray-600">
              <div>
                <div className="text-3xl font-bold text-gray-900">3+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/c457923c-7466-48ef-8a93-2208926b2ed7.png" 
                  alt="Awaru Shanthan - UI/UX Designer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

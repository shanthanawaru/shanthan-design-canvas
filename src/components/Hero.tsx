
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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="mb-6">
              <span className="inline-block bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Available for Freelance
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Hello, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Awaru Shanthan
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
              Creative <span className="text-orange-400 font-semibold">UI/UX Designer</span> & 
              <span className="text-pink-400 font-semibold ml-2">Visual Artist</span>
              <br />
              <span className="text-lg text-gray-500">Crafting digital experiences that inspire</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-2 font-semibold"
              >
                <Mail size={20} />
                Let's Work Together
              </button>
              <button
                onClick={scrollToAbout}
                className="border border-gray-600 text-gray-300 px-8 py-4 rounded-full hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 flex items-center gap-2 font-semibold"
              >
                <Download size={20} />
                Download CV
              </button>
            </div>
            
            <div className="flex items-center gap-8 text-gray-400">
              <div>
                <div className="text-3xl font-bold text-white">3+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-3xl rotate-6 animate-pulse"></div>
                <div className="absolute inset-2 bg-gray-900 rounded-3xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/c457923c-7466-48ef-8a93-2208926b2ed7.png" 
                    alt="Awaru Shanthan - UI/UX Designer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-white font-bold">✨</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-pink-500 w-16 h-16 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-white font-bold">🎨</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-500" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

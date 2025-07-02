
import { ArrowDown, Download, Mail, Sparkles, Zap } from "lucide-react";

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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-8 -left-8 w-80 h-80 bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8 animate-fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-6 py-3 rounded-full text-sm font-semibold shadow-lg border border-green-200 hover:scale-105 transition-transform duration-300">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for Freelance
              <Sparkles size={16} className="text-green-600" />
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Hello, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
                  Awaru Shanthan
                </span>
              </h1>
              
              <div className="text-2xl text-gray-700 space-y-2">
                <div className="flex items-center gap-3">
                  <Zap className="text-yellow-500" size={24} />
                  <span>Creative <span className="text-blue-600 font-bold">UI/UX Designer</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="text-purple-500" size={24} />
                  <span>& <span className="text-green-600 font-bold">Visual Artist</span></span>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                Transforming ideas into stunning digital experiences that users love and businesses trust.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-3 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Mail size={20} />
                Let's Create Together
                <div className="w-2 h-2 bg-white rounded-full group-hover:animate-ping"></div>
              </button>
              <button
                onClick={scrollToAbout}
                className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center gap-3 font-semibold text-lg hover:scale-105"
              >
                <Download size={20} />
                Download CV
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { number: "3+", label: "Years Experience", color: "text-blue-600" },
                { number: "50+", label: "Projects Completed", color: "text-green-600" },
                { number: "100%", label: "Client Satisfaction", color: "text-purple-600" }
              ].map((stat, index) => (
                <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content - Enhanced Profile */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Animated Rings */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="w-full h-full border-4 border-dashed border-blue-300 rounded-full"></div>
              </div>
              <div className="absolute inset-4 animate-reverse-spin">
                <div className="w-full h-full border-2 border-purple-300 rounded-full"></div>
              </div>
              
              {/* Profile Image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="/lovable-uploads/c457923c-7466-48ef-8a93-2208926b2ed7.png" 
                  alt="Awaru Shanthan - Creative UI/UX Designer" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                <Sparkles size={20} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-blue-500 text-white p-3 rounded-full shadow-lg animate-bounce delay-500">
                <Zap size={20} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-400 text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="text-gray-400" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

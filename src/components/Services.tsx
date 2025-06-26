
import { Palette, Smartphone, Video, Lightbulb, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "UI/UX Design",
      description: "Crafting intuitive and engaging user experiences through research, wireframing, and interactive prototypes.",
      features: ["User Research & Analysis", "Wireframing & Prototyping", "Usability Testing", "Design Systems"],
      color: "from-orange-500 to-pink-500"
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creating compelling visual identities and marketing materials that communicate your brand's story effectively.",
      features: ["Brand Identity Design", "Print & Digital Assets", "Logo & Icon Design", "Marketing Materials"],
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Bringing stories to life through professional video editing, motion graphics, and visual storytelling.",
      features: ["Motion Graphics", "Color Grading & Effects", "Audio Synchronization", "Creative Storytelling"],
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: Lightbulb,
      title: "Creative Consulting",
      description: "Strategic creative direction and design thinking to solve complex problems and elevate your projects.",
      features: ["Design Strategy", "Creative Direction", "Project Planning", "Team Collaboration"],
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What I <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Offer</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive design services tailored to bring your vision to life with creativity and precision.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-900 p-8 rounded-3xl border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:transform hover:-translate-y-2"
            >
              <div className="text-center mb-8">
                <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
              </div>
              
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <button className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-semibold transition-colors group">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-12 rounded-3xl border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Project?</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create something extraordinary. I'm always excited to take on new challenges and bring innovative ideas to life.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-10 py-4 rounded-full hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-xl font-semibold text-lg"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

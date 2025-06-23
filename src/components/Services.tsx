
import { Palette, Smartphone, Video, Lightbulb } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "UI/UX Design",
      description: "Wireframing, prototyping, and usability-focused layouts that create exceptional user experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creative visual solutions including posters, brand assets, and comprehensive image editing services.",
      features: ["Brand Identity", "Poster Design", "Image Editing", "Digital Art"]
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing services to bring your stories to life with engaging visual narratives.",
      features: ["Motion Graphics", "Color Grading", "Audio Sync", "Creative Editing"]
    },
    {
      icon: Lightbulb,
      title: "Creative Consulting",
      description: "Collaborative approach to design thinking and creative problem-solving for your projects.",
      features: ["Design Strategy", "Creative Direction", "Project Planning", "Team Collaboration"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I offer flexible and comprehensive design services, ready to work on freelance or collaborative projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-center mb-6">
                <div className="bg-gradient-to-br from-red-600 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-red-50 to-green-50 p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Work Together?</h3>
            <p className="text-gray-600 mb-6">
              I'm always excited to take on new challenges and collaborate on innovative projects. 
              Let's discuss how we can bring your ideas to life!
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-red-600 to-green-600 text-white px-8 py-3 rounded-full hover:from-red-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

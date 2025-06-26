
import { Palette, Smartphone, Video, Lightbulb, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "UI/UX Design",
      description: "Crafting intuitive and engaging user experiences through research, wireframing, and interactive prototypes.",
      features: ["User Research & Analysis", "Wireframing & Prototyping", "Usability Testing", "Design Systems"],
      color: "blue"
    },
    {
      icon: Palette,
      title: "Graphic Design", 
      description: "Creating compelling visual identities and marketing materials that communicate your brand's story effectively.",
      features: ["Brand Identity Design", "Print & Digital Assets", "Logo & Icon Design", "Marketing Materials"],
      color: "green"
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Bringing stories to life through professional video editing, motion graphics, and visual storytelling.",
      features: ["Motion Graphics", "Color Grading & Effects", "Audio Synchronization", "Creative Storytelling"],
      color: "purple"
    },
    {
      icon: Lightbulb,
      title: "Creative Consulting",
      description: "Strategic creative direction and design thinking to solve complex problems and elevate your projects.",
      features: ["Design Strategy", "Creative Direction", "Project Planning", "Team Collaboration"],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-600 bg-blue-100",
      green: "text-green-600 bg-green-100", 
      purple: "text-purple-600 bg-purple-100",
      orange: "text-orange-600 bg-orange-100"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What I <span className="text-blue-600">Offer</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive design services tailored to bring your vision to life with creativity and precision.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 p-6 rounded-lg border hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 ${getColorClasses(service.color)}`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
              </div>
              
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                <span>Learn More</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gray-50 p-12 rounded-lg border max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Start Your <span className="text-blue-600">Project?</span>
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create something extraordinary. I'm always excited to take on new challenges and bring innovative ideas to life.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold text-lg"
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

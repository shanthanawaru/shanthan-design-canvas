
import { Palette, Smartphone, Video, Lightbulb, ArrowRight, Zap, Award, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "UI/UX Design",
      description: "Crafting intuitive and engaging user experiences through research, wireframing, and interactive prototypes that convert visitors into customers.",
      features: ["User Research & Analysis", "Wireframing & Prototyping", "Usability Testing", "Design Systems"],
      color: "blue",
      price: "Starting at $1,500",
      deliverables: "Wireframes, Prototypes, Design System",
      timeline: "2-4 weeks"
    },
    {
      icon: Palette,
      title: "Graphic Design", 
      description: "Creating compelling visual identities and marketing materials that communicate your brand's story effectively and memorably.",
      features: ["Brand Identity Design", "Print & Digital Assets", "Logo & Icon Design", "Marketing Materials"],
      color: "green",
      price: "Starting at $800",
      deliverables: "Brand Guidelines, Logo Files, Templates",
      timeline: "1-3 weeks"
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Bringing stories to life through professional video editing, motion graphics, and visual storytelling that captivates audiences.",
      features: ["Motion Graphics", "Color Grading & Effects", "Audio Synchronization", "Creative Storytelling"],
      color: "purple",
      price: "Starting at $500",
      deliverables: "Edited Videos, Motion Graphics, Assets",
      timeline: "1-2 weeks"
    },
    {
      icon: Lightbulb,
      title: "Creative Consulting",
      description: "Strategic creative direction and design thinking to solve complex problems and elevate your projects to the next level.",
      features: ["Design Strategy", "Creative Direction", "Project Planning", "Team Collaboration"],
      color: "orange",
      price: "Starting at $200/hr",
      deliverables: "Strategy Document, Roadmap, Guidelines",
      timeline: "Ongoing"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-500 to-blue-600",
        light: "from-blue-50 to-blue-100",
        text: "text-blue-600",
        border: "border-blue-200"
      },
      green: {
        bg: "from-green-500 to-green-600",
        light: "from-green-50 to-green-100",
        text: "text-green-600",
        border: "border-green-200"
      },
      purple: {
        bg: "from-purple-500 to-purple-600",
        light: "from-purple-50 to-purple-100",
        text: "text-purple-600",
        border: "border-purple-200"
      },
      orange: {
        bg: "from-orange-500 to-orange-600",
        light: "from-orange-50 to-orange-100",
        text: "text-orange-600",
        border: "border-orange-200"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Zap className="text-yellow-500" size={16} />
            Services & Expertise
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            What I <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Create</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, I deliver comprehensive design solutions that drive results and exceed expectations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const colorClass = getColorClasses(service.color);
            return (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl border-2 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-transparent"
                style={{
                  background: `linear-gradient(135deg, white 0%, ${service.color === 'blue' ? '#eff6ff' : service.color === 'green' ? '#f0fdf4' : service.color === 'purple' ? '#faf5ff' : '#fff7ed'} 100%)`
                }}
              >
                {/* Service Icon */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${colorClass.bg} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={32} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Award size={14} className="text-white" />
                  </div>
                </div>

                {/* Service Details */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  
                  {/* Pricing */}
                  <div className={`inline-block bg-gradient-to-r ${colorClass.light} px-4 py-2 rounded-full border ${colorClass.border} mb-4`}>
                    <span className={`${colorClass.text} font-semibold text-sm`}>{service.price}</span>
                  </div>
                </div>
                
                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle size={16} className={colorClass.text} />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Project Details */}
                <div className="border-t border-gray-100 pt-4 mb-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Timeline:</span>
                    <span className="text-gray-700 font-medium">{service.timeline}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Deliverables:</span>
                    <span className="text-gray-700 font-medium text-right">{service.deliverables}</span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <button className={`w-full bg-gradient-to-r ${colorClass.bg} text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2 group`}>
                  <span>Get Started</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
        
        {/* Process Section */}
        <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-100 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">My Design Process</h3>
            <p className="text-gray-600 text-lg">A systematic approach to delivering exceptional results</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discover", desc: "Understanding your goals, audience, and challenges through research and analysis." },
              { step: "02", title: "Design", desc: "Creating concepts, wireframes, and prototypes that solve your specific problems." },
              { step: "03", title: "Develop", desc: "Bringing designs to life with attention to detail and user experience." },
              { step: "04", title: "Deliver", desc: "Final delivery with ongoing support and optimization recommendations." }
            ].map((process, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg group-hover:animate-pulse">
                  {process.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{process.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-12 rounded-2xl text-white shadow-2xl max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6">
                Ready to Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Next Project?</span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's collaborate to create something extraordinary. I'm always excited to take on new challenges and bring innovative ideas to life.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-bold text-lg shadow-lg hover:scale-105 transform transition-transform inline-flex items-center gap-3"
              >
                <span>Let's Work Together</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

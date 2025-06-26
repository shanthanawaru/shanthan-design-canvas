
import { useState } from "react";
import { Mail, Phone, Send, Linkedin, Github, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent Successfully! 🚀",
      description: "Thank you for reaching out. I'll get back to you within 24 hours!",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "shanthanawaru994@gmail.com",
      link: "mailto:shanthanawaru994@gmail.com",
      color: "from-orange-500 to-pink-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 6281836308",
      link: "tel:+916281836308",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bangalore, India",
      link: "#",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      link: "#",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Let's Create <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Together</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your vision to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a chat about design and technology. Feel free to reach out!
              </p>
            </div>
            
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group flex items-center space-x-4 p-6 bg-gray-800 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
                >
                  <div className={`bg-gradient-to-r ${info.color} w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-orange-400 transition-colors">{info.title}</h4>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="pt-8">
              <h4 className="font-semibold text-white mb-6">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 transition-all duration-300 border border-gray-700 hover:border-blue-500 group"
                >
                  <Linkedin className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 transition-all duration-300 border border-gray-700 hover:border-gray-500 group"
                >
                  <Github className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-gray-900 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-white placeholder-gray-500"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-gray-900 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-white placeholder-gray-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-3">
                    Project Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-gray-900 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-white placeholder-gray-500"
                    placeholder="UI/UX Design Project"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-gray-900 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors text-white placeholder-gray-500 resize-none"
                    placeholder="Tell me about your project, timeline, and goals..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-[1.02] shadow-xl flex items-center justify-center space-x-3 font-semibold text-lg"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-20 pt-12 border-t border-gray-800">
          <p className="text-gray-400 text-lg">
            © 2024 Awaru Shanthan. Crafted with <span className="text-orange-400">❤️</span> and lots of creativity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

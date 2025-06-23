
import { useState } from "react";
import { Mail, Phone, Send, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a chat about design and technology.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:shanthanawaru994@gmail.com" className="text-gray-300 hover:text-red-400 transition-colors">
                    shanthanawaru994@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href="tel:+916281836308" className="text-gray-300 hover:text-green-400 transition-colors">
                    +91 6281836308
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-8">
              <h4 className="font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors text-white placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-green-600 text-white px-8 py-4 rounded-lg hover:from-red-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 font-semibold"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            © 2024 Awaru Shanthan. Designed & Developed with ❤️
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

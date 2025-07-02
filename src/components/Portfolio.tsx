import { ExternalLink, Eye, Github, Award, Calendar, ArrowUpRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Stay Karo App",
      description: "Complete mobile app redesign for hostel and hotel bookings. Created comprehensive user journey from research to final implementation with focus on seamless booking experience.",
      longDescription: "Led end-to-end UX research and design for a hospitality booking platform, resulting in 40% increase in user engagement and 25% boost in conversion rates.",
      tools: ["Figma", "Photoshop", "User Research", "Prototyping"],
      image: "/lovable-uploads/c354426f-a1ca-458c-b2bb-6e4e0a404630.png",
      category: "UI/UX Design",
      featured: true,
      year: "2024",
      client: "Stay Karo",
      impact: "+40% User Engagement"
    },
    {
      title: "Brand Identity Suite",
      description: "Complete brand transformation for a tech startup including logo design, color psychology application, and comprehensive brand guidelines that increased brand recognition.",
      longDescription: "Developed a complete visual identity system that helped the startup secure $2M in Series A funding through compelling brand presentation.",
      tools: ["Photoshop", "Illustrator", "Brand Strategy", "Typography"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&crop=center",
      category: "Graphic Design",
      featured: true,
      year: "2024",
      client: "TechStart Inc.",
      impact: "Secured $2M Funding"
    },
    {
      title: "E-commerce Dashboard",
      description: "Analytics-focused dashboard design for e-commerce platform with advanced data visualization and real-time insights for business decision making.",
      longDescription: "Created an intuitive dashboard that reduced data analysis time by 60% and improved business decision-making efficiency.",
      tools: ["Figma", "Sketch", "Data Visualization", "Prototyping"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=center",
      category: "UI/UX Design",
      featured: false,
      year: "2023",
      client: "ShopFlow",
      impact: "60% Faster Analysis"
    },
    {
      title: "Creative Campaign Series",
      description: "Multi-platform creative campaign combining typography, illustration, and modern design principles for maximum visual impact.",
      longDescription: "Conceptualized and executed a viral marketing campaign that reached 2M+ impressions across social platforms.",
      tools: ["Photoshop", "Illustrator", "Typography", "Creative Direction"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop&crop=center",
      category: "Graphic Design",
      featured: false,
      year: "2023",
      client: "Creative Co.",
      impact: "2M+ Impressions"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <section id="portfolio" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-purple-200/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Award className="text-yellow-500" size={16} />
            Featured Work
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Creative <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore my latest projects where creativity meets functionality. Each piece tells a story of problem-solving through design.
          </p>
        </div>
        
        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100"
            >
              <div className="relative overflow-hidden h-72">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Overlay Content */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.year}
                  </span>
                </div>
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-2">
                  <button className="bg-white/90 backdrop-blur-sm text-gray-900 p-2 rounded-full hover:bg-white transition-colors">
                    <Eye size={20} />
                  </button>
                  <button className="bg-white/90 backdrop-blur-sm text-gray-900 p-2 rounded-full hover:bg-white transition-colors">
                    <Github size={20} />
                  </button>
                </div>

                {/* Impact Badge */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.impact}
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <Calendar size={14} />
                      {project.client} • {project.year}
                    </p>
                  </div>
                  <ArrowUpRight className="text-gray-400 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" size={24} />
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <p className="text-sm text-gray-500 mb-6 italic">{project.longDescription}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <button className="flex items-center gap-2 text-blue-600 hover:text-purple-600 font-semibold transition-colors group">
                  <span>View Case Study</span>
                  <ExternalLink size={16} className="group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Regular Projects Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">More Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {regularProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      {project.impact}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{project.client}</span>
                    <button className="text-blue-600 hover:text-purple-600 transition-colors">
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-2xl text-white shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project and bring your vision to life with innovative design solutions.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 px-10 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 font-bold text-lg shadow-lg hover:scale-105 transform transition-transform"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;


import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Stay Karo App",
      description: "A mobile app for hostel and hotel bookings. Designed end-to-end user experience – wireframes, prototypes, and final UI screens.",
      tools: ["Figma", "Photoshop"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center",
      category: "UI/UX Design"
    },
    {
      title: "Brand Identity Design",
      description: "Complete brand identity package including logo design, color palette, and brand guidelines for a tech startup.",
      tools: ["Photoshop", "Illustrator"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&crop=center",
      category: "Graphic Design"
    },
    {
      title: "E-commerce Dashboard",
      description: "Modern dashboard interface for an e-commerce platform with focus on user experience and data visualization.",
      tools: ["Figma", "Sketch"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=center",
      category: "UI/UX Design"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Portfolio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in UI/UX design and graphic design.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4">
                    <ExternalLink className="text-white" size={20} />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-red-600 to-green-600 text-white px-8 py-3 rounded-full hover:from-red-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

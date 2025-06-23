
import { GraduationCap, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-green-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Hi, I'm <span className="text-red-600 font-semibold">Awaru Shanthan</span>, a passionate designer who loves crafting creative, user-centered digital experiences. From sketching and painting as a child to building modern UI/UX solutions, I've always chased creativity.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm humble, open, and driven by the idea of connecting with people through design. My background in computer science gives me a unique perspective on how design and technology work together to create meaningful experiences.
            </p>
            
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <GraduationCap className="text-green-600" size={24} />
              <div>
                <h3 className="font-semibold text-gray-800">Education</h3>
                <p className="text-gray-600">B.Tech in Computer Science (AI & ML)</p>
                <p className="text-sm text-gray-500">CMR Institute of Technology, 2021–2025</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-red-50 to-green-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Heart className="text-red-600 mx-auto mb-2" size={32} />
                  <h3 className="font-semibold text-gray-800">Passionate</h3>
                  <p className="text-sm text-gray-600">About creating meaningful designs</p>
                </div>
                <div className="text-center">
                  <Users className="text-green-600 mx-auto mb-2" size={32} />
                  <h3 className="font-semibold text-gray-800">Collaborative</h3>
                  <p className="text-sm text-gray-600">Love working with teams</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 text-white p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">My Creative Journey</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Started with sketching and painting as a child</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Learned Photoshop and digital design tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Mastered wireframing and prototyping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Now creating full UI/UX solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import { GraduationCap, Heart, Users, Code, Palette } from "lucide-react";

const About = () => {
  const skills = [
    { name: "UI/UX Design", level: 95 },
    { name: "Graphic Design", level: 90 },
    { name: "Prototyping", level: 85 },
    { name: "Video Editing", level: 80 }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Passionate About <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Design</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Hi, I'm <span className="text-orange-400 font-semibold">Awaru Shanthan</span>, a passionate designer who loves crafting creative, user-centered digital experiences. From sketching and painting as a child to building modern UI/UX solutions, I've always chased creativity.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                I'm humble, open, and driven by the idea of connecting with people through design. My background in computer science gives me a unique perspective on how design and technology work together to create meaningful experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700">
                <div className="flex items-center space-x-3 mb-3">
                  <GraduationCap className="text-orange-400" size={24} />
                  <h3 className="font-semibold text-white">Education</h3>
                </div>
                <p className="text-gray-300">B.Tech Computer Science</p>
                <p className="text-sm text-gray-500">CMR Institute of Technology</p>
                <p className="text-sm text-gray-500">2021–2025</p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700">
                <div className="flex items-center space-x-3 mb-3">
                  <Heart className="text-pink-400" size={24} />
                  <h3 className="font-semibold text-white">Passion</h3>
                </div>
                <p className="text-gray-300">Creating meaningful</p>
                <p className="text-gray-300">user experiences</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Skills & Expertise</h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-orange-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-400 to-pink-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Creative Journey */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Palette className="text-orange-400" size={28} />
                My Creative Journey
              </h3>
              <div className="space-y-4">
                {[
                  "Started with sketching and painting as a child",
                  "Learned Photoshop and digital design tools",
                  "Mastered wireframing and prototyping",
                  "Now creating full UI/UX solutions"
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-gray-300 pt-1">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-orange-500/20 to-pink-500/20 p-6 rounded-2xl border border-orange-500/30">
                <Code className="text-orange-400 mb-3" size={32} />
                <h3 className="font-semibold text-white mb-2">Technical</h3>
                <p className="text-sm text-gray-300">Strong foundation in computer science</p>
              </div>
              <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-6 rounded-2xl border border-pink-500/30">
                <Users className="text-pink-400 mb-3" size={32} />
                <h3 className="font-semibold text-white mb-2">Collaborative</h3>
                <p className="text-sm text-gray-300">Love working with creative teams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

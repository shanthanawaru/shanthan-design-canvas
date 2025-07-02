import { GraduationCap, Heart, Users, Code, Palette, Award, Target, Lightbulb, Sparkles } from "lucide-react";

const About = () => {
  const skills = [
    { name: "UI/UX Design", level: 95, color: "bg-blue-500" },
    { name: "Graphic Design", level: 90, color: "bg-green-500" },
    { name: "Prototyping", level: 85, color: "bg-purple-500" },
    { name: "Video Editing", level: 80, color: "bg-orange-500" }
  ];

  const achievements = [
    { icon: Award, title: "Design Excellence", desc: "Multiple award-winning projects" },
    { icon: Target, title: "Goal-Oriented", desc: "Always focused on user needs" },
    { icon: Lightbulb, title: "Innovation", desc: "Creative problem-solving approach" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Heart className="text-red-500" size={16} />
            About Me
            <Sparkles className="text-yellow-500" size={16} />
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Passionate About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Design</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every pixel tells a story, every interaction creates an emotion. I craft digital experiences that bridge the gap between functionality and beauty.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Story & Skills */}
          <div className="space-y-8 animate-fade-in">
            {/* Personal Story */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Hi there! I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">Awaru Shanthan</span>, a passionate designer who believes that great design isn't just about making things look pretty—it's about solving real problems and creating meaningful connections.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  My journey started with sketches and doodles as a child, evolved through mastering digital tools, and now focuses on creating user-centered experiences that make a difference. I combine technical knowledge with creative intuition to build designs that users love.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <p className="text-gray-700 italic">"Design is not just what it looks like and feels like. Design is how it works." - This philosophy drives everything I create.</p>
                </div>
              </div>
            </div>
            
            {/* Education & Passion */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap size={28} />
                  <h3 className="font-bold text-lg">Education</h3>
                </div>
                <p className="text-blue-100 mb-1">B.Tech Computer Science</p>
                <p className="text-sm text-blue-200">CMR Institute of Technology</p>
                <p className="text-sm text-blue-200">2021–2025</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-2xl text-white shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart size={28} />
                  <h3 className="font-bold text-lg">My Mission</h3>
                </div>
                <p className="text-purple-100">Creating digital experiences that inspire, engage, and solve real problems for users worldwide.</p>
              </div>
            </div>
            
            {/* Skills Progress */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Palette className="text-blue-600" />
                Skills & Expertise
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-semibold">{skill.name}</span>
                      <span className="text-gray-900 font-bold text-lg">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out hover:scale-x-105 origin-left`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Journey & Achievements */}
          <div className="space-y-8 animate-fade-in">
            {/* Creative Journey */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Palette className="text-yellow-400" />
                My Creative Journey
              </h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Early Inspiration", desc: "Started with sketching and painting as a child, developing an eye for composition and color" },
                  { step: "02", title: "Digital Discovery", desc: "Learned Photoshop and digital design tools, opening up new creative possibilities" },
                  { step: "03", title: "UX Evolution", desc: "Mastered wireframing and prototyping, focusing on user-centered design principles" },
                  { step: "04", title: "Full-Stack Design", desc: "Now creating comprehensive UI/UX solutions that bridge design and development" }
                ].map((journey, index) => (
                  <div key={index} className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 group-hover:animate-pulse">
                      {journey.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-yellow-400 mb-1">{journey.title}</h4>
                      <p className="text-gray-300 leading-relaxed">{journey.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Achievements */}
            <div className="grid gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg">
                      <achievement.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                      <p className="text-gray-600 text-sm">{achievement.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Tech & Creative Balance */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:scale-105 transition-transform duration-300">
                <Code className="text-blue-600 mb-3" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">Technical Foundation</h3>
                <p className="text-sm text-gray-600">Strong computer science background enhances my design solutions</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:scale-105 transition-transform duration-300">
                <Users className="text-green-600 mb-3" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">Collaborative Spirit</h3>
                <p className="text-sm text-gray-600">Love working with diverse teams to create amazing experiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

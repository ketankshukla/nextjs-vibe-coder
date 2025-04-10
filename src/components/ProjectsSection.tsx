import { FC } from 'react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  comingSoon?: boolean;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-24 bg-[#3C7A3E]">
      <div className="w-[90%] max-w-[1200px] mx-auto px-4">
        <h2 className="text-[2.5rem] font-bold mb-12 text-center relative text-white">
          Projects
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[70px] h-[4px] bg-[#FFD43B] rounded"></span>
        </h2>
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-white/10 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
              <div className="project-img bg-black/20 h-48 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-[#FFD43B]">{project.title}</h3>
              </div>
              <div className="project-content p-6">
                <div className="project-tech flex flex-wrap gap-2 mb-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag px-3 py-1 bg-[#FFD43B] text-[#3C7A3E] text-sm rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{project.title}</h3>
                <p className="text-gray-200 mb-4">
                  {project.description}
                </p>
                <div className="project-btns flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn github-btn inline-block px-6 py-3 bg-[#FFD43B] text-[#3C7A3E] rounded-lg hover:bg-[#FFE873] transition-colors"
                  >
                    GitHub
                  </a>
                  {project.comingSoon ? (
                    <button
                      disabled
                      className="btn demo-btn inline-block px-6 py-3 bg-gray-400 text-gray-700 rounded-lg cursor-not-allowed"
                    >
                      Demo Coming Soon
                    </button>
                  ) : (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn demo-btn inline-block px-6 py-3 bg-[#FFD43B] text-[#3C7A3E] rounded-lg hover:bg-[#FFE873] transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

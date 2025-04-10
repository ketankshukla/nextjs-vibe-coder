import { FC } from 'react';
import CartoonImage from './CartoonImage';

interface AboutSectionProps {
  // Add any props if needed
  className?: string;
}

const AboutSection: FC<AboutSectionProps> = ({ className }) => {
  return (
    <section id="about" className={`py-24 bg-[#3C7A3E] ${className || ''}`}>
      <div className="w-[90%] max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center relative text-white">
          About Me
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[70px] h-[4px] bg-[#FFD43B] rounded"></span>
        </h2>
        <div className="about-container flex flex-col lg:flex-row gap-16">
          <div className="about-image flex-1">
            <CartoonImage />
          </div>
          <div className="about-content flex-1">
            <p className="text-[1.1rem] text-gray-200 mb-6 leading-relaxed">
              I&apos;m a Python ETL Developer based in San Diego, CA, specializing in building data processing pipelines and automation solutions. I have experience in creating ETL pipelines, designing database integrations, and implementing data validation systems through a portfolio of practical projects.
            </p>
            <p className="text-[1.1rem] text-gray-200 mb-8 leading-relaxed">
              I&apos;m passionate about data engineering and committed to data accuracy and quality. Currently seeking an entry-level ETL Developer position to leverage my technical expertise and passion for data engineering in solving complex business problems.
            </p>
            
            <div className="skills">
              <h3 className="text-[1.5rem] font-semibold mb-4 text-white">My Skills</h3>
              <div className="skill-tags flex flex-wrap gap-3">
                {['Python', 'Pandas', 'NumPy', 'Data Cleaning', 'Data Validation', 'RESTful APIs', 
                  'Web Scraping', 'SQL', 'SQLite', 'Git', 'Jupyter Notebook', 'VS Code', 'pytest']
                  .map((skill) => (
                    <span 
                      key={skill}
                      className="skill-tag px-4 py-2 bg-[#FFD43B] text-[#3C7A3E] text-[0.9rem] font-semibold rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

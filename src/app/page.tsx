import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProfileImage from '@/components/ProfileImage';
import CartoonImage from '@/components/CartoonImage';

// Data arrays (now properly used in the component)
const projects = [
  {
    title: 'Log Analysis & Monitoring System',
    description: 'A Python-based log analysis system that processes server logs, extracts performance metrics, and identifies potential security threats with 97% accuracy using regex pattern matching.',
    tech: ['Python', 'regex', 'Pandas', 'SQLite'],
    github: 'https://github.com/ketankshukla/log_analysis_system',
    demo: 'https://github.com/ketankshukla/log_analysis_system',
  },
  {
    title: 'Data Warehouse ETL Framework',
    description: 'A modular ETL framework for transferring data from multiple source systems to a central data warehouse with configurable extractors for various data sources including CSV, JSON, XML, and SQL databases.',
    tech: ['Python', 'Pandas', 'SQLAlchemy', 'PyYAML'],
    github: 'https://github.com/ketankshukla/data-warehouse-etl',
    demo: 'https://github.com/ketankshukla/data-warehouse-etl',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'A comprehensive data visualization dashboard leveraging Python\'s data analysis and visualization libraries to provide interactive insights from complex datasets.',
    tech: ['Python', 'Data Science', 'Visualization'],
    github: '#',
    demo: '#',
    comingSoon: true,
  }
];

const blogPosts = [
  {
    title: 'Building Efficient ETL Pipelines with Python',
    date: 'April 5, 2025',
    excerpt: 'Learn how to create scalable and maintainable ETL pipelines using Python and best practices for data transformation.',
    tags: ['Python', 'ETL', 'Data Engineering'],
    url: '/blog/building-efficient-etl-pipelines'
  },
  {
    title: 'Mastering Data Warehouse Design',
    date: 'March 20, 2025',
    excerpt: 'A comprehensive guide to designing efficient data warehouses for modern data architectures.',
    tags: ['Data Warehouse', 'SQL', 'Data Modeling'],
    url: '/blog/mastering-data-warehouse-design'
  },
  {
    title: 'Real-time Data Processing with Python',
    date: 'February 15, 2025',
    excerpt: 'Explore the world of real-time data processing using Python and modern streaming technologies.',
    tags: ['Streaming', 'Python', 'Real-time'],
    url: '/blog/real-time-data-processing'
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <main className="flex-grow">
        <section id="home" className="min-h-screen flex items-center bg-[#3C7A3E]">
          <div className="w-[90%] max-w-[1200px] mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Python ETL Developer
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Building efficient data pipelines and solutions
              </p>
              <div className="flex justify-center gap-4 mb-8">
                <ProfileImage />
              </div>
              <div className="flex justify-center gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-[#FFD43B] text-[#3C7A3E] rounded-lg hover:bg-[#FFE873] transition-colors"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-[#FFD43B] text-[#FFD43B] rounded-lg hover:bg-[#FFD43B]/10 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-[#3C7A3E]">
          <div className="w-[90%] max-w-[1200px] mx-auto px-4">
            <h2 className="text-[2.5rem] font-bold mb-12 text-center relative text-white">
              About Me
              <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[70px] h-[4px] bg-[#FFD43B] rounded"></span>
            </h2>
            <div className="about-container flex flex-col md:flex-row gap-16 items-center">
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
                    <span className="skill-tag px-4 py-2 bg-[#FFD43B] text-[#3C7A3E] text-[0.9rem] font-semibold rounded-full">
                      Python
                    </span>
                    <span className="skill-tag px-4 py-2 bg-[#FFD43B] text-[#3C7A3E] text-[0.9rem] font-semibold rounded-full">
                      Pandas
                    </span>
                    <span className="skill-tag px-4 py-2 bg-[#FFD43B] text-[#3C7A3E] text-[0.9rem] font-semibold rounded-full">
                      NumPy
                    </span>
                    <span className="skill-tag px-4 py-2 bg-[#FFD43B] text-[#3C7A3E] text-[0.9rem] font-semibold rounded-full">
                      Data Cleaning
                    </span>
                    <span className="skill-tag px-4 py-2 bg-[#FFD43B] text-[#3C7A3E] text-[0.9rem] font-semibold rounded-full">
                      Data Validation
                    </span>
                    <span className="skill-tag px-4 py-2 bg-[#FFD43B] text-[#3C7A3E] text-[0.9rem] font-semibold rounded-full">
                      RESTful APIs
                    </span>
                    <span className="skill-tag px-4 py-2 bg-[#FFD43B] text-[#3C7A3E] text-[0.9rem] font-semibold rounded-full">
                      Web Scraping
                    </span>
                    <span className="skill-tag px-4 py-2 bg-[#FFD43B] text-[#3C7A3E] text-[0.9rem] font-semibold rounded-full">
                      SQL
                    </span>
                    <span className="skill-tag px-4 py-2 bg-[#FFD43B] text-[#3C7A3E] text-[0.9rem] font-semibold rounded-full">
                      SQLite
                    </span>
                    <span className="skill-tag px-4 py-2 bg-[#FFD43B] text-[#3C7A3E] text-[0.9rem] font-semibold rounded-full">
                      Git
                    </span>
                    <span className="skill-tag px-4 py-2 bg-[#FFD43B] text-[#3C7A3E] text-[0.9rem] font-semibold rounded-full">
                      Jupyter Notebook
                    </span>
                    <span className="skill-tag px-4 py-2 bg-[#FFD43B] text-[#3C7A3E] text-[0.9rem] font-semibold rounded-full">
                      VS Code
                    </span>
                    <span className="skill-tag px-4 py-2 bg-[#FFD43B] text-[#3C7A3E] text-[0.9rem] font-semibold rounded-full">
                      pytest
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-[#3C7A3E]">
          <div className="w-[90%] max-w-[1200px] mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center relative text-white">
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
                    <div className="project-tags flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="project-tag px-3 py-1 bg-[#FFD43B] text-[#3C7A3E] text-sm rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                    <p className="text-gray-200 mb-6">
                      {project.description}
                    </p>
                    <div className="project-btns flex gap-4">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn project-btn inline-block px-6 py-3 bg-[#FFD43B] text-[#3C7A3E] rounded-lg hover:bg-[#FFE873] transition-colors"
                      >
                        {project.comingSoon ? 'Coming Soon' : 'View Project'}
                      </a>
                      {!project.comingSoon && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn project-btn inline-block px-6 py-3 border border-[#FFD43B] text-[#FFD43B] rounded-lg hover:bg-[#FFD43B]/10 transition-colors"
                        >
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-24 bg-[#3C7A3E]">
          <div className="w-[90%] max-w-[1200px] mx-auto px-4">
            <h2 className="text-[2.5rem] font-bold mb-12 text-center relative text-white">
              Blog
              <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[70px] h-[4px] bg-[#FFD43B] rounded"></span>
            </h2>
            <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div key={index} className="blog-card bg-white/10 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
                  <div className="blog-img bg-black/20 h-48 flex items-center justify-center">
                    <h3 className="text-xl font-semibold text-[#FFD43B]">{post.title}</h3>
                  </div>
                  <div className="blog-content p-6">
                    <div className="blog-tags flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, i) => (
                        <span key={i} className="blog-tag px-3 py-1 bg-[#FFD43B] text-[#3C7A3E] text-sm rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{post.title}</h3>
                    <p className="text-gray-200 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="blog-meta mb-4">
                      <span className="text-[#FFD43B] text-sm font-medium">{post.date}</span>
                    </div>
                    <div className="blog-btns">
                      <a
                        href={post.url}
                        className="btn blog-btn inline-block px-6 py-3 bg-[#FFD43B] text-[#3C7A3E] rounded-lg hover:bg-[#FFE873] transition-colors"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-[#3C7A3E]">
          <div className="w-[90%] max-w-[1200px] mx-auto px-4">
            <h2 className="text-[2.5rem] font-bold mb-12 text-center relative text-white">
              Get In Touch
              <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[70px] h-[4px] bg-[#FFD43B] rounded"></span>
            </h2>
            <div className="contact-container flex flex-col lg:flex-row gap-16">
              <div className="contact-info flex-1">
                <h3 className="text-[1.8rem] font-semibold mb-6 text-white">Let&apos;s Connect</h3>
                <p className="text-[1.1rem] text-gray-200 mb-8 leading-relaxed">
                  I&apos;m currently looking for new opportunities in data engineering and ETL development. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
                <div className="contact-details space-y-4">
                  <div className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-[#FFD43B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <a href="mailto:ketan@example.com" className="text-[#FFD43B] hover:underline">
                      ketan@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-[#FFD43B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <a href="tel:+11234567890" className="text-[#FFD43B] hover:underline">
                      +1 (123) 456-7890
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-[#FFD43B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="text-[#FFD43B]">San Diego, CA</span>
                  </div>
                </div>
              </div>
              <div className="contact-form flex-1">
                <h3 className="text-[1.8rem] font-semibold mb-6 text-white">Send Me a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-[#FFD43B] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg border border-[#FFD43B]/20 bg-[#3C7A3E]/5 text-white"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[#FFD43B] mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-[#FFD43B]/20 bg-[#3C7A3E]/5 text-white"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-[#FFD43B] mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-lg border border-[#FFD43B]/20 bg-[#3C7A3E]/5 text-white"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[#FFD43B] mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-[#FFD43B]/20 bg-[#3C7A3E]/5 text-white"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#FFD43B] text-[#3C7A3E] rounded-lg hover:bg-[#FFE873] transition-colors font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

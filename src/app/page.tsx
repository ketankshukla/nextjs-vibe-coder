import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProfileImage from '@/components/ProfileImage';
import CartoonImage from '@/components/CartoonImage';

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
                  I'm a Python ETL Developer based in San Diego, CA, specializing in building data processing pipelines and automation solutions. I have experience in creating ETL pipelines, designing database integrations, and implementing data validation systems through a portfolio of practical projects.
                </p>
                <p className="text-[1.1rem] text-gray-200 mb-8 leading-relaxed">
                  I'm passionate about data engineering and committed to data accuracy and quality. Currently seeking an entry-level ETL Developer position to leverage my technical expertise and passion for data engineering in solving complex business problems.
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
              {/* Project 1 */}
              <div className="project-card bg-white/10 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
                <div className="project-img bg-black/20 h-48 flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-[#FFD43B]">Log Analysis & Monitoring System</h3>
                </div>
                <div className="project-content p-6">
                  <div className="project-tags flex flex-wrap gap-2 mb-4">
                    <span className="project-tag px-3 py-1 bg-[#FFD43B] text-[#3C7A3E] text-sm rounded-full font-medium">
                      Python
                    </span>
                    <span className="project-tag px-3 py-1 bg-[#FFD43B] text-[#3C7A3E] text-sm rounded-full font-medium">
                      regex
                    </span>
                    <span className="project-tag px-3 py-1 bg-[#FFD43B] text-[#3C7A3E] text-sm rounded-full font-medium">
                      Pandas
                    </span>
                    <span className="project-tag px-3 py-1 bg-[#FFD43B] text-[#3C7A3E] text-sm rounded-full font-medium">
                      SQLite
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Log Analysis & Monitoring System</h3>
                  <p className="text-gray-200 mb-6">
                    A Python-based log analysis system that processes server logs, extracts performance metrics, and identifies potential security threats with 97% accuracy using regex pattern matching.
                  </p>
                  <div className="project-btns flex gap-4">
                    <a
                      href="https://github.com/ketankshukla/log_analysis_system"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn project-btn inline-block px-6 py-3 bg-[#FFD43B] text-[#3C7A3E] rounded-lg hover:bg-[#FFE873] transition-colors"
                    >
                      View Project
                    </a>
                    <a
                      href="https://github.com/ketankshukla/log_analysis_system"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline project-btn inline-block px-6 py-3 border border-[#FFD43B] text-[#FFD43B] rounded-lg hover:bg-[#FFD43B]/10 transition-colors"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="project-card bg-white/10 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
                <div className="project-img bg-black/20 h-48 flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-[#FFD43B]">Data Warehouse ETL Framework</h3>
                </div>
                <div className="project-content p-6">
                  <div className="project-tags flex flex-wrap gap-2 mb-4">
                    <span className="project-tag px-3 py-1 bg-[#FFD43B] text-[#3C7A3E] text-sm rounded-full font-medium">
                      Python
                    </span>
                    <span className="project-tag px-3 py-1 bg-[#FFD43B] text-[#3C7A3E] text-sm rounded-full font-medium">
                      Pandas
                    </span>
                    <span className="project-tag px-3 py-1 bg-[#FFD43B] text-[#3C7A3E] text-sm rounded-full font-medium">
                      SQLAlchemy
                    </span>
                    <span className="project-tag px-3 py-1 bg-[#FFD43B] text-[#3C7A3E] text-sm rounded-full font-medium">
                      PyYAML
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Data Warehouse ETL Framework</h3>
                  <p className="text-gray-200 mb-6">
                    A modular ETL framework for transferring data from multiple source systems to a central data warehouse with configurable extractors for various data sources including CSV, JSON, XML, and SQL databases.
                  </p>
                  <div className="project-btns flex gap-4">
                    <a
                      href="https://github.com/ketankshukla/data-warehouse-etl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn project-btn inline-block px-6 py-3 bg-[#FFD43B] text-[#3C7A3E] rounded-lg hover:bg-[#FFE873] transition-colors"
                    >
                      View Project
                    </a>
                    <a
                      href="https://github.com/ketankshukla/data-warehouse-etl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline project-btn inline-block px-6 py-3 border border-[#FFD43B] text-[#FFD43B] rounded-lg hover:bg-[#FFD43B]/10 transition-colors"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="project-card bg-white/10 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
                <div className="project-img bg-black/20 h-48 flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-[#FFD43B]">Data Visualization Dashboard</h3>
                </div>
                <div className="project-content p-6">
                  <div className="project-tags flex flex-wrap gap-2 mb-4">
                    <span className="project-tag px-3 py-1 bg-[#FFD43B] text-[#3C7A3E] text-sm rounded-full font-medium">
                      Python
                    </span>
                    <span className="project-tag px-3 py-1 bg-[#FFD43B] text-[#3C7A3E] text-sm rounded-full font-medium">
                      Data Science
                    </span>
                    <span className="project-tag px-3 py-1 bg-[#FFD43B] text-[#3C7A3E] text-sm rounded-full font-medium">
                      Visualization
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Data Visualization Dashboard</h3>
                  <p className="text-gray-200 mb-6">
                    A comprehensive data visualization dashboard leveraging Python's data analysis and visualization libraries to provide interactive insights from complex datasets.
                  </p>
                  <div className="project-btns flex gap-4">
                    <a
                      href="#"
                      className="btn project-btn inline-block px-6 py-3 bg-[#FFD43B] text-[#3C7A3E] rounded-lg hover:bg-[#FFE873] transition-colors"
                    >
                      Coming Soon
                    </a>
                    <a
                      href="#"
                      className="btn btn-outline project-btn inline-block px-6 py-3 border border-[#FFD43B] text-[#FFD43B] rounded-lg hover:bg-[#FFD43B]/10 transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
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
              {/* Blog Post 1 */}
              <div className="blog-card bg-white/10 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
                <div className="blog-img bg-black/20 h-48 flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-[#FFD43B]">Getting Started with ETL in Python</h3>
                </div>
                <div className="blog-content p-6">
                  <div className="blog-tags flex flex-wrap gap-2 mb-4">
                    <span className="blog-tag px-3 py-1 bg-[#FFD43B] text-[#3C7A3E] text-sm rounded-full font-medium">
                      Python
                    </span>
                    <span className="blog-tag px-3 py-1 bg-[#FFD43B] text-[#3C7A3E] text-sm rounded-full font-medium">
                      ETL
                    </span>
                    <span className="blog-tag px-3 py-1 bg-[#FFD43B] text-[#3C7A3E] text-sm rounded-full font-medium">
                      Data Engineering
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Getting Started with ETL in Python</h3>
                  <p className="text-gray-200 mb-4">
                    In this post, I share the fundamental concepts of ETL (Extract, Transform, Load) processes and how to implement them efficiently in Python...
                  </p>
                  <div className="blog-meta mb-4">
                    <span className="text-[#FFD43B] text-sm font-medium">April 1, 2025</span>
                  </div>
                  <div className="blog-btns">
                    <a
                      href="#"
                      className="btn blog-btn inline-block px-6 py-3 bg-[#FFD43B] text-[#3C7A3E] rounded-lg hover:bg-[#FFE873] transition-colors"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              {/* Blog Post 2 */}
              <div className="blog-card bg-white/10 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
                <div className="blog-img bg-black/20 h-48 flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-[#FFD43B]">Best Practices for Data Validation</h3>
                </div>
                <div className="blog-content p-6">
                  <div className="blog-tags flex flex-wrap gap-2 mb-4">
                    <span className="blog-tag px-3 py-1 bg-[#FFD43B] text-[#3C7A3E] text-sm rounded-full font-medium">
                      Data Quality
                    </span>
                    <span className="blog-tag px-3 py-1 bg-[#FFD43B] text-[#3C7A3E] text-sm rounded-full font-medium">
                      Validation
                    </span>
                    <span className="blog-tag px-3 py-1 bg-[#FFD43B] text-[#3C7A3E] text-sm rounded-full font-medium">
                      Python
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Best Practices for Data Validation</h3>
                  <p className="text-gray-200 mb-4">
                    Data validation is a critical step in any data processing workflow. In this article, I discuss techniques and tools for ensuring data quality...
                  </p>
                  <div className="blog-meta mb-4">
                    <span className="text-[#FFD43B] text-sm font-medium">March 15, 2025</span>
                  </div>
                  <div className="blog-btns">
                    <a
                      href="#"
                      className="btn blog-btn inline-block px-6 py-3 bg-[#FFD43B] text-[#3C7A3E] rounded-lg hover:bg-[#FFE873] transition-colors"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              {/* Blog Post 3 */}
              <div className="blog-card bg-white/10 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
                <div className="blog-img bg-black/20 h-48 flex items-center justify-center">
                  <h3 className="text-xl font-semibold text-[#FFD43B]">Automating Data Pipelines with Python</h3>
                </div>
                <div className="blog-content p-6">
                  <div className="blog-tags flex flex-wrap gap-2 mb-4">
                    <span className="blog-tag px-3 py-1 bg-[#FFD43B] text-[#3C7A3E] text-sm rounded-full font-medium">
                      Automation
                    </span>
                    <span className="blog-tag px-3 py-1 bg-[#FFD43B] text-[#3C7A3E] text-sm rounded-full font-medium">
                      Pipelines
                    </span>
                    <span className="blog-tag px-3 py-1 bg-[#FFD43B] text-[#3C7A3E] text-sm rounded-full font-medium">
                      Python
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Automating Data Pipelines with Python</h3>
                  <p className="text-gray-200 mb-4">
                    Learn how to build reliable, automated data pipelines that can scale with your needs using Python and open-source tools...
                  </p>
                  <div className="blog-meta mb-4">
                    <span className="text-[#FFD43B] text-sm font-medium">February 28, 2025</span>
                  </div>
                  <div className="blog-btns">
                    <a
                      href="#"
                      className="btn blog-btn inline-block px-6 py-3 bg-[#FFD43B] text-[#3C7A3E] rounded-lg hover:bg-[#FFE873] transition-colors"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-[#3C7A3E]">
          <div className="w-[90%] max-w-[1200px] mx-auto px-4">
            <h2 className="text-[2.5rem] font-bold mb-12 text-center relative text-white">
              Contact
              <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[70px] h-[4px] bg-[#FFD43B] rounded"></span>
            </h2>
            <div className="contact-container flex flex-col md:flex-row gap-16">
              <div className="contact-info flex-1">
                <h3 className="text-[1.5rem] font-semibold mb-6 text-white">Contact Information</h3>
                <p className="text-[1.1rem] text-gray-200 mb-8 leading-relaxed">
                  Feel free to reach out to me for any questions or opportunities.
                </p>
                
                <div className="contact-item flex items-center gap-4 mb-6">
                  <div className="contact-icon w-10 h-10 bg-[#FFD43B] text-[#3C7A3E] rounded-full flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <h4 className="text-[1.1rem] font-medium mb-1 text-white">Email</h4>
                    <p className="text-[0.95rem] text-gray-200">resume@ketankshukla.com</p>
                  </div>
                </div>

                <div className="contact-item flex items-center gap-4 mb-6">
                  <div className="contact-icon w-10 h-10 bg-[#FFD43B] text-[#3C7A3E] rounded-full flex items-center justify-center">
                    📱
                  </div>
                  <div>
                    <h4 className="text-[1.1rem] font-medium mb-1 text-white">Phone</h4>
                    <p className="text-[0.95rem] text-gray-200">619-669-8545</p>
                  </div>
                </div>

                <div className="contact-item flex items-center gap-4">
                  <div className="contact-icon w-10 h-10 bg-[#FFD43B] text-[#3C7A3E] rounded-full flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <h4 className="text-[1.1rem] font-medium mb-1 text-white">Location</h4>
                    <p className="text-[0.95rem] text-gray-200">San Diego, CA</p>
                  </div>
                </div>
              </div>

              <div className="contact-form flex-1">
                <h3 className="text-[1.5rem] font-semibold mb-8 text-white">Send Message</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-[0.95rem] font-medium text-gray-200 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg border border-[#FFD43B]/20 bg-[#3C7A3E]/5 text-white text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-[#FFD43B] focus:border-[#FFD43B]"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[0.95rem] font-medium text-gray-200 mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-[#FFD43B]/20 bg-[#3C7A3E]/5 text-white text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-[#FFD43B] focus:border-[#FFD43B]"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-[0.95rem] font-medium text-gray-200 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-lg border border-[#FFD43B]/20 bg-[#3C7A3E]/5 text-white text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-[#FFD43B] focus:border-[#FFD43B]"
                      placeholder="Subject"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[0.95rem] font-medium text-gray-200 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-[#FFD43B]/20 bg-[#3C7A3E]/5 text-white text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-[#FFD43B] focus:border-[#FFD43B]"
                      placeholder="Your Message"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#FFD43B] text-[#3C7A3E] py-3 px-6 rounded-lg text-[0.95rem] font-semibold hover:bg-[#FFE873] transition-colors"
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

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import HeroSection from '@/components/HeroSection';
import { projects } from '@/data/projectsData';
import { blogPosts } from '@/data/blogPostsData';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <main className="flex-grow">
        <AboutSection />
        <ProjectsSection projects={projects} />
        <BlogSection blogPosts={blogPosts} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

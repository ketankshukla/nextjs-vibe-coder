import { FC } from 'react';
import ProfileImage from '@/components/ProfileImage';

const HeroSection: FC = () => {
  return (
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
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

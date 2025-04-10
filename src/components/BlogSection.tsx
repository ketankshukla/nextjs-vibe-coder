import { FC } from 'react';

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  url: string;
}

interface BlogSectionProps {
  blogPosts: BlogPost[];
}

const BlogSection: FC<BlogSectionProps> = ({ blogPosts }) => {
  return (
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
  );
};

export default BlogSection;

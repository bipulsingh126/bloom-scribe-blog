
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Instagram, Twitter } from 'lucide-react';
import blogData from '@/data/blogData';

const AboutPage = () => {
  const { aboutContent } = blogData;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="blog-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">{aboutContent.title}</h1>
            <p className="text-xl md:text-2xl text-foreground/80">
              {aboutContent.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* About Image */}
      <section className="mb-16">
        <div className="blog-container">
          <div className="w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden">
            <img 
              src={aboutContent.image} 
              alt="About BloomScribe" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </section>

      {/* About Author */}
      <section className="py-12">
        <div className="blog-container">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <img 
                  src={aboutContent.authorImage} 
                  alt={aboutContent.authorName} 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                Meet {aboutContent.authorName}
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                {aboutContent.authorBio}
              </p>
              <div className="flex space-x-4">
                <a href={`mailto:${aboutContent.contact.email}`} className="text-blog-green hover:text-blog-sage transition-colors">
                  <Mail size={20} />
                </a>
                <a href="#" className="text-blog-green hover:text-blog-sage transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-blog-green hover:text-blog-sage transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 bg-blog-beige">
        <div className="blog-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-foreground/80">
              {aboutContent.mission}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="blog-container">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutContent.values.map((value, index) => (
              <Card key={index} className="bg-card/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">{value.title}</h3>
                  <p className="text-foreground/80">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;

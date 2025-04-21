import React from 'react';
import Layout from '@/components/Layout';
import { Mail, Instagram, Twitter } from 'lucide-react';
import blogData from '@/data/blogData';
import { 
  Card, 
  CardBody, 
  CardHeader, 
  Image, 
  Avatar, 
  Button, 
  Divider,
  Chip,
  Link
} from "@nextui-org/react";

const AboutPage = () => {
  const { aboutContent } = blogData;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="blog-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 text-gradient animate-fade-in">{aboutContent.title}</h1>
            <p className="text-xl md:text-2xl text-foreground/80 animate-slide-in-from-bottom">
              {aboutContent.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* About Image */}
      <section className="mb-16 px-4">
        <div className="blog-container">
          <Card 
            isHoverable 
            isPressable 
            shadow="sm" 
            className="border-none overflow-hidden bg-transparent animate-fade-in card-hover-effect"
          >
            <CardBody className="p-0">
              <Image
                removeWrapper
                alt="About BloomScribe"
                className="z-0 w-full h-[300px] md:h-[500px] object-cover"
                src={aboutContent.image}
              />
            </CardBody>
          </Card>
        </div>
      </section>

      {/* About Author */}
      <section className="py-12 px-4">
        <div className="blog-container">
          <Card 
            className="glass-morphism animate-fade-in border-glow"
            shadow="sm"
          >
            <CardBody>
              <div className="md:flex items-center gap-12">
                <div className="md:w-1/3 flex flex-col items-center mb-8 md:mb-0">
                  <Avatar
                    src={aboutContent.authorImage}
                    className="w-48 h-48 text-large mb-4"
                    isBordered
                    color="primary"
                    size="lg"
                    showFallback
                    fallback={
                      <p className="text-lg">{aboutContent.authorName.charAt(0)}</p>
                    }
                  />
                  <div className="flex gap-3 mt-4">
                    <Button 
                      isIconOnly 
                      as={Link} 
                      href={`mailto:${aboutContent.contact.email}`} 
                      color="primary" 
                      variant="shadow" 
                      aria-label="Email"
                      className="hover:scale-110 transition-transform"
                    >
                      <Mail size={20} />
                    </Button>
                    <Button 
                      isIconOnly 
                      as={Link} 
                      href="#" 
                      color="primary" 
                      variant="shadow" 
                      aria-label="Instagram"
                      className="hover:scale-110 transition-transform"
                    >
                      <Instagram size={20} />
                    </Button>
                    <Button 
                      isIconOnly 
                      as={Link} 
                      href="#" 
                      color="primary" 
                      variant="shadow" 
                      aria-label="Twitter"
                      className="hover:scale-110 transition-transform"
                    >
                      <Twitter size={20} />
                    </Button>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                    Meet <span className="text-gradient">{aboutContent.authorName}</span>
                  </h2>
                  <p className="text-lg text-foreground/80 mb-6">
                    {aboutContent.authorBio}
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-muted dark:from-background dark:to-muted/50">
        <div className="blog-container">
          <Card className="max-w-3xl mx-auto border-glow glass-morphism animate-fade-in">
            <CardHeader className="flex flex-col items-center pb-0">
              <Chip color="primary" variant="shadow" className="mb-2">Our Purpose</Chip>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gradient">Our Mission</h2>
            </CardHeader>
            <Divider className="my-4 opacity-50" />
            <CardBody className="text-center">
              <p className="text-lg text-foreground/80">
                {aboutContent.mission}
              </p>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="blog-container">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center text-gradient">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutContent.values.map((value, index) => (
              <Card 
                key={index} 
                className="glass-morphism card-hover-effect"
                isHoverable
                shadow="sm"
              >
                <CardHeader className="pb-0 pt-4 px-4 flex-col items-start">
                  <Chip 
                    color="primary" 
                    variant="shadow" 
                    className="mb-2"
                  >
                    Value {index + 1}
                  </Chip>
                  <h3 className="text-xl font-serif font-bold">{value.title}</h3>
                </CardHeader>
                <CardBody className="overflow-visible py-4">
                  <p className="text-foreground/80">{value.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;

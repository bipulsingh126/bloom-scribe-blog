import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Image, Card, CardBody, Divider } from '@nextui-org/react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 animate-fade-in">About IndiaBloom</h1>
        <p className="text-xl text-center mb-12 animate-fade-in">
          Discover our mission to share the beauty of Indian culture with the world.
        </p>

        <div className="mb-16 glass-morphism p-8 rounded-lg animate-slide-up">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
              <p className="mb-4">
                Founded in 2020, IndiaBloom began as a small passion project by a group of
                writers and photographers who wanted to document the rich tapestry of
                Indian culture, traditions, and stories.
              </p>
              <p>
                What started as a simple blog has grown into a vibrant community of
                contributors and readers who share a love for authentic storytelling and
                cultural exploration.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://source.unsplash.com/random/600x400/?india,culture"
                alt="Our team documenting Indian culture"
                className="rounded-lg shadow-lg border-glow"
              />
            </div>
          </div>
        </div>

        <div className="mb-16 glass-morphism p-8 rounded-lg animate-slide-up">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="mb-4">
                At IndiaBloom, we believe that stories have the power to connect people
                across cultures and borders. Our mission is to bring authentic narratives
                about Indian life, traditions, art, food, and philosophy to readers
                worldwide.
              </p>
              <p>
                Through thoughtful storytelling and stunning visuals, we aim to celebrate
                the diversity of Indian culture while fostering greater understanding and
                appreciation globally.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://source.unsplash.com/random/600x400/?india,festival"
                alt="Indian cultural celebration"
                className="rounded-lg shadow-lg border-glow"
              />
            </div>
          </div>
        </div>

        <div className="text-center p-10 glass-morphism rounded-lg mb-12 animate-slide-up">
          <h2 className="text-3xl font-semibold mb-4">Join Our Community</h2>
          <p className="mb-6">
            Become part of our growing community of culture enthusiasts. Subscribe to our
            newsletter for exclusive content and updates.
          </p>
          <Link href="/contact" className="btn-3d">
            <Button color="primary" size="lg" className="font-medium">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 
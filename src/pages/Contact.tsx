import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, Textarea, Divider, Image } from '@nextui-org/react';
import { Mail, MapPin, Phone, Send, Clock, HeartHandshake, Users, MessageSquare } from 'lucide-react';
import { Card } from '../components/ui/Card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Add logic to show a success message or redirect
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-12 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
          Reach Out to IndiaBloom
        </h1>
        <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto font-poppins animate-slide-up">
          Join our vibrant community celebrating India's rich cultural heritage. We're here to connect, 
          share stories, and build meaningful relationships with passionate individuals like you.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          <Button 
            as={Link} 
            to="/blog" 
            variant="flat" 
            color="secondary"
            className="font-medium btn-3d"
            size="lg"
          >
            Explore Our Blog
          </Button>
          <Button 
            as="a" 
            href="#contact-form" 
            color="primary"
            className="font-medium btn-3d"
            size="lg"
          >
            Send Message
          </Button>
        </div>
        
        <div className="relative w-full max-w-5xl mx-auto h-[200px] md:h-[300px] mb-12 rounded-xl overflow-hidden shadow-xl animate-fade-in">
          <Image
            src="https://source.unsplash.com/random/?india,temple,architecture"
            alt="Indian cultural heritage"
            className="w-full h-full object-cover border-glow"
            removeWrapper
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 backdrop-blur-sm glass-morphism"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-2xl md:text-3xl font-bold font-poppins px-6 text-center">
              "Connecting hearts through the vibrant tapestry of Indian culture"
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
        <div className="lg:col-span-3 order-2 lg:order-1 animate-slide-up">
          <Card className="p-6 border-glow glass-morphism" variant="outline" hover="glow" id="contact-form">
            <Card.Header className="pb-0 flex-col items-start">
              <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
              <p className="text-foreground/70">We'd love to hear from you. Fill out the form below and we'll respond within 24 hours.</p>
            </Card.Header>
            <Card.Body>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="bordered"
                    startContent={<span className="text-primary">✦</span>}
                    className="w-full enhanced-input"
                    placeholder="Your Name"
                  />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="bordered"
                    startContent={<span className="text-primary">@</span>}
                    className="w-full enhanced-input"
                    placeholder="your.email@example.com"
                  />
                </div>
                <Input
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  variant="bordered"
                  className="w-full enhanced-input"
                  placeholder="What is this regarding?"
                />
                <Textarea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  variant="bordered"
                  className="w-full enhanced-input"
                  minRows={5}
                  placeholder="Tell us more about your inquiry, ideas, or feedback..."
                />
                <Button
                  type="submit"
                  color="primary"
                  size="lg"
                  className="w-full font-medium btn-3d enhanced-button"
                  endContent={<Send size={20} />}
                >
                  Send Message
                </Button>
              </form>
            </Card.Body>
          </Card>
        </div>

        <div className="lg:col-span-2 order-1 lg:order-2 animate-slide-up">
          <Card className="p-6 h-full glass-morphism" variant="outline" shadow="md">
            <Card.Header className="pb-0">
              <h2 className="text-3xl font-bold mb-2">Contact Information</h2>
            </Card.Header>
            <Card.Body className="space-y-8">
              <div className="flex items-start gap-4 animate-fade-in">
                <div className="p-3 bg-primary/10 rounded-full border-glow">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-foreground/80">contact@indiabloom.com</p>
                  <p className="text-foreground/80">support@indiabloom.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="p-3 bg-primary/10 rounded-full border-glow">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-foreground/80">+91 123 456 7890</p>
                  <p className="text-foreground/80">+91 987 654 3210</p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
                <div className="p-3 bg-primary/10 rounded-full border-glow">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-foreground/80">
                    123 Cultural Street<br />
                    New Delhi, India<br />
                    110001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: '600ms' }}>
                <div className="p-3 bg-primary/10 rounded-full border-glow">
                  <Clock size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <p className="text-foreground/80">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Divider className="my-12" />

      <section className="mb-16 animate-fade-in">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ways to Connect With Us</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">Join our community and be part of the cultural conversation in these meaningful ways.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card variant="outline" shadow="md" hover="lift" className="p-6 card-hover-effect glass-morphism animate-slide-up">
            <Card.Body className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-glow">
                <HeartHandshake size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaborate With Us</h3>
              <p className="text-foreground/70">Partner with us on cultural projects, events, or initiatives that celebrate Indian heritage.</p>
            </Card.Body>
          </Card>

          <Card variant="outline" shadow="md" hover="lift" className="p-6 card-hover-effect glass-morphism animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Card.Body className="text-center">
              <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-glow">
                <MessageSquare size={28} className="text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Share Your Stories</h3>
              <p className="text-foreground/70">Contribute your cultural experiences, travel tales, or family traditions for our blog.</p>
            </Card.Body>
          </Card>

          <Card variant="outline" shadow="md" hover="lift" className="p-6 card-hover-effect glass-morphism animate-slide-up" style={{ animationDelay: '400ms' }}>
            <Card.Body className="text-center">
              <div className="bg-accent/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-glow">
                <Users size={28} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Join Community Events</h3>
              <p className="text-foreground/70">Participate in our workshops, webinars, and cultural celebrations throughout the year.</p>
            </Card.Body>
          </Card>
        </div>
      </section>

      <section className="mb-16 animate-fade-in">
        <div className="relative overflow-hidden rounded-xl glass-morphism border-glow">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 z-10"></div>
          <Image
            src="https://source.unsplash.com/random/?india,festival,celebration"
            alt="Indian cultural celebration"
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Stay Connected</h2>
            <p className="text-white/90 max-w-2xl mb-6 font-poppins animate-slide-up">
              Subscribe to our newsletter for monthly updates on Indian culture, traditions, arts, and exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-64 bg-white/20 backdrop-blur-md text-white enhanced-input"
                variant="flat"
              />
              <Button color="default" className="bg-white text-primary hover:bg-white/90 btn-3d">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-16 animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">Visit our office in the heart of Delhi or connect with us online.</p>
        </div>
        
        <div className="aspect-video rounded-xl overflow-hidden shadow-lg border-glow glass-morphism">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5312350953047!2d77.20651841508096!3d28.6396255824252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1625103227589!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="IndiaBloom Office Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact; 
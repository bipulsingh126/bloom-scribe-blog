
import React from 'react';
import Layout from '@/components/Layout';
import ContactForm from '@/components/contact/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16 bg-gradient-to-b from-blog-beige/50 to-transparent">
        <div className="blog-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="mb-4 text-blog-brown">Get in Touch</h1>
            <p className="text-xl text-foreground/80">
              Have a question, feedback, or just want to say hello? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card/50 border-blog-brown/20 shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-blog-brown/10 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-blog-brown" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-blog-brown">Email Us</h3>
                <p className="text-foreground/70 mb-2">For general inquiries:</p>
                <a href="mailto:hello@indiabloom.com" className="text-blog-brown hover:underline">
                  hello@indiabloom.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-blog-brown/20 shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-blog-brown/10 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-blog-brown" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-blog-brown">Location</h3>
                <p className="text-foreground/70">
                  Bandra West<br />
                  Mumbai, Maharashtra<br />
                  India
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-blog-brown/20 shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-blog-brown/10 rounded-full mb-4">
                  <Clock className="h-6 w-6 text-blog-brown" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-blog-brown">Response Time</h3>
                <p className="text-foreground/70">
                  We aim to respond to all inquiries within 48 hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="border-blog-brown/20 shadow-md">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-serif font-bold mb-6 text-blog-brown">Send a Message</h2>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-muted/30">
        <div className="blog-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-bold mb-4 text-blog-brown">Connect on Social Media</h2>
            <p className="text-foreground/80 mb-6">
              Follow IndiaBloom for daily inspiration, behind-the-scenes content, and community discussions.
            </p>
            <div className="flex justify-center space-x-8">
              <a href="#" className="text-blog-brown hover:text-blog-light-brown transition-colors">
                Instagram: @indiabloom
              </a>
              <a href="#" className="text-blog-brown hover:text-blog-light-brown transition-colors">
                Twitter: @indiabloom
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;

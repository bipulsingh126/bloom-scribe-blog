
import React from 'react';
import Layout from '@/components/Layout';
import ContactForm from '@/components/contact/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="blog-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="mb-4">Get in Touch</h1>
            <p className="text-xl text-foreground/80">
              Have a question, feedback, or just want to say hello? We'd love to hear from you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card/50">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-blog-green/10 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-blog-green" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email Us</h3>
                <p className="text-foreground/70 mb-2">For general inquiries:</p>
                <a href="mailto:hello@bloomscribe.com" className="text-blog-green hover:underline">
                  hello@bloomscribe.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-blog-green/10 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-blog-green" />
                </div>
                <h3 className="text-lg font-bold mb-2">Location</h3>
                <p className="text-foreground/70">
                  Portland, Oregon<br />
                  United States
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-blog-green/10 rounded-full mb-4">
                  <Clock className="h-6 w-6 text-blog-green" />
                </div>
                <h3 className="text-lg font-bold mb-2">Response Time</h3>
                <p className="text-foreground/70">
                  We aim to respond to all inquiries within 48 hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-serif font-bold mb-6">Send a Message</h2>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-muted/30">
        <div className="blog-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">Connect on Social Media</h2>
            <p className="text-foreground/80 mb-6">
              Follow BloomScribe for daily inspiration, behind-the-scenes content, and community discussions.
            </p>
            <div className="flex justify-center space-x-8">
              <a href="#" className="text-blog-green hover:text-blog-sage transition-colors">
                Instagram: @bloomscribe
              </a>
              <a href="#" className="text-blog-green hover:text-blog-sage transition-colors">
                Twitter: @bloomscribe
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;

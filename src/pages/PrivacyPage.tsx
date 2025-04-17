
import React from 'react';
import Layout from '@/components/Layout';

const PrivacyPage = () => {
  return (
    <Layout>
      <div className="blog-container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead">Last updated: April 17, 2025</p>
            
            <h2>Introduction</h2>
            <p>
              At BloomScribe, we value your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>
            
            <h2>Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information</strong>: When you subscribe to our newsletter or contact us, 
                we collect information such as your name and email address.
              </li>
              <li>
                <strong>Usage Data</strong>: We automatically collect information about how you interact with our website, 
                including pages visited, time spent on the site, and referring websites.
              </li>
              <li>
                <strong>Cookies</strong>: We use cookies to enhance your experience on our site. You can set your browser 
                to refuse all or some browser cookies, but this may affect site functionality.
              </li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect for the following purposes:</p>
            <ul>
              <li>To provide and maintain our website</li>
              <li>To send you our newsletter if you have subscribed</li>
              <li>To respond to your inquiries and comments</li>
              <li>To analyze usage patterns and improve our website</li>
              <li>To protect against unauthorized access or illegal activity</li>
            </ul>
            
            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to outside parties unless we provide 
              you with advance notice or are required by law to do so.
            </p>
            
            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or 
              content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
            
            <h2>Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information. However, please be aware that 
              no method of transmission over the internet or electronic storage is 100% secure.
            </p>
            
            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul>
              <li>The right to access and receive a copy of your personal information</li>
              <li>The right to rectify or update your personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to restrict or object to our processing of your personal information</li>
              <li>The right to data portability</li>
            </ul>
            
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last updated" date.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:privacy@bloomscribe.com">privacy@bloomscribe.com</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPage;


import React, { useState } from 'react';
import { Mail, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }
    
    // In a real app, you'd send this to your backend
    console.log("Subscribing email:", email);
    toast.success("Thank you for subscribing!");
    setEmail('');
  };
  
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-space-blue to-transparent z-10"></div>
      <div className="absolute w-72 h-72 rounded-full bg-space-purple/20 blur-3xl right-10 top-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="glass-card rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left column */}
            <div>
              <h2 className="font-space text-3xl font-bold mb-4 text-white">Join Our Cosmic Journey</h2>
              <div className="w-16 h-1 bg-space-accent mb-6"></div>
              
              <p className="text-white/80 mb-8">
                Whether you're a seasoned astronomer or just beginning to explore the wonders of the cosmos,
                the ISA Club welcomes all who share our fascination with the universe.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-space text-xl font-semibold mb-3 text-white">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-space-blue flex items-center justify-center text-white hover:bg-space-accent transition-colors">
                      <Facebook size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-space-blue flex items-center justify-center text-white hover:bg-space-accent transition-colors">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-space-blue flex items-center justify-center text-white hover:bg-space-accent transition-colors">
                      <Instagram size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-space-blue flex items-center justify-center text-white hover:bg-space-accent transition-colors">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-space text-xl font-semibold mb-3 text-white">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail size={18} className="text-space-accent" />
                      <span className="text-white/80">contact@isaclub.org</span>
                    </div>
                    <p className="text-white/80">
                      123 Cosmic Way,<br />
                      Stargazer Building,<br />
                      Universe City, UC 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right column */}
            <div>
              <h3 className="font-space text-xl font-semibold mb-6 text-white">Stay Updated</h3>
              
              <p className="text-white/80 mb-6">
                Subscribe to our newsletter to receive updates on upcoming events, astronomical phenomena, 
                and space exploration news.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2 text-sm">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="astronomer@example.com"
                    className="w-full px-4 py-3 bg-space-deep-blue border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-space-accent text-white"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-space-accent hover:bg-space-accent/80 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Subscribe</span>
                  <ArrowRight size={18} />
                </button>
              </form>
              
              <p className="mt-4 text-sm text-white/60">
                By subscribing, you agree to receive emails from ISA Club. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container text-center">
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl max-w-2xl mx-auto text-primary-foreground/90">
              Have questions? We're here to help. Reach out to our team anytime.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" placeholder="What is this about?" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..." 
                      rows={6}
                    />
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                
                <Card className="border-border shadow-soft">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">support@govelo.de</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          We'll respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border shadow-soft">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-muted-foreground">+49 30 1234 5678</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Mon-Fri, 9:00 AM - 6:00 PM CET
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border shadow-soft">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Office</h3>
                        <p className="text-muted-foreground">
                          Friedrichstraße 123<br />
                          10117 Berlin<br />
                          Germany
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="pt-6">
                  <h3 className="font-semibold mb-4">Frequently Asked Questions</h3>
                  <p className="text-muted-foreground mb-4">
                    Before reaching out, check our FAQ page for quick answers to common questions.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="/faq">Visit FAQ</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

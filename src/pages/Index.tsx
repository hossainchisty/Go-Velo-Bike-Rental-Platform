import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Search, MapPin, Shield, Award, Bike, Leaf, Users } from "lucide-react";
import heroImage from "@/assets/hero-bike.jpg";
import bikesCollection from "@/assets/bikes-collection.jpg";
import happyRider from "@/assets/happy-rider.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        
        <div className="container relative z-10 animate-fade-in">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Find Your Perfect Bike
              <span className="text-primary block mt-2">Anywhere in Germany</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with local bike owners. Rent bikes, e-bikes, and accessories with just a few clicks. Sustainable, affordable, community-driven.
            </p>
            
            {/* Search Bar */}
            <div className="bg-card p-4 rounded-lg shadow-soft border border-border">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Enter city (Berlin, Hamburg, Munich...)" 
                    className="pl-10"
                  />
                </div>
                <Button variant="hero" size="lg" className="md:w-auto" asChild>
                  <Link to="/explore">
                    <Search className="mr-2 h-5 w-5" />
                    Search Bikes
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 border-y border-border bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3 animate-slide-up">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Verified Owners</h3>
              <p className="text-sm text-muted-foreground">All bike owners go through KYC verification</p>
            </div>
            <div className="flex flex-col items-center gap-3 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Secure Payments</h3>
              <p className="text-sm text-muted-foreground">Safe transactions with trusted payment partners</p>
            </div>
            <div className="flex flex-col items-center gap-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Eco-Friendly</h3>
              <p className="text-sm text-muted-foreground">Sustainable mobility for a greener Germany</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How Go-Velo Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Renting a bike has never been easier. Three simple steps to sustainable mobility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border shadow-soft hover:shadow-hover transition-all">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-gradient-hero text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">Find a Bike</h3>
                <p className="text-muted-foreground">
                  Search by city, browse nearby listings, or use our map view to discover bikes close to you.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-soft hover:shadow-hover transition-all">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-gradient-hero text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">Book & Pay</h3>
                <p className="text-muted-foreground">
                  Select your dates, complete secure payment, and receive instant booking confirmation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-soft hover:shadow-hover transition-all">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-gradient-hero text-primary-foreground flex items-center justify-center font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">Ride & Enjoy</h3>
                <p className="text-muted-foreground">
                  Pick up your bike, explore Germany, and return it at the agreed time. Rate your experience!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Bike Types for Every Adventure</h2>
            <p className="text-xl text-muted-foreground">
              From city cruising to mountain trails – find the perfect ride
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: "E-Bikes", icon: "⚡" },
              { name: "City Bikes", icon: "🚲" },
              { name: "Mountain", icon: "⛰️" },
              { name: "Cargo", icon: "📦" },
              { name: "Kids", icon: "👶" },
            ].map((category, index) => (
              <Card 
                key={category.name} 
                className="border-border shadow-soft hover:shadow-hover transition-all cursor-pointer group"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{category.icon}</div>
                  <h3 className="font-semibold">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Bike Owners */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={bikesCollection} 
                alt="Bike collection in shop" 
                className="rounded-lg shadow-hover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Own a Bike? Turn It Into Income</h2>
              <p className="text-xl text-muted-foreground">
                Join hundreds of bike owners who earn extra money by sharing their bikes when they're not using them.
              </p>
              <ul className="space-y-4">
                {[
                  "Create your shop profile in minutes",
                  "Set your own prices and availability",
                  "Get paid securely after each rental",
                  "Full insurance coverage included",
                  "Manage bookings with our easy dashboard"
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bike className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/list-bike">List Your Bike</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full">
                <Users className="h-5 w-5" />
                <span className="font-semibold">Join Our Community</span>
              </div>
              <h2 className="text-4xl font-bold">Thousands Already Riding with Go-Velo</h2>
              <p className="text-xl text-primary-foreground/90">
                Be part of Germany's fastest-growing bike-sharing community. Sustainable, local, and trusted by riders nationwide.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div>
                  <div className="text-4xl font-bold mb-2">5,000+</div>
                  <div className="text-sm text-primary-foreground/80">Active Users</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">2,500+</div>
                  <div className="text-sm text-primary-foreground/80">Bikes Listed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-sm text-primary-foreground/80">German Cities</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={happyRider} 
                alt="Happy bike rider" 
                className="rounded-lg shadow-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're looking to rent or share, Go-Velo makes sustainable mobility simple.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/explore">Find a Bike</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/list-bike">List Your Bike</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

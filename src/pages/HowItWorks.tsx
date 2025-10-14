import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Search, Calendar, CreditCard, Bike, MapPin, Shield, Users, Award } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container text-center">
            <h1 className="text-5xl font-bold mb-6">How Go-Velo Works</h1>
            <p className="text-xl max-w-2xl mx-auto text-primary-foreground/90">
              Connecting bike owners and renters across Germany. Simple, secure, sustainable.
            </p>
          </div>
        </section>

        {/* For Renters */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">For Renters</h2>
              <p className="text-xl text-muted-foreground">Get on the road in four easy steps</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-border shadow-soft">
                <CardContent className="pt-8">
                  <div className="h-16 w-16 rounded-full bg-gradient-hero text-primary-foreground flex items-center justify-center mb-6 mx-auto">
                    <Search className="h-8 w-8" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-3">1. Search</h3>
                    <p className="text-muted-foreground">
                      Browse bikes near you by location, type, or price. Use filters to find exactly what you need.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-soft">
                <CardContent className="pt-8">
                  <div className="h-16 w-16 rounded-full bg-gradient-hero text-primary-foreground flex items-center justify-center mb-6 mx-auto">
                    <Calendar className="h-8 w-8" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-3">2. Book</h3>
                    <p className="text-muted-foreground">
                      Select your rental dates and check availability. Review bike details and owner ratings.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-soft">
                <CardContent className="pt-8">
                  <div className="h-16 w-16 rounded-full bg-gradient-hero text-primary-foreground flex items-center justify-center mb-6 mx-auto">
                    <CreditCard className="h-8 w-8" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-3">3. Pay</h3>
                    <p className="text-muted-foreground">
                      Complete secure payment via Stripe or PayPal. Get instant confirmation.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-soft">
                <CardContent className="pt-8">
                  <div className="h-16 w-16 rounded-full bg-gradient-hero text-primary-foreground flex items-center justify-center mb-6 mx-auto">
                    <Bike className="h-8 w-8" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-3">4. Ride</h3>
                    <p className="text-muted-foreground">
                      Pick up your bike, enjoy your journey, return on time, and rate your experience.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/explore">Start Exploring Bikes</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* For Owners */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">For Bike Owners</h2>
              <p className="text-xl text-muted-foreground">Turn your bike into a source of income</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-border shadow-soft">
                <CardContent className="pt-8">
                  <div className="h-16 w-16 rounded-full bg-gradient-hero text-primary-foreground flex items-center justify-center mb-6 mx-auto">
                    <Users className="h-8 w-8" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-3">Create Shop</h3>
                    <p className="text-muted-foreground">
                      Set up your shop profile with a name, logo, and description. Verification required.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-soft">
                <CardContent className="pt-8">
                  <div className="h-16 w-16 rounded-full bg-gradient-hero text-primary-foreground flex items-center justify-center mb-6 mx-auto">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-3">List Bikes</h3>
                    <p className="text-muted-foreground">
                      Add bike photos, specs, rental price, and set your availability calendar.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border shadow-soft">
                <CardContent className="pt-8">
                  <div className="h-16 w-16 rounded-full bg-gradient-hero text-primary-foreground flex items-center justify-center mb-6 mx-auto">
                    <Award className="h-8 w-8" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-3">Earn Money</h3>
                    <p className="text-muted-foreground">
                      Accept rentals, get paid automatically, and manage everything from your dashboard.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/list-bike">List Your First Bike</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Safety & Trust */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Safety & Trust</h2>
              <p className="text-xl text-muted-foreground">Your security is our priority</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-border shadow-soft">
                <CardContent className="pt-8 text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Verified Users</h3>
                  <p className="text-muted-foreground">
                    All users undergo KYC verification with German ID compliance for maximum security.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border shadow-soft">
                <CardContent className="pt-8 text-center">
                  <CreditCard className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Secure Payments</h3>
                  <p className="text-muted-foreground">
                    All transactions protected with encryption through trusted payment providers.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border shadow-soft">
                <CardContent className="pt-8 text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Insurance Coverage</h3>
                  <p className="text-muted-foreground">
                    Full insurance included with every rental for peace of mind on both sides.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-hero text-primary-foreground text-center">
          <div className="container">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join thousands of riders and owners making sustainable mobility accessible across Germany
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/explore">Find a Bike</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/list-bike">List Your Bike</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;

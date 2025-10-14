import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Bike, Leaf, Users, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container text-center">
            <h1 className="text-5xl font-bold mb-6">About Go-Velo</h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
              Building Germany's most trusted bike-sharing community, one ride at a time
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Go-Velo was founded on a simple belief: sustainable transportation should be accessible to everyone. 
                We're connecting bike owners with riders across Germany, making it easier than ever to choose 
                eco-friendly mobility while creating economic opportunities for our community.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-border shadow-soft">
                <CardContent className="pt-8 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                  <p className="text-muted-foreground">
                    Reducing carbon footprints through shared mobility and promoting green transportation
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border shadow-soft">
                <CardContent className="pt-8 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Community</h3>
                  <p className="text-muted-foreground">
                    Building trust and connections between bike owners and riders nationwide
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border shadow-soft">
                <CardContent className="pt-8 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                  <p className="text-muted-foreground">
                    Making bikes available to everyone at fair prices across all German cities
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border shadow-soft">
                <CardContent className="pt-8 text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Bike className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    Using technology to create seamless sharing experiences for modern mobility
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-5xl font-bold text-primary">5,000+</div>
                <p className="text-lg text-muted-foreground">Active Users</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-primary">2,500+</div>
                <p className="text-lg text-muted-foreground">Bikes Listed</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-primary">50+</div>
                <p className="text-lg text-muted-foreground">German Cities</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-primary">15,000+</div>
                <p className="text-lg text-muted-foreground">Rentals Completed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Go-Velo started in 2023 when our founders noticed a gap in Germany's sharing economy. 
                While car-sharing and scooter rentals were booming, there was no unified platform 
                connecting bike owners with people who needed bikes.
              </p>
              <p>
                Many Germans own bikes they rarely use, while others struggle to access affordable, 
                quality bikes for commuting or recreation. We saw an opportunity to solve both problems 
                while promoting sustainable transportation.
              </p>
              <p>
                Today, Go-Velo is proud to serve thousands of users across 50+ German cities. We're 
                helping bike owners earn extra income, giving riders affordable access to quality bikes, 
                and contributing to a more sustainable future for Germany.
              </p>
              <p className="font-semibold text-foreground">
                Join us in building a more connected, sustainable Germany – one bike ride at a time.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

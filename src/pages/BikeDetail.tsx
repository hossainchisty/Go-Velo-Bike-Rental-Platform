import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Star, Euro, Shield, Calendar, Bike as BikeIcon, MessageSquare } from "lucide-react";

const BikeDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="container py-12">
          {/* Breadcrumb */}
          <div className="text-sm text-muted-foreground mb-6">
            <Link to="/explore" className="hover:text-primary">Explore</Link> / Bike Details
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/20 rounded-lg flex items-center justify-center text-9xl shadow-soft">
                🚴
              </div>

              {/* Title & Location */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">Urban E-Bike Pro</h1>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>Berlin, Mitte</span>
                      </div>
                      <Badge variant="secondary">E-Bike</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline gap-1 justify-end mb-1">
                      <Euro className="h-5 w-5 text-primary" />
                      <span className="text-3xl font-bold text-primary">25</span>
                      <span className="text-muted-foreground">/day</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-medium">4.8</span>
                      <span className="text-sm text-muted-foreground">(42 reviews)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <Card className="border-border shadow-soft">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Specifications</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Type</p>
                      <p className="font-medium">Electric Bike</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Battery Range</p>
                      <p className="font-medium">80 km</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Frame Size</p>
                      <p className="font-medium">Medium (54cm)</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Weight</p>
                      <p className="font-medium">22 kg</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Gears</p>
                      <p className="font-medium">8-speed</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Max Load</p>
                      <p className="font-medium">120 kg</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Description */}
              <Card className="border-border shadow-soft">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Description</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Perfect for urban commuting and weekend rides. This premium e-bike features a powerful motor, 
                    long-lasting battery, and comfortable ergonomic design. Ideal for navigating Berlin's streets 
                    with ease. Includes helmet, lock, and charging cable. Well-maintained and regularly serviced. 
                    Perfect condition with minimal wear. Great for both experienced cyclists and beginners.
                  </p>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="border-border shadow-soft">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Included Features</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Helmet included",
                      "Premium lock",
                      "USB charging port",
                      "Phone holder",
                      "Front & rear lights",
                      "Mudguards",
                      "Cargo rack",
                      "Water bottle holder"
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <BikeIcon className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Owner */}
              <Card className="border-border shadow-soft">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Bike Owner</h2>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                          MB
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-lg">Max's Bike Shop</h3>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="font-medium text-foreground">4.9</span>
                          <span>(127 rentals)</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Badge variant="secondary" className="gap-1">
                            <Shield className="h-3 w-3" />
                            Verified Owner
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <Card className="border-border shadow-soft sticky top-20">
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <div className="flex items-baseline gap-1 mb-4">
                      <Euro className="h-6 w-6 text-primary" />
                      <span className="text-4xl font-bold text-primary">25</span>
                      <span className="text-muted-foreground">/day</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-medium">4.8</span>
                      <span className="text-muted-foreground">(42 reviews)</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Pick-up Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input 
                          type="date" 
                          className="w-full h-10 rounded-md border border-input bg-background px-3 pl-10 text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Return Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input 
                          type="date" 
                          className="w-full h-10 rounded-md border border-input bg-background px-3 pl-10 text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">€25 × 3 days</span>
                      <span className="font-medium">€75</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Service fee</span>
                      <span className="font-medium">€7.50</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold pt-2 border-t">
                      <span>Total</span>
                      <span className="text-primary">€82.50</span>
                    </div>
                  </div>

                  <Button variant="hero" size="lg" className="w-full">
                    Book Now
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    You won't be charged yet
                  </p>

                  <div className="flex items-center justify-center gap-6 pt-4 border-t text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>Secure payment</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <BikeIcon className="h-4 w-4 text-primary" />
                      <span>Insured</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BikeDetail;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Star, Euro } from "lucide-react";
import { Link } from "react-router-dom";

const bikes = [
  { id: 1, name: "Urban E-Bike Pro", type: "E-Bike", city: "Berlin", price: 25, rating: 4.8, reviews: 42, image: "🚴" },
  { id: 2, name: "Classic City Cruiser", type: "City Bike", city: "Hamburg", price: 15, rating: 4.6, reviews: 28, image: "🚲" },
  { id: 3, name: "Mountain Explorer", type: "Mountain", city: "Munich", price: 30, rating: 4.9, reviews: 35, image: "⛰️" },
  { id: 4, name: "Cargo Transporter", type: "Cargo", city: "Berlin", price: 35, rating: 4.7, reviews: 19, image: "📦" },
  { id: 5, name: "Kids Safe Bike", type: "Kids", city: "Frankfurt", price: 12, rating: 4.8, reviews: 24, image: "👶" },
  { id: 6, name: "Speed E-Bike", type: "E-Bike", city: "Cologne", price: 28, rating: 4.9, reviews: 51, image: "⚡" },
];

const Explore = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Search & Filter Section */}
        <section className="bg-muted/30 py-8 border-b">
          <div className="container">
            <h1 className="text-3xl font-bold mb-6">Explore Bikes</h1>
            
            <div className="bg-card p-6 rounded-lg shadow-soft border">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2 relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    placeholder="Enter city or location" 
                    className="pl-10"
                  />
                </div>
                
                <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">All Types</option>
                  <option value="ebike">E-Bikes</option>
                  <option value="city">City Bikes</option>
                  <option value="mountain">Mountain</option>
                  <option value="cargo">Cargo</option>
                  <option value="kids">Kids</option>
                </select>
                
                <Button variant="hero">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12">
          <div className="container">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">{bikes.length} bikes</span> available
              </p>
              <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bikes.map((bike) => (
                <Card key={bike.id} className="border-border shadow-soft hover:shadow-hover transition-all overflow-hidden group">
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                    {bike.image}
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{bike.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {bike.city}
                        </div>
                      </div>
                      <Badge variant="secondary">{bike.type}</Badge>
                    </div>
                    
                    <div className="flex items-center gap-1 text-sm mb-4">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-medium">{bike.rating}</span>
                      <span className="text-muted-foreground">({bike.reviews} reviews)</span>
                    </div>

                    <div className="flex items-baseline gap-1 mb-4">
                      <Euro className="h-5 w-5 text-primary" />
                      <span className="text-2xl font-bold text-primary">{bike.price}</span>
                      <span className="text-muted-foreground">/day</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="hero" className="w-full" asChild>
                      <Link to={`/bike/${bike.id}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Explore;

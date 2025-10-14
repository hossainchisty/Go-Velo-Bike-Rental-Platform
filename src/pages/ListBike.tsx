import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ListBike = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container py-12 animate-fade-in">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>List Your Bike</CardTitle>
              <CardDescription>Share your bike with the community and earn money</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Bike Title</Label>
                  <Input id="title" placeholder="e.g., Mountain Bike Trek X-Caliber" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select bike type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="road">Road Bike</SelectItem>
                      <SelectItem value="mountain">Mountain Bike</SelectItem>
                      <SelectItem value="ebike">E-Bike</SelectItem>
                      <SelectItem value="city">City Bike</SelectItem>
                      <SelectItem value="cargo">Cargo Bike</SelectItem>
                      <SelectItem value="kids">Kids Bike</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe your bike, its condition, and any special features..."
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Daily Rate (€)</Label>
                    <Input id="price" type="number" placeholder="25" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="Berlin" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="images">Upload Images</Label>
                  <Input id="images" type="file" multiple accept="image/*" />
                </div>

                <Button type="submit" className="w-full">List Your Bike</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ListBike;

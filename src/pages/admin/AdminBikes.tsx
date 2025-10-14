import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, MoreVertical, Edit, Trash2, Eye } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const bikes = [
  { id: 1, name: "Mountain Bike Trek X-Caliber", category: "Mountain", owner: "Max Mueller", location: "Berlin", price: "€25", status: "available" },
  { id: 2, name: "E-Bike Bosch Performance", category: "E-Bike", owner: "Anna Schmidt", location: "Munich", price: "€35", status: "rented" },
  { id: 3, name: "City Bike Classic Retro", category: "City", owner: "Tom Weber", location: "Hamburg", price: "€15", status: "available" },
  { id: 4, name: "Road Bike Carbon Pro", category: "Road", owner: "Lisa Klein", location: "Frankfurt", price: "€30", status: "maintenance" },
  { id: 5, name: "Cargo Bike Family XL", category: "Cargo", owner: "Paul Becker", location: "Cologne", price: "€40", status: "available" },
  { id: 6, name: "Kids Bike Starter", category: "Kids", owner: "Sara Hoffmann", location: "Stuttgart", price: "€10", status: "available" },
];

const AdminBikes = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Bikes Management</h1>
          <p className="text-muted-foreground mt-2">Manage all bike listings across the platform</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add New Bike
        </Button>
      </div>

      {/* Search & Filters */}
      <Card className="shadow-soft">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search bikes..." className="pl-10" />
            </div>
            <Button variant="outline">All Categories</Button>
            <Button variant="outline">All Locations</Button>
            <Button variant="outline">All Status</Button>
          </div>
        </CardContent>
      </Card>

      {/* Bikes Table */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>All Bikes ({bikes.length})</CardTitle>
          <CardDescription>A list of all registered bikes on the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {bikes.map((bike) => (
              <div
                key={bike.id}
                className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="h-16 w-16 rounded-lg bg-muted flex items-center justify-center">
                    <span className="text-2xl">🚲</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{bike.name}</h3>
                    <div className="flex gap-4 mt-1 text-sm text-muted-foreground">
                      <span>Owner: {bike.owner}</span>
                      <span>•</span>
                      <span>{bike.location}</span>
                      <span>•</span>
                      <span className="font-medium text-foreground">{bike.price}/day</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="secondary">{bike.category}</Badge>
                  <Badge
                    variant={
                      bike.status === "available"
                        ? "default"
                        : bike.status === "rented"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {bike.status}
                  </Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminBikes;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MoreVertical, Shield, Ban, CheckCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const users = [
  { id: 1, name: "Max Mueller", email: "max@example.com", role: "Owner", bikes: 5, rentals: 12, joined: "2024-01-15", status: "verified" },
  { id: 2, name: "Anna Schmidt", email: "anna@example.com", role: "Renter", bikes: 0, rentals: 8, joined: "2024-02-20", status: "verified" },
  { id: 3, name: "Tom Weber", email: "tom@example.com", role: "Owner", bikes: 3, rentals: 5, joined: "2024-03-10", status: "pending" },
  { id: 4, name: "Lisa Klein", email: "lisa@example.com", role: "Both", bikes: 2, rentals: 15, joined: "2024-01-05", status: "verified" },
  { id: 5, name: "Paul Becker", email: "paul@example.com", role: "Owner", bikes: 8, rentals: 3, joined: "2023-12-01", status: "verified" },
];

const AdminUsers = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Users Management</h1>
          <p className="text-muted-foreground mt-2">Manage all registered users and their activities</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">1,429</div>
            <p className="text-sm text-muted-foreground">Total Users</p>
          </CardContent>
        </Card>
        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">847</div>
            <p className="text-sm text-muted-foreground">Verified</p>
          </CardContent>
        </Card>
        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">312</div>
            <p className="text-sm text-muted-foreground">Bike Owners</p>
          </CardContent>
        </Card>
        <Card className="shadow-soft">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">1,117</div>
            <p className="text-sm text-muted-foreground">Renters</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card className="shadow-soft">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search users by name or email..." className="pl-10" />
            </div>
            <Button variant="outline">All Roles</Button>
            <Button variant="outline">All Status</Button>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>Manage user accounts and verification status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-semibold text-primary">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{user.name}</h3>
                      {user.status === "verified" && (
                        <CheckCircle className="h-4 w-4 text-accent" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-center">
                    <div className="font-semibold">{user.bikes}</div>
                    <div className="text-muted-foreground">Bikes</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{user.rentals}</div>
                    <div className="text-muted-foreground">Rentals</div>
                  </div>
                  <Badge variant={user.role === "Owner" ? "default" : "secondary"}>
                    {user.role}
                  </Badge>
                  <Badge
                    variant={user.status === "verified" ? "default" : "outline"}
                  >
                    {user.status}
                  </Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Shield className="h-4 w-4 mr-2" />
                        View Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Verify User
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Ban className="h-4 w-4 mr-2" />
                        Suspend User
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

export default AdminUsers;

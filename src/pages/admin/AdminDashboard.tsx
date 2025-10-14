import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bike, Users, Calendar, TrendingUp, DollarSign, MapPin } from "lucide-react";

const stats = [
  { title: "Total Bikes", value: "247", change: "+12%", icon: Bike, color: "text-primary" },
  { title: "Active Users", value: "1,429", change: "+8%", icon: Users, color: "text-accent" },
  { title: "Active Rentals", value: "89", change: "+23%", icon: Calendar, color: "text-primary" },
  { title: "Revenue (Month)", value: "€12,450", change: "+15%", icon: DollarSign, color: "text-accent" },
];

const recentRentals = [
  { id: 1, bike: "Mountain Bike Trek", user: "Max Mueller", location: "Berlin", price: "€25/day", status: "active" },
  { id: 2, bike: "E-Bike Bosch", user: "Anna Schmidt", location: "Munich", price: "€35/day", status: "active" },
  { id: 3, bike: "City Bike Classic", user: "Tom Weber", location: "Hamburg", price: "€15/day", status: "pending" },
  { id: 4, bike: "Road Bike Pro", user: "Lisa Klein", location: "Frankfurt", price: "€30/day", status: "active" },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome back! Here's your business overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="shadow-soft hover:shadow-hover transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
              <p className="text-sm text-accent mt-1">
                <TrendingUp className="inline h-4 w-4 mr-1" />
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Rentals */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Recent Rentals</CardTitle>
          <CardDescription>Latest bike rental activities across Germany</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentRentals.map((rental) => (
              <div
                key={rental.id}
                className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bike className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{rental.bike}</p>
                    <p className="text-sm text-muted-foreground">{rental.user}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm font-medium flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {rental.location}
                    </p>
                    <p className="text-sm text-muted-foreground">{rental.price}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      rental.status === "active"
                        ? "bg-accent/20 text-accent"
                        : "bg-yellow-500/20 text-yellow-700"
                    }`}
                  >
                    {rental.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;

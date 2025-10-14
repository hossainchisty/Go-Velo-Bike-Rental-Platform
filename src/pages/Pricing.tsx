import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for trying out Go-Velo",
      features: [
        "List up to 2 bikes",
        "Basic listing features",
        "10% commission",
        "Email support"
      ]
    },
    {
      name: "Pro",
      price: "€9.99/mo",
      description: "Best for serious bike owners",
      features: [
        "Unlimited bike listings",
        "Priority listing placement",
        "5% commission",
        "Advanced analytics",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Business",
      price: "€29.99/mo",
      description: "For bike shops and rental businesses",
      features: [
        "Everything in Pro",
        "Custom shop page",
        "3% commission",
        "API access",
        "Dedicated account manager"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container py-12 animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Pricing Plans</h1>
          <p className="text-xl text-muted-foreground">Choose the perfect plan for your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={plan.popular ? "border-primary shadow-lg" : ""}>
              {plan.popular && (
                <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="text-3xl font-bold mt-4">{plan.price}</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;

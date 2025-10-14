import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bike, Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      <Link to="/explore" className="text-foreground hover:text-primary transition-colors font-medium">
        Explore Bikes
      </Link>
      <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors font-medium">
        How It Works
      </Link>
      <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
        About
      </Link>
      <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
        Contact
      </Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <Bike className="h-6 w-6" />
          Go-Velo
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
          <Button variant="outline" asChild>
            <Link to="/login">Sign In</Link>
          </Button>
          <Button variant="hero" asChild>
            <Link to="/list-bike">List Your Bike</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <div className="flex flex-col gap-6 mt-8">
              <NavLinks />
              <div className="flex flex-col gap-3 pt-4 border-t">
                <Button variant="outline" asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button variant="hero" asChild>
                  <Link to="/list-bike">List Your Bike</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;

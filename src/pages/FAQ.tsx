import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does Go-Velo work?",
      answer: "Go-Velo connects bike owners with people looking to rent bikes. Owners list their bikes on our platform, and renters can browse, book, and pay securely through our website."
    },
    {
      question: "Is insurance included?",
      answer: "Yes, all rentals are covered by our comprehensive insurance policy that protects both owners and renters against damage and theft."
    },
    {
      question: "How do I verify my identity?",
      answer: "We require German ID verification for all users to ensure safety and trust within our community. Simply upload a photo of your ID during registration."
    },
    {
      question: "What if my bike gets damaged?",
      answer: "Our insurance covers damage up to the full value of the bike. Renters are responsible for reporting any damage immediately, and we'll handle the claims process."
    },
    {
      question: "How do payments work?",
      answer: "Renters pay through our secure platform (Stripe/PayPal/SEPA). Bike owners receive payouts directly to their bank account after each completed rental."
    },
    {
      question: "Can I cancel a booking?",
      answer: "Yes, cancellation policies depend on the timing. Free cancellation is available up to 48 hours before the rental starts. Later cancellations may incur fees."
    },
    {
      question: "What cities are you available in?",
      answer: "We're currently available across major German cities including Berlin, Hamburg, Munich, Frankfurt, and Cologne, with plans to expand nationwide."
    },
    {
      question: "How much can I earn as a bike owner?",
      answer: "Earnings vary based on bike type and location, but owners typically earn €200-500 per month per bike. E-bikes and premium bikes tend to earn more."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container py-12 animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Everything you need to know about Go-Velo
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;

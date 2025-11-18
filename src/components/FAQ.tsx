import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What are the check-in and check-out times?",
      answer: "Check-in time is 2:00 PM and check-out time is 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability.",
    },
    {
      question: "Is the homestay suitable for families?",
      answer: "Yes, Alora Home Stay is family-friendly and welcomes families. We provide a safe and comfortable environment perfect for family stays. Please note that we only accommodate families. Couples are not allowed to stay.",
    },
    {
      question: "Are couples allowed to stay?",
      answer: "No, we do not allow couples to stay at Alora Home Stay. We only accommodate families to maintain a family-friendly environment for all our guests.",
    },
    {
      question: "What amenities are included?",
      answer: "All rooms include free Wi-Fi, 24/7 water supply, fully furnished spaces, and access to common areas including the living room, dining hall, and kitchen. Some rooms also feature attached bathrooms and AC.",
    },
    {
      question: "Is parking available?",
      answer: "Yes, parking space is available for guests. Please inform us in advance if you'll be bringing a vehicle so we can reserve a spot for you.",
    },
    {
      question: "Can I cook my own meals?",
      answer: "Absolutely! We have a fully equipped kitchen available for guests to use. You're welcome to prepare your own meals during your stay.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellations made 48 hours before check-in will receive a full refund. Cancellations made within 48 hours may be subject to a cancellation fee. Please contact us for specific details.",
    },
    {
      question: "Is the location safe and peaceful?",
      answer: "Yes, Alora Home Stay is located in a safe residential area in Guwahati, Assam. The neighborhood is peaceful and well-maintained, providing a tranquil environment for your stay.",
    },
    {
      question: "How do I make a reservation?",
      answer: "You can make a reservation by contacting us through our contact page, calling us directly, or sending us a message on WhatsApp. We'll confirm your booking and provide all necessary details.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about your stay at Alora Home Stay
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-sm px-4 md:px-6 bg-card hover:bg-card/80 transition-colors"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground hover:no-underline py-4 md:py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-4 md:pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;


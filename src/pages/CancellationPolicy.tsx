import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";

const CancellationPolicy = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Cancellation Policy | Alora Homestay Guwahati"
        description="Cancellation and refund policy for Alora Homestay Guwahati. Learn about our cancellation terms, refund process, and modification policy for your booking."
        canonical="/cancellation-policy"
        noindex={true}
      />
      <PageHeader
        title="Cancellation Policy"
        description="Understand our cancellation and refund policies for your booking."
        backgroundImage="/header2.webp"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h2 className="text-3xl md:text-5xl text-foreground mb-4">Cancellation Terms</h2>
                <div className="space-y-4">
                  <div className="bg-card p-6 rounded-sm">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Full Refund</h3>
                    <p>
                      Cancellations made <strong>48 hours or more</strong> before the scheduled check-in time 
                      will receive a full refund of the advance payment.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-sm">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Partial Refund</h3>
                    <p>
                      Cancellations made <strong>within 48 hours</strong> of the scheduled check-in time may 
                      be subject to a cancellation fee. The refund amount will depend on the circumstances and 
                      will be determined on a case-by-case basis.
                    </p>
                  </div>

                  <div className="bg-card p-6 rounded-sm">
                    <h3 className="text-lg font-semibold text-foreground mb-2">No Refund</h3>
                    <p>
                      No-shows (guests who do not arrive on the scheduled check-in date without prior notice) 
                      will be charged the full amount of the reservation and will not be eligible for a refund.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl md:text-5xl text-foreground mb-4">Refund Process</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Refunds, if applicable, will be processed within 7-10 business days</li>
                  <li>Refunds will be issued to the original payment method used for booking</li>
                  <li>Bank transfer refunds may take additional time depending on your bank</li>
                  <li>You will receive a confirmation email once the refund has been processed</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl md:text-5xl text-foreground mb-4">Modification Policy</h2>
                <p className="mb-4">
                  Changes to your reservation (dates, number of guests, etc.) are subject to availability 
                  and may be accommodated upon request. Please contact us as soon as possible if you need 
                  to modify your booking.
                </p>
                <p>
                  Modification requests made within 48 hours of check-in may be subject to additional charges 
                  or may not be possible depending on availability.
                </p>
              </div>

              <div>
                <h2 className="text-3xl md:text-5xl text-foreground mb-4">Special Circumstances</h2>
                <p>
                  In case of emergencies, natural disasters, or other unforeseen circumstances beyond your 
                  control, we will work with you to find a suitable solution. Please contact us immediately 
                  to discuss your situation.
                </p>
              </div>

              <div>
                <h2 className="text-3xl md:text-5xl text-foreground mb-4">How to Cancel</h2>
                <p className="mb-4">
                  To cancel your reservation, please contact us through:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Phone: <a href="tel:+917099016525" className="text-primary hover:underline">+91 70990 16525</a></li>
                  <li>WhatsApp: <a href="https://api.whatsapp.com/send?phone=917099016525" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Click here to message us</a></li>
                  <li>Email: <a href="mailto:info@alorahomestay.com" className="text-primary hover:underline">info@alorahomestay.com</a></li>
                </ul>
                <p className="mt-4">
                  Please provide your booking reference number (if available) and the reason for cancellation 
                  to expedite the process.
                </p>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CancellationPolicy;


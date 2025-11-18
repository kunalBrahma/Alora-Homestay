import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";

const TermsConditions = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Terms & Conditions | Alora Homestay Guwahati"
        description="Terms and Conditions for booking at Alora Homestay Guwahati. Please read our booking terms, payment terms, and guest responsibilities before making a reservation."
        canonical="/terms-conditions"
        noindex={true}
      />
      <PageHeader
        title="Terms & Conditions"
        description="Please read our terms and conditions carefully before making a reservation."
        backgroundImage="/header2.webp"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h2 className="text-3xl md:text-5xl text-foreground mb-4">Booking Terms</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All bookings are subject to availability</li>
                  <li>We only accommodate families. Unmarried couples are not allowed</li>
                  <li>Check-in time: 2:00 PM | Check-out time: 11:00 AM</li>
                  <li>Early check-in or late check-out may be available upon request, subject to availability</li>
                  <li>Guests must provide valid identification upon check-in</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl md:text-5xl text-foreground mb-4">Payment Terms</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment can be made via cash, bank transfer, or digital payment methods</li>
                  <li>Advance payment may be required to confirm your reservation</li>
                  <li>All prices are in Indian Rupees (INR) unless otherwise stated</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl md:text-5xl text-foreground mb-4">Cancellation Policy</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cancellations made 48 hours before check-in will receive a full refund</li>
                  <li>Cancellations made within 48 hours may be subject to a cancellation fee</li>
                  <li>No-shows will be charged the full amount of the reservation</li>
                  <li>Refunds, if applicable, will be processed within 7-10 business days</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl md:text-5xl text-foreground mb-4">Guest Responsibilities</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Guests are responsible for maintaining the property in good condition</li>
                  <li>Any damage to property or amenities will be charged to the guest</li>
                  <li>Smoking is not allowed inside the premises</li>
                  <li>Guests must respect the peaceful environment and other guests</li>
                  <li>Use of common areas and kitchen facilities should be kept clean</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl md:text-5xl text-foreground mb-4">Limitation of Liability</h2>
                <p>
                  Alora Home Stay shall not be liable for any loss, damage, or injury to guests or their 
                  property during their stay, except where such loss or damage is caused by our negligence.
                </p>
              </div>

              <div>
                <h2 className="text-3xl md:text-5xl text-foreground mb-4">Contact Us</h2>
                <p>
                  For any questions regarding these terms and conditions, please contact us:
                </p>
                <p className="mt-2">
                  Email: <a href="mailto:info@alorahomestay.com" className="text-primary hover:underline">info@alorahomestay.com</a><br />
                  Phone: <a href="tel:+917099016525" className="text-primary hover:underline">+91 70990 16525</a>
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

export default TermsConditions;


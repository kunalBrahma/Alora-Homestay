import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Privacy Policy | Alora Homestay Guwahati"
        description="Privacy Policy for Alora Homestay Guwahati. Learn how we collect, use, and protect your personal information when you book with us."
        canonical="/privacy-policy"
        noindex={true}
      />
      <PageHeader
        title="Privacy Policy"
        description="Your privacy is important to us. Learn how we collect, use, and protect your personal information."
        backgroundImage="/header2.webp"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h2 className="text-3xl md:text-5xl text-foreground mb-4">Information We Collect</h2>
                <p className="mb-4">
                  When you make a reservation or contact us, we may collect the following information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information (phone number, email address)</li>
                  <li>Booking details and preferences</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Any special requests or requirements for your stay</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl md:text-5xl text-foreground mb-4">How We Use Your Information</h2>
                <p className="mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process and manage your reservations</li>
                  <li>Communicate with you about your booking</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Improve our services and guest experience</li>
                  <li>Send you important updates about your stay (if applicable)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl md:text-5xl text-foreground mb-4">Data Protection</h2>
                <p>
                  We take the security of your personal information seriously. We implement appropriate 
                  technical and organizational measures to protect your data against unauthorized access, 
                  alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-3xl md:text-5xl text-foreground mb-4">Third-Party Services</h2>
                <p>
                  We may use third-party services for payment processing and communication. These services 
                  have their own privacy policies, and we encourage you to review them.
                </p>
              </div>

              <div>
                <h2 className="text-3xl md:text-5xl text-foreground mb-4">Your Rights</h2>
                <p className="mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl md:text-5xl text-foreground mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="mt-2">
                  Email: <a href="mailto:info@alorahomestay.in" className="text-primary hover:underline">info@alorahomestay.in</a><br />
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

export default PrivacyPolicy;


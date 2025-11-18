import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

interface ContactFormProps {
  formId?: string;
  showTitle?: boolean;
  className?: string;
}

// Zod validation schema
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name should only contain letters and spaces"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/.test(val),
      "Please enter a valid phone number"
    ),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = ({ formId = "contact-form", showTitle = true, className = "" }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    // Format message for WhatsApp
    const whatsappMessage = `*New Booking Inquiry from Alora Homestay Website*

*Name:* ${data.name}
*Email:* ${data.email}
${data.phone ? `*Phone:* ${data.phone}` : ""}

*Message:*
${data.message}

---
_This inquiry was sent from the Alora Homestay website contact form._`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=917099016525&text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    
    // Show success message
    toast.success("Opening WhatsApp... Please send the message to complete your inquiry.");
    
    // Reset form
    reset();
  };

  return (
    <div className={className}>
      {showTitle && (
        <h3 className="text-2xl md:text-3xl text-foreground mb-6 text-center">
          Send Us a Message
        </h3>
      )}
      <form id={formId} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor={`${formId}-name`} className="block text-sm font-medium mb-2">
            Your Name *
          </label>
          <Input
            id={`${formId}-name`}
            {...register("name")}
            placeholder="Enter your name"
            disabled={isSubmitting}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && (
            <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor={`${formId}-email`} className="block text-sm font-medium mb-2">
            Email Address *
          </label>
          <Input
            id={`${formId}-email`}
            type="email"
            {...register("email")}
            placeholder="Enter your email"
            disabled={isSubmitting}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor={`${formId}-phone`} className="block text-sm font-medium mb-2">
            Phone Number
          </label>
          <Input
            id={`${formId}-phone`}
            type="tel"
            {...register("phone")}
            placeholder="Enter your phone number"
            disabled={isSubmitting}
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && (
            <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label htmlFor={`${formId}-message`} className="block text-sm font-medium mb-2">
            Your Message *
          </label>
          <Textarea
            id={`${formId}-message`}
            {...register("message")}
            placeholder="Enter your message..."
            rows={6}
            disabled={isSubmitting}
            className={errors.message ? "border-destructive" : ""}
          />
          {errors.message && (
            <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
          )}
        </div>
        <Button
          type="submit"
          size="lg"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Opening WhatsApp..." : "Send via WhatsApp"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;


import { FloatingWhatsApp } from "react-floating-whatsapp";

const FloatingWhatsAppButton = () => {
  return (
    <div className="hidden md:block">
        <FloatingWhatsApp
      phoneNumber="917099016525"
      accountName="Alora Home Stay"
      avatar="/whatsapp.png"
      statusMessage="Typically replies within an hour"
      chatMessage="Hello! 👋 How can we help you with your booking?"
      placeholder="Type a message..."
      allowClickAway={true}
      allowEsc={true}
      notification={true}
      notificationSound={true}
      notificationDelay={60000}
      buttonStyle={{
        backgroundColor: "#25D366",
      }}
      buttonClassName="rounded-full"
      chatboxClassName="rounded-lg"
      chatboxHeight={320}
    />
    </div>
    
  );
};

export default FloatingWhatsAppButton;


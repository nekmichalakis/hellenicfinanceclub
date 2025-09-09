import { Button } from "@/components/ui/button.tsx";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { toast } from "sonner";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current ?? "",
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          toast("Email sent successfully!");
          form.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          toast("Failed to send email. Please try again later.");
        },
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div
      className={
        "w-1/2 p-8 flex flex-col gap-16 right-0 mt-24 -mr-60 bg-white z-10"
      }
    >
      <h1 className={"text-xl font-normal sm:text-2xl"}>Application Form</h1>
      <form ref={form} className="space-y-8" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <Label htmlFor="firstName"> {"First Name"}</Label>
            <Input
              className={"placeholder:text-sm"}
              id="firstName"
              name="firstName"
              placeholder={"First Name"}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName"> {"Last Name"}</Label>
            <Input
              className={"placeholder:text-sm"}
              id="lastName"
              name="lastName"
              placeholder={"Last Name"}
              required
            />
          </div>

          <div className="space-y-2 col-span-2">
            <Label htmlFor="email"> {"Email"}</Label>
            <Input
              className={"placeholder:text-sm"}
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="space-y-2 col-span-2">
            <Label htmlFor="message"> {"Message"}</Label>
            <Textarea
              className={"placeholder:text-sm min-h-[200px]"}
              id="message"
              name="message"
              placeholder={"Your message..."}
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full p-6 rounded-none font-thin"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
              {"Sending..."}
            </div>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;

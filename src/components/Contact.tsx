import { Mail, MapPin, Send, Github, Linkedin, Phone, MessageSquare } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/fazeel03", username: "@fazeel03" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/fazeel-m-a30380258", username: "fazeel-m" },
];

export const Contact = () => {
  const sheetMonkeyUrl = useMemo(() => {
    const v = (import.meta.env.VITE_SHEETMONKEY_URL as string | undefined) ?? "";
    const fallback = "https://api.sheetmonkey.io/form/rGgJDYduPFsH9FMtuo8ESj";
    const url = typeof v === "string" ? v.trim() : "";
    return url || fallback;
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorText, setErrorText] = useState("");

  const openError = (text: string) => {
    setErrorText(text);
    setErrorOpen(true);
  };

  const isLikelyValidEmail = (value: string) => {
    const v = value.trim();
    // Practical (not perfect) email validation: prevents obvious invalid inputs.
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!sheetMonkeyUrl) {
      openError("Missing SheetMonkey URL. Please try again later.");
      return;
    }

    if (!isLikelyValidEmail(email)) {
      openError("Please enter a valid email address.");
      return;
    }

    try {
      setSubmitting(true);

      const body = new FormData();
      body.append("Name", name);
      body.append("Email", email);
      body.append("Subject", subject);
      body.append("Message", message);
      body.append("Created", "x-sheetmonkey-current-date-time");
      body.append("Submitted At", new Date().toISOString());
      body.append("Page", window.location.href);

      const res = await fetch(sheetMonkeyUrl, { method: "POST", body });
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);

      setSuccessOpen(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.error(err);
      openError("Could not send your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative border-t border-border py-24 px-6 overflow-hidden">
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="mx-auto max-w-6xl relative">
        <div className="flex items-center gap-2 mb-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Contact</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Let's <span className="text-gradient">connect</span>
        </h2>

        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-muted-foreground leading-relaxed">
              I'm always interested in hearing about new projects, opportunities, or just
              having a chat about technology. Drop me a message and I'll get back to you.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary">
                  <Mail className="h-4 w-4" />
                </div>
                fazzeeel@gmail.com
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary">
                  <Phone className="h-4 w-4" />
                </div>
                +91 73878 23184
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary">
                  <MapPin className="h-4 w-4" />
                </div>
                Pune, Maharashtra, India
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <p className="text-sm font-medium text-foreground">Find me on</p>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-border bg-card/50 p-3 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground hover:bg-card"
                >
                  <s.icon className="h-4 w-4 text-primary" />
                  <span className="font-medium text-foreground">{s.label}</span>
                  <span className="text-muted-foreground">{s.username}</span>
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="space-y-4 rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 transition-all hover:border-primary/20"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-secondary/30 border-border focus:border-primary"
              />
              <Input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-secondary/30 border-border focus:border-primary"
              />
            </div>
            <Input
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="bg-secondary/30 border-border focus:border-primary"
            />
            <Textarea
              placeholder="Your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="min-h-[120px] bg-secondary/30 border-border focus:border-primary"
            />
            <Button
              type="submit"
              disabled={submitting}
              className="w-full gap-2 bg-gradient-primary hover:opacity-90 transition-opacity glow-primary disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {submitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>

      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Message sent</DialogTitle>
            <DialogDescription>
              Thanks for reaching out — I’ve received your message and I’ll get back to you soon.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setSuccessOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={errorOpen} onOpenChange={setErrorOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Something went wrong</DialogTitle>
            <DialogDescription>{errorText}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setErrorOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};


import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Socials() {
  return (
    <div className="flex justify-center gap-2 my-10">
      <Button variant="outline" size="icon" className="rounded-full">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <Instagram className="h-5 w-5" />
          <span className="sr-only">Instagram</span>
        </a>
      </Button>
      <Button variant="outline" size="icon" className="rounded-full">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <Facebook className="h-5 w-5" />
          <span className="sr-only">Facebook</span>
        </a>
      </Button>
      <Button variant="outline" size="icon" className="rounded-full">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </Button>
      <Button variant="outline" size="icon" className="rounded-full">
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </a>
      </Button>
    </div>
  );
}

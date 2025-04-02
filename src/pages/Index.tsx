import Navbar from "@/components/navbar";
import Folder from "@/components/folder";
import Socials from "@/components/socials";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Index = () => {
  // File content definitions
  const aboutMeContent = (
    <div className="space-y-4">
      <p>
        Dynamic and eager IT enthusiast with a passion, seeking to leverage academic knowledge and practical experiences to
        contribute effectively as a valuable team member.
      </p>
      <div>
        <Button variant="outline" size="sm" className="gap-2">
          <ExternalLink size={16} />
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            View Resume
          </a>
        </Button>
      </div>
    </div>
  );

  const skillsContent = (
    <ul className="list-disc pl-5 space-y-1">
      <li>HTML, CSS & JS</li>
      <li>Git and GitHub</li>
      <li>Knowledge of PHP and MySQL</li>
      <li>Knowledge of Python</li>
      <li>Google Workspace and Apps Script</li>
      <li>Good use of AI</li>
    </ul>
  );

  const projectsContent = (
    <div className="space-y-4">
      <h3 className="font-medium text-lg">eLibrary</h3>
      <p className="text-sm text-muted-foreground">
        Solely made a comprehensive digital platform using programming languages - HTML & CSS as frontend, and PHP &
        MySQL as backend, housing diverse genres including horror, romance, crime & thriller, and real-life narratives,
        enhancing accessibility and enjoyment of literature for users.
      </p>
      <div className="flex gap-2 pt-2">
        <Button variant="outline" size="sm">
          <a href="https://elibrary-4547c.web.app/" target="_blank" rel="noreferrer">
            Project Link
          </a>
        </Button>
        <Button variant="outline" size="sm">
          <a href="https://github.com/passa11/elibrary" target="_blank" rel="noreferrer">
            GitHub Link
          </a>
        </Button>
      </div>
    </div>
  );

  const contactMeContent = <ContactForm />;

  const files = [
    { title: "About Me", content: aboutMeContent },
    { title: "Skills", content: skillsContent },
    { title: "Projects", content: projectsContent },
    { title: "Contact Me", content: contactMeContent },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="container max-w-4xl mx-auto px-4">
        <Navbar />
        <main className="py-12">
          <Folder files={files} />
        </main>
        <Socials />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

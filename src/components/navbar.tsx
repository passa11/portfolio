
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 bg-transparent border-b border-border flex justify-between items-center transition-colors duration-300">
      <div className="flex flex-col">
        <h1 className="font-bold text-xl md:text-2xl">John Doe</h1>
        <p className="text-sm text-muted-foreground">Front-end Developer</p>
      </div>
      <ThemeToggle />
    </nav>
  );
}

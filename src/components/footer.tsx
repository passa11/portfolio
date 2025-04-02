
export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 border-t border-border mt-12 text-center text-sm text-muted-foreground">
      <p>© {currentYear} John Doe. All rights reserved.</p>
    </footer>
  );
}

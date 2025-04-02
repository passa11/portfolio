
import { FileIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FileProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

export default function File({ title, content, isOpen, onClick }: FileProps) {
  return (
    <div>
      <Button 
        variant="ghost" 
        onClick={onClick}
        className={`w-full flex items-center justify-start gap-2 px-3 py-2 border border-border rounded-md bg-file dark:bg-file-dark hover:bg-file-dark/10 dark:hover:bg-file/10 transition-colors ${
          isOpen ? 'bg-accent dark:bg-accent' : ''
        }`}
      >
        <FileIcon className="h-4 w-4" />
        <span>{title}</span>
      </Button>
      
      {isOpen && (
        <Card className="mt-2 overflow-hidden animate-file-open" style={{"--file-height": "auto"} as React.CSSProperties}>
          <CardHeader className="p-4">
            <CardTitle className="text-lg">{title}</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            {content}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

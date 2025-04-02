
import { useState } from "react";
import { Folder as FolderIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import File from "./file";

interface FolderProps {
  files: {
    title: string;
    content: React.ReactNode;
  }[];
}

export default function Folder({ files }: FolderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openFileIndex, setOpenFileIndex] = useState<number | null>(null);

  const handleToggleFolder = () => {
    setIsOpen(!isOpen);
    setOpenFileIndex(null);
  };

  const handleFileClick = (index: number) => {
    setOpenFileIndex(openFileIndex === index ? null : index);
  };

  return (
    <div className="mt-10 relative">
      {isOpen && (
        <div className="mb-8 space-y-4 max-w-md mx-auto relative z-20">
          {files.map((file, index) => (
            <div key={index} className={`transition-all duration-500 delay-${index * 100}`}>
              <File 
                title={file.title} 
                content={file.content} 
                isOpen={openFileIndex === index}
                onClick={() => handleFileClick(index)}
              />
            </div>
          ))}
        </div>
      )}
      
      <div
        className={`relative z-10 w-64 h-48 mx-auto bg-folder dark:bg-folder-dark rounded-t-lg transition-all duration-300 transform origin-bottom ${
          isOpen ? "animate-folder-open" : ""
        }`}
      >
        <div className="absolute top-2 left-0 right-0 flex justify-center">
          <FolderIcon size={24} className="text-folder-dark dark:text-folder-hover" />
        </div>
      </div>
      
      {!isOpen && (
        <div className="flex justify-center mt-4">
          <Button 
            onClick={handleToggleFolder}
            variant="outline"
            className="z-20"
          >
            Open
          </Button>
        </div>
      )}

      {isOpen && (
        <div className="flex justify-center mt-4">
          <Button 
            onClick={handleToggleFolder}
            variant="outline"
            className="z-20"
          >
            Close
          </Button>
        </div>
      )}
    </div>
  );
}

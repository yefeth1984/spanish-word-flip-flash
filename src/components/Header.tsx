
import { GraduationCap, Languages, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <div className="w-full bg-white shadow-sm py-4 px-6 mb-8">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Languages className="h-6 w-6 text-red-600" />
          <h2 className="font-bold text-xl">SpanishFlip</h2>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-gray-600">
            <GraduationCap className="h-5 w-5 mr-1" />
            <span className="hidden sm:inline">Progress</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="text-gray-600">
            <Settings className="h-5 w-5 mr-1" />
            <span className="hidden sm:inline">Settings</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

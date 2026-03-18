import { BookOpenCheck } from "lucide-react";

export default function NavBar() {
    return (
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white">
              <BookOpenCheck size={30}/>
            </div>
            <h1 className="text-xl font-semibold tracking-tight">BuzzHelp</h1>
          </div>
          
          
        </div>
      </header>
    )
}
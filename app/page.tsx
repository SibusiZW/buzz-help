import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { BookOpenText, CodeSquare, Glasses } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen p-2 flex flex-col items-center">
      
      <div className="flex mb-4 text-gray-500">
        <BookOpenText />
        Enter your information here
      </div>

      <div className="flex flex-col w-full mb-4">
        <form>
          <Textarea placeholder="Enter your previous, test scores, weak subjects, Time left for exams here" className="mb-2"/>
          <Button className={'bg-green-500 w-full'} type="submit">
            <Glasses />
            Get Help
          </Button>
        </form>
      </div>

      <div className="flex mb-2 text-gray-500">
        <CodeSquare />
        Your Solution
      </div>

      <div className="w-full p-2">
        <div className="w-full h-[400px] p-6 bg-white border border-zinc-200 rounded-2xl shadow-sm overflow-y-auto relative"></div>
      </div>
    </div>
  );
}

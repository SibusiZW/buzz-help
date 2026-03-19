'use client';

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import generateResponse from "@/server/gemini";
import { BookOpenText, CodeSquare, Glasses, Loader2 } from "lucide-react";
import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';

export default function Home() {

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    setLoading(true);
    const res = await generateResponse(prompt);

    setLoading(false);

    if (res)  {
      setResponse(res);
    } else setResponse("Check API Key");
    
  }

  function renderContent() {
    if (loading) {
      return <Loader2 className="animate-spin" />

    } else {
      return (
        <>
          <Glasses />
          Get Help
        </>
      )
    }
  }

  return (
    <div className="min-h-screen p-2 flex flex-col items-center">
      
      <div className="flex mb-4 text-gray-500">
        <BookOpenText />
        Enter your information here
      </div>

      <div className="flex flex-col w-full mb-4">
        <form onSubmit={handleSubmit}>
          <Textarea value={prompt} placeholder="Enter your previous, test scores, weak subjects, Time left for exams here" className="mb-2" onChange={(e) => setPrompt(e.target.value)}/>
          <Button className={'bg-green-500 w-full'} type="submit">
            {renderContent()}
          </Button>
        </form>
      </div>

      <div className="flex mb-2 text-gray-500">
        <CodeSquare />
        Your Solution
      </div>

      <div className="w-full p-2">
        <div className="w-full h-[400px] p-6 bg-white border border-zinc-200 rounded-2xl shadow-sm overflow-y-auto relative">
          <span>
            <ReactMarkdown>{response}</ReactMarkdown>
          </span>
        </div>
      </div>
    </div>
  );
}

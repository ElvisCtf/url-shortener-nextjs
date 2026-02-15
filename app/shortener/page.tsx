"use client";

import { useState } from "react";
import URLForm from "./components/urlForm";
import ShortenResult from "./components/result";

export default function ShortenerPage() {
  const [shortenURL, setShortenURL] = useState<string>("");

  const handleFailure = () => {
    alert("Failed to shorten URL. Please try again.");
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">URL Shortener</h1>
          <p className="text-gray-500 mt-2">Create and manage short URLs quickly.</p>
        </header>

        <URLForm onSuccess={setShortenURL} onFailure={handleFailure} />

        <ShortenResult shortenURL={shortenURL} />
      </div>
    </main>
  );
}

"use client"

import { useState } from "react";

export default function ShortenerPage() {
  const [shortenURL, setShortenURL] = useState("");

  const handleSubmit = (formData: FormData) => {
    const url = formData.get("url") as string;
    setShortenURL(url);
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">URL Shortener</h1>
          <p className="text-gray-500 mt-2">Create and manage short URLs quickly.</p>
        </header>

        <form action={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="url" className="text-sm font-medium text-gray-700 ml-1">
              Destination URL
            </label>
            <input 
              id="url"
              name="url"
              type="url" 
              placeholder="https://example.com/very-long-link" 
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors shadow-md active:scale-[0.98]"
          >
            Shorten Link
          </button>
        </form>

        {shortenURL && (
          <section className="mt-8 pt-6 border-t border-gray-100 animate-in fade-in slide-in-from-top-2">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Short Link</p>
            <div className="mt-2 flex items-center gap-2 p-3 bg-blue-50 rounded-lg border border-blue-100">
              <output className="text-blue-700 font-medium truncate flex-1">{shortenURL}</output>
              <button 
                onClick={() => navigator.clipboard.writeText(shortenURL)}
                className="p-2 hover:bg-blue-100 rounded-md transition-colors text-blue-600 text-sm font-bold"
                title="Copy to clipboard"
              >
                Copy
              </button>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

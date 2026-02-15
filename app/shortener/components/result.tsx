interface ShortenResultProps {
  shortenURL: string;
}

export default function ShortenResult({ shortenURL }: ShortenResultProps) {
  return (
    <>
      {shortenURL && (
        <section className="mt-8 pt-6 border-t border-gray-100 animate-in fade-in slide-in-from-top-2">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Your Short Link
          </p>
          <div className="mt-2 flex items-center gap-2 p-3 bg-blue-50 rounded-lg border border-blue-100">
            <output className="text-blue-700 font-medium truncate flex-1">
              {shortenURL}
            </output>
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
    </>
  );
}

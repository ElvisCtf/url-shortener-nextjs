import { useState } from "react";
import { postShorten } from "../actions";

interface URLFormProps {
  onSuccess: (url: string) => void;
  onFailure: () => void;
}

export default function URLForm({ onSuccess, onFailure }: URLFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true);
    const url = formData.get("url") as string;
    const data = await postShorten(url);
    if (data) {
      onSuccess(data.shorten_url);
    } else {
      onFailure();
    }
    setIsLoading(false);
  };

  return (
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
          disabled={isLoading}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder:text-gray-400"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors shadow-md active:scale-[0.98]"
      >
        {isLoading ? "Shortening..." : "Shorten Link"}
      </button>
    </form>
  );
}

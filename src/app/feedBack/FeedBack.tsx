"use client";

import { X, Star } from "lucide-react";
import { useState } from "react";

export default function FeedbackModal() {
  const [rating, setRating] = useState(0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-5">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Share your Feedback
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              We'd love to hear about your experience.
            </p>
          </div>

        </div>

        {/* Body */}
        <div className="space-y-6 p-6">
          {/* Rating */}
          <div>
            <label className="mb-3 block text-sm font-medium text-gray-700">
              Overall Rating
            </label>

            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="transition hover:scale-110"
                >
                  <Star
                    size={30}
                    className={
                      star <= rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Subject
            </label>

            <input
              type="text"
              placeholder="Brief summary"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
            />
          </div>

          {/* Feedback */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Feedback
            </label>

            <textarea
              rows={5}
              placeholder="Tell us what you liked or what we can improve..."
              className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
            />
          </div>

          {/* Checkbox */}
          <label className="flex items-center gap-3 text-sm text-gray-600">
            <input type="checkbox" className="h-4 w-4 rounded" />
            I agree that my feedback may be used to improve the platform.
          </label>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t px-6 py-5">
         <a href="/"> <button
            
            className="rounded-xl border border-gray-300 px-5 py-2.5 font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Cancel
          </button></a>

          <button className="rounded-xl bg-blue-600 px-6 py-2.5 font-medium text-white transition hover:bg-blue-700">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
}
// ChapterPage.jsx

import React from "react";
import { useParams } from "react-router-dom";
import chapters from "../data/data";

const ChapterPage = () => {
  const { id } = useParams();
  const chapter = chapters.find((ch) => ch.id === id);

  if (!chapter) {
    return <p className="text-red-500">Chapter not found.</p>;
  }

  return (
    <div className="prose max-w-4xl">
      <h1 className="text-3xl font-bold mb-2 text-gray-800">{chapter.title}</h1>
      <p className="text-gray-700 mb-4">{chapter.description}</p>

      <h2 className="text-xl font-semibold mt-6">Use Cases</h2>
      <ul className="list-disc list-inside mb-6">
        {chapter.useCase.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6">Code Examples</h2>
      <div className="space-y-6">
        {chapter.code.map((block, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md">
            <p className="font-semibold text-sm text-gray-600 mb-2">Step {index + 1}: {block.step}</p>
            <pre className="bg-white p-3 rounded text-sm overflow-x-auto">
              <code>{block.snippet}</code>
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterPage;
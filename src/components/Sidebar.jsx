// Sidebar.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";
import chapters from "../data/data";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-gray-100 p-4 border-r overflow-y-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Chapters</h2>
      <ul className="space-y-2">
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <Link
              to={`/chapter/${chapter.id}`}
              className={`block p-2 rounded hover:bg-blue-100 transition duration-150 ${
                location.pathname === `/chapter/${chapter.id}`
                  ? "bg-blue-200 font-semibold"
                  : ""
              }`}
            >
              {chapter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

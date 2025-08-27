import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function TechnologyStack({ technologies }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center gap-2 justify-center">
        {technologies.slice(0, 3).map((tech, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent"
          >
            {tech}
          </span>
        ))}

        {technologies.length > 3 && (
          <div className="relative">
            <button
              className="text-xs px-2 py-1 rounded-full bg-muted/20 text-muted flex items-center"
              onMouseEnter={() => setShowAll(true)}
              onMouseLeave={() => setShowAll(false)}
              onFocus={() => setShowAll(true)}
              onBlur={() => setShowAll(false)}
              type="button"
            >
              +{technologies.length - 3}
              <FaChevronDown className="ml-1 text-xs" />
            </button>

            {showAll && (
              <div
                className="
      absolute top-full left-1/2 -translate-x-1/2 
      mt-2 p-3 bg-surface border border-accent shadow-accent 
      rounded-lg shadow-lg z-50 
      min-w-[160px] sm:min-w-[200px] md:min-w-[240px]
    "
                onMouseEnter={() => setShowAll(true)}
                onMouseLeave={() => setShowAll(false)}
              >
                <div className="flex flex-wrap gap-2 justify-start">
                  {technologies.slice(3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

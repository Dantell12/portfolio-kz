import { useState } from "react";

export default function LazyImage({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Fallback (skeleton) */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-lg" />
      )}

      {/* Imagen */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

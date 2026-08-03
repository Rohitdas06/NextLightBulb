"use client";

import { useState } from "react";

const colors = [
    "#FF0000", // Red
    "#00FF00", // Lime
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#FFA500", // Orange
    "#800080", // Purple
    "#FFC0CB", // Pink
    "#A52A2A", // Brown
    "#808080", // Gray
    "#FFFFFF", // White
    "#FFD700", // Gold
    "#7FFF00", // Chartreuse
    "#00FA9A", // Medium Spring Green
    "#40E0D0", // Turquoise
    "#1E90FF", // Dodger Blue
    "#8A2BE2", // Blue Violet
    "#FF1493", // Deep Pink
    "#DC143C", // Crimson
    "#FF6347", // Tomato
    "#FF4500", // Orange Red
    "#ADFF2F", // Green Yellow
    "#32CD32", // Lime Green
    "#20B2AA", // Light Sea Green
    "#00CED1", // Dark Turquoise
    "#4682B4", // Steel Blue
    "#4169E1", // Royal Blue
    "#6A5ACD", // Slate Blue
    "#9370DB", // Medium Purple
    "#EE82EE", // Violet
    "#DA70D6", // Orchid
    "#FF69B4", // Hot Pink
    "#FFB6C1", // Light Pink
    "#FA8072", // Salmon
    "#CD853F", // Peru
    "#D2691E", // Chocolate
    "#F4A460", // Sandy Brown
    "#BDB76B", // Dark Khaki
    "#9ACD32", // Yellow Green
    "#228B22", // Forest Green
    "#008080", // Teal
    "#5F9EA0", // Cadet Blue
    "#87CEEB", // Sky Blue
    "#6495ED", // Cornflower Blue
    "#4B0082", // Indigo
    "#C71585", // Medium Violet Red
    "#FF7F50", // Coral
    "#00BFFF", // Deep Sky Blue
    "#7CFC00", // Lawn Green
  ];

export default function Bulb() {
  const [isOn, setIsOn] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  const toggleBulb = () => {
    setIsOn((prev) => !prev);
  };

  const changeColor = () => {
    setColorIndex((prev) => (prev + 1) % colors.length);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-black to-slate-950">

      {/* Wire */}
      <div className="h-32 w-1 bg-gray-500"></div>

      {/* Bulb */}
      <div
        onClick={toggleBulb}
        onDoubleClick={changeColor}
        className="relative flex h-48 w-48 cursor-pointer items-center justify-center transition-all duration-500 hover:scale-105 active:scale-95"
      >
        {/* Glow */}
        {isOn && (
          <div
            className="absolute h-56 w-56 rounded-full blur-3xl transition-all duration-500"
            style={{
              backgroundColor: colors[colorIndex],
              opacity: 0.45,
            }}
          />
        )}

        {/* Bulb Glass */}
        <div
          className="relative z-10 h-40 w-40 rounded-full border-4 border-gray-400 transition-all duration-500"
          style={{
            backgroundColor: isOn ? colors[colorIndex] : "#2d2d2d",
            boxShadow: isOn
              ? `0 0 30px ${colors[colorIndex]},
                 0 0 70px ${colors[colorIndex]},
                 0 0 120px ${colors[colorIndex]},
                 0 0 180px ${colors[colorIndex]}`
              : "0 0 12px rgba(255,255,255,0.08)",
          }}
        >
          {/* Highlight */}
          <div className="absolute left-6 top-5 h-12 w-6 rounded-full bg-white/30 blur-sm"></div>
        </div>

        {/* Bulb Base */}
        <div className="absolute top-0 z-20 h-10 w-20 rounded-md bg-gray-500 shadow-lg"></div>
      </div>

      <p className="mt-10 text-center text-gray-300">
        💡 Click the bulb to Turn On/Off
        <br />
        🎨 Double-click the bulb to Change Color
      </p>
    </div>
  );
}
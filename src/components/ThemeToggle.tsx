import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
        <div className="w-5 h-5" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-10 h-10 rounded-full bg-muted hover:bg-secondary flex items-center justify-center transition-all duration-300 hover:shadow-soft"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <Sun 
        className={`w-5 h-5 text-primary transition-all duration-300 ${
          isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
        }`} 
      />
      <Moon 
        className={`absolute w-5 h-5 text-primary transition-all duration-300 ${
          isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
        }`} 
      />
    </button>
  );
};

export default ThemeToggle;

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { asset } from "../lib/asset";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      {theme === "light" ? (
        <img
          src={asset("/images/site/toggler-light.png")}
          onClick={() => setTheme("dark")}
          className="h-6 w-6 lg:block"
          alt="Switch to dark theme"
        />
      ) : (
        <img
          src={asset("/images/site/toggler-dark.png")}
          onClick={() => setTheme("light")}
          className="h-6 w-6 lg:block"
          alt="Switch to light theme"
        />
      )}
    </div>
  );
};

export default ThemeChanger;

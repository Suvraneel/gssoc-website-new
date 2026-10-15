import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { asset } from "../../lib/asset";

function Bighex() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div>
      {theme === "light" ? (
        <img
          className="w-full"
          src={asset("/images/site/bg/bighex-1.png")}
          alt="bg-hex-light"
        />
      ) : (
        <div>
          <img
            className="w-full"
            src={asset("/images/site/bg/bighex-2.png")}
            alt="bg-hex"
          />
        </div>
      )}
    </div>
  );
}

export default Bighex;

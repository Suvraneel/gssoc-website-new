import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { asset } from "../../lib/asset";

function Hex1() {
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
          src={asset("/images/site/bg/hex1-1.png")}
          alt="small-hex-light"
        />
      ) : (
        <div>
          <div>
            <img
              src={asset("/images/site/bg/hex1-2.png")}
              alt="small-hex-dark"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Hex1;

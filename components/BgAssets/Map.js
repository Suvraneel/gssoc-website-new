import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { asset } from "../../lib/asset";
function Map() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div>
      <div>
        {theme === "light" ? (
          <img
            src={asset("/images/site/bg/map-1.svg")}
            alt="map-light"
          />
        ) : (
          <div>
            <div>
              <img
                src={asset("/images/site/bg/map-2.svg")}
                alt="map-dark"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Map;

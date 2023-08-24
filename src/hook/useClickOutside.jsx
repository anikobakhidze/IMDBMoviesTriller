import { useEffect } from "react";

function useClickOutside(refs, callback) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      for (const ref of refs) {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
          break;
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
}

export default useClickOutside;

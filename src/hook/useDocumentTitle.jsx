import { useEffect } from "react";

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title || "Top Imdb Movies";
  }, []);
}

export default useDocumentTitle;

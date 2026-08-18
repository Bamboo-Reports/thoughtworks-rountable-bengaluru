import { useEffect } from "react";

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string;
}

/** Trimmed-down version of bamboo-reports-web's useSEO: this site has two
 *  pages and one brand, so it only swaps title and meta text per route. */
export const useSEO = (config: SEOConfig = {}) => {
  useEffect(() => {
    const previousTitle = document.title;
    if (config.title) {
      document.title = config.title;
    }

    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    if (config.description) {
      setMetaTag("description", config.description);
      setMetaTag("og:description", config.description, true);
    }
    if (config.keywords) {
      setMetaTag("keywords", config.keywords);
    }
    if (config.title) {
      setMetaTag("og:title", config.title, true);
    }

    return () => {
      document.title = previousTitle;
    };
  }, [config.title, config.description, config.keywords]);
};

export default useSEO;

import { useEffect } from 'react';

/**
 * Custom hook to dynamically update page document title, meta description, and keywords for SEO.
 * @param {Object} metadata
 * @param {string} metadata.title - The title of the page (appends " | PKNB Consult").
 * @param {string} metadata.description - The page description for search engine result snippets.
 * @param {string} metadata.keywords - Target SEO keywords separated by commas.
 */
export default function useSEO({ title, description, keywords }) {
  useEffect(() => {
    // 1. Update Document Title
    if (title) {
      document.title = `${title} | PKNB Consult`;
    } else {
      document.title = 'PKNB Consult | Industrial Intelligence & Sustainable Performance';
    }

    // 2. Update Meta Description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);

      // Also update OpenGraph and Twitter descriptions if they exist
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', description);
      
      const twitterDesc = document.querySelector('meta[property="twitter:description"]');
      if (twitterDesc) twitterDesc.setAttribute('content', description);
    }

    // 3. Update Meta Keywords
    if (keywords) {
      let metaKey = document.querySelector('meta[name="keywords"]');
      if (!metaKey) {
        metaKey = document.createElement('meta');
        metaKey.setAttribute('name', 'keywords');
        document.head.appendChild(metaKey);
      }
      metaKey.setAttribute('content', keywords);
    }

    // 4. Update OpenGraph / Twitter titles dynamically as well
    if (title) {
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', `${title} | PKNB Consult`);

      const twitterTitle = document.querySelector('meta[property="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute('content', `${title} | PKNB Consult`);
    }
  }, [title, description, keywords]);
}

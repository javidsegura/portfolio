import { useEffect, useRef } from 'react';
import { logEvent } from 'firebase/analytics';
import { analytics } from '@/firebase';

/**
 * Custom hook to track section views using Intersection Observer
 * Logs an event when a section comes into view
 */
export const useSectionView = (sectionName: string) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasLogged = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Log only once when section becomes visible (50% threshold)
          if (entry.isIntersecting && !hasLogged.current) {
            logEvent(analytics, 'section_view', {
              section_name: sectionName,
              timestamp: new Date().toISOString(),
            });
            hasLogged.current = true;
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
        rootMargin: '0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionName]);

  return sectionRef;
};

/**
 * Hook to track page load and initial page view
 */
export const usePageView = (pageName: string) => {
  useEffect(() => {
    logEvent(analytics, 'page_view', {
      page_name: pageName,
      page_location: window.location.href,
      page_path: window.location.pathname,
      timestamp: new Date().toISOString(),
    });

    // Track session duration
    const sessionStart = Date.now();

    return () => {
      const sessionDuration = Math.round((Date.now() - sessionStart) / 1000); // in seconds
      logEvent(analytics, 'session_duration', {
        page_name: pageName,
        duration_seconds: sessionDuration,
      });
    };
  }, [pageName]);
};


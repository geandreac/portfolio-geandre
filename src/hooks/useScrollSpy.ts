import { useState, useEffect } from 'react';

export function useScrollSpy(ids: string[]): string {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observers = new Map();
    const visibleSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        // Get the first visible section based on the order in 'ids'
        const firstVisible = ids.find((id) => visibleSections.has(id));
        if (firstVisible) {
          setActiveId(firstVisible);
        }
      },
      { rootMargin: '-20% 0% -70% 0%', threshold: 0 }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.set(id, element);
      }
    });

    return () => {
      observers.forEach((element) => observer.unobserve(element));
    };
  }, [ids]);

  return activeId;
}

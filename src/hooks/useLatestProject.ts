import { useMemo } from 'react';
import { completeApps, smallProjects, ProjectItem } from '../data/projects';

export const useLatestProject = (): ProjectItem | null => {
  return useMemo(() => {
    const allProjects = [...completeApps, ...smallProjects];
    
    if (allProjects.length === 0) return null;
    
    return allProjects.reduce((latest, current) => {
      if (!latest.addedAt) return current;
      if (!current.addedAt) return latest;
      
      const latestDate = new Date(latest.addedAt).getTime();
      const currentDate = new Date(current.addedAt).getTime();
      
      return currentDate > latestDate ? current : latest;
    }, allProjects[0]);
  }, []);
};

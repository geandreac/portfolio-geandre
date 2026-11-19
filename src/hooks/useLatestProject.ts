import { useMemo } from 'react';
import { projects, ProjectItem } from '../data/projects';

export const useLatestProject = (): ProjectItem | null =>
  useMemo(
    () => projects.reduce<ProjectItem | null>((latest, p) => (!latest || p.addedAt > latest.addedAt ? p : latest), null),
    []
  );

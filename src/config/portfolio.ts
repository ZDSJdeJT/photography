import { projects } from '@/config/home';

export const projectCategories = [
  '全部',
  ...new Set(projects.map((project) => project.category)),
];

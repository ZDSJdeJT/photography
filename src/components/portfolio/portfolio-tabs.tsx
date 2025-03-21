'use client';

import { useQueryState } from 'nuqs';
import { Fade } from 'react-awesome-reveal';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Project } from '@/components/home/project';
import { projects } from '@/config/home';

const projectCategories = [
  '全部',
  ...new Set(projects.map((project) => project.category)),
];

const defaultCategory = projectCategories[0];

const filteredProjects = new Map([[defaultCategory, projects]]);
projects.forEach((project) => {
  filteredProjects.set(project.category, [
    ...(filteredProjects.get(project.category) ?? []),
    project,
  ]);
});

const PortfolioTabs = () => {
  const [category, setCategory] = useQueryState('category', {
    defaultValue: defaultCategory,
    clearOnDefault: true,
    parse: (val) => (projectCategories.includes(val) ? val : null),
  });

  return (
    <Tabs defaultValue={category} className="mb-24 lg:mb-48">
      <TabsList className="mx-auto mb-12 grid h-full w-full dark:border-none md:grid-cols-4 md:border lg:max-w-[740px]">
        <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce>
          {projectCategories.map((category, index) => (
            <TabsTrigger
              key={index}
              value={category}
              onClick={() => {
                setCategory(category);
              }}
              className="w-[162px] md:w-auto"
            >
              {category}
            </TabsTrigger>
          ))}
        </Fade>
      </TabsList>
      {projectCategories.map((category, index) => (
        <TabsContent key={index} value={category}>
          <div className="grid grid-cols-1 gap-4 text-lg lg:mt-8 lg:grid-cols-3">
            <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce>
              {filteredProjects.get(category)!.map((project, idx) => (
                <Project key={idx} {...project} />
              ))}
            </Fade>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export { PortfolioTabs };

'use client';

import { useQueryState } from 'nuqs';
import { Fade } from 'react-awesome-reveal';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Project } from '@/components/home/project';
import { projects } from '@/config/home';
import { projectCategories } from '@/config/portfolio';

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
  });
  const currentCategory = projectCategories.includes(category)
    ? category
    : defaultCategory;

  return (
    <Tabs defaultValue={currentCategory} className="mb-24 lg:mb-48">
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
      <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce>
        {projectCategories.map((category, index) => (
          <TabsContent key={index} value={category}>
            <div className="grid grid-cols-1 gap-4 text-lg lg:mt-8 lg:grid-cols-3">
              {filteredProjects.get(category)!.map((project, idx) => (
                <Project key={idx} {...project} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Fade>
    </Tabs>
  );
};

export { PortfolioTabs };

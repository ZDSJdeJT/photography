'use client';

import { useState } from 'react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Project } from '@/components/pages/home/project';
import { projectCategories } from '@/config/portfolio';
import { projects } from '@/config/home';

const PortfolioTabs = () => {
  const [currentCategory, setCurrentCategory] = useState(projectCategories[0]);
  const filteredProject =
    currentCategory === projectCategories[0]
      ? projects
      : projects.filter((project) => project.category === currentCategory);

  return (
    <Tabs defaultValue={currentCategory} className="mb-24 lg:mb-48">
      <TabsList className="mx-auto mb-12 grid h-full w-full dark:border-none md:grid-cols-4 md:border lg:max-w-[740px]">
        {projectCategories.map((category, index) => (
          <TabsTrigger
            key={index}
            value={category}
            onClick={() => {
              setCurrentCategory(category);
            }}
            className="w-[162px] md:w-auto"
          >
            {category}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="grid grid-cols-1 gap-4 text-lg lg:mt-8 lg:grid-cols-3">
        {filteredProject.map((project, index) => (
          <TabsContent key={index} value={currentCategory}>
            <Project {...project} />
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};

export { PortfolioTabs };

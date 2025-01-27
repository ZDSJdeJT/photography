import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { Group, Link2Icon } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardHeader } from '@/components/ui/card';
import { LinkButton } from '@/components/home/link-button';

const Project = (props: {
  image: StaticImport;
  category: string;
  name: string;
  description: string;
  link: string;
  codepen: string;
}) => {
  return (
    <Card className="group relative overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative flex h-[290px] w-full items-center justify-center overflow-hidden dark:bg-secondary/40 lg:bg-[100%] lg:bg-no-repeat">
          <Image
            src={props.image}
            alt={props.name}
            fill
            priority
            className="absolute top-0 object-cover shadow-2xl transition-all hover:scale-110"
          />
          <div className="flex gap-x-4">
            <LinkButton link={props.link}>
              <Link2Icon />
            </LinkButton>
            <LinkButton link={props.codepen}>
              <Group />
            </LinkButton>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="absolute left-5 top-4 mb-2 text-sm font-medium">
          {props.category}
        </Badge>
        <h3 className="mb-1">{props.name}</h3>
        <p className="text-lg text-muted-foreground">{props.description}</p>
      </div>
    </Card>
  );
};

export { Project };

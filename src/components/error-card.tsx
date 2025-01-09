import { Meteors } from '@/components/aceternity-ui/meteors';
import { TextShimmerWave } from '@/components/motion-ui/text-shimmer-wave';

const ErrorCard = (props: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative mx-auto w-full max-w-xs p-12">
      <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl dark:bg-gradient-to-r dark:from-blue-500 dark:to-teal-500" />
      <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-300 bg-white px-4 py-8 shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:shadow-xl">
        <h1 className="relative z-50 mb-4 text-xl font-bold text-black dark:text-white">
          {props.title}
        </h1>
        <TextShimmerWave className="relative z-50 mb-4 text-base">
          {props.description}
        </TextShimmerWave>
        {props.children}
        <Meteors number={20} />
      </div>
    </div>
  );
};

export { ErrorCard };

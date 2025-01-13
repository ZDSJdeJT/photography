'use client';

const LinkButton = (props: { link: string; children: React.ReactNode }) => {
  return (
    <span
      className="flex h-[55px] w-[55px] scale-0 cursor-pointer items-center justify-center rounded-full bg-secondary opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-50"
      onClick={() => {
        window.open(props.link);
      }}
    >
      {props.children}
    </span>
  );
};

export { LinkButton };

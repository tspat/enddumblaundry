import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-5xl font-bold whitespace-pre-line text-tmbl-drk leading-hero">
      {props.title}
    </h1>
    <div className="mt-4 mb-16 text-2xl">{props.description}</div>

    {props.button}
  </header>
);

export { HeroOneButton };

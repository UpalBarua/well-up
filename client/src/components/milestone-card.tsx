import React from 'react';
import CountUp from 'react-countup';

type MilestoneCardProps = {
  Icon: React.ReactElement;
  number: number;
  text: string;
};

function MilestoneCard({ Icon, number, text }: MilestoneCardProps) {
  return (
    <div className="flex flex-col gap-y-4 items-center p-6 rounded-xl border bg-background">
      {Icon}
      <CountUp
        className="text-5xl font-medium tracking-tight"
        start={0}
        end={number}
        duration={6}
        suffix="+"
      />
      <span className="text-lg text-foreground/75">{text}</span>
    </div>
  );
}

export default MilestoneCard;

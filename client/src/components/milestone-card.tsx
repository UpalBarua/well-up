import React from 'react';
import CountUp from 'react-countup';

type MilestoneCardProps = {
  Icon: React.ReactElement;
  number: number;
  text: string;
};

function MilestoneCard({ Icon, number, text }: MilestoneCardProps) {
  return (
    <div className="flex flex-col gap-y-3 items-center p-6 rounded-xl border bg-background">
      <div className="bg-primary/15 p-4 rounded-full">{Icon}</div>
      <CountUp
        className="text-5xl font-bold tracking-tight"
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

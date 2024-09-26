import { cn } from "@/lib/utils";
import { BentoCell } from "./cell";

const BentoGrid: React.FC<
  Readonly<{
    className?: string;
  }>
> = ({ className }) => (
  <div
    className={cn(
      "grid auto-rows-auto grid-cols-12 gap-2 transition-all",
      className
    )}
  >
    <BentoCell
      className="bg-red-400"
      width="highlight"
      height="hero"
    />
    <BentoCell
      className="bg-blue-400"
      width="accent"
      height="accent"
    />
    <BentoCell
      className="bg-purple-400"
      width="anchor"
      height="side"
    />
    <BentoCell
      className="bg-yellow-400"
      width="side"
      height="highlight"
    />
    <BentoCell
      className="bg-emerald-400"
      width="hero"
      height="side"
    />
  </div>
);

export { BentoGrid };

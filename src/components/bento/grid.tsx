import { cn } from "@/lib/utils";
import { BentoCell } from "./cell";
import { Button } from "../ui/button";
import Link from "next/link";
import { LogoutButton } from "../logout-button";

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
    <Button
      asChild
      size="widget"
    >
      <BentoCell
        width="highlight"
        height="hero"
        asChild
      >
        <Link
          className="block"
          href="/login"
        >
          Login
        </Link>
      </BentoCell>
    </Button>
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
    <Button
      asChild
      size="widget"
      variant="secondary"
    >
      <BentoCell
        width="side"
        height="highlight"
        asChild
      >
        <Link href="/dashboard">Dashboard</Link>
      </BentoCell>
    </Button>
    <BentoCell
      width="hero"
      height="side"
      asChild
    >
      <LogoutButton
        variant="destructive"
        size="widget"
      >
        Logout
      </LogoutButton>
    </BentoCell>
  </div>
);

export { BentoGrid };

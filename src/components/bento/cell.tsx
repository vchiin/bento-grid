import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const variants = cva("rounded-md transition-all", {
  variants: {
    width: {
      hero: "lg:col-span-9 md:col-span-9 sm:col-span-full col-span-9",
      highlight: "lg:col-span-7 md:col-span-8 sm:col-span-9 col-span-full",
      accent: "lg:col-span-5 md:col-span-4 sm:col-span-2 col-span-5",
      side: "lg:col-span-3 md:col-span-3 sm:col-span-3 col-span-3",
      anchor: "lg:col-span-2 md:col-span-4 sm:col-span-1 col-span-4",
    },
    height: {
      hero: "lg:row-span-5 md:row-span-6 sm:row-span-2 row-span-2",
      highlight: "lg:row-span-4 md:row-span-2 sm:row-span-1 row-span-2",
      accent: "lg:row-span-3 md:row-span-4 sm:row-span-1",
      side: "lg:row-span-2 md:row-span-2 sm:row-span-1",
    },
  },
});

const BentoCell = forwardRef<
  HTMLDivElement,
  Readonly<
    {
      className?: string;
      children?: string | React.ReactElement;
      asChild?: boolean;
    } & VariantProps<typeof variants>
  >
>(({ className, width, height, asChild, ...properties }, reference) => {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      className={variants({ className, width, height })}
      ref={reference}
      {...properties}
    />
  );
});

BentoCell.displayName = "BentoCell";

export { BentoCell };

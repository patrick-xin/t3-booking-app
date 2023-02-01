import { cva, type VariantProps } from "class-variance-authority";
import classNames from "classnames";
import React from "react";

type FlexProps = {
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof flexClasses>;

const flexClasses = cva(["flex"], {
  variants: {
    direction: {
      row: "flex-row",
      col: "flex-col",
    },
    align: {
      center: "items-center",
      start: "items-start",
      end: "items-end",
    },
    justify: {
      center: "justify-center",
      start: "justify-start",
      end: "justify-end",
      between: "justify-between",
    },
    wrap: {
      wrap: "flex-wrap",
    },
    gap: {
      sm: "gap-1",
      base: "gap-3",
      large: "gap-6",
      xl: "gap-8",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    gap: "base",
    direction: "row",
  },
});

const Flex = ({
  children,
  direction,
  align,
  justify,
  wrap,
  className,
  gap,
}: FlexProps) => {
  return (
    <div
      className={classNames([
        flexClasses({ direction, align, justify, wrap, gap }),
        className,
      ])}
    >
      {children}
    </div>
  );
};

export default Flex;

import { cva, type VariantProps } from "class-variance-authority";
import classNames from "classnames";
import { forwardRef } from "react";
import { ImSpinner2 } from "react-icons/im";

import type { IconType } from "react-icons";

type ButtonProps = {
  isLoading?: boolean;
  leftIcon?: IconType;
  leftIconClassName?: string;
  fullWidth?: boolean;
} & React.ComponentPropsWithRef<"button"> &
  VariantProps<typeof buttonClasses>;

const buttonClasses = cva(
  [
    "font-semibold text-gray-200 cursor-pointer",
    "border border-transparent",
    "rounded",
    "transition-colors ease-linear",
    "inline-flex items-center justify-center",
    "shadow",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        primary: ["bg-primary-gradient", "hover:bg-blue-600"],
        secondary: [
          "bg-white",
          "text-gray-800",
          "border-gray-400",
          "hover:bg-gray-100",
        ],
        edit: ["bg-green-600 hover:bg-green-700"],
        delete: ["bg-red-600 hover:bg-red-700 disabled:bg-red-600/50"],
        ghost: [
          "bg-transparent border border-white/30 hover:bg-primary-gray disabled:bg-gray-800",
        ],
      },
      size: {
        small: ["text-sm", "py-1", "px-2", "gap-1.5", "w-16"],
        medium: ["text-base", "py-2", "px-4", "gap-2", "w-20"],
        full: ["w-full", "py-2 px-3"],
      },
      status: {
        loading:
          "relative text-transparent transition-none hover:text-transparent disabled:cursor-wait",
        disabled: "cursor-not-allowed",
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        size: "medium",
        className: "uppercase shadow-primary",
      },
      {
        variant: "delete",
        status: "disabled",
        className: "uppercase bg-red-500/50 hover:bg-red-500/50",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "small",
    },
  }
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      disabled: buttonDisabled,
      leftIcon: LeftIcon,
      leftIconClassName,
      isLoading,
      variant,
      size,
      status,
      fullWidth,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        className={classNames(
          [buttonClasses({ variant, size, status })],
          [isLoading && status],
          [fullWidth ? "w-full" : "w-auto"]
        )}
        ref={ref}
        type="button"
        disabled={disabled}
        {...rest}
      >
        {isLoading && (
          <div
            className={classNames(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            )}
          >
            <ImSpinner2 className="animate-spin fill-white" />
          </div>
        )}
        {LeftIcon && (
          <div
            className={classNames({
              "mr-2": size === "small",
              "mr-1.5": size === "medium",
            })}
          >
            <LeftIcon
              className={classNames(
                [
                  size === "medium" && "md:text-md text-md",
                  size === "small" && "text-xs md:text-sm",
                ],
                leftIconClassName
              )}
            />
          </div>
        )}
        {children}
      </button>
    );
  }
);

export default Button;

Button.displayName = "Button";

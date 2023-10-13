import React from "react";

const buttonStyles = {
  default: "bg-primary-500 text-white hover:bg-primary-600",
  secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
  danger: "bg-red-500 text-white hover:bg-red-600",
};

const sizeStyles = {
  small: "h-9 rounded-md px-3",
  medium: "h-10 px-4 py-2",
  large: "h-11 rounded-md px-8",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "medium",
  children,
  ...props
}) => {
  const classes = `
    ${buttonStyles[variant]}
    ${sizeStyles[size]}
    inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
  `;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;

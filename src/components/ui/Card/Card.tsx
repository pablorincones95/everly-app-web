import React from "react";
import type { HTMLAttributes } from "react";
import "./Card.css";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  variant?: "elevated" | "outlined" | "filled";
  size?: "sm" | "md" | "lg" | "full";
  hoverEffect?: boolean;
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode;
  className?: string;
}

interface CardSubtitleProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
  className?: string;
}

interface CardContentProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  variant,
  size,
  hoverEffect = true,
  ...props
}) => {
  const cardClasses = [
    "card",
    variant ? `card-${variant}` : "",
    size ? `card-${size}` : "",
    hoverEffect ? "" : "no-hover",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = "",
  ...props
}) => {
  const headerClasses = `card-header ${className}`;
  return (
    <div className={headerClasses} {...props}>
      {children}
    </div>
  );
};

export const CardBody: React.FC<CardBodyProps> = ({
  children,
  className = "",
  ...props
}) => {
  const bodyClasses = `card-body ${className}`;
  return (
    <div className={bodyClasses} {...props}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = "",
  ...props
}) => {
  const footerClasses = `card-footer ${className}`;
  return (
    <div className={footerClasses} {...props}>
      {children}
    </div>
  );
};

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className = "",
  ...props
}) => {
  const titleClasses = `card-title ${className}`;
  return (
    <h3 className={titleClasses} {...props}>
      {children}
    </h3>
  );
};

export const CardSubtitle: React.FC<CardSubtitleProps> = ({
  children,
  className = "",
  ...props
}) => {
  const subtitleClasses = `card-subtitle ${className}`;
  return (
    <p className={subtitleClasses} {...props}>
      {children}
    </p>
  );
};

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className = "",
  ...props
}) => {
  const contentClasses = `card-content ${className}`;
  return (
    <p className={contentClasses} {...props}>
      {children}
    </p>
  );
};

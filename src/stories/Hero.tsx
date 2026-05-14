// Hero.tsx
import React from 'react';

export type HeroVariant = 'default' | 'light' | 'dark' | 'success' | 'image' | 'centered' | 'minimal';

export interface HeroProps {
  /** Visual style variant of the hero section */
  variant?: HeroVariant;
  /** Main heading text */
  title?: string;
  /** Small text above the title */
  subtitle?: string;
  /** Description text below the title */
  description?: string;
  /** Primary action element (usually a button) */
  primaryAction?: React.ReactNode;
  /** Secondary action element (usually a button) */
  secondaryAction?: React.ReactNode;
  /** URL for background image (use with image variant) */
  backgroundImage?: string;
  /** Additional CSS classes */
  className?: string;
  /** Custom content to render below actions */
  children?: React.ReactNode;
  /** Additional props passed to the section element */
  [key: string]: any;
}

export const Hero: React.FC<HeroProps> = ({
  variant = 'default',
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  className = '',
  children,
  ...props
}) => {
  const baseClasses = 'hero';
  const variantClass = `hero--${variant}`;
  
  const heroClasses = [baseClasses, variantClass, className]
    .filter(Boolean)
    .join(' ');

  const heroStyle: React.CSSProperties = backgroundImage ? {
    backgroundImage: `url(${backgroundImage})`,
  } : {};

  return (
    <section className={heroClasses} style={heroStyle} {...props}>
      <div className="hero__container">
        <div className="hero__content">
          {subtitle && (
            <span className="hero__subtitle">{subtitle}</span>
          )}
          
          {title && (
            <h1 className="hero__title">{title}</h1>
          )}
          
          {description && (
            <p className="hero__description">{description}</p>
          )}
          
          {(primaryAction || secondaryAction) && (
            <div className="hero__actions">
              {primaryAction && (
                <div className="hero__primary-action">
                  {primaryAction}
                </div>
              )}
              {secondaryAction && (
                <div className="hero__secondary-action">
                  {secondaryAction}
                </div>
              )}
            </div>
          )}
          
          {children && (
            <div className="hero__custom-content">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
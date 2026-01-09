'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { forwardRef, ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'primary' | 'accent' | 'highlight' | 'outline' | 'transparent';
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'full' | 'none' | 'lg' | 'xl' | '2xl' | '3xl';
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  image?: string | null;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
  ariaLabel?: string;
  hoverSlide?: boolean;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      onClick,
      className = '',
      variant = 'default',
      size = 'md',
      rounded = 'xl',
      disabled = false,
      icon = null,
      iconPosition = 'right',
      loading = false,
      image = null,
      href,
      target,
      rel,
      type = 'button',
      'aria-label': ariaLabelProp,
      ariaLabel,
      hoverSlide = false,
    },
    ref
  ) => {
    const ariaLabelValue = ariaLabel || ariaLabelProp;
    
    const renderIcon = () => icon && <span className="flex-shrink-0">{icon}</span>;
    const variantClasses = {
      default: 'bg-foreground text-background',
      accent: 'bg-accent text-white ',
      outline: 'bg-transparent text-white border-2 border-white/10 hover:border-white/20',
      transparent: 'bg-transparent text-white hover:bg-white/10',
    };

    const sizeClasses = {
      sm: 'text-sm px-3 py-1.5',
      md: 'text-base px-4 py-2',
      lg: 'text-lg px-6 py-3',
    };

    const roundedClasses = {
      full: 'rounded-full',
      none: 'rounded-none',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
    };

    const baseClasses = `cursor-pointer transition-all font-medium flex items-center whitespace-nowrap hover:opacity-90 ${
      image ? 'justify-start' : 'justify-center'
    } gap-2 ${variantClasses[variant]} ${className} ${sizeClasses[size]} ${roundedClasses[rounded]} ${
      disabled ? 'opacity-50 cursor-not-allowed' : ''
    }`;

    const ButtonContent = () => {
      if (loading) {
        return <span className="animate-spin">Loading...</span>;
      }

      if (hoverSlide) {
        return (
          <span className="relative block overflow-hidden">
            <motion.span
              className="flex items-center gap-2"
              variants={{
                rest: { y: 0, opacity: 1, scale: 1 },
                hover: { y: '-100%', opacity: 0, scale: 0.9 }
              }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {image && (
                <Image
                  src={image}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain mr-2 rounded"
                />
              )}
              {iconPosition === 'left' && renderIcon()}
              {children}
              {iconPosition === 'right' && renderIcon()}
            </motion.span>
            <motion.span
              className="absolute inset-0 flex items-center gap-2"
              variants={{
                rest: { y: '100%', opacity: 0, scale: 0.9 },
                hover: { y: 0, opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {image && (
                <Image
                  src={image}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain mr-2 rounded"
                />
              )}
              {iconPosition === 'left' && renderIcon()}
              {children}
              {iconPosition === 'right' && renderIcon()}
            </motion.span>
          </span>
        );
      }

      return (
        <>
          {image && (
            <Image
              src={image}
              alt=""
              width={24}
              height={24}
              className="w-6 h-6 object-contain mr-2 rounded"
            />
          )}
          {icon && iconPosition === 'left' && icon}
          {children}
          {icon && iconPosition === 'right' && icon}
        </>
      );
    };

    if (href) {
      const LinkComponent = hoverSlide ? motion(Link) : Link;
      const linkProps = hoverSlide
        ? {
            initial: 'rest',
            whileHover: 'hover',
            animate: 'rest',
            ref: ref as React.Ref<HTMLAnchorElement>,
          }
        : {
            ref: ref as React.Ref<HTMLAnchorElement>,
          };

      const linkWrapper = hoverSlide ? (
        <LinkComponent
          href={href}
          target={target}
          rel={rel}
          className={baseClasses}
          aria-label={ariaLabelValue}
          {...linkProps}
        >
          <ButtonContent />
        </LinkComponent>
      ) : (
        <motion.div whileTap={{ scale: disabled ? 1 : 0.95 }} transition={{ duration: 0.1 }}>
          <LinkComponent
            href={href}
            target={target}
            rel={rel}
            className={baseClasses}
            aria-label={ariaLabelValue}
            {...linkProps}
          >
            <ButtonContent />
          </LinkComponent>
        </motion.div>
      );

      return linkWrapper;
    }

    const ButtonElement = hoverSlide ? motion.button : motion.button;
    const buttonProps = hoverSlide
      ? {
          initial: 'rest',
          whileHover: 'hover',
          animate: 'rest',
          ref: ref as React.Ref<HTMLButtonElement>,
        }
      : {
          ref: ref as React.Ref<HTMLButtonElement>,
          whileTap: { scale: disabled ? 1 : 0.95 },
          transition: { duration: 0.1 },
        };

    return (
      <ButtonElement
        className={baseClasses}
        onClick={onClick}
        disabled={disabled}
        type={type}
        aria-label={ariaLabelValue}
        {...buttonProps}
      >
        <ButtonContent />
      </ButtonElement>
    );
  }
);

Button.displayName = 'Button';

export default Button;

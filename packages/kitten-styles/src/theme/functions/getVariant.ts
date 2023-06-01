import { KittenColor, KittenGradient, KittenVariant } from '../types';
import { getColor, isThemeColor } from './getColor';

export type GetVariantInput = {
  variant?: KittenVariant;
  color?: KittenColor;
  gradient?: KittenGradient;
  variants?: KittenVariant[];
};

export type GetVariantOutput = {
  from?: string;
  to?: string;
  deg?: string;
  color?: string;
  background?: string;
  border?: string;
  hover?: {
    background?: string;
  };
  dark?: {
    color?: string;
    background?: string;
    border?: string;
    hover?: {
      background?: string;
    };
  };
};

/**
 * Get color information based on variant type
 */
export function getVariant(props: GetVariantInput): GetVariantOutput {
  const { variant, color, gradient = { from: 'indigo', to: 'cyan' } } = props;

  if (variant === 'gradient') {
    return {
      from: isThemeColor(gradient?.from)
        ? `from-${getColor({ color: gradient?.from })}`
        : `from-[${gradient?.from}]`,
      to: isThemeColor(gradient?.to)
        ? `to-${getColor({ color: gradient?.to })}`
        : `to-[${gradient?.to}]`,
      deg: gradient?.deg || 'r',
      color: getColor({ color: 'white' }),
    };
  }

  if (variant === 'light') {
    return {
      color: getColor({ color, shade: color === 'dark' ? 900 : 600 }),
      background: getColor({ color, shade: 50 }),
      border: 'transparent',
      hover: {
        background: getColor({ color, shade: 100, alpha: 0.65 }),
      },
      dark: {
        color: getColor({ color, shade: color === 'dark' ? 50 : 200 }),
        background: getColor({ color, shade: 800, alpha: 0.2 }),
        border: 'transparent',
        hover: {
          background: getColor({ color, shade: 700, alpha: 0.25 }),
        },
      },
    };
  }

  if (variant === 'subtle') {
    return {
      color: getColor({ color, shade: color === 'dark' ? 900 : 600 }),
      background: 'transparent',
      border: 'transparent',
      hover: {
        background: getColor({ color, shade: 50 }),
      },
      dark: {
        color: getColor({ color, shade: color === 'dark' ? 50 : 200 }),
        background: 'transparent',
        border: 'transparent',
        hover: {
          background: getColor({ color, shade: 800, alpha: 0.2 }),
        },
      },
    };
  }

  if (variant === 'outline') {
    return {
      color: getColor({ color, shade: 600 }),
      background: 'transparent',
      border: getColor({ color, shade: 600 }),
      hover: {
        background: getColor({ color, shade: 50, alpha: 0.35 }),
      },
      dark: {
        color: getColor({ color, shade: 500 }),
        background: 'transparent',
        border: getColor({ color, shade: 500 }),
        hover: {
          background: getColor({ color, shade: 500, alpha: 0.05 }),
        },
      },
    };
  }

  if (variant === 'default') {
    return {
      color: 'black',
      background: 'white',
      border: getColor({ color: 'gray', shade: 400 }),
      hover: {
        background: getColor({ color: 'gray', shade: 50 }),
      },
      dark: {
        color: 'white',
        background: getColor({ color: 'dark', shade: 600 }),
        border: getColor({ color: 'dark', shade: 400 }),
        hover: {
          background: getColor({ color: 'dark', shade: 500 }),
        },
      },
    };
  }

  if (variant === 'white') {
    return {
      color: getColor({ color, shade: 600 }),
      background: 'white',
      border: 'transparent',
      hover: {
        background: 'white',
      },
      dark: {
        color: getColor({ color, shade: 800 }),
        background: 'white',
        border: 'transparent',
        hover: {
          background: 'white',
        },
      },
    };
  }

  if (variant === 'filled') {
    return {
      color: 'white',
      background: getColor({ color, shade: 600 }),
      border: 'transparent',
      hover: {
        background: getColor({ color, shade: 700 }),
      },
      dark: {
        color: 'white',
        background: getColor({ color, shade: 800 }),
        border: 'transparent',
        hover: {
          background: getColor({ color, shade: 900 }),
        },
      },
    };
  }

  return {
    color: getColor({ color, shade: color === 'dark' ? 900 : 600 }),
    background: 'transparent',
    border: 'transparent',
    hover: {
      background: 'transparent',
    },
    dark: {
      color: getColor({ color, shade: color === 'dark' ? 50 : 200 }),
      background: 'transparent',
      border: 'transparent',
      hover: {
        background: 'transparent',
      },
    },
  };
}

export function getVariantClasses(
  props: GetVariantInput & { withHover?: boolean },
) {
  const { variant, variants = [], withHover = true } = props;

  if (!variants.includes(variant!)) {
    return ``;
  }

  const { from, to, deg, color, background, border, hover, dark } =
    getVariant(props);

  if (variant === 'gradient') {
    return `
      border-0 
      bg-gradient-to-${deg} ${from} ${to} 
      dark:(${from} ${to})
      text-${color} 
      ${withHover ? 'hover:bg-[size:200%]' : ''}
    `;
  }

  return `
    border border-solid 
    border-${border}
    text-${color} 
    bg-${background} 
    ${withHover ? `hover:bg-${hover?.background}` : ''}
    dark:(
      border-${dark?.border}
      text-${dark?.color}
      bg-${dark?.background} 
      ${withHover ? `hover:bg-${dark?.hover?.background}` : ''}
    )
  `;
}

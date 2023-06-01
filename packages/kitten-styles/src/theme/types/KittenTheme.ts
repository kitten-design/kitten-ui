import { colors } from '../preset/colors';

export type KittenColor = keyof typeof colors | (string & {});

export type KittenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | (string & {});

export type KittenRadius =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'none'
  | '1/2'
  | 'full'
  | (string & {});

export type KittenVariant<
  T =
    | 'filled'
    | 'outline'
    | 'light'
    | 'white'
    | 'default'
    | 'subtle'
    | 'gradient',
> = T | (string & {});

export interface KittenGradient {
  from: string;
  to: string;
  deg?: 't' | 'tr' | 'r' | 'br' | 'b' | 'bl' | 'l' | 'tl';
}

export type KittenShade =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export type KittenOpacity =
  | 0
  | 0.05
  | 0.1
  | 0.2
  | 0.25
  | 0.3
  | 0.35
  | 0.4
  | 0.5
  | 0.6
  | 0.65
  | 0.7
  | 0.75
  | 0.8
  | 0.9
  | 0.95
  | 1;

export type KittenFit =
  | 'contain'
  | 'cover'
  | 'fill'
  | 'none'
  | 'scale-down'
  | (string & {});

export type KittenWeight =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black'
  | (string & {});

export type KittenTextTransform =
  | 'uppercase'
  | 'lowercase'
  | 'capitalize'
  | 'normal-case'
  | (string & {});

export type KittenAlign =
  | 'left'
  | 'center'
  | 'right'
  | 'justify'
  | 'star'
  | 'end'
  | (string & {});

export type KittenTextDecoration =
  | 'underline'
  | 'overline'
  | 'no-underline'
  | 'line-through'
  | (string & {});

export type KittenPosition =
  | 'top-start'
  | 'top-center'
  | 'top-end'
  | 'middle-start'
  | 'middle-center'
  | 'middle-end'
  | 'bottom-start'
  | 'bottom-center'
  | 'bottom-end';

export type KittenSide = 'top' | 'right' | 'bottom' | 'left';

export type KittenPlacement = KittenSide | `${KittenSide}-${'end' | 'start'}`;

export type KittenArrowPosition = 'center' | 'side';

export type KittenToastPosition =
  | 'top-left'
  | 'top-right'
  | 'top-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center';

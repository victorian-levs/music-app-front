import type { ComponentProps, ElementType } from 'react';

type TypographyStyle =
  | 'heading_1'
  | 'heading_2'
  | 'heading_3'
  | 'heading_4'
  | 'label_M'
  | 'label_S'
  | 'link'
  | 'text_L'
  | 'text_M'
  | 'text_S';

interface TypographyOwnProps<E extends ElementType> {
  variant?: TypographyStyle;
  as?: E;
}

export type TypographyProps<E extends ElementType> = TypographyOwnProps<E>
  & Omit<ComponentProps<E>, keyof TypographyOwnProps<E>>;

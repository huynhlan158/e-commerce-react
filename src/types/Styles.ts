import { CSSProperties } from 'react';

export interface StyleProps {
  /**
   * Additional styles applied to the element.
   */
  style?: CSSProperties;
  /**
   * An additional class name applied to the element.
   */
  className?: string;
}

/**
 * The type of font size used in the app.
 */
export type FontSize = 'sm' | 'md' | 'lg';

/**
 * The status of an action.
 */
export enum Status {
  SUCCESS = 'success',
  ERROR = 'error',
}

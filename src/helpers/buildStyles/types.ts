// libs
import { Properties } from 'csstype';
// types
import {
  ClassNameMap,
  CreateCSSProperties,
  PropsFunc,
} from '@material-ui/styles';

/**
 * Generate CSSBag Properties
 */
type CssValue =
  | (string & {})
  | (number & {})
  | Array<string | number | Array<string | number> | '!important'>
  | null
  | false;
type NormalCssProperties = Properties<string | number>;
type NormalCssValues<K> = K extends keyof NormalCssProperties
  ? NormalCssProperties[K]
  : CssValue;
type CSSBag =
  | {
      [K in keyof NormalCssProperties]: NormalCssValues<K>;
    }
  | {
      [K: string]: CssValue | CSSBag;
    };

/**
 * This is basically the API of CSS. It defines a Map<string, CSS>,
 * where
 * - the `keys` are the class (names) that will be created
 * - the `values` are objects that represent CSS rules (`React.CSSProperties`).
 *
 * if only `CSSProperties` are matched `Props` are inferred to `any`
 */
export type StyleRules<
  Props extends object = {},
  ClassKey extends string = string,
> = Record<
  ClassKey,
  // CSS property bag
  | CSSBag
  // CSS property bag where values are based on props
  | CreateCSSProperties<Props>
  // CSS property bag based on props
  | PropsFunc<Props, CreateCSSProperties<Props>>
>;

/**
 * Output of buildStyles
 */
export type StyleHook<
  Props extends object = {},
  ClassKey extends string = string,
> = keyof Props extends never
  ? (props?: any) => ClassNameMap<ClassKey>
  : (props: Props) => ClassNameMap<ClassKey>;

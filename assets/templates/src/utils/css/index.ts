import {
  createStyles,
  makeStyles,
  Theme as DefaultTheme,
} from "@material-ui/core";
import {
  ClassNameMap,
  StyleRules,
  WithStylesOptions,
} from "@material-ui/core/styles/withStyles";

/**
 * buildStyles
 * @param name className preffix
 * @param styles
 * @param options
 * @returns ReactHook for getting ClassNameMap
 */
export function buildStyles<
  Theme = DefaultTheme,
  Props extends object = {},
  ClassKey extends string = string
>(
  name: string,
  styles: (theme: Theme) => StyleRules<ClassKey, Props>,
  options?: Omit<WithStylesOptions<Theme>, "withTheme" | "name">
): keyof Props extends never
  ? (props?: any) => ClassNameMap<ClassKey>
  : (props: Props) => ClassNameMap<ClassKey> {
  return makeStyles((theme: Theme) => createStyles(styles(theme)), {
    name,
    ...options,
  });
}

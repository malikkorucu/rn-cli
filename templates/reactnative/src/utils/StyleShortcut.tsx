const shortcutStyles = {
  mx: 'marginHorizontal',
  my: 'marginVertical',
  mt: 'marginTop',
  mb: 'marginBottom',
  px: 'paddingHorizontal',
  py: 'paddingVertical',
  pl: 'paddingLeft',
  pt: 'paddingTop',
  bg: 'backgroundColor',
  fs: 'fontSize',
  bw: 'borderWidth',
  align: 'alignItems',
  justify: 'justifyContent',
  direction: 'flexDirection'
} as any;

export const getStyleShortcuts = (props: any) => {
  const _props = Object.keys(props).filter(prop => Object.keys(shortcutStyles).includes(prop)) // prettier-ignore
  const styles = {} as any;

  _props.forEach((prop: any) => {
    if (shortcutStyles[prop]) {
      styles[shortcutStyles[prop]] = props[prop];
    }
  });

  return styles;
};

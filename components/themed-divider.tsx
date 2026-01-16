import { StyleSheet, View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedDividerProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  orientation?: 'horizontal' | 'vertical';
};

export function ThemedDivider({
  style,
  lightColor,
  darkColor,
  orientation = 'horizontal',
  ...rest
}: ThemedDividerProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'tabIconDefault'
  );

  return (
    <View
      style={[
        orientation === 'horizontal' ? styles.horizontal : styles.vertical,
        { backgroundColor },
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  horizontal: {
    height: 1,
    width: '100%',
  },
  vertical: {
    width: 1,
    height: '100%',
  },
});

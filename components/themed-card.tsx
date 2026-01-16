import { StyleSheet, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';
import { ThemedView } from './themed-view';

export type ThemedCardProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  variant?: 'elevated' | 'outlined' | 'flat';
};

export function ThemedCard({
  style,
  lightColor,
  darkColor,
  variant = 'flat',
  ...rest
}: ThemedCardProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
  const borderColor = useThemeColor({}, 'icon');

  return (
    <ThemedView
      style={[
        styles.card,
        variant === 'elevated' && styles.elevated,
        variant === 'outlined' && { borderColor },
        {
          backgroundColor,
        },
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
  },
  elevated: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  outlined: {
    borderWidth: 1,
  },
});

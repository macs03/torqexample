import { ActivityIndicator, StyleSheet, View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';
import { ThemedView } from './themed-view';

export type LoadingSpinnerProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  size?: 'small' | 'large';
  fullScreen?: boolean;
};

export function LoadingSpinner({
  style,
  lightColor,
  darkColor,
  size = 'large',
  fullScreen = false,
  ...rest
}: LoadingSpinnerProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'tint');

  const container = fullScreen ? (
    <ThemedView style={[styles.fullScreen, style]} {...rest}>
      <ActivityIndicator size={size} color={color} />
    </ThemedView>
  ) : (
    <View style={[styles.container, style]} {...rest}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );

  return container;
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

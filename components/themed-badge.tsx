import { StyleSheet, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

export type ThemedBadgeProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  lightTextColor?: string;
  darkTextColor?: string;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium';
  children: React.ReactNode;
};

export function ThemedBadge({
  style,
  lightColor,
  darkColor,
  lightTextColor,
  darkTextColor,
  variant = 'default',
  size = 'medium',
  children,
  ...rest
}: ThemedBadgeProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    variant === 'primary' ? 'tint' : 'icon'
  );
  const textColor = useThemeColor(
    { light: lightTextColor, dark: darkTextColor },
    variant === 'primary' ? 'background' : 'background'
  );

  return (
    <ThemedView
      style={[
        styles.badge,
        styles[size],
        {
          backgroundColor,
        },
        style,
      ]}
      {...rest}>
      <ThemedText
        style={[
          styles.text,
          styles[`text${size.charAt(0).toUpperCase() + size.slice(1)}`],
          { color: textColor },
        ]}>
        {children}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
  },
  small: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  medium: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  text: {
    fontWeight: '600',
  },
  textSmall: {
    fontSize: 11,
  },
  textMedium: {
    fontSize: 12,
  },
});

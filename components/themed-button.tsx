import { ActivityIndicator, Pressable, StyleSheet, type PressableProps } from 'react-native';
import * as Haptics from 'expo-haptics';

import { useThemeColor } from '@/hooks/use-theme-color';
import { ThemedText } from './themed-text';

export type ThemedButtonProps = PressableProps & {
  lightColor?: string;
  darkColor?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  title: string;
};

export function ThemedButton({
  style,
  lightColor,
  darkColor,
  variant = 'primary',
  size = 'medium',
  loading = false,
  title,
  disabled,
  onPress,
  ...rest
}: ThemedButtonProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    variant === 'primary' ? 'tint' : 'background'
  );
  const textColor = useThemeColor({}, variant === 'primary' ? 'background' : 'tint');
  const borderColor = useThemeColor({}, 'tint');

  const handlePress = (event: any) => {
    if (process.env.EXPO_OS === 'ios' && !disabled && !loading) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    onPress?.(event);
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        styles[variant],
        styles[size],
        {
          backgroundColor: variant === 'outline' || variant === 'text' ? 'transparent' : backgroundColor,
          borderColor: variant === 'outline' ? borderColor : 'transparent',
          opacity: pressed || disabled || loading ? 0.6 : 1,
        },
        style,
      ]}
      disabled={disabled || loading}
      onPress={handlePress}
      {...rest}>
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? textColor : borderColor} />
      ) : (
        <ThemedText
          style={[
            styles.textStyle,
            styles[`text${size.charAt(0).toUpperCase() + size.slice(1)}`],
            { color: variant === 'outline' || variant === 'text' ? borderColor : textColor },
          ]}>
          {title}
        </ThemedText>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  primary: {},
  secondary: {
    backgroundColor: 'transparent',
  },
  outline: {
    borderWidth: 1.5,
  },
  text: {
    borderWidth: 0,
  },
  small: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    minHeight: 32,
  },
  medium: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 44,
  },
  large: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    minHeight: 52,
  },
  textStyle: {
    fontWeight: '600',
  },
  textSmall: {
    fontSize: 14,
  },
  textMedium: {
    fontSize: 16,
  },
  textLarge: {
    fontSize: 18,
  },
});

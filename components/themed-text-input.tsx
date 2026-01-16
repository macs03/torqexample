import { StyleSheet, TextInput, type TextInputProps } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedTextInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
  lightBorderColor?: string;
  darkBorderColor?: string;
  variant?: 'default' | 'outline';
};

export function ThemedTextInput({
  style,
  lightColor,
  darkColor,
  lightBorderColor,
  darkBorderColor,
  variant = 'default',
  placeholderTextColor,
  ...rest
}: ThemedTextInputProps) {
  const textColor = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const backgroundColor = useThemeColor({}, 'background');
  const borderColor = useThemeColor(
    { light: lightBorderColor, dark: darkBorderColor },
    'icon'
  );
  const defaultPlaceholderColor = useThemeColor({}, 'tabIconDefault');

  return (
    <TextInput
      style={[
        styles.input,
        variant === 'outline' && styles.outline,
        {
          color: textColor,
          backgroundColor: variant === 'outline' ? 'transparent' : backgroundColor,
          borderColor: variant === 'outline' ? borderColor : 'transparent',
        },
        style,
      ]}
      placeholderTextColor={placeholderTextColor || defaultPlaceholderColor}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    minHeight: 44,
  },
  outline: {
    borderWidth: 1.5,
  },
});

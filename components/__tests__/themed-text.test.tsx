import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemedText } from '../themed-text';

describe('ThemedText', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<ThemedText>Hello World</ThemedText>);
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('renders with title type', () => {
    const { getByText } = render(<ThemedText type="title">Title</ThemedText>);
    const titleElement = getByText('Title');
    expect(titleElement).toBeTruthy();
  });

  it('renders with subtitle type', () => {
    const { getByText } = render(<ThemedText type="subtitle">Subtitle</ThemedText>);
    const subtitleElement = getByText('Subtitle');
    expect(subtitleElement).toBeTruthy();
  });

  it('applies custom styles', () => {
    const customStyle = { fontSize: 20 };
    const { getByText } = render(
      <ThemedText style={customStyle}>Custom Text</ThemedText>
    );
    const textElement = getByText('Custom Text');
    expect(textElement).toBeTruthy();
  });
});

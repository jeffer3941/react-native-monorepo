import { View, Text } from 'react-native';
import type { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
}

export const Card = ({ title, children }: CardProps) => (
  <View>
    <Text>{title}</Text>
    {children}
  </View>
);

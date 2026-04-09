import { Pressable, Text } from 'react-native';

interface ButtonProps {
  children: string;
  onPress?: () => void;
}

export const Button = ({ children, onPress }: ButtonProps) => (
  <Pressable onPress={onPress}>
    <Text>{children}</Text>
  </Pressable>
);

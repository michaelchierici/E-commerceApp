import React from 'react';
import {IconButton} from 'react-native-paper';

interface IconProps {
  type: string;
  size: number;
  color: string;
}

export function RenderIcon({type, size, color}: IconProps) {
  switch (type) {
    case 'Heart': {
      return <IconButton icon="heart-outline" size={size} color={color} />;
    }
    case 'Cart': {
      return <IconButton icon="cart" size={size} />;
    }

    case 'Arrow': {
      return <IconButton icon="arrow-right" size={size} color={color} />;
    }

    default: {
      return <IconButton icon="cart" size={size} />;
    }
  }
}

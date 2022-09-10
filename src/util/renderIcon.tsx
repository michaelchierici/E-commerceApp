import React from 'react';

import {IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IconProps {
  type: string;
  size: number;
  color: string;
  onPress?: () => void;
}

export function RenderIcon({type, size, color, onPress}: IconProps) {
  switch (type) {
    case 'heart': {
      return (
        <Icon
          name="heart-plus-outline"
          color={color}
          size={size}
          onPress={onPress}
        />
      );
    }

    case 'heart-minus': {
      return (
        <Icon
          onPress={onPress}
          name="heart-remove-outline"
          color={color}
          size={size}
        />
      );
    }

    case 'cart-right': {
      return (
        <Icon
          onPress={onPress}
          color={color}
          name="cart-arrow-right"
          size={size}
        />
      );
    }

    case 'cart': {
      return (
        <Icon onPress={onPress} color={color} name="cart-plus" size={size} />
      );
    }

    case 'arrow': {
      return <IconButton icon="arrow-right" size={size} color={color} />;
    }

    default: {
      return <IconButton icon="cart" size={size} color={color} />;
    }
  }
}

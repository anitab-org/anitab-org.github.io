import React, { useState } from 'react';
import { View } from 'react-native';

export const withCard = (Component) => {
  return (props) => {
    const [isOver, setIsOver] = useState(false);

    const container = {
      padding: props.padding || 16,
      margin: 16,
      borderRadius: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      alignItems: 'center',
      transform: [{ scale: isOver ? 1.1 : 1 }],
      backgroundColor: props.backgroundColor || 'white',
    };
    return (
      <View
        style={container}
        onMouseEnter={() => setIsOver(true)}
        onMouseLeave={() => setIsOver(false)}
      >
        <Component {...props} isOver={isOver} />
      </View>
    );
  };
};

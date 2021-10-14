import React from 'react';
import { View } from 'react-native';
import ScaledImage from './../../../ScaledImage';

function SponsorsContent(sectionContent, index) {
  const [isOver, setIsOver] = React.useState(false);

  const container = {
    padding: 16,
    margin: 16,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    alignItems: 'center',
    transform: [{ scale: isOver ? 1.1 : 1 }],
  };
  return (
    <View
      style={container}
      key={sectionContent.source + index}
      onMouseEnter={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
    >
      <ScaledImage {...sectionContent} height={32} isOver={isOver} />
    </View>
  );
}

export default SponsorsContent;

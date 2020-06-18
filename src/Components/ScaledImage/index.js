import React, { noop, useRef } from 'react';
import { Image, View } from 'react-native';

function ScaledImage({ source, overSource, url, height, width }) {
  const ref = useRef(true);
  const [isOver, setIsOver] = React.useState(false);
  const [imageHeight, setImageHeight] = React.useState(height);
  const [imageWidth, setImageWidth] = React.useState(width);

  React.useEffect(() => {
    if (ref.current) {
      ref.current = false;
      Image.getSize(source, (w, h) => {
        if (width && !height) {
          setImageWidth(width);
          setImageHeight(h * (width / w));
          console.log({ width, height: h * (width / w) });
        } else if (!width && height) {
          setImageWidth(w * (height / h));
          setImageHeight(height);
          console.log({ width: w * (height / h), height });
        } else {
          setImageWidth(w);
          setImageHeight(h);
          console.log({ width: w, height: h });
        }
      });
    }
  });

  return (
    <a
      href={url}
      onMouseEnter={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
    >
      <Image
        source={isOver && overSource ? overSource : source}
        style={{
          height: imageHeight,
          width: imageWidth,
        }}
      />
    </a>
  );
}

export default ScaledImage;

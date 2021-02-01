import React, { useEffect } from 'react';
import { View, Image } from 'react-native';

const Contributors = ({
  url,
  styles = { flexDirection: 'row' },
  imageStyle = {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginTop: 8,
    marginRight: 8,
  },
}) => {
  const [response, setResponse] = React.useState(null);

  useEffect(() => {
    fetchContributors(url);
  }, [url]);

  const fetchContributors = async (url) => {
    const res = await fetch(url, null);
    const json = await res.json();
    setResponse(json);
  };

  return (
    <View style={styles}>
      {response && response.length > 0
        ? response.slice(0, 9).map((contributor,index) => (
            <a key={index}
              target="_blank"
              rel="noopener noreferrer"
              href={contributor.html_url}
            >
              <Image
                style={imageStyle}
                source={contributor.avatar_url}
                key={contributor.id}
              ></Image>
            </a>
          ))
        : null}
    </View>
  );
};

export default Contributors;

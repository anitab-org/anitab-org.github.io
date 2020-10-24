import { View, Text } from 'react-native';
import { styled } from 'react-native-reflect';

export const Box = styled(View, {
  flex: 1,
  width: '80%',
  flexDirection: 'column',
  paddingLeft: 16,
  paddingRight: 16,
  flexWrap: 'wrap',
  marginTop: 32,
});

export const Content = styled(View, {
  flexDirection: 'column',
  paddingLeft: 16,
});

export const Description = styled(Text, {
  flex: 1,
  marginTop: 32,
  paddingLeft: 16,
  fontSize: 18,
  flexGrow: 1,
  fontWeight: 200,
  color: '#103B81',
  textAlign: 'left',
});

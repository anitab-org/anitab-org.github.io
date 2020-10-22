import { View, Text } from 'react-native';
import { styled } from 'react-native-reflect';

export const MainContainer = styled(View, {
  width: '80%',
  alignItems: 'left',
  paddingLeft: 16,
  paddingRight: 16,
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 32,
});

export const Box = styled(View, {
  flex: 1,
  flexDirection: 'column',
  marginTop: -32,
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

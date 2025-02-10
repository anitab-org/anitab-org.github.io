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
  marginBottom: 32, // Added more whitespace at the bottom
});

export const Content = styled(View, {
  flexDirection: 'column',
  paddingLeft: 16,
  marginBottom: 16, // Added more whitespace between content sections
});

export const Description = styled(Text, {
  flex: 1,
  marginTop: 26,
  paddingLeft: 16,
  fontSize: 18,
  flexGrow: 1,
  fontWeight: 300, // Updated font-weight for better visual distinction
  color: '#103B81',
  textAlign: 'left',
  lineHeight: 24, // Added line height for better readability
});

export const List = styled(Text, {
  fontWeight: 400,
  display: 'inline',
  marginRight: 15,
  cursor: 'pointer',
});

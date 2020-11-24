import { View, Text, StyleSheet } from 'react-native';
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
  marginRight:77,
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

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 18,
    marginBottom: 18,
  },
  card: {
    width: '33%',
    minWidth: 251,
  },
  cardMiddle: {
    alignItems: 'center',
  },
  cardLast: {
    alignItems: 'flex-end',
  },
  imageText: {
    fontSize: 14,
    fontWeight: '300',
    fontFamily: 'Avenir',
    textAlign: 'center',
    width: 180,
    flex: 1,
    color: '#103B81',
  },
  description: {
    fontSize: 14,
    fontWeight: '300',
    color: '#103B81',
    marginLeft: 32,
  },
});

export default styles;

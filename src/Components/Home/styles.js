import { View, Text, StyleSheet, Image } from 'react-native';
import { styled } from 'react-native-reflect';

export const Box = styled(View, {
  flex: 1,
  width: '80%',
  flexDirection: 'column',
  paddingRight: 32,
  flexWrap: 'wrap',
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

export const IconContainer = styled(View, {
  flexDirection: 'row',
  marginVertical: 8,
  paddingLeft: 16,
});

export const Icon = styled(Image, {
  marginRight: 8,
  width: 32,
  height: 32,
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
  contributionImage: {
    width: 235,
    height: 235,
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
    marginLeft: 18,
  },
});

export default styles;

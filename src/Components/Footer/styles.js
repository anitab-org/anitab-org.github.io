import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#101820',
    width: '100%',
    flexWrap: 'wrap',
    paddingBottom: 16,
    paddingTop: 24,
    paddingHorizontal: '10%'
  },
  col: { alignItems: 'center' },
  left: { width: 579 },
  center: { width: 245 },
  right: {
    width: 573,
    textAlign: 'center'
  },
  text: { color: '#FFFFFF' },
  heading: {
    fontSize: '1.4em',
    fontWeight: 500,
    paddingBottom: 22
  },
  description: {
    fontSize: '1em',
    fontWeight: 300
  },
  formField: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 8,
    padding: 4,
    borderColor: 'red'
  },
  formEmail: { height: 38 },
  formMessage: {
    height: 161,
    marginVertical: 8
  },
  formButton: {
    width: 183,
    height: 47,
    borderRadius: 500,
    backgroundColor: '#54BCEB',
    alignItems: 'center',
    justifyContent: 'center'
  },
  socialContainer: { flexDirection: 'row' },
  socialImage: {
    height: 32,
    width: 32,
    borderRadius: '50%',
    marginHorizontal: 16
  }
});

export default styles;

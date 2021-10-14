import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#231B4E',
    width: '100%',
    flexWrap: 'wrap',
    marginTop: 32,
    paddingBottom: 16,
    paddingHorizontal: '10%',
  },
  col: { alignItems: 'center' },
  left: { flex: 1, paddingTop: 24, minWidth: 300 },
  center: { flex: 1, paddingTop: 24, minWidth: 300 },
  right: {
    flex: 1,
    paddingTop: 24,
    minWidth: 300,
    textAlign: 'center',
  },
  text: { color: '#FFFFFF' },
  heading: {
    fontSize: 18,
    fontWeight: 500,
    paddingBottom: 22,
  },
  description: {
    fontSize: 14,
    fontWeight: 300,
  },
  formField: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 8,
    padding: 4,
    borderColor: 'red',
  },
  formEmail: { height: 38 },
  formMessage: {
    height: 161,
    marginVertical: 8,
  },
  formButton: {
    width: 183,
    height: 47,
    borderRadius: 500,
    backgroundColor: '#54BCEB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialContainer: { flexDirection: 'row' },
  socialImage: {
    height: 32,
    width: 32,
    borderRadius: '50%',
    marginHorizontal: 16,
  },
});

export default styles;

import { View, Text } from 'react-native';
import { styled } from 'react-native-reflect';


export const SectionContainer = styled(View, {
  marginTop: 40,
  width: '80vw',
});

export const SectionHeader = styled(Text, {
  fontSize: 20,
  fontWeight: 600,
  backgroundColor: 'purple',
  textAlign: 'center',
  color: 'white',
});

export const SectionTableContainer = styled(View, {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

export const TableContainer = styled(View, {
  width: '80vw',
  textAlign: 'center',
});

export const TableTitle = styled(Text, {
  fontSize: 16,
  fontWeight: 500,
  backgroundColor: 'mediumpurple',
  marginBottom: 2,
  marginTop: 2,
  color: 'white',
});

export const TableHeaderRow = styled(View, {
  flex: 1,
  alignSelf: 'stretch',
  flexDirection: 'row',
});

export const TableDataRow = styled(View, {
  flex: 1,
  alignSelf: 'stretch',
  flexDirection: 'row',
  marginTop: 2,
});

export const TableHeader = styled(View, {
  flex: 1,
  alignSelf: 'stretch',
});

export const TableHeaderText = styled(Text, {
  fontWeight: 500,
  backgroundColor: 'lightblue',
});

export const TableData = styled(View, {
  flex: 1,
  alignSelf: 'stretch',
  backgroundColor: 'orange',
  justifyContent: 'center',
  padding: 10,
});

export const TableDataText = styled(Text, {
  color: 'white',
})

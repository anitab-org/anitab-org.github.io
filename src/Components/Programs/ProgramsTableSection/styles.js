import { View, Text } from 'react-native';
import { styled } from 'react-native-reflect';


export const SectionContainer = styled(View, {
  marginTop: 40,
  width: '80vw',
});

export const SectionHeader = styled(Text, {
  fontSize: 32,
  fontWeight: 400,
  textAlign: 'center',
  color: '#103B81',
});

export const SectionTableContainer = styled(View, {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

export const TableContainer = styled(View, {
  width: '80vw',
  textAlign: 'center',
  marginTop: 32,
});

export const TableTitle = styled(Text, {
  fontSize: 16,
  fontWeight: 500,
  backgroundColor: '#005C88',
  marginBottom: 1,
  paddingVertical: 8,
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
  marginTop: 1,
});

export const TableHeader = styled(View, {
  flex: 1,
  alignSelf: 'stretch',
});

export const TableHeaderText = styled(Text, {
  color: 'white',
  fontWeight: 500,
  backgroundColor: '#005C88',
  paddingVertical: 8,
});

export const TableData = styled(View, {
  flex: 1,
  alignSelf: 'stretch',
  backgroundColor: '#54BCEB',
  justifyContent: 'center',
  padding: 8,
});

export const TableDataText = styled(Text, {
  color: 'white',
})

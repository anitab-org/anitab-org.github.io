import React from 'react';
import {
  TableHeaderRow,
  TableDataRow,
  TableHeader,
  TableHeaderText,
  TableData,
  TableDataText,
} from './styles';

function ProgramsTableRow({ row, isHeader }) {

  if (isHeader) {
    return (
      <TableHeaderRow>
        {
          row.map((data, index) => {
            return (
              <TableHeader key={index} style={(index < row.length - 1) && {marginRight: 5}}>
                <TableHeaderText>{data}</TableHeaderText>
              </TableHeader>
            )
          })
        }
      </TableHeaderRow>
    );
  }

  return (
    <TableDataRow>
      {
        row.map((data, index) => {
          return (
            <TableData key={index} style={(index < row.length -1) && { marginRight: 5 }}>
              <TableDataText>{data}</TableDataText>
            </TableData>
          )
        })
      }
    </TableDataRow>
  );
}

export default ProgramsTableRow;

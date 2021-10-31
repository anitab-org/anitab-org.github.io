import React from 'react';
import ProgramsTableRow from './ProgramsTableRow';
import {
  TableContainer,
  TableTitle,
} from './styles';


function ProgramsTable({ table }) {
  return (
    <TableContainer>
      <TableTitle>{table.title}</TableTitle>
      <ProgramsTableRow row={table.tableHeaders} isHeader={true} />
      {
        table.tableRows.map((row, index) => {
          return (<ProgramsTableRow key={index} row={row} isHeader={false} />);
        })
      }
    </TableContainer>
  )
}

export default ProgramsTable;

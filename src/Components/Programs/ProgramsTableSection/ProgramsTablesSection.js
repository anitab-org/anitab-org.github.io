import React from 'react';
import programs from '../../../content/programs.json';
import ProgramsTable from './ProgramsTable';
import {
  SectionContainer,
  SectionHeader,
  SectionTableContainer
} from './styles';


function ProgramsTableSection() {
  const content = programs;

  return (
    <>
      {
        content.map((section, index) => {
          return (
            <SectionContainer key={index}>
              <SectionHeader>
                {section.sectionHeader}
              </SectionHeader>
              <SectionTableContainer>
                {
                  section.tables.map((table, index) => {
                    return (<ProgramsTable key={index} table={table} />);
                  })
                }
              </SectionTableContainer>
            </SectionContainer>
          );
        })
      }
    </>
  );
}

export default ProgramsTableSection;

import React, { useContext } from 'react';
import programs from '../../../content/programs.json';
import ProgramsTable from './ProgramsTable';
import {
  SectionContainer,
  SectionHeader,
  SectionTableContainer,
} from './styles';
import { ThemeContext } from '../../../Context/ThemeContext';

function ProgramsTableSection() {
  const { colors } = useContext(ThemeContext);
  const content = programs;

  return (
    <>
      {content.map((section, index) => {
        return (
          <SectionContainer key={index}>
            <SectionHeader style={{ color: colors.text }}>
              {section.sectionHeader}
            </SectionHeader>
            <SectionTableContainer>
              {section.tables.map((table, index) => {
                return <ProgramsTable key={index} table={table} />;
              })}
            </SectionTableContainer>
          </SectionContainer>
        );
      })}
    </>
  );
}

export default ProgramsTableSection;

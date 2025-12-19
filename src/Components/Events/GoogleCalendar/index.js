import React, { useContext } from 'react';
import { MainContainer } from '../style';
import { ThemeContext } from '../../../Context/ThemeContext';

function GoogleCalendar({ timezone }) {
  const { theme } = useContext(ThemeContext);
  return (
    <MainContainer>
      <iframe
        src={`https://calendar.google.com/calendar/u/0/embed?src=sh10tv3mtfve62somg9nngp9tg@group.calendar.google.com${timezone}`}
        title="Calendar"
        style={{
          border: '0',
          width: '100%',
          height: '500px',
          frameborder: '0',
          scrolling: 'no',
          filter: theme === 'dark' ? 'invert(1) hue-rotate(180deg)' : 'none',
        }}
      ></iframe>
    </MainContainer>
  );
}

export default GoogleCalendar;

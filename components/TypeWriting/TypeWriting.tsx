import { keyframes } from '@emotion/react';
import Box, { BoxProps } from '@mui/material/Box';
import { FC } from 'react';

export interface TypeWritingProps {
  children: string;
  component?: BoxProps['component'];
  sx?: BoxProps['sx'];
}

const typewriting = keyframes`
  to{ 
    left: 100%
  }
`;

const blink = keyframes`
  to {
    background: transparent;
  }
`;

const TypeWriting: FC<TypeWritingProps> = ({
  children,
  component = 'span',
  sx,
}) => {
  const numberOfCharacters = children.length || 0;
  return (
    <Box
      component={component}
      sx={{
        width: 'max-content',
        position: 'relative',
        display: 'block',
        '&::before': {
          content: '""',
          position: 'absolute',
          backgroundColor: (theme) => theme.palette.background.default,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          animation: `${typewriting} 1s steps(${numberOfCharacters}) 1s forwards`,
        },
        '&:after': {
          content: '""',
          position: 'absolute',
          backgroundColor: (theme) => theme.palette.text.primary,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '.75rem',
          height: '100%',
          animation: `${typewriting} 1s steps(${numberOfCharacters}) 1s forwards , ${blink} 1s infinite`,
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default TypeWriting;

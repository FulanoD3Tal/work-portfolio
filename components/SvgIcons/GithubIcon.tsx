import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

const GithubIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox='0 0 60 60' {...props}>
    <path
      fillRule='evenodd'
      d='M30 0C13.425 0 0 13.425 0 30c0 13.275 8.588 24.487 20.512 28.462 
      1.5.263 2.063-.637 2.063-1.425 0-.712-.037-3.075-.037-5.587C15 52.837 
      13.05 49.612 12.45 47.925c-.337-.862-1.8-3.525-3.075-4.237-1.05-.563-2.55-1.95-.037-1.988 2.362-.038
       4.05 2.175 4.612 3.075 2.7 4.538 7.012 3.263 8.738 2.475.262-1.95 1.05-3.263 
       1.912-4.013-6.675-.75-13.65-3.337-13.65-14.812 0-3.262 1.163-5.963 3.075-8.063-.3-.75-1.35-3.824.3-7.95 0 0 
       2.512-.787 8.25 3.075 2.4-.675 4.95-1.012 7.5-1.012s5.1.338 7.5 1.013c5.737-3.9 8.25-3.075 8.25-3.075 1.65
        4.125.6 7.2.3 7.95 1.913 2.1 3.075 4.762 3.075 8.062 0 11.512-7.013 14.062-13.688 14.812 1.088.938 2.026
         2.738 2.026 5.55 0 4.013-.038 7.238-.038 8.25 0 .788.563 1.726 2.063 1.425A30.05 30.05 0 0 0 60 30C60 13.425 46.575 0 30 0Z'
      clipRule='evenodd'
    />
  </SvgIcon>
);

export default GithubIcon;

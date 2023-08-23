import IconButtonMui from '@mui/material/IconButton';

import { styled } from '@mui/material/styles';

export const IconButton = styled(IconButtonMui)(({ theme }) => {
  return {
    height: 24,
    width: 24,
    color: theme.palette.error.light,
    ':hover': {
      cursor: 'auto',
    }
  };
}) as typeof IconButtonMui;



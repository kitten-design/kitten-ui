import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Button, Box } from '@kitten-ui/core';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Box bg="blue.600">haha</Box>
    <Button variant="filled" colorPalette={'red'}>
      按钮
    </Button>
  </React.StrictMode>,
);

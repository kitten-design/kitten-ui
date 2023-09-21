import React from 'react';

import { Box, Button, Grid } from './';

const App = () => {
  const [theme, setTheme] = React.useState('light');

  return (
    <Box className={theme} w="100vw" h="100vh" overflow={'auto'} styled>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle theme
      </Button>
      <Grid columns={12} rowGap={'md'} columnGap={'lg'} minChildWidth={'400px'}>
        asdf
        {new Array(3).fill(
          <Grid.Col span={4} bg="pink.200">
            2
          </Grid.Col>,
        )}
      </Grid>
    </Box>
  );
};
export default App;

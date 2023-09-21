import React from 'react';

import { Box, Button, Grid } from './';

const App = () => {
  const [theme, setTheme] = React.useState('light');

  return (
    <Box className={theme} w="100vw" h="100vh" overflow={'auto'} styled>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle theme
      </Button>
      <Grid columns={24} rowGap={'md'} columnGap={'lg'}>
        {new Array(100).fill(<Grid.Col bg="pink.200">2</Grid.Col>)}
        <Grid.Col gridRowStart={3} gridColumnStart={5} bg="green.200">
          1
        </Grid.Col>
        {new Array(100).fill(<Grid.Col bg="pink.200">2</Grid.Col>)}
      </Grid>
    </Box>
  );
};
export default App;

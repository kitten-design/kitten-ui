import React from 'react';
import { useState } from 'react';

import {
  Box,
  Button,
  Container,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverTrigger,
} from './';

function Uncontrolled() {
  return (
    <div className="App">
      <h1>Floating UI — Popover</h1>
      <Popover>
        <PopoverTrigger>My trigger</PopoverTrigger>
        <PopoverContent className="Popover">
          <PopoverHeading>My popover heading</PopoverHeading>
          <PopoverDescription>My popover description</PopoverDescription>
          <PopoverClose>Close</PopoverClose>
        </PopoverContent>
      </Popover>
    </div>
  );
}

function Controlled() {
  const [open, setOpen] = useState(true);
  return (
    <div className="App">
      <h1>Floating UI — Popover</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger onClick={() => setOpen((v) => !v)}>
          My trigger
        </PopoverTrigger>
        <PopoverContent className="Popover">
          <PopoverHeading>My popover heading</PopoverHeading>
          <PopoverDescription>My popover description</PopoverDescription>
          <PopoverClose>Close</PopoverClose>
        </PopoverContent>
      </Popover>
    </div>
  );
}

const App = () => {
  const [theme, setTheme] = React.useState('light');

  return (
    <Box className={theme} w="100vw" h="100vh" overflow={'auto'} styled>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle theme
      </Button>
      <Container bg="red.100">
        <Box bg="green.100">123</Box>
      </Container>
      <Uncontrolled />
      <Controlled />
    </Box>
  );
};
export default App;

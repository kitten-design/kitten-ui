import { IconSearch } from '@tabler/icons-react';
import { Box, Button, Divider, Text } from '@kitten-ui/core';

function changeTheme() {
  if (document.body.className === 'dark') {
    document.body.className = 'light';
  } else {
    document.body.className = 'dark';
  }
}

function KittenCore() {
  return (
    <Box className="w-screen p-5 h-screen bg-white dark:bg-dark-700 p-0 overflow-auto">
      <Button
        onClick={() => {
          changeTheme();
        }}>
        主题
      </Button>
      <Divider size="xl" label="Label on the left" labelPosition="left" />
      <Divider size="xl" label="Label in the center" />
      <Divider size="xl" label="Label on the right" labelPosition="right" />
      <Divider
        variant="dashed"
        labelPosition="center"
        label={
          <>
            <IconSearch size={12} />
            <Box>Search results</Box>
          </>
        }
      />
      <Divider
        label="Link label"
        labelProps={{
          as: 'a',
          href: 'https://mantine.dev',
          color: 'blue',
        }}
      />
    </Box>
  );
}

export default KittenCore;

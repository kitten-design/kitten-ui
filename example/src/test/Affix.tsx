import { IconArrowUp } from '@tabler/icons-react';
import { Affix, Box, Button, Text, Transition } from 'kitten-core';
import { useWindowScroll } from '@kitten-ui/hooks';
import { rem } from '@kitten-ui/styles';

function changeTheme() {
  if (document.body.className === 'dark') {
    document.body.className = 'light';
  } else {
    document.body.className = 'dark';
  }
}

function KittenCore() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Box className="w-screen p-5 h-[200vh] bg-white dark:bg-dark-700 p-0 overflow-auto">
      <Button
        onClick={() => {
          changeTheme();
        }}>
        主题
      </Button>
      <Text align="center">
        Affix is located at the bottom of the screen, scroll to see it
        {scroll.y}
      </Text>
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftIcon={<IconArrowUp size="1rem" />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}>
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </Box>
  );
}

export default KittenCore;

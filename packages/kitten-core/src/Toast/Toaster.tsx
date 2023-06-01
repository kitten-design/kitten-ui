import {
  DefaultProps,
  getZIndex,
  KittenToastPosition,
  rem,
} from 'kitten-styles';
import { createPolymorphicComponent } from 'kitten-utils';
import React, { useRef } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { Box } from '../Box';
import { Portal, PortalProps } from '../Portal';
import { ToastConfigWithId, useToastStore } from './Toast.store';
import { useToasterStyles } from './Toaster.style';
import ToastWrap from './ToastWrap';

export interface ToasterProps extends DefaultProps {
  position?: KittenToastPosition;
  autoClose?: number | false;
  transitionDuration?: number;
  containerWidth?: number | string;
  maxHeight?: number | string;
  limit?: number;
  zIndex?: React.CSSProperties['zIndex'];
  target?: PortalProps['target'];
}

function reverse(data: ToastConfigWithId[]) {
  const arr: ToastConfigWithId[] = [];
  for (let i = data.length - 1; i >= 0; i--) {
    arr.push(data[i]);
  }
  return arr;
}

export const Toaster = createPolymorphicComponent<'div', ToasterProps>(
  (props, ref) => {
    const {
      className,
      children,
      transitionDuration,
      autoClose,
      maxHeight,
      position,
      containerWidth,
      zIndex,
      ...others
    } = props;

    const refs = useRef<Record<string, HTMLDivElement | null>>({});
    const data = useToastStore((state) => state.data);
    const classes = useToasterStyles(props);
    const reduceMotion = false;
    const duration = reduceMotion ? 1 : transitionDuration;

    const toasts = (position?.includes('top') ? reverse(data) : data).map(
      (v) => {
        return (
          <Transition
            key={v.id}
            timeout={duration}
            onEnter={() => refs.current[v.id]?.offsetHeight}
            nodeRef={{ current: refs.current[v.id] }}
            addEndListener={() => {}}>
            {(state) => {
              return (
                <ToastWrap
                  state={state}
                  data={v}
                  duration={duration!}
                  innerRef={(node) => {
                    refs.current[v.id] = node;
                  }}
                  autoClose={autoClose}
                  maxHeight={maxHeight!}
                  position={position!}
                />
              );
            }}
          </Transition>
        );
      },
    );

    return (
      <Portal>
        <Box
          as={TransitionGroup}
          ref={ref}
          className={classes.root}
          {...others}>
          {toasts}
        </Box>
      </Portal>
    );
  },
);

Toaster.displayName = 'Toaster';
Toaster.defaultProps = {
  position: 'bottom-right',
  autoClose: 3000,
  maxHeight: rem(200),
  transitionDuration: 250,
  containerWidth: rem(440),
  zIndex: getZIndex('overlay'),
};

import { observer } from '@kitten-ui/dataset';
import { cpc } from '@kitten-ui/utils';
import React, { useRef } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';

import type { PortalProps } from '../Portal';
import { Portal } from '../Portal';
import type { ToastConfigWithId, ToastPosition } from './Toast.event';
import { toastStore } from './Toast.event';
import type { ToasterRootProps, ToasterRootVariants } from './Toaster.style';
import { ToasterRoot } from './Toaster.style';
import ToastWrap from './ToastWrap';

export interface Props extends ToasterRootProps {
  autoClose?: number | false;
  duration?: number;
  containerWidth?: string | number;
  target?: PortalProps['target'];
}

export type ToasterProps = Props & ToasterRootVariants;

export const Toaster = observer(
  cpc<'div', ToasterProps>((props, ref) => {
    const {
      duration: _duration,
      autoClose,
      containerWidth,
      maxHeight,
      style,
      ...others
    } = props;
    const refs = useRef<Record<string, HTMLDivElement | null>>({});
    const data = toastStore.toData();
    const reduceMotion = false;
    const duration = reduceMotion ? 1 : _duration;

    const reverse = (data: ToastConfigWithId[]) => {
      const arr: ToastConfigWithId[] = [];
      for (let i = data.length - 1; i >= 0; i--) {
        arr.push(data[i]);
      }
      return arr;
    };
    const render = (position: ToastPosition) => {
      const _data = data.filter((v) => v.position === position);

      return (position?.includes('top') ? reverse(_data) : _data)?.map((v) => {
        return (
          <Transition
            key={v.id}
            duration={duration}
            onEnter={() => refs.current[v.id]?.offsetHeight}
            nodeRef={{ current: refs.current[v.id] }}
            addEndListener={() => {}}>
            {(state) => (
              <ToastWrap
                autoClose={autoClose}
                innerRef={(node) => {
                  refs.current[v.id] = node;
                }}
                data={v}
                state={state}
                duration={duration!}
              />
            )}
          </Transition>
        );
      });
    };

    return (
      <Portal>
        <ToasterRoot
          data-toaster
          ref={ref}
          style={{
            ...style,
            '--toaster-container-width': containerWidth,
            '--toaster-max-height': maxHeight,
          }}
          {...others}>
          <TransitionGroup data-toaster-top-right>
            {render('top-right')}
          </TransitionGroup>
          <TransitionGroup data-toaster-top>{render('top')}</TransitionGroup>
          <TransitionGroup data-toaster-top-left>
            {render('top-left')}
          </TransitionGroup>
          <TransitionGroup data-toaster-bottom-right>
            {render('bottom-right')}
          </TransitionGroup>
          <TransitionGroup data-toaster-bottom>
            {render('bottom')}
          </TransitionGroup>
          <TransitionGroup data-toaster-bottom-left>
            {render('bottom-left')}
          </TransitionGroup>
        </ToasterRoot>
      </Portal>
    );
  }),
);
Toaster.displayName = 'Toaster';
Toaster.defaultProps = {
  autoClose: 3000,
  maxHeight: '100vh',
  duration: 250,
  containerWidth: '300px',
};

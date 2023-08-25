import { DataSet } from '@kitten-ui/dataset';
import { isString } from '@kitten-ui/utils';
import type { ReactNode } from 'react';

import type { ToastProps } from './Toast';

export type ToastPosition =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'bottom-left'
  | 'bottom'
  | 'bottom-right';

export type ToastConfig = {
  id?: string;
  position?: ToastPosition;
  autoClose?: boolean | number;
  onClose?(props: ToastConfig): void;
  onOpen?(props: ToastConfig): void;
  icon?: ReactNode;
  title?: ReactNode;
  message?: ReactNode;
  loading?: boolean;
  withCloseButton?: boolean;
  css?: ToastProps['css'];
};

export type ToastConfigWithId = Omit<ToastConfig, 'id'> & { id: string };

export const toastStore = DataSet<ToastConfigWithId>([]);

export const toast = (options: string | ToastConfig) => {
  const uuid = `kitten-${Math.random().toString(36).slice(2, 11)}`;

  if (isString(options)) {
    toastStore.create({ id: uuid, position: 'top-right', message: options });
    return uuid;
  } else {
    if (options.id) {
      const record = toastStore.records
        .get()
        .find((v) => v.getValue('id') === options.id);
      if (record) {
        record?.setValue(options);
        return options.id;
      }
    }

    toastStore.create({ id: uuid, position: 'top-right', ...options });
    return options.id || uuid;
  }
};

toast.hide = (id: string) => {
  const index = toastStore.records
    .get()
    .findIndex((v) => v.getValue('id') === id);

  toastStore.records.splice(index >>> 0, 1);
};

toast.update = (options: ToastConfigWithId) => {
  const record = toastStore.records
    .get()
    .find((v) => v.getValue('id') === options.id);
  record?.setValue(options);
};

toast.clear = () => {
  toastStore.clear();
};

import { PolymorphicComponentProps } from '@kitten-ui/utils';
import React from 'react';
import { create } from 'zustand';
import { ToastProps } from './Toast';

export interface ToastConfig
  extends Omit<
    PolymorphicComponentProps<'div', ToastProps>,
    'children' | 'onClose'
  > {
  id?: string;
  message: React.ReactNode;
  autoClose?: boolean | number;
  onClose?(props: ToastConfig): void;
  onOpen?(props: ToastConfig): void;
}

export type ToastConfigWithId = Omit<ToastConfig, 'id'> & { id: string };

export interface ToastStore {
  data: ToastConfigWithId[];
}

export const useToastStore = create<ToastStore>(() => ({
  data: [],
}));

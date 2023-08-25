// import { DataSet } from '@kitten-ui/dataset';
// import { isString } from '@kitten-ui/utils';
// import type { ReactNode } from 'react';

// import type { ToastProps } from './Toast';

// type ToastPosition =
//   | 'top-left'
//   | 'top'
//   | 'top-right'
//   | 'bottom-left'
//   | 'bottom'
//   | 'bottom-right';

// type ToastConfig = {
//   id?: string;
//   position?: ToastPosition;
//   autoClose?: boolean | number;
//   onClose?(props: ToastConfig): void;
//   onOpen?(props: ToastConfig): void;
//   icon?: ReactNode;
//   title?: ReactNode;
//   message?: ReactNode;
//   loading?: boolean;
//   withCloseButton?: boolean;
//   css?: ToastProps['css'];
// };

// type ToastConfigWithId = Omit<ToastConfig, 'id'> & { id: string };

// export const toastStore = DataSet<ToastConfigWithId>([]);

// console.log(toastStore.toData());

// const limit = 20;

// export const toast = (options: string | ToastConfig) => {
//   const uuid = `kitten-${Math.random().toString(36).slice(2, 11)}`;

//   if (isString(options)) {
//     ({ id: uuid, message: options });
//     return uuid;
//   } else {
//     setState({ id: uuid, ...options });
//     return options.id || uuid;
//   }
// };

// toast.hide = (id: string) => {
//   useToastStore.setState((state) => {
//     const index = state.data.findIndex((v) => v.id === id);
//     state.data.splice(index >>> 0, 1);
//     return {
//       data: [...state.data],
//     };
//   });
// };

// toast.update = (options: ToastConfigWithId) => {
//   useToastStore.setState((state) => {
//     const data = state.data.find((v) => v.id === options.id);
//     if (!data) return state;

//     Object.assign(data, options);
//     return {
//       data: [...state.data],
//     };
//   });
// };

// toast.clear = () => {
//   useToastStore.setState({ data: [] });
// };

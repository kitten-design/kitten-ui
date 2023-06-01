import { isString } from 'lodash';
import { ToastConfig, ToastConfigWithId, useToastStore } from './Toast.store';

const limit = 20;

function setState(data: ToastConfigWithId) {
  useToastStore.setState((state) => {
    if (state.data.length >= limit) {
      const [_, ..._data] = state.data;
      return {
        data: [..._data, data],
      };
    }
    return {
      data: [...state.data, data],
    };
  });
}

export const toast = (options: string | ToastConfig) => {
  const uuid = `kitten-${Math.random().toString(36).slice(2, 11)}`;

  if (isString(options)) {
    setState({ id: uuid, message: options });
    return uuid;
  } else {
    setState({ id: uuid, ...options });
    return options.id || uuid;
  }
};

toast.hide = (id: string) => {
  useToastStore.setState((state) => {
    const index = state.data.findIndex((v) => v.id === id);
    state.data.splice(index >>> 0, 1);
    return {
      data: [...state.data],
    };
  });
};

toast.update = (options: ToastConfigWithId) => {
  useToastStore.setState((state) => {
    const data = state.data.find((v) => v.id === options.id);
    if (!data) return state;

    Object.assign(data, options);
    return {
      data: [...state.data],
    };
  });
};

toast.clear = () => {
  useToastStore.setState({ data: [] });
};

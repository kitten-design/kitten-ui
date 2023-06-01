import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';
import { proxy, snapshot, subscribe } from 'valtio';
import { Field } from './Field';
import { RecordData } from './Record';
import { RequestMethods } from './Request';

export type DataSetConfig<T> = {
  /**
   * 在使用 useDataSet 时自动查询。
   */
  autoQuery?: boolean;
  /**
   * 默认数据
   */
  data?: T[];
  /**
   * 字段配置
   */
  fields?: Field[];
  /**
   * 请求方法
   */
  methods?: RequestMethods;
  /**
   * axios 实例
   */
  axios?: AxiosInstance;
  /**
   * axios 配置
   */
  axiosConfig?: CreateAxiosDefaults;
};

export const axiosConfig = {
  baseURL: 'http://api.example.com',
  timeout: 5000,
};

export const dataSetConfig = proxy<Required<DataSetConfig<RecordData>>>({
  autoQuery: false,
  data: [],
  fields: [],
  methods: {},
  axios: axios.create(axiosConfig),
  axiosConfig,
});

export const configDataSet = <T>(config: DataSetConfig<T> = {}) => {
  const { axiosConfig, ...others } = config;

  if (axiosConfig) {
    const nextAxiosConfig = { ...dataSetConfig.axiosConfig, ...axiosConfig };
    dataSetConfig.axios = axios.create(nextAxiosConfig);
    dataSetConfig.axiosConfig = nextAxiosConfig;
  }

  Object.assign(dataSetConfig, others);
};

export const mergeConfig = <T>(config: DataSetConfig<T> = {}) => {
  const result = { ...snapshot(dataSetConfig), ...config };
  if (config.axiosConfig) {
    result.axios = axios.create({
      ...getConfig('axiosConfig'),
      ...config.axiosConfig,
    });
  }
  return result;
};

export const getConfig = <T, K extends keyof DataSetConfig<T>>(key: K) => {
  return snapshot(dataSetConfig)[key] as DataSetConfig<T>[K];
};

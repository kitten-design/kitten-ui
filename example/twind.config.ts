import { config } from 'kitten-styles';
export default config;

declare module '@twind/core' {
  interface Plugins {
    // forms should have been detected from setup – not need to add it
    // forms: ''

    // We want to add sm and lg modifiers to the form-input
    'form-input':
      | ''    // plain form-input
      | 'sm' // form-input-sm
      | 'lg' // form-input-lg
  }
}

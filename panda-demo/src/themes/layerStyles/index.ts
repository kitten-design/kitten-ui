import { defineLayerStyles } from '@pandacss/dev';

export const layerStyles = defineLayerStyles({
  container: {
    description: 'container styles',
    value: {
      color: 'gray.50',
      backgroundColor: 'green.400',
      border: '2px solid',
      borderColor: 'gray.500',
    },
  },
});

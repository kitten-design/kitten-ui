import { enableReactUse } from '@legendapp/state/config/enableReactUse';
import { enableLegendStateReact } from '@legendapp/state/react';

enableReactUse();
enableLegendStateReact();

export * from './core';
export { enableLegendStateReact, observer } from '@legendapp/state/react';

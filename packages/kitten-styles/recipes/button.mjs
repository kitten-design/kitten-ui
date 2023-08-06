import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const buttonFn = createRecipe('button', {
  "visual": "funky",
  "size": "sm",
  "shape": "circle"
}, [])

export const button = Object.assign(buttonFn, {
  __recipe__: true,
  raw: (props) => props,
  variantKeys: [
  "visual",
  "size",
  "shape"
],
  variantMap: {
  "visual": [
    "funky",
    "edgy"
  ],
  "size": [
    "sm",
    "lg"
  ],
  "shape": [
    "square",
    "circle"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, [
  "visual",
  "size",
  "shape"
])
  },
})
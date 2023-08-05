/* eslint-disable */
export type Token = "borders.none" | "easings.default" | "easings.linear" | "easings.in" | "easings.out" | "easings.in-out" | "durations.fastest" | "durations.faster" | "durations.fast" | "durations.normal" | "durations.slow" | "durations.slower" | "durations.slowest" | "radii.xs" | "radii.sm" | "radii.md" | "radii.lg" | "radii.xl" | "radii.full" | "fontWeights.thin" | "fontWeights.extralight" | "fontWeights.light" | "fontWeights.normal" | "fontWeights.medium" | "fontWeights.semibold" | "fontWeights.bold" | "fontWeights.extrabold" | "fontWeights.black" | "lineHeights.none" | "lineHeights.tight" | "lineHeights.snug" | "lineHeights.normal" | "lineHeights.relaxed" | "lineHeights.loose" | "fonts.sans" | "fonts.serif" | "fonts.mono" | "letterSpacings.tighter" | "letterSpacings.tight" | "letterSpacings.normal" | "letterSpacings.wide" | "letterSpacings.wider" | "letterSpacings.widest" | "fontSizes.2xs" | "fontSizes.xs" | "fontSizes.sm" | "fontSizes.md" | "fontSizes.lg" | "fontSizes.xl" | "fontSizes.2xl" | "fontSizes.3xl" | "fontSizes.4xl" | "fontSizes.5xl" | "fontSizes.6xl" | "fontSizes.7xl" | "fontSizes.8xl" | "fontSizes.9xl" | "shadows.xs" | "shadows.sm" | "shadows.md" | "shadows.lg" | "shadows.xl" | "shadows.2xl" | "shadows.inner" | "colors.current" | "colors.black" | "colors.white" | "colors.transparent" | "colors.rose.50" | "colors.rose.100" | "colors.rose.200" | "colors.rose.300" | "colors.rose.400" | "colors.rose.500" | "colors.rose.600" | "colors.rose.700" | "colors.rose.800" | "colors.rose.900" | "colors.rose.950" | "colors.pink.50" | "colors.pink.100" | "colors.pink.200" | "colors.pink.300" | "colors.pink.400" | "colors.pink.500" | "colors.pink.600" | "colors.pink.700" | "colors.pink.800" | "colors.pink.900" | "colors.pink.950" | "colors.fuchsia.50" | "colors.fuchsia.100" | "colors.fuchsia.200" | "colors.fuchsia.300" | "colors.fuchsia.400" | "colors.fuchsia.500" | "colors.fuchsia.600" | "colors.fuchsia.700" | "colors.fuchsia.800" | "colors.fuchsia.900" | "colors.fuchsia.950" | "colors.purple.50" | "colors.purple.100" | "colors.purple.200" | "colors.purple.300" | "colors.purple.400" | "colors.purple.500" | "colors.purple.600" | "colors.purple.700" | "colors.purple.800" | "colors.purple.900" | "colors.purple.950" | "colors.violet.50" | "colors.violet.100" | "colors.violet.200" | "colors.violet.300" | "colors.violet.400" | "colors.violet.500" | "colors.violet.600" | "colors.violet.700" | "colors.violet.800" | "colors.violet.900" | "colors.violet.950" | "colors.indigo.50" | "colors.indigo.100" | "colors.indigo.200" | "colors.indigo.300" | "colors.indigo.400" | "colors.indigo.500" | "colors.indigo.600" | "colors.indigo.700" | "colors.indigo.800" | "colors.indigo.900" | "colors.indigo.950" | "colors.blue.50" | "colors.blue.100" | "colors.blue.200" | "colors.blue.300" | "colors.blue.400" | "colors.blue.500" | "colors.blue.600" | "colors.blue.700" | "colors.blue.800" | "colors.blue.900" | "colors.blue.950" | "colors.sky.50" | "colors.sky.100" | "colors.sky.200" | "colors.sky.300" | "colors.sky.400" | "colors.sky.500" | "colors.sky.600" | "colors.sky.700" | "colors.sky.800" | "colors.sky.900" | "colors.sky.950" | "colors.cyan.50" | "colors.cyan.100" | "colors.cyan.200" | "colors.cyan.300" | "colors.cyan.400" | "colors.cyan.500" | "colors.cyan.600" | "colors.cyan.700" | "colors.cyan.800" | "colors.cyan.900" | "colors.cyan.950" | "colors.teal.50" | "colors.teal.100" | "colors.teal.200" | "colors.teal.300" | "colors.teal.400" | "colors.teal.500" | "colors.teal.600" | "colors.teal.700" | "colors.teal.800" | "colors.teal.900" | "colors.teal.950" | "colors.emerald.50" | "colors.emerald.100" | "colors.emerald.200" | "colors.emerald.300" | "colors.emerald.400" | "colors.emerald.500" | "colors.emerald.600" | "colors.emerald.700" | "colors.emerald.800" | "colors.emerald.900" | "colors.emerald.950" | "colors.green.50" | "colors.green.100" | "colors.green.200" | "colors.green.300" | "colors.green.400" | "colors.green.500" | "colors.green.600" | "colors.green.700" | "colors.green.800" | "colors.green.900" | "colors.green.950" | "colors.lime.50" | "colors.lime.100" | "colors.lime.200" | "colors.lime.300" | "colors.lime.400" | "colors.lime.500" | "colors.lime.600" | "colors.lime.700" | "colors.lime.800" | "colors.lime.900" | "colors.lime.950" | "colors.yellow.50" | "colors.yellow.100" | "colors.yellow.200" | "colors.yellow.300" | "colors.yellow.400" | "colors.yellow.500" | "colors.yellow.600" | "colors.yellow.700" | "colors.yellow.800" | "colors.yellow.900" | "colors.yellow.950" | "colors.amber.50" | "colors.amber.100" | "colors.amber.200" | "colors.amber.300" | "colors.amber.400" | "colors.amber.500" | "colors.amber.600" | "colors.amber.700" | "colors.amber.800" | "colors.amber.900" | "colors.amber.950" | "colors.orange.50" | "colors.orange.100" | "colors.orange.200" | "colors.orange.300" | "colors.orange.400" | "colors.orange.500" | "colors.orange.600" | "colors.orange.700" | "colors.orange.800" | "colors.orange.900" | "colors.orange.950" | "colors.red.50" | "colors.red.100" | "colors.red.200" | "colors.red.300" | "colors.red.400" | "colors.red.500" | "colors.red.600" | "colors.red.700" | "colors.red.800" | "colors.red.900" | "colors.red.950" | "colors.neutral.50" | "colors.neutral.100" | "colors.neutral.200" | "colors.neutral.300" | "colors.neutral.400" | "colors.neutral.500" | "colors.neutral.600" | "colors.neutral.700" | "colors.neutral.800" | "colors.neutral.900" | "colors.neutral.950" | "colors.stone.50" | "colors.stone.100" | "colors.stone.200" | "colors.stone.300" | "colors.stone.400" | "colors.stone.500" | "colors.stone.600" | "colors.stone.700" | "colors.stone.800" | "colors.stone.900" | "colors.stone.950" | "colors.zinc.50" | "colors.zinc.100" | "colors.zinc.200" | "colors.zinc.300" | "colors.zinc.400" | "colors.zinc.500" | "colors.zinc.600" | "colors.zinc.700" | "colors.zinc.800" | "colors.zinc.900" | "colors.zinc.950" | "colors.gray.50" | "colors.gray.100" | "colors.gray.200" | "colors.gray.300" | "colors.gray.400" | "colors.gray.500" | "colors.gray.600" | "colors.gray.700" | "colors.gray.800" | "colors.gray.900" | "colors.gray.950" | "colors.slate.50" | "colors.slate.100" | "colors.slate.200" | "colors.slate.300" | "colors.slate.400" | "colors.slate.500" | "colors.slate.600" | "colors.slate.700" | "colors.slate.800" | "colors.slate.900" | "colors.slate.950" | "blurs.sm" | "blurs.base" | "blurs.md" | "blurs.lg" | "blurs.xl" | "blurs.2xl" | "blurs.3xl" | "spacing.0" | "spacing.1" | "spacing.2" | "spacing.3" | "spacing.4" | "spacing.5" | "spacing.6" | "spacing.7" | "spacing.8" | "spacing.9" | "spacing.10" | "spacing.11" | "spacing.12" | "spacing.14" | "spacing.16" | "spacing.20" | "spacing.24" | "spacing.28" | "spacing.32" | "spacing.36" | "spacing.40" | "spacing.44" | "spacing.48" | "spacing.52" | "spacing.56" | "spacing.60" | "spacing.64" | "spacing.72" | "spacing.80" | "spacing.96" | "spacing.0.5" | "spacing.1.5" | "spacing.2.5" | "spacing.3.5" | "sizes.0" | "sizes.1" | "sizes.2" | "sizes.3" | "sizes.4" | "sizes.5" | "sizes.6" | "sizes.7" | "sizes.8" | "sizes.9" | "sizes.10" | "sizes.11" | "sizes.12" | "sizes.14" | "sizes.16" | "sizes.20" | "sizes.24" | "sizes.28" | "sizes.32" | "sizes.36" | "sizes.40" | "sizes.44" | "sizes.48" | "sizes.52" | "sizes.56" | "sizes.60" | "sizes.64" | "sizes.72" | "sizes.80" | "sizes.96" | "sizes.0.5" | "sizes.1.5" | "sizes.2.5" | "sizes.3.5" | "sizes.xs" | "sizes.sm" | "sizes.md" | "sizes.lg" | "sizes.xl" | "sizes.2xl" | "sizes.3xl" | "sizes.4xl" | "sizes.5xl" | "sizes.6xl" | "sizes.7xl" | "sizes.8xl" | "sizes.prose" | "sizes.full" | "sizes.min" | "sizes.max" | "sizes.fit" | "sizes.breakpoint-sm" | "sizes.breakpoint-md" | "sizes.breakpoint-lg" | "sizes.breakpoint-xl" | "sizes.breakpoint-2xl" | "animations.spin" | "animations.ping" | "animations.pulse" | "animations.bounce" | "breakpoints.sm" | "breakpoints.md" | "breakpoints.lg" | "breakpoints.xl" | "breakpoints.2xl" | "colors.Box.color" | "colors.Box.bg" | "colors.rose.ButtonFilled" | "colors.rose.ButtonFilledHover" | "colors.rose.ButtonFilledActive" | "colors.rose.ButtonLight" | "colors.rose.ButtonLightHover" | "colors.rose.ButtonLightActive" | "colors.rose.ButtonLightColor" | "colors.rose.ButtonOutline" | "colors.rose.ButtonOutlineHover" | "colors.rose.ButtonOutlineActive" | "colors.pink.ButtonFilled" | "colors.pink.ButtonFilledHover" | "colors.pink.ButtonFilledActive" | "colors.pink.ButtonLight" | "colors.pink.ButtonLightHover" | "colors.pink.ButtonLightActive" | "colors.pink.ButtonLightColor" | "colors.pink.ButtonOutline" | "colors.pink.ButtonOutlineHover" | "colors.pink.ButtonOutlineActive" | "colors.fuchsia.ButtonFilled" | "colors.fuchsia.ButtonFilledHover" | "colors.fuchsia.ButtonFilledActive" | "colors.fuchsia.ButtonLight" | "colors.fuchsia.ButtonLightHover" | "colors.fuchsia.ButtonLightActive" | "colors.fuchsia.ButtonLightColor" | "colors.fuchsia.ButtonOutline" | "colors.fuchsia.ButtonOutlineHover" | "colors.fuchsia.ButtonOutlineActive" | "colors.purple.ButtonFilled" | "colors.purple.ButtonFilledHover" | "colors.purple.ButtonFilledActive" | "colors.purple.ButtonLight" | "colors.purple.ButtonLightHover" | "colors.purple.ButtonLightActive" | "colors.purple.ButtonLightColor" | "colors.purple.ButtonOutline" | "colors.purple.ButtonOutlineHover" | "colors.purple.ButtonOutlineActive" | "colors.violet.ButtonFilled" | "colors.violet.ButtonFilledHover" | "colors.violet.ButtonFilledActive" | "colors.violet.ButtonLight" | "colors.violet.ButtonLightHover" | "colors.violet.ButtonLightActive" | "colors.violet.ButtonLightColor" | "colors.violet.ButtonOutline" | "colors.violet.ButtonOutlineHover" | "colors.violet.ButtonOutlineActive" | "colors.indigo.ButtonFilled" | "colors.indigo.ButtonFilledHover" | "colors.indigo.ButtonFilledActive" | "colors.indigo.ButtonLight" | "colors.indigo.ButtonLightHover" | "colors.indigo.ButtonLightActive" | "colors.indigo.ButtonLightColor" | "colors.indigo.ButtonOutline" | "colors.indigo.ButtonOutlineHover" | "colors.indigo.ButtonOutlineActive" | "colors.blue.ButtonFilled" | "colors.blue.ButtonFilledHover" | "colors.blue.ButtonFilledActive" | "colors.blue.ButtonLight" | "colors.blue.ButtonLightHover" | "colors.blue.ButtonLightActive" | "colors.blue.ButtonLightColor" | "colors.blue.ButtonOutline" | "colors.blue.ButtonOutlineHover" | "colors.blue.ButtonOutlineActive" | "colors.sky.ButtonFilled" | "colors.sky.ButtonFilledHover" | "colors.sky.ButtonFilledActive" | "colors.sky.ButtonLight" | "colors.sky.ButtonLightHover" | "colors.sky.ButtonLightActive" | "colors.sky.ButtonLightColor" | "colors.sky.ButtonOutline" | "colors.sky.ButtonOutlineHover" | "colors.sky.ButtonOutlineActive" | "colors.cyan.ButtonFilled" | "colors.cyan.ButtonFilledHover" | "colors.cyan.ButtonFilledActive" | "colors.cyan.ButtonLight" | "colors.cyan.ButtonLightHover" | "colors.cyan.ButtonLightActive" | "colors.cyan.ButtonLightColor" | "colors.cyan.ButtonOutline" | "colors.cyan.ButtonOutlineHover" | "colors.cyan.ButtonOutlineActive" | "colors.teal.ButtonFilled" | "colors.teal.ButtonFilledHover" | "colors.teal.ButtonFilledActive" | "colors.teal.ButtonLight" | "colors.teal.ButtonLightHover" | "colors.teal.ButtonLightActive" | "colors.teal.ButtonLightColor" | "colors.teal.ButtonOutline" | "colors.teal.ButtonOutlineHover" | "colors.teal.ButtonOutlineActive" | "colors.emerald.ButtonFilled" | "colors.emerald.ButtonFilledHover" | "colors.emerald.ButtonFilledActive" | "colors.emerald.ButtonLight" | "colors.emerald.ButtonLightHover" | "colors.emerald.ButtonLightActive" | "colors.emerald.ButtonLightColor" | "colors.emerald.ButtonOutline" | "colors.emerald.ButtonOutlineHover" | "colors.emerald.ButtonOutlineActive" | "colors.green.ButtonFilled" | "colors.green.ButtonFilledHover" | "colors.green.ButtonFilledActive" | "colors.green.ButtonLight" | "colors.green.ButtonLightHover" | "colors.green.ButtonLightActive" | "colors.green.ButtonLightColor" | "colors.green.ButtonOutline" | "colors.green.ButtonOutlineHover" | "colors.green.ButtonOutlineActive" | "colors.lime.ButtonFilled" | "colors.lime.ButtonFilledHover" | "colors.lime.ButtonFilledActive" | "colors.lime.ButtonLight" | "colors.lime.ButtonLightHover" | "colors.lime.ButtonLightActive" | "colors.lime.ButtonLightColor" | "colors.lime.ButtonOutline" | "colors.lime.ButtonOutlineHover" | "colors.lime.ButtonOutlineActive" | "colors.yellow.ButtonFilled" | "colors.yellow.ButtonFilledHover" | "colors.yellow.ButtonFilledActive" | "colors.yellow.ButtonLight" | "colors.yellow.ButtonLightHover" | "colors.yellow.ButtonLightActive" | "colors.yellow.ButtonLightColor" | "colors.yellow.ButtonOutline" | "colors.yellow.ButtonOutlineHover" | "colors.yellow.ButtonOutlineActive" | "colors.amber.ButtonFilled" | "colors.amber.ButtonFilledHover" | "colors.amber.ButtonFilledActive" | "colors.amber.ButtonLight" | "colors.amber.ButtonLightHover" | "colors.amber.ButtonLightActive" | "colors.amber.ButtonLightColor" | "colors.amber.ButtonOutline" | "colors.amber.ButtonOutlineHover" | "colors.amber.ButtonOutlineActive" | "colors.orange.ButtonFilled" | "colors.orange.ButtonFilledHover" | "colors.orange.ButtonFilledActive" | "colors.orange.ButtonLight" | "colors.orange.ButtonLightHover" | "colors.orange.ButtonLightActive" | "colors.orange.ButtonLightColor" | "colors.orange.ButtonOutline" | "colors.orange.ButtonOutlineHover" | "colors.orange.ButtonOutlineActive" | "colors.red.ButtonFilled" | "colors.red.ButtonFilledHover" | "colors.red.ButtonFilledActive" | "colors.red.ButtonLight" | "colors.red.ButtonLightHover" | "colors.red.ButtonLightActive" | "colors.red.ButtonLightColor" | "colors.red.ButtonOutline" | "colors.red.ButtonOutlineHover" | "colors.red.ButtonOutlineActive" | "colors.neutral.ButtonFilled" | "colors.neutral.ButtonFilledHover" | "colors.neutral.ButtonFilledActive" | "colors.neutral.ButtonLight" | "colors.neutral.ButtonLightHover" | "colors.neutral.ButtonLightActive" | "colors.neutral.ButtonLightColor" | "colors.neutral.ButtonOutline" | "colors.neutral.ButtonOutlineHover" | "colors.neutral.ButtonOutlineActive" | "colors.stone.ButtonFilled" | "colors.stone.ButtonFilledHover" | "colors.stone.ButtonFilledActive" | "colors.stone.ButtonLight" | "colors.stone.ButtonLightHover" | "colors.stone.ButtonLightActive" | "colors.stone.ButtonLightColor" | "colors.stone.ButtonOutline" | "colors.stone.ButtonOutlineHover" | "colors.stone.ButtonOutlineActive" | "colors.zinc.ButtonFilled" | "colors.zinc.ButtonFilledHover" | "colors.zinc.ButtonFilledActive" | "colors.zinc.ButtonLight" | "colors.zinc.ButtonLightHover" | "colors.zinc.ButtonLightActive" | "colors.zinc.ButtonLightColor" | "colors.zinc.ButtonOutline" | "colors.zinc.ButtonOutlineHover" | "colors.zinc.ButtonOutlineActive" | "colors.gray.ButtonFilled" | "colors.gray.ButtonFilledHover" | "colors.gray.ButtonFilledActive" | "colors.gray.ButtonLight" | "colors.gray.ButtonLightHover" | "colors.gray.ButtonLightActive" | "colors.gray.ButtonLightColor" | "colors.gray.ButtonOutline" | "colors.gray.ButtonOutlineHover" | "colors.gray.ButtonOutlineActive" | "colors.slate.ButtonFilled" | "colors.slate.ButtonFilledHover" | "colors.slate.ButtonFilledActive" | "colors.slate.ButtonLight" | "colors.slate.ButtonLightHover" | "colors.slate.ButtonLightActive" | "colors.slate.ButtonLightColor" | "colors.slate.ButtonOutline" | "colors.slate.ButtonOutlineHover" | "colors.slate.ButtonOutlineActive" | "colors.Button.default.color" | "colors.Button.default.bg" | "colors.Button.default.bgHover" | "colors.Button.default.bgActive" | "colors.Button.default.borderColor" | "colors.Button.disabled.color" | "colors.Button.disabled.bg" | "colors.Button.white.bgHover" | "colors.Button.white.bgActive" | "spacing.-1" | "spacing.-2" | "spacing.-3" | "spacing.-4" | "spacing.-5" | "spacing.-6" | "spacing.-7" | "spacing.-8" | "spacing.-9" | "spacing.-10" | "spacing.-11" | "spacing.-12" | "spacing.-14" | "spacing.-16" | "spacing.-20" | "spacing.-24" | "spacing.-28" | "spacing.-32" | "spacing.-36" | "spacing.-40" | "spacing.-44" | "spacing.-48" | "spacing.-52" | "spacing.-56" | "spacing.-60" | "spacing.-64" | "spacing.-72" | "spacing.-80" | "spacing.-96" | "spacing.-0.5" | "spacing.-1.5" | "spacing.-2.5" | "spacing.-3.5" | "colors.colorPalette.50" | "colors.colorPalette.100" | "colors.colorPalette.200" | "colors.colorPalette.300" | "colors.colorPalette.400" | "colors.colorPalette.500" | "colors.colorPalette.600" | "colors.colorPalette.700" | "colors.colorPalette.800" | "colors.colorPalette.900" | "colors.colorPalette.950" | "colors.colorPalette.color" | "colors.colorPalette.bg" | "colors.colorPalette.ButtonFilled" | "colors.colorPalette.ButtonFilledHover" | "colors.colorPalette.ButtonFilledActive" | "colors.colorPalette.ButtonLight" | "colors.colorPalette.ButtonLightHover" | "colors.colorPalette.ButtonLightActive" | "colors.colorPalette.ButtonLightColor" | "colors.colorPalette.ButtonOutline" | "colors.colorPalette.ButtonOutlineHover" | "colors.colorPalette.ButtonOutlineActive" | "colors.colorPalette.bgHover" | "colors.colorPalette.bgActive" | "colors.colorPalette.borderColor"

export type ColorPalette = "rose" | "pink" | "fuchsia" | "purple" | "violet" | "indigo" | "blue" | "sky" | "cyan" | "teal" | "emerald" | "green" | "lime" | "yellow" | "amber" | "orange" | "red" | "neutral" | "stone" | "zinc" | "gray" | "slate" | "Box" | "Button.default" | "Button.disabled" | "Button.white"

export type BorderToken = "none"

export type EasingToken = "default" | "linear" | "in" | "out" | "in-out"

export type DurationToken = "fastest" | "faster" | "fast" | "normal" | "slow" | "slower" | "slowest"

export type RadiusToken = "xs" | "sm" | "md" | "lg" | "xl" | "full"

export type FontWeightToken = "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black"

export type LineHeightToken = "none" | "tight" | "snug" | "normal" | "relaxed" | "loose"

export type FontToken = "sans" | "serif" | "mono"

export type LetterSpacingToken = "tighter" | "tight" | "normal" | "wide" | "wider" | "widest"

export type FontSizeToken = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl"

export type ShadowToken = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "inner"

export type ColorToken = "current" | "black" | "white" | "transparent" | "rose.50" | "rose.100" | "rose.200" | "rose.300" | "rose.400" | "rose.500" | "rose.600" | "rose.700" | "rose.800" | "rose.900" | "rose.950" | "pink.50" | "pink.100" | "pink.200" | "pink.300" | "pink.400" | "pink.500" | "pink.600" | "pink.700" | "pink.800" | "pink.900" | "pink.950" | "fuchsia.50" | "fuchsia.100" | "fuchsia.200" | "fuchsia.300" | "fuchsia.400" | "fuchsia.500" | "fuchsia.600" | "fuchsia.700" | "fuchsia.800" | "fuchsia.900" | "fuchsia.950" | "purple.50" | "purple.100" | "purple.200" | "purple.300" | "purple.400" | "purple.500" | "purple.600" | "purple.700" | "purple.800" | "purple.900" | "purple.950" | "violet.50" | "violet.100" | "violet.200" | "violet.300" | "violet.400" | "violet.500" | "violet.600" | "violet.700" | "violet.800" | "violet.900" | "violet.950" | "indigo.50" | "indigo.100" | "indigo.200" | "indigo.300" | "indigo.400" | "indigo.500" | "indigo.600" | "indigo.700" | "indigo.800" | "indigo.900" | "indigo.950" | "blue.50" | "blue.100" | "blue.200" | "blue.300" | "blue.400" | "blue.500" | "blue.600" | "blue.700" | "blue.800" | "blue.900" | "blue.950" | "sky.50" | "sky.100" | "sky.200" | "sky.300" | "sky.400" | "sky.500" | "sky.600" | "sky.700" | "sky.800" | "sky.900" | "sky.950" | "cyan.50" | "cyan.100" | "cyan.200" | "cyan.300" | "cyan.400" | "cyan.500" | "cyan.600" | "cyan.700" | "cyan.800" | "cyan.900" | "cyan.950" | "teal.50" | "teal.100" | "teal.200" | "teal.300" | "teal.400" | "teal.500" | "teal.600" | "teal.700" | "teal.800" | "teal.900" | "teal.950" | "emerald.50" | "emerald.100" | "emerald.200" | "emerald.300" | "emerald.400" | "emerald.500" | "emerald.600" | "emerald.700" | "emerald.800" | "emerald.900" | "emerald.950" | "green.50" | "green.100" | "green.200" | "green.300" | "green.400" | "green.500" | "green.600" | "green.700" | "green.800" | "green.900" | "green.950" | "lime.50" | "lime.100" | "lime.200" | "lime.300" | "lime.400" | "lime.500" | "lime.600" | "lime.700" | "lime.800" | "lime.900" | "lime.950" | "yellow.50" | "yellow.100" | "yellow.200" | "yellow.300" | "yellow.400" | "yellow.500" | "yellow.600" | "yellow.700" | "yellow.800" | "yellow.900" | "yellow.950" | "amber.50" | "amber.100" | "amber.200" | "amber.300" | "amber.400" | "amber.500" | "amber.600" | "amber.700" | "amber.800" | "amber.900" | "amber.950" | "orange.50" | "orange.100" | "orange.200" | "orange.300" | "orange.400" | "orange.500" | "orange.600" | "orange.700" | "orange.800" | "orange.900" | "orange.950" | "red.50" | "red.100" | "red.200" | "red.300" | "red.400" | "red.500" | "red.600" | "red.700" | "red.800" | "red.900" | "red.950" | "neutral.50" | "neutral.100" | "neutral.200" | "neutral.300" | "neutral.400" | "neutral.500" | "neutral.600" | "neutral.700" | "neutral.800" | "neutral.900" | "neutral.950" | "stone.50" | "stone.100" | "stone.200" | "stone.300" | "stone.400" | "stone.500" | "stone.600" | "stone.700" | "stone.800" | "stone.900" | "stone.950" | "zinc.50" | "zinc.100" | "zinc.200" | "zinc.300" | "zinc.400" | "zinc.500" | "zinc.600" | "zinc.700" | "zinc.800" | "zinc.900" | "zinc.950" | "gray.50" | "gray.100" | "gray.200" | "gray.300" | "gray.400" | "gray.500" | "gray.600" | "gray.700" | "gray.800" | "gray.900" | "gray.950" | "slate.50" | "slate.100" | "slate.200" | "slate.300" | "slate.400" | "slate.500" | "slate.600" | "slate.700" | "slate.800" | "slate.900" | "slate.950" | "Box.color" | "Box.bg" | "rose.ButtonFilled" | "rose.ButtonFilledHover" | "rose.ButtonFilledActive" | "rose.ButtonLight" | "rose.ButtonLightHover" | "rose.ButtonLightActive" | "rose.ButtonLightColor" | "rose.ButtonOutline" | "rose.ButtonOutlineHover" | "rose.ButtonOutlineActive" | "pink.ButtonFilled" | "pink.ButtonFilledHover" | "pink.ButtonFilledActive" | "pink.ButtonLight" | "pink.ButtonLightHover" | "pink.ButtonLightActive" | "pink.ButtonLightColor" | "pink.ButtonOutline" | "pink.ButtonOutlineHover" | "pink.ButtonOutlineActive" | "fuchsia.ButtonFilled" | "fuchsia.ButtonFilledHover" | "fuchsia.ButtonFilledActive" | "fuchsia.ButtonLight" | "fuchsia.ButtonLightHover" | "fuchsia.ButtonLightActive" | "fuchsia.ButtonLightColor" | "fuchsia.ButtonOutline" | "fuchsia.ButtonOutlineHover" | "fuchsia.ButtonOutlineActive" | "purple.ButtonFilled" | "purple.ButtonFilledHover" | "purple.ButtonFilledActive" | "purple.ButtonLight" | "purple.ButtonLightHover" | "purple.ButtonLightActive" | "purple.ButtonLightColor" | "purple.ButtonOutline" | "purple.ButtonOutlineHover" | "purple.ButtonOutlineActive" | "violet.ButtonFilled" | "violet.ButtonFilledHover" | "violet.ButtonFilledActive" | "violet.ButtonLight" | "violet.ButtonLightHover" | "violet.ButtonLightActive" | "violet.ButtonLightColor" | "violet.ButtonOutline" | "violet.ButtonOutlineHover" | "violet.ButtonOutlineActive" | "indigo.ButtonFilled" | "indigo.ButtonFilledHover" | "indigo.ButtonFilledActive" | "indigo.ButtonLight" | "indigo.ButtonLightHover" | "indigo.ButtonLightActive" | "indigo.ButtonLightColor" | "indigo.ButtonOutline" | "indigo.ButtonOutlineHover" | "indigo.ButtonOutlineActive" | "blue.ButtonFilled" | "blue.ButtonFilledHover" | "blue.ButtonFilledActive" | "blue.ButtonLight" | "blue.ButtonLightHover" | "blue.ButtonLightActive" | "blue.ButtonLightColor" | "blue.ButtonOutline" | "blue.ButtonOutlineHover" | "blue.ButtonOutlineActive" | "sky.ButtonFilled" | "sky.ButtonFilledHover" | "sky.ButtonFilledActive" | "sky.ButtonLight" | "sky.ButtonLightHover" | "sky.ButtonLightActive" | "sky.ButtonLightColor" | "sky.ButtonOutline" | "sky.ButtonOutlineHover" | "sky.ButtonOutlineActive" | "cyan.ButtonFilled" | "cyan.ButtonFilledHover" | "cyan.ButtonFilledActive" | "cyan.ButtonLight" | "cyan.ButtonLightHover" | "cyan.ButtonLightActive" | "cyan.ButtonLightColor" | "cyan.ButtonOutline" | "cyan.ButtonOutlineHover" | "cyan.ButtonOutlineActive" | "teal.ButtonFilled" | "teal.ButtonFilledHover" | "teal.ButtonFilledActive" | "teal.ButtonLight" | "teal.ButtonLightHover" | "teal.ButtonLightActive" | "teal.ButtonLightColor" | "teal.ButtonOutline" | "teal.ButtonOutlineHover" | "teal.ButtonOutlineActive" | "emerald.ButtonFilled" | "emerald.ButtonFilledHover" | "emerald.ButtonFilledActive" | "emerald.ButtonLight" | "emerald.ButtonLightHover" | "emerald.ButtonLightActive" | "emerald.ButtonLightColor" | "emerald.ButtonOutline" | "emerald.ButtonOutlineHover" | "emerald.ButtonOutlineActive" | "green.ButtonFilled" | "green.ButtonFilledHover" | "green.ButtonFilledActive" | "green.ButtonLight" | "green.ButtonLightHover" | "green.ButtonLightActive" | "green.ButtonLightColor" | "green.ButtonOutline" | "green.ButtonOutlineHover" | "green.ButtonOutlineActive" | "lime.ButtonFilled" | "lime.ButtonFilledHover" | "lime.ButtonFilledActive" | "lime.ButtonLight" | "lime.ButtonLightHover" | "lime.ButtonLightActive" | "lime.ButtonLightColor" | "lime.ButtonOutline" | "lime.ButtonOutlineHover" | "lime.ButtonOutlineActive" | "yellow.ButtonFilled" | "yellow.ButtonFilledHover" | "yellow.ButtonFilledActive" | "yellow.ButtonLight" | "yellow.ButtonLightHover" | "yellow.ButtonLightActive" | "yellow.ButtonLightColor" | "yellow.ButtonOutline" | "yellow.ButtonOutlineHover" | "yellow.ButtonOutlineActive" | "amber.ButtonFilled" | "amber.ButtonFilledHover" | "amber.ButtonFilledActive" | "amber.ButtonLight" | "amber.ButtonLightHover" | "amber.ButtonLightActive" | "amber.ButtonLightColor" | "amber.ButtonOutline" | "amber.ButtonOutlineHover" | "amber.ButtonOutlineActive" | "orange.ButtonFilled" | "orange.ButtonFilledHover" | "orange.ButtonFilledActive" | "orange.ButtonLight" | "orange.ButtonLightHover" | "orange.ButtonLightActive" | "orange.ButtonLightColor" | "orange.ButtonOutline" | "orange.ButtonOutlineHover" | "orange.ButtonOutlineActive" | "red.ButtonFilled" | "red.ButtonFilledHover" | "red.ButtonFilledActive" | "red.ButtonLight" | "red.ButtonLightHover" | "red.ButtonLightActive" | "red.ButtonLightColor" | "red.ButtonOutline" | "red.ButtonOutlineHover" | "red.ButtonOutlineActive" | "neutral.ButtonFilled" | "neutral.ButtonFilledHover" | "neutral.ButtonFilledActive" | "neutral.ButtonLight" | "neutral.ButtonLightHover" | "neutral.ButtonLightActive" | "neutral.ButtonLightColor" | "neutral.ButtonOutline" | "neutral.ButtonOutlineHover" | "neutral.ButtonOutlineActive" | "stone.ButtonFilled" | "stone.ButtonFilledHover" | "stone.ButtonFilledActive" | "stone.ButtonLight" | "stone.ButtonLightHover" | "stone.ButtonLightActive" | "stone.ButtonLightColor" | "stone.ButtonOutline" | "stone.ButtonOutlineHover" | "stone.ButtonOutlineActive" | "zinc.ButtonFilled" | "zinc.ButtonFilledHover" | "zinc.ButtonFilledActive" | "zinc.ButtonLight" | "zinc.ButtonLightHover" | "zinc.ButtonLightActive" | "zinc.ButtonLightColor" | "zinc.ButtonOutline" | "zinc.ButtonOutlineHover" | "zinc.ButtonOutlineActive" | "gray.ButtonFilled" | "gray.ButtonFilledHover" | "gray.ButtonFilledActive" | "gray.ButtonLight" | "gray.ButtonLightHover" | "gray.ButtonLightActive" | "gray.ButtonLightColor" | "gray.ButtonOutline" | "gray.ButtonOutlineHover" | "gray.ButtonOutlineActive" | "slate.ButtonFilled" | "slate.ButtonFilledHover" | "slate.ButtonFilledActive" | "slate.ButtonLight" | "slate.ButtonLightHover" | "slate.ButtonLightActive" | "slate.ButtonLightColor" | "slate.ButtonOutline" | "slate.ButtonOutlineHover" | "slate.ButtonOutlineActive" | "Button.default.color" | "Button.default.bg" | "Button.default.bgHover" | "Button.default.bgActive" | "Button.default.borderColor" | "Button.disabled.color" | "Button.disabled.bg" | "Button.white.bgHover" | "Button.white.bgActive" | "colorPalette.50" | "colorPalette.100" | "colorPalette.200" | "colorPalette.300" | "colorPalette.400" | "colorPalette.500" | "colorPalette.600" | "colorPalette.700" | "colorPalette.800" | "colorPalette.900" | "colorPalette.950" | "colorPalette.color" | "colorPalette.bg" | "colorPalette.ButtonFilled" | "colorPalette.ButtonFilledHover" | "colorPalette.ButtonFilledActive" | "colorPalette.ButtonLight" | "colorPalette.ButtonLightHover" | "colorPalette.ButtonLightActive" | "colorPalette.ButtonLightColor" | "colorPalette.ButtonOutline" | "colorPalette.ButtonOutlineHover" | "colorPalette.ButtonOutlineActive" | "colorPalette.bgHover" | "colorPalette.bgActive" | "colorPalette.borderColor"

export type BlurToken = "sm" | "base" | "md" | "lg" | "xl" | "2xl" | "3xl"

export type SpacingToken = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | "0.5" | "1.5" | "2.5" | "3.5" | "-1" | "-2" | "-3" | "-4" | "-5" | "-6" | "-7" | "-8" | "-9" | "-10" | "-11" | "-12" | "-14" | "-16" | "-20" | "-24" | "-28" | "-32" | "-36" | "-40" | "-44" | "-48" | "-52" | "-56" | "-60" | "-64" | "-72" | "-80" | "-96" | "-0.5" | "-1.5" | "-2.5" | "-3.5"

export type SizeToken = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | "0.5" | "1.5" | "2.5" | "3.5" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "prose" | "full" | "min" | "max" | "fit" | "breakpoint-sm" | "breakpoint-md" | "breakpoint-lg" | "breakpoint-xl" | "breakpoint-2xl"

export type AnimationToken = "spin" | "ping" | "pulse" | "bounce"

export type BreakpointToken = "sm" | "md" | "lg" | "xl" | "2xl"

export type Tokens = {
		borders: BorderToken
		easings: EasingToken
		durations: DurationToken
		radii: RadiusToken
		fontWeights: FontWeightToken
		lineHeights: LineHeightToken
		fonts: FontToken
		letterSpacings: LetterSpacingToken
		fontSizes: FontSizeToken
		shadows: ShadowToken
		colors: ColorToken
		blurs: BlurToken
		spacing: SpacingToken
		sizes: SizeToken
		animations: AnimationToken
		breakpoints: BreakpointToken
} & { [token: string]: never }

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"
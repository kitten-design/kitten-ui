const tokens = {
  "borders.none": {
    "value": "none",
    "variable": "var(--borders-none)"
  },
  "easings.default": {
    "value": "cubic-bezier(0.4, 0, 0.2, 1)",
    "variable": "var(--easings-default)"
  },
  "easings.linear": {
    "value": "linear",
    "variable": "var(--easings-linear)"
  },
  "easings.in": {
    "value": "cubic-bezier(0.4, 0, 1, 1)",
    "variable": "var(--easings-in)"
  },
  "easings.out": {
    "value": "cubic-bezier(0, 0, 0.2, 1)",
    "variable": "var(--easings-out)"
  },
  "easings.in-out": {
    "value": "cubic-bezier(0.4, 0, 0.2, 1)",
    "variable": "var(--easings-in-out)"
  },
  "durations.fastest": {
    "value": "50ms",
    "variable": "var(--durations-fastest)"
  },
  "durations.faster": {
    "value": "100ms",
    "variable": "var(--durations-faster)"
  },
  "durations.fast": {
    "value": "150ms",
    "variable": "var(--durations-fast)"
  },
  "durations.normal": {
    "value": "200ms",
    "variable": "var(--durations-normal)"
  },
  "durations.slow": {
    "value": "300ms",
    "variable": "var(--durations-slow)"
  },
  "durations.slower": {
    "value": "400ms",
    "variable": "var(--durations-slower)"
  },
  "durations.slowest": {
    "value": "500ms",
    "variable": "var(--durations-slowest)"
  },
  "radii.xs": {
    "value": "0.125rem",
    "variable": "var(--radii-xs)"
  },
  "radii.sm": {
    "value": "0.25rem",
    "variable": "var(--radii-sm)"
  },
  "radii.md": {
    "value": "0.5rem",
    "variable": "var(--radii-md)"
  },
  "radii.lg": {
    "value": "1rem",
    "variable": "var(--radii-lg)"
  },
  "radii.xl": {
    "value": "2rem",
    "variable": "var(--radii-xl)"
  },
  "radii.full": {
    "value": "9999px",
    "variable": "var(--radii-full)"
  },
  "fontWeights.thin": {
    "value": "100",
    "variable": "var(--font-weights-thin)"
  },
  "fontWeights.extralight": {
    "value": "200",
    "variable": "var(--font-weights-extralight)"
  },
  "fontWeights.light": {
    "value": "300",
    "variable": "var(--font-weights-light)"
  },
  "fontWeights.normal": {
    "value": "400",
    "variable": "var(--font-weights-normal)"
  },
  "fontWeights.medium": {
    "value": "500",
    "variable": "var(--font-weights-medium)"
  },
  "fontWeights.semibold": {
    "value": "600",
    "variable": "var(--font-weights-semibold)"
  },
  "fontWeights.bold": {
    "value": "700",
    "variable": "var(--font-weights-bold)"
  },
  "fontWeights.extrabold": {
    "value": "800",
    "variable": "var(--font-weights-extrabold)"
  },
  "fontWeights.black": {
    "value": "900",
    "variable": "var(--font-weights-black)"
  },
  "lineHeights.none": {
    "value": "1",
    "variable": "var(--line-heights-none)"
  },
  "lineHeights.tight": {
    "value": "1.25",
    "variable": "var(--line-heights-tight)"
  },
  "lineHeights.snug": {
    "value": "1.375",
    "variable": "var(--line-heights-snug)"
  },
  "lineHeights.normal": {
    "value": "1.5",
    "variable": "var(--line-heights-normal)"
  },
  "lineHeights.relaxed": {
    "value": "1.625",
    "variable": "var(--line-heights-relaxed)"
  },
  "lineHeights.loose": {
    "value": "2",
    "variable": "var(--line-heights-loose)"
  },
  "fonts.sans": {
    "value": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
    "variable": "var(--fonts-sans)"
  },
  "fonts.serif": {
    "value": "ui-serif, Georgia, Cambria, \"Times New Roman\", Times, serif",
    "variable": "var(--fonts-serif)"
  },
  "fonts.mono": {
    "value": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
    "variable": "var(--fonts-mono)"
  },
  "letterSpacings.tighter": {
    "value": "-0.05em",
    "variable": "var(--letter-spacings-tighter)"
  },
  "letterSpacings.tight": {
    "value": "-0.025em",
    "variable": "var(--letter-spacings-tight)"
  },
  "letterSpacings.normal": {
    "value": "0em",
    "variable": "var(--letter-spacings-normal)"
  },
  "letterSpacings.wide": {
    "value": "0.025em",
    "variable": "var(--letter-spacings-wide)"
  },
  "letterSpacings.wider": {
    "value": "0.05em",
    "variable": "var(--letter-spacings-wider)"
  },
  "letterSpacings.widest": {
    "value": "0.1em",
    "variable": "var(--letter-spacings-widest)"
  },
  "fontSizes.2xs": {
    "value": "0.5rem",
    "variable": "var(--font-sizes-2xs)"
  },
  "fontSizes.xs": {
    "value": "0.75rem",
    "variable": "var(--font-sizes-xs)"
  },
  "fontSizes.sm": {
    "value": "0.875rem",
    "variable": "var(--font-sizes-sm)"
  },
  "fontSizes.md": {
    "value": "1rem",
    "variable": "var(--font-sizes-md)"
  },
  "fontSizes.lg": {
    "value": "1.125rem",
    "variable": "var(--font-sizes-lg)"
  },
  "fontSizes.xl": {
    "value": "1.25rem",
    "variable": "var(--font-sizes-xl)"
  },
  "fontSizes.2xl": {
    "value": "1.5rem",
    "variable": "var(--font-sizes-2xl)"
  },
  "fontSizes.3xl": {
    "value": "1.875rem",
    "variable": "var(--font-sizes-3xl)"
  },
  "fontSizes.4xl": {
    "value": "2.25rem",
    "variable": "var(--font-sizes-4xl)"
  },
  "fontSizes.5xl": {
    "value": "3rem",
    "variable": "var(--font-sizes-5xl)"
  },
  "fontSizes.6xl": {
    "value": "3.75rem",
    "variable": "var(--font-sizes-6xl)"
  },
  "fontSizes.7xl": {
    "value": "4.5rem",
    "variable": "var(--font-sizes-7xl)"
  },
  "fontSizes.8xl": {
    "value": "6rem",
    "variable": "var(--font-sizes-8xl)"
  },
  "fontSizes.9xl": {
    "value": "8rem",
    "variable": "var(--font-sizes-9xl)"
  },
  "shadows.xs": {
    "value": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "variable": "var(--shadows-xs)"
  },
  "shadows.sm": {
    "value": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    "variable": "var(--shadows-sm)"
  },
  "shadows.md": {
    "value": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    "variable": "var(--shadows-md)"
  },
  "shadows.lg": {
    "value": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    "variable": "var(--shadows-lg)"
  },
  "shadows.xl": {
    "value": "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "variable": "var(--shadows-xl)"
  },
  "shadows.2xl": {
    "value": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    "variable": "var(--shadows-2xl)"
  },
  "shadows.inner": {
    "value": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    "variable": "var(--shadows-inner)"
  },
  "colors.current": {
    "value": "currentColor",
    "variable": "var(--colors-current)"
  },
  "colors.black": {
    "value": "#000",
    "variable": "var(--colors-black)"
  },
  "colors.white": {
    "value": "#fff",
    "variable": "var(--colors-white)"
  },
  "colors.transparent": {
    "value": "rgb(0 0 0 / 0)",
    "variable": "var(--colors-transparent)"
  },
  "colors.rose.50": {
    "value": "#fff1f2",
    "variable": "var(--colors-rose-50)"
  },
  "colors.rose.100": {
    "value": "#ffe4e6",
    "variable": "var(--colors-rose-100)"
  },
  "colors.rose.200": {
    "value": "#fecdd3",
    "variable": "var(--colors-rose-200)"
  },
  "colors.rose.300": {
    "value": "#fda4af",
    "variable": "var(--colors-rose-300)"
  },
  "colors.rose.400": {
    "value": "#fb7185",
    "variable": "var(--colors-rose-400)"
  },
  "colors.rose.500": {
    "value": "#f43f5e",
    "variable": "var(--colors-rose-500)"
  },
  "colors.rose.600": {
    "value": "#e11d48",
    "variable": "var(--colors-rose-600)"
  },
  "colors.rose.700": {
    "value": "#be123c",
    "variable": "var(--colors-rose-700)"
  },
  "colors.rose.800": {
    "value": "#9f1239",
    "variable": "var(--colors-rose-800)"
  },
  "colors.rose.900": {
    "value": "#881337",
    "variable": "var(--colors-rose-900)"
  },
  "colors.rose.950": {
    "value": "#4c0519",
    "variable": "var(--colors-rose-950)"
  },
  "colors.pink.50": {
    "value": "#fdf2f8",
    "variable": "var(--colors-pink-50)"
  },
  "colors.pink.100": {
    "value": "#fce7f3",
    "variable": "var(--colors-pink-100)"
  },
  "colors.pink.200": {
    "value": "#fbcfe8",
    "variable": "var(--colors-pink-200)"
  },
  "colors.pink.300": {
    "value": "#f9a8d4",
    "variable": "var(--colors-pink-300)"
  },
  "colors.pink.400": {
    "value": "#f472b6",
    "variable": "var(--colors-pink-400)"
  },
  "colors.pink.500": {
    "value": "#ec4899",
    "variable": "var(--colors-pink-500)"
  },
  "colors.pink.600": {
    "value": "#db2777",
    "variable": "var(--colors-pink-600)"
  },
  "colors.pink.700": {
    "value": "#be185d",
    "variable": "var(--colors-pink-700)"
  },
  "colors.pink.800": {
    "value": "#9d174d",
    "variable": "var(--colors-pink-800)"
  },
  "colors.pink.900": {
    "value": "#831843",
    "variable": "var(--colors-pink-900)"
  },
  "colors.pink.950": {
    "value": "#500724",
    "variable": "var(--colors-pink-950)"
  },
  "colors.fuchsia.50": {
    "value": "#fdf4ff",
    "variable": "var(--colors-fuchsia-50)"
  },
  "colors.fuchsia.100": {
    "value": "#fae8ff",
    "variable": "var(--colors-fuchsia-100)"
  },
  "colors.fuchsia.200": {
    "value": "#f5d0fe",
    "variable": "var(--colors-fuchsia-200)"
  },
  "colors.fuchsia.300": {
    "value": "#f0abfc",
    "variable": "var(--colors-fuchsia-300)"
  },
  "colors.fuchsia.400": {
    "value": "#e879f9",
    "variable": "var(--colors-fuchsia-400)"
  },
  "colors.fuchsia.500": {
    "value": "#d946ef",
    "variable": "var(--colors-fuchsia-500)"
  },
  "colors.fuchsia.600": {
    "value": "#c026d3",
    "variable": "var(--colors-fuchsia-600)"
  },
  "colors.fuchsia.700": {
    "value": "#a21caf",
    "variable": "var(--colors-fuchsia-700)"
  },
  "colors.fuchsia.800": {
    "value": "#86198f",
    "variable": "var(--colors-fuchsia-800)"
  },
  "colors.fuchsia.900": {
    "value": "#701a75",
    "variable": "var(--colors-fuchsia-900)"
  },
  "colors.fuchsia.950": {
    "value": "#4a044e",
    "variable": "var(--colors-fuchsia-950)"
  },
  "colors.purple.50": {
    "value": "#faf5ff",
    "variable": "var(--colors-purple-50)"
  },
  "colors.purple.100": {
    "value": "#f3e8ff",
    "variable": "var(--colors-purple-100)"
  },
  "colors.purple.200": {
    "value": "#e9d5ff",
    "variable": "var(--colors-purple-200)"
  },
  "colors.purple.300": {
    "value": "#d8b4fe",
    "variable": "var(--colors-purple-300)"
  },
  "colors.purple.400": {
    "value": "#c084fc",
    "variable": "var(--colors-purple-400)"
  },
  "colors.purple.500": {
    "value": "#a855f7",
    "variable": "var(--colors-purple-500)"
  },
  "colors.purple.600": {
    "value": "#9333ea",
    "variable": "var(--colors-purple-600)"
  },
  "colors.purple.700": {
    "value": "#7e22ce",
    "variable": "var(--colors-purple-700)"
  },
  "colors.purple.800": {
    "value": "#6b21a8",
    "variable": "var(--colors-purple-800)"
  },
  "colors.purple.900": {
    "value": "#581c87",
    "variable": "var(--colors-purple-900)"
  },
  "colors.purple.950": {
    "value": "#3b0764",
    "variable": "var(--colors-purple-950)"
  },
  "colors.violet.50": {
    "value": "#f5f3ff",
    "variable": "var(--colors-violet-50)"
  },
  "colors.violet.100": {
    "value": "#ede9fe",
    "variable": "var(--colors-violet-100)"
  },
  "colors.violet.200": {
    "value": "#ddd6fe",
    "variable": "var(--colors-violet-200)"
  },
  "colors.violet.300": {
    "value": "#c4b5fd",
    "variable": "var(--colors-violet-300)"
  },
  "colors.violet.400": {
    "value": "#a78bfa",
    "variable": "var(--colors-violet-400)"
  },
  "colors.violet.500": {
    "value": "#8b5cf6",
    "variable": "var(--colors-violet-500)"
  },
  "colors.violet.600": {
    "value": "#7c3aed",
    "variable": "var(--colors-violet-600)"
  },
  "colors.violet.700": {
    "value": "#6d28d9",
    "variable": "var(--colors-violet-700)"
  },
  "colors.violet.800": {
    "value": "#5b21b6",
    "variable": "var(--colors-violet-800)"
  },
  "colors.violet.900": {
    "value": "#4c1d95",
    "variable": "var(--colors-violet-900)"
  },
  "colors.violet.950": {
    "value": "#2e1065",
    "variable": "var(--colors-violet-950)"
  },
  "colors.indigo.50": {
    "value": "#eef2ff",
    "variable": "var(--colors-indigo-50)"
  },
  "colors.indigo.100": {
    "value": "#e0e7ff",
    "variable": "var(--colors-indigo-100)"
  },
  "colors.indigo.200": {
    "value": "#c7d2fe",
    "variable": "var(--colors-indigo-200)"
  },
  "colors.indigo.300": {
    "value": "#a5b4fc",
    "variable": "var(--colors-indigo-300)"
  },
  "colors.indigo.400": {
    "value": "#818cf8",
    "variable": "var(--colors-indigo-400)"
  },
  "colors.indigo.500": {
    "value": "#6366f1",
    "variable": "var(--colors-indigo-500)"
  },
  "colors.indigo.600": {
    "value": "#4f46e5",
    "variable": "var(--colors-indigo-600)"
  },
  "colors.indigo.700": {
    "value": "#4338ca",
    "variable": "var(--colors-indigo-700)"
  },
  "colors.indigo.800": {
    "value": "#3730a3",
    "variable": "var(--colors-indigo-800)"
  },
  "colors.indigo.900": {
    "value": "#312e81",
    "variable": "var(--colors-indigo-900)"
  },
  "colors.indigo.950": {
    "value": "#1e1b4b",
    "variable": "var(--colors-indigo-950)"
  },
  "colors.blue.50": {
    "value": "#eff6ff",
    "variable": "var(--colors-blue-50)"
  },
  "colors.blue.100": {
    "value": "#dbeafe",
    "variable": "var(--colors-blue-100)"
  },
  "colors.blue.200": {
    "value": "#bfdbfe",
    "variable": "var(--colors-blue-200)"
  },
  "colors.blue.300": {
    "value": "#93c5fd",
    "variable": "var(--colors-blue-300)"
  },
  "colors.blue.400": {
    "value": "#60a5fa",
    "variable": "var(--colors-blue-400)"
  },
  "colors.blue.500": {
    "value": "#3b82f6",
    "variable": "var(--colors-blue-500)"
  },
  "colors.blue.600": {
    "value": "#2563eb",
    "variable": "var(--colors-blue-600)"
  },
  "colors.blue.700": {
    "value": "#1d4ed8",
    "variable": "var(--colors-blue-700)"
  },
  "colors.blue.800": {
    "value": "#1e40af",
    "variable": "var(--colors-blue-800)"
  },
  "colors.blue.900": {
    "value": "#1e3a8a",
    "variable": "var(--colors-blue-900)"
  },
  "colors.blue.950": {
    "value": "#172554",
    "variable": "var(--colors-blue-950)"
  },
  "colors.sky.50": {
    "value": "#f0f9ff",
    "variable": "var(--colors-sky-50)"
  },
  "colors.sky.100": {
    "value": "#e0f2fe",
    "variable": "var(--colors-sky-100)"
  },
  "colors.sky.200": {
    "value": "#bae6fd",
    "variable": "var(--colors-sky-200)"
  },
  "colors.sky.300": {
    "value": "#7dd3fc",
    "variable": "var(--colors-sky-300)"
  },
  "colors.sky.400": {
    "value": "#38bdf8",
    "variable": "var(--colors-sky-400)"
  },
  "colors.sky.500": {
    "value": "#0ea5e9",
    "variable": "var(--colors-sky-500)"
  },
  "colors.sky.600": {
    "value": "#0284c7",
    "variable": "var(--colors-sky-600)"
  },
  "colors.sky.700": {
    "value": "#0369a1",
    "variable": "var(--colors-sky-700)"
  },
  "colors.sky.800": {
    "value": "#075985",
    "variable": "var(--colors-sky-800)"
  },
  "colors.sky.900": {
    "value": "#0c4a6e",
    "variable": "var(--colors-sky-900)"
  },
  "colors.sky.950": {
    "value": "#082f49",
    "variable": "var(--colors-sky-950)"
  },
  "colors.cyan.50": {
    "value": "#ecfeff",
    "variable": "var(--colors-cyan-50)"
  },
  "colors.cyan.100": {
    "value": "#cffafe",
    "variable": "var(--colors-cyan-100)"
  },
  "colors.cyan.200": {
    "value": "#a5f3fc",
    "variable": "var(--colors-cyan-200)"
  },
  "colors.cyan.300": {
    "value": "#67e8f9",
    "variable": "var(--colors-cyan-300)"
  },
  "colors.cyan.400": {
    "value": "#22d3ee",
    "variable": "var(--colors-cyan-400)"
  },
  "colors.cyan.500": {
    "value": "#06b6d4",
    "variable": "var(--colors-cyan-500)"
  },
  "colors.cyan.600": {
    "value": "#0891b2",
    "variable": "var(--colors-cyan-600)"
  },
  "colors.cyan.700": {
    "value": "#0e7490",
    "variable": "var(--colors-cyan-700)"
  },
  "colors.cyan.800": {
    "value": "#155e75",
    "variable": "var(--colors-cyan-800)"
  },
  "colors.cyan.900": {
    "value": "#164e63",
    "variable": "var(--colors-cyan-900)"
  },
  "colors.cyan.950": {
    "value": "#083344",
    "variable": "var(--colors-cyan-950)"
  },
  "colors.teal.50": {
    "value": "#f0fdfa",
    "variable": "var(--colors-teal-50)"
  },
  "colors.teal.100": {
    "value": "#ccfbf1",
    "variable": "var(--colors-teal-100)"
  },
  "colors.teal.200": {
    "value": "#99f6e4",
    "variable": "var(--colors-teal-200)"
  },
  "colors.teal.300": {
    "value": "#5eead4",
    "variable": "var(--colors-teal-300)"
  },
  "colors.teal.400": {
    "value": "#2dd4bf",
    "variable": "var(--colors-teal-400)"
  },
  "colors.teal.500": {
    "value": "#14b8a6",
    "variable": "var(--colors-teal-500)"
  },
  "colors.teal.600": {
    "value": "#0d9488",
    "variable": "var(--colors-teal-600)"
  },
  "colors.teal.700": {
    "value": "#0f766e",
    "variable": "var(--colors-teal-700)"
  },
  "colors.teal.800": {
    "value": "#115e59",
    "variable": "var(--colors-teal-800)"
  },
  "colors.teal.900": {
    "value": "#134e4a",
    "variable": "var(--colors-teal-900)"
  },
  "colors.teal.950": {
    "value": "#042f2e",
    "variable": "var(--colors-teal-950)"
  },
  "colors.emerald.50": {
    "value": "#ecfdf5",
    "variable": "var(--colors-emerald-50)"
  },
  "colors.emerald.100": {
    "value": "#d1fae5",
    "variable": "var(--colors-emerald-100)"
  },
  "colors.emerald.200": {
    "value": "#a7f3d0",
    "variable": "var(--colors-emerald-200)"
  },
  "colors.emerald.300": {
    "value": "#6ee7b7",
    "variable": "var(--colors-emerald-300)"
  },
  "colors.emerald.400": {
    "value": "#34d399",
    "variable": "var(--colors-emerald-400)"
  },
  "colors.emerald.500": {
    "value": "#10b981",
    "variable": "var(--colors-emerald-500)"
  },
  "colors.emerald.600": {
    "value": "#059669",
    "variable": "var(--colors-emerald-600)"
  },
  "colors.emerald.700": {
    "value": "#047857",
    "variable": "var(--colors-emerald-700)"
  },
  "colors.emerald.800": {
    "value": "#065f46",
    "variable": "var(--colors-emerald-800)"
  },
  "colors.emerald.900": {
    "value": "#064e3b",
    "variable": "var(--colors-emerald-900)"
  },
  "colors.emerald.950": {
    "value": "#022c22",
    "variable": "var(--colors-emerald-950)"
  },
  "colors.green.50": {
    "value": "#f0fdf4",
    "variable": "var(--colors-green-50)"
  },
  "colors.green.100": {
    "value": "#dcfce7",
    "variable": "var(--colors-green-100)"
  },
  "colors.green.200": {
    "value": "#bbf7d0",
    "variable": "var(--colors-green-200)"
  },
  "colors.green.300": {
    "value": "#86efac",
    "variable": "var(--colors-green-300)"
  },
  "colors.green.400": {
    "value": "#4ade80",
    "variable": "var(--colors-green-400)"
  },
  "colors.green.500": {
    "value": "#22c55e",
    "variable": "var(--colors-green-500)"
  },
  "colors.green.600": {
    "value": "#16a34a",
    "variable": "var(--colors-green-600)"
  },
  "colors.green.700": {
    "value": "#15803d",
    "variable": "var(--colors-green-700)"
  },
  "colors.green.800": {
    "value": "#166534",
    "variable": "var(--colors-green-800)"
  },
  "colors.green.900": {
    "value": "#14532d",
    "variable": "var(--colors-green-900)"
  },
  "colors.green.950": {
    "value": "#052e16",
    "variable": "var(--colors-green-950)"
  },
  "colors.lime.50": {
    "value": "#f7fee7",
    "variable": "var(--colors-lime-50)"
  },
  "colors.lime.100": {
    "value": "#ecfccb",
    "variable": "var(--colors-lime-100)"
  },
  "colors.lime.200": {
    "value": "#d9f99d",
    "variable": "var(--colors-lime-200)"
  },
  "colors.lime.300": {
    "value": "#bef264",
    "variable": "var(--colors-lime-300)"
  },
  "colors.lime.400": {
    "value": "#a3e635",
    "variable": "var(--colors-lime-400)"
  },
  "colors.lime.500": {
    "value": "#84cc16",
    "variable": "var(--colors-lime-500)"
  },
  "colors.lime.600": {
    "value": "#65a30d",
    "variable": "var(--colors-lime-600)"
  },
  "colors.lime.700": {
    "value": "#4d7c0f",
    "variable": "var(--colors-lime-700)"
  },
  "colors.lime.800": {
    "value": "#3f6212",
    "variable": "var(--colors-lime-800)"
  },
  "colors.lime.900": {
    "value": "#365314",
    "variable": "var(--colors-lime-900)"
  },
  "colors.lime.950": {
    "value": "#1a2e05",
    "variable": "var(--colors-lime-950)"
  },
  "colors.yellow.50": {
    "value": "#fefce8",
    "variable": "var(--colors-yellow-50)"
  },
  "colors.yellow.100": {
    "value": "#fef9c3",
    "variable": "var(--colors-yellow-100)"
  },
  "colors.yellow.200": {
    "value": "#fef08a",
    "variable": "var(--colors-yellow-200)"
  },
  "colors.yellow.300": {
    "value": "#fde047",
    "variable": "var(--colors-yellow-300)"
  },
  "colors.yellow.400": {
    "value": "#facc15",
    "variable": "var(--colors-yellow-400)"
  },
  "colors.yellow.500": {
    "value": "#eab308",
    "variable": "var(--colors-yellow-500)"
  },
  "colors.yellow.600": {
    "value": "#ca8a04",
    "variable": "var(--colors-yellow-600)"
  },
  "colors.yellow.700": {
    "value": "#a16207",
    "variable": "var(--colors-yellow-700)"
  },
  "colors.yellow.800": {
    "value": "#854d0e",
    "variable": "var(--colors-yellow-800)"
  },
  "colors.yellow.900": {
    "value": "#713f12",
    "variable": "var(--colors-yellow-900)"
  },
  "colors.yellow.950": {
    "value": "#422006",
    "variable": "var(--colors-yellow-950)"
  },
  "colors.amber.50": {
    "value": "#fffbeb",
    "variable": "var(--colors-amber-50)"
  },
  "colors.amber.100": {
    "value": "#fef3c7",
    "variable": "var(--colors-amber-100)"
  },
  "colors.amber.200": {
    "value": "#fde68a",
    "variable": "var(--colors-amber-200)"
  },
  "colors.amber.300": {
    "value": "#fcd34d",
    "variable": "var(--colors-amber-300)"
  },
  "colors.amber.400": {
    "value": "#fbbf24",
    "variable": "var(--colors-amber-400)"
  },
  "colors.amber.500": {
    "value": "#f59e0b",
    "variable": "var(--colors-amber-500)"
  },
  "colors.amber.600": {
    "value": "#d97706",
    "variable": "var(--colors-amber-600)"
  },
  "colors.amber.700": {
    "value": "#b45309",
    "variable": "var(--colors-amber-700)"
  },
  "colors.amber.800": {
    "value": "#92400e",
    "variable": "var(--colors-amber-800)"
  },
  "colors.amber.900": {
    "value": "#78350f",
    "variable": "var(--colors-amber-900)"
  },
  "colors.amber.950": {
    "value": "#451a03",
    "variable": "var(--colors-amber-950)"
  },
  "colors.orange.50": {
    "value": "#fff7ed",
    "variable": "var(--colors-orange-50)"
  },
  "colors.orange.100": {
    "value": "#ffedd5",
    "variable": "var(--colors-orange-100)"
  },
  "colors.orange.200": {
    "value": "#fed7aa",
    "variable": "var(--colors-orange-200)"
  },
  "colors.orange.300": {
    "value": "#fdba74",
    "variable": "var(--colors-orange-300)"
  },
  "colors.orange.400": {
    "value": "#fb923c",
    "variable": "var(--colors-orange-400)"
  },
  "colors.orange.500": {
    "value": "#f97316",
    "variable": "var(--colors-orange-500)"
  },
  "colors.orange.600": {
    "value": "#ea580c",
    "variable": "var(--colors-orange-600)"
  },
  "colors.orange.700": {
    "value": "#c2410c",
    "variable": "var(--colors-orange-700)"
  },
  "colors.orange.800": {
    "value": "#9a3412",
    "variable": "var(--colors-orange-800)"
  },
  "colors.orange.900": {
    "value": "#7c2d12",
    "variable": "var(--colors-orange-900)"
  },
  "colors.orange.950": {
    "value": "#431407",
    "variable": "var(--colors-orange-950)"
  },
  "colors.red.50": {
    "value": "#fef2f2",
    "variable": "var(--colors-red-50)"
  },
  "colors.red.100": {
    "value": "#fee2e2",
    "variable": "var(--colors-red-100)"
  },
  "colors.red.200": {
    "value": "#fecaca",
    "variable": "var(--colors-red-200)"
  },
  "colors.red.300": {
    "value": "#fca5a5",
    "variable": "var(--colors-red-300)"
  },
  "colors.red.400": {
    "value": "#f87171",
    "variable": "var(--colors-red-400)"
  },
  "colors.red.500": {
    "value": "#ef4444",
    "variable": "var(--colors-red-500)"
  },
  "colors.red.600": {
    "value": "#dc2626",
    "variable": "var(--colors-red-600)"
  },
  "colors.red.700": {
    "value": "#b91c1c",
    "variable": "var(--colors-red-700)"
  },
  "colors.red.800": {
    "value": "#991b1b",
    "variable": "var(--colors-red-800)"
  },
  "colors.red.900": {
    "value": "#7f1d1d",
    "variable": "var(--colors-red-900)"
  },
  "colors.red.950": {
    "value": "#450a0a",
    "variable": "var(--colors-red-950)"
  },
  "colors.neutral.50": {
    "value": "#fafafa",
    "variable": "var(--colors-neutral-50)"
  },
  "colors.neutral.100": {
    "value": "#f5f5f5",
    "variable": "var(--colors-neutral-100)"
  },
  "colors.neutral.200": {
    "value": "#e5e5e5",
    "variable": "var(--colors-neutral-200)"
  },
  "colors.neutral.300": {
    "value": "#d4d4d4",
    "variable": "var(--colors-neutral-300)"
  },
  "colors.neutral.400": {
    "value": "#a3a3a3",
    "variable": "var(--colors-neutral-400)"
  },
  "colors.neutral.500": {
    "value": "#737373",
    "variable": "var(--colors-neutral-500)"
  },
  "colors.neutral.600": {
    "value": "#525252",
    "variable": "var(--colors-neutral-600)"
  },
  "colors.neutral.700": {
    "value": "#404040",
    "variable": "var(--colors-neutral-700)"
  },
  "colors.neutral.800": {
    "value": "#262626",
    "variable": "var(--colors-neutral-800)"
  },
  "colors.neutral.900": {
    "value": "#171717",
    "variable": "var(--colors-neutral-900)"
  },
  "colors.neutral.950": {
    "value": "#0a0a0a",
    "variable": "var(--colors-neutral-950)"
  },
  "colors.stone.50": {
    "value": "#fafaf9",
    "variable": "var(--colors-stone-50)"
  },
  "colors.stone.100": {
    "value": "#f5f5f4",
    "variable": "var(--colors-stone-100)"
  },
  "colors.stone.200": {
    "value": "#e7e5e4",
    "variable": "var(--colors-stone-200)"
  },
  "colors.stone.300": {
    "value": "#d6d3d1",
    "variable": "var(--colors-stone-300)"
  },
  "colors.stone.400": {
    "value": "#a8a29e",
    "variable": "var(--colors-stone-400)"
  },
  "colors.stone.500": {
    "value": "#78716c",
    "variable": "var(--colors-stone-500)"
  },
  "colors.stone.600": {
    "value": "#57534e",
    "variable": "var(--colors-stone-600)"
  },
  "colors.stone.700": {
    "value": "#44403c",
    "variable": "var(--colors-stone-700)"
  },
  "colors.stone.800": {
    "value": "#292524",
    "variable": "var(--colors-stone-800)"
  },
  "colors.stone.900": {
    "value": "#1c1917",
    "variable": "var(--colors-stone-900)"
  },
  "colors.stone.950": {
    "value": "#0c0a09",
    "variable": "var(--colors-stone-950)"
  },
  "colors.zinc.50": {
    "value": "#fafafa",
    "variable": "var(--colors-zinc-50)"
  },
  "colors.zinc.100": {
    "value": "#f4f4f5",
    "variable": "var(--colors-zinc-100)"
  },
  "colors.zinc.200": {
    "value": "#e4e4e7",
    "variable": "var(--colors-zinc-200)"
  },
  "colors.zinc.300": {
    "value": "#d4d4d8",
    "variable": "var(--colors-zinc-300)"
  },
  "colors.zinc.400": {
    "value": "#a1a1aa",
    "variable": "var(--colors-zinc-400)"
  },
  "colors.zinc.500": {
    "value": "#71717a",
    "variable": "var(--colors-zinc-500)"
  },
  "colors.zinc.600": {
    "value": "#52525b",
    "variable": "var(--colors-zinc-600)"
  },
  "colors.zinc.700": {
    "value": "#3f3f46",
    "variable": "var(--colors-zinc-700)"
  },
  "colors.zinc.800": {
    "value": "#27272a",
    "variable": "var(--colors-zinc-800)"
  },
  "colors.zinc.900": {
    "value": "#18181b",
    "variable": "var(--colors-zinc-900)"
  },
  "colors.zinc.950": {
    "value": "#09090b",
    "variable": "var(--colors-zinc-950)"
  },
  "colors.gray.50": {
    "value": "#f9fafb",
    "variable": "var(--colors-gray-50)"
  },
  "colors.gray.100": {
    "value": "#f3f4f6",
    "variable": "var(--colors-gray-100)"
  },
  "colors.gray.200": {
    "value": "#e5e7eb",
    "variable": "var(--colors-gray-200)"
  },
  "colors.gray.300": {
    "value": "#d1d5db",
    "variable": "var(--colors-gray-300)"
  },
  "colors.gray.400": {
    "value": "#9ca3af",
    "variable": "var(--colors-gray-400)"
  },
  "colors.gray.500": {
    "value": "#6b7280",
    "variable": "var(--colors-gray-500)"
  },
  "colors.gray.600": {
    "value": "#4b5563",
    "variable": "var(--colors-gray-600)"
  },
  "colors.gray.700": {
    "value": "#374151",
    "variable": "var(--colors-gray-700)"
  },
  "colors.gray.800": {
    "value": "#1f2937",
    "variable": "var(--colors-gray-800)"
  },
  "colors.gray.900": {
    "value": "#111827",
    "variable": "var(--colors-gray-900)"
  },
  "colors.gray.950": {
    "value": "#030712",
    "variable": "var(--colors-gray-950)"
  },
  "colors.slate.50": {
    "value": "#f8fafc",
    "variable": "var(--colors-slate-50)"
  },
  "colors.slate.100": {
    "value": "#f1f5f9",
    "variable": "var(--colors-slate-100)"
  },
  "colors.slate.200": {
    "value": "#e2e8f0",
    "variable": "var(--colors-slate-200)"
  },
  "colors.slate.300": {
    "value": "#cbd5e1",
    "variable": "var(--colors-slate-300)"
  },
  "colors.slate.400": {
    "value": "#94a3b8",
    "variable": "var(--colors-slate-400)"
  },
  "colors.slate.500": {
    "value": "#64748b",
    "variable": "var(--colors-slate-500)"
  },
  "colors.slate.600": {
    "value": "#475569",
    "variable": "var(--colors-slate-600)"
  },
  "colors.slate.700": {
    "value": "#334155",
    "variable": "var(--colors-slate-700)"
  },
  "colors.slate.800": {
    "value": "#1e293b",
    "variable": "var(--colors-slate-800)"
  },
  "colors.slate.900": {
    "value": "#0f172a",
    "variable": "var(--colors-slate-900)"
  },
  "colors.slate.950": {
    "value": "#020617",
    "variable": "var(--colors-slate-950)"
  },
  "blurs.sm": {
    "value": "4px",
    "variable": "var(--blurs-sm)"
  },
  "blurs.base": {
    "value": "8px",
    "variable": "var(--blurs-base)"
  },
  "blurs.md": {
    "value": "12px",
    "variable": "var(--blurs-md)"
  },
  "blurs.lg": {
    "value": "16px",
    "variable": "var(--blurs-lg)"
  },
  "blurs.xl": {
    "value": "24px",
    "variable": "var(--blurs-xl)"
  },
  "blurs.2xl": {
    "value": "40px",
    "variable": "var(--blurs-2xl)"
  },
  "blurs.3xl": {
    "value": "64px",
    "variable": "var(--blurs-3xl)"
  },
  "spacing.0": {
    "value": "0rem",
    "variable": "var(--spacing-0)"
  },
  "spacing.1": {
    "value": "0.25rem",
    "variable": "var(--spacing-1)"
  },
  "spacing.2": {
    "value": "0.5rem",
    "variable": "var(--spacing-2)"
  },
  "spacing.3": {
    "value": "0.75rem",
    "variable": "var(--spacing-3)"
  },
  "spacing.4": {
    "value": "1rem",
    "variable": "var(--spacing-4)"
  },
  "spacing.5": {
    "value": "1.25rem",
    "variable": "var(--spacing-5)"
  },
  "spacing.6": {
    "value": "1.5rem",
    "variable": "var(--spacing-6)"
  },
  "spacing.7": {
    "value": "1.75rem",
    "variable": "var(--spacing-7)"
  },
  "spacing.8": {
    "value": "2rem",
    "variable": "var(--spacing-8)"
  },
  "spacing.9": {
    "value": "2.25rem",
    "variable": "var(--spacing-9)"
  },
  "spacing.10": {
    "value": "2.5rem",
    "variable": "var(--spacing-10)"
  },
  "spacing.11": {
    "value": "2.75rem",
    "variable": "var(--spacing-11)"
  },
  "spacing.12": {
    "value": "3rem",
    "variable": "var(--spacing-12)"
  },
  "spacing.14": {
    "value": "3.5rem",
    "variable": "var(--spacing-14)"
  },
  "spacing.16": {
    "value": "4rem",
    "variable": "var(--spacing-16)"
  },
  "spacing.20": {
    "value": "5rem",
    "variable": "var(--spacing-20)"
  },
  "spacing.24": {
    "value": "6rem",
    "variable": "var(--spacing-24)"
  },
  "spacing.28": {
    "value": "7rem",
    "variable": "var(--spacing-28)"
  },
  "spacing.32": {
    "value": "8rem",
    "variable": "var(--spacing-32)"
  },
  "spacing.36": {
    "value": "9rem",
    "variable": "var(--spacing-36)"
  },
  "spacing.40": {
    "value": "10rem",
    "variable": "var(--spacing-40)"
  },
  "spacing.44": {
    "value": "11rem",
    "variable": "var(--spacing-44)"
  },
  "spacing.48": {
    "value": "12rem",
    "variable": "var(--spacing-48)"
  },
  "spacing.52": {
    "value": "13rem",
    "variable": "var(--spacing-52)"
  },
  "spacing.56": {
    "value": "14rem",
    "variable": "var(--spacing-56)"
  },
  "spacing.60": {
    "value": "15rem",
    "variable": "var(--spacing-60)"
  },
  "spacing.64": {
    "value": "16rem",
    "variable": "var(--spacing-64)"
  },
  "spacing.72": {
    "value": "18rem",
    "variable": "var(--spacing-72)"
  },
  "spacing.80": {
    "value": "20rem",
    "variable": "var(--spacing-80)"
  },
  "spacing.96": {
    "value": "24rem",
    "variable": "var(--spacing-96)"
  },
  "spacing.xs": {
    "value": "0.625rem",
    "variable": "var(--spacing-xs)"
  },
  "spacing.sm": {
    "value": "0.75rem",
    "variable": "var(--spacing-sm)"
  },
  "spacing.md": {
    "value": "1rem",
    "variable": "var(--spacing-md)"
  },
  "spacing.lg": {
    "value": "1.25rem",
    "variable": "var(--spacing-lg)"
  },
  "spacing.xl": {
    "value": "2rem",
    "variable": "var(--spacing-xl)"
  },
  "spacing.0.5": {
    "value": "0.125rem",
    "variable": "var(--spacing-0\\.5)"
  },
  "spacing.1.5": {
    "value": "0.375rem",
    "variable": "var(--spacing-1\\.5)"
  },
  "spacing.2.5": {
    "value": "0.625rem",
    "variable": "var(--spacing-2\\.5)"
  },
  "spacing.3.5": {
    "value": "0.875rem",
    "variable": "var(--spacing-3\\.5)"
  },
  "sizes.0": {
    "value": "0rem",
    "variable": "var(--sizes-0)"
  },
  "sizes.1": {
    "value": "0.25rem",
    "variable": "var(--sizes-1)"
  },
  "sizes.2": {
    "value": "0.5rem",
    "variable": "var(--sizes-2)"
  },
  "sizes.3": {
    "value": "0.75rem",
    "variable": "var(--sizes-3)"
  },
  "sizes.4": {
    "value": "1rem",
    "variable": "var(--sizes-4)"
  },
  "sizes.5": {
    "value": "1.25rem",
    "variable": "var(--sizes-5)"
  },
  "sizes.6": {
    "value": "1.5rem",
    "variable": "var(--sizes-6)"
  },
  "sizes.7": {
    "value": "1.75rem",
    "variable": "var(--sizes-7)"
  },
  "sizes.8": {
    "value": "2rem",
    "variable": "var(--sizes-8)"
  },
  "sizes.9": {
    "value": "2.25rem",
    "variable": "var(--sizes-9)"
  },
  "sizes.10": {
    "value": "2.5rem",
    "variable": "var(--sizes-10)"
  },
  "sizes.11": {
    "value": "2.75rem",
    "variable": "var(--sizes-11)"
  },
  "sizes.12": {
    "value": "3rem",
    "variable": "var(--sizes-12)"
  },
  "sizes.14": {
    "value": "3.5rem",
    "variable": "var(--sizes-14)"
  },
  "sizes.16": {
    "value": "4rem",
    "variable": "var(--sizes-16)"
  },
  "sizes.20": {
    "value": "5rem",
    "variable": "var(--sizes-20)"
  },
  "sizes.24": {
    "value": "6rem",
    "variable": "var(--sizes-24)"
  },
  "sizes.28": {
    "value": "7rem",
    "variable": "var(--sizes-28)"
  },
  "sizes.32": {
    "value": "8rem",
    "variable": "var(--sizes-32)"
  },
  "sizes.36": {
    "value": "9rem",
    "variable": "var(--sizes-36)"
  },
  "sizes.40": {
    "value": "10rem",
    "variable": "var(--sizes-40)"
  },
  "sizes.44": {
    "value": "11rem",
    "variable": "var(--sizes-44)"
  },
  "sizes.48": {
    "value": "12rem",
    "variable": "var(--sizes-48)"
  },
  "sizes.52": {
    "value": "13rem",
    "variable": "var(--sizes-52)"
  },
  "sizes.56": {
    "value": "14rem",
    "variable": "var(--sizes-56)"
  },
  "sizes.60": {
    "value": "15rem",
    "variable": "var(--sizes-60)"
  },
  "sizes.64": {
    "value": "16rem",
    "variable": "var(--sizes-64)"
  },
  "sizes.72": {
    "value": "18rem",
    "variable": "var(--sizes-72)"
  },
  "sizes.80": {
    "value": "20rem",
    "variable": "var(--sizes-80)"
  },
  "sizes.96": {
    "value": "24rem",
    "variable": "var(--sizes-96)"
  },
  "sizes.xs": {
    "value": "20rem",
    "variable": "var(--sizes-xs)"
  },
  "sizes.sm": {
    "value": "24rem",
    "variable": "var(--sizes-sm)"
  },
  "sizes.md": {
    "value": "28rem",
    "variable": "var(--sizes-md)"
  },
  "sizes.lg": {
    "value": "32rem",
    "variable": "var(--sizes-lg)"
  },
  "sizes.xl": {
    "value": "36rem",
    "variable": "var(--sizes-xl)"
  },
  "sizes.0.5": {
    "value": "0.125rem",
    "variable": "var(--sizes-0\\.5)"
  },
  "sizes.1.5": {
    "value": "0.375rem",
    "variable": "var(--sizes-1\\.5)"
  },
  "sizes.2.5": {
    "value": "0.625rem",
    "variable": "var(--sizes-2\\.5)"
  },
  "sizes.3.5": {
    "value": "0.875rem",
    "variable": "var(--sizes-3\\.5)"
  },
  "sizes.2xl": {
    "value": "42rem",
    "variable": "var(--sizes-2xl)"
  },
  "sizes.3xl": {
    "value": "48rem",
    "variable": "var(--sizes-3xl)"
  },
  "sizes.4xl": {
    "value": "56rem",
    "variable": "var(--sizes-4xl)"
  },
  "sizes.5xl": {
    "value": "64rem",
    "variable": "var(--sizes-5xl)"
  },
  "sizes.6xl": {
    "value": "72rem",
    "variable": "var(--sizes-6xl)"
  },
  "sizes.7xl": {
    "value": "80rem",
    "variable": "var(--sizes-7xl)"
  },
  "sizes.8xl": {
    "value": "90rem",
    "variable": "var(--sizes-8xl)"
  },
  "sizes.prose": {
    "value": "65ch",
    "variable": "var(--sizes-prose)"
  },
  "sizes.full": {
    "value": "100%",
    "variable": "var(--sizes-full)"
  },
  "sizes.min": {
    "value": "min-content",
    "variable": "var(--sizes-min)"
  },
  "sizes.max": {
    "value": "max-content",
    "variable": "var(--sizes-max)"
  },
  "sizes.fit": {
    "value": "fit-content",
    "variable": "var(--sizes-fit)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "animations.spin": {
    "value": "spin 1s linear infinite",
    "variable": "var(--animations-spin)"
  },
  "animations.ping": {
    "value": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    "variable": "var(--animations-ping)"
  },
  "animations.pulse": {
    "value": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    "variable": "var(--animations-pulse)"
  },
  "animations.bounce": {
    "value": "bounce 1s infinite",
    "variable": "var(--animations-bounce)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "colors.Box.color": {
    "value": "var(--colors--box-color)",
    "variable": "var(--colors--box-color)"
  },
  "colors.Box.bg": {
    "value": "var(--colors--box-bg)",
    "variable": "var(--colors--box-bg)"
  },
  "colors.rose.ButtonFilled": {
    "value": "var(--colors-rose--button-filled)",
    "variable": "var(--colors-rose--button-filled)"
  },
  "colors.rose.ButtonFilledHover": {
    "value": "var(--colors-rose--button-filled-hover)",
    "variable": "var(--colors-rose--button-filled-hover)"
  },
  "colors.rose.ButtonFilledActive": {
    "value": "var(--colors-rose--button-filled-active)",
    "variable": "var(--colors-rose--button-filled-active)"
  },
  "colors.rose.ButtonLight": {
    "value": "var(--colors-rose--button-light)",
    "variable": "var(--colors-rose--button-light)"
  },
  "colors.rose.ButtonLightHover": {
    "value": "var(--colors-rose--button-light-hover)",
    "variable": "var(--colors-rose--button-light-hover)"
  },
  "colors.rose.ButtonLightActive": {
    "value": "var(--colors-rose--button-light-active)",
    "variable": "var(--colors-rose--button-light-active)"
  },
  "colors.rose.ButtonLightColor": {
    "value": "var(--colors-rose--button-light-color)",
    "variable": "var(--colors-rose--button-light-color)"
  },
  "colors.rose.ButtonOutline": {
    "value": "var(--colors-rose--button-outline)",
    "variable": "var(--colors-rose--button-outline)"
  },
  "colors.rose.ButtonOutlineHover": {
    "value": "var(--colors-rose--button-outline-hover)",
    "variable": "var(--colors-rose--button-outline-hover)"
  },
  "colors.rose.ButtonOutlineActive": {
    "value": "var(--colors-rose--button-outline-active)",
    "variable": "var(--colors-rose--button-outline-active)"
  },
  "colors.pink.ButtonFilled": {
    "value": "var(--colors-pink--button-filled)",
    "variable": "var(--colors-pink--button-filled)"
  },
  "colors.pink.ButtonFilledHover": {
    "value": "var(--colors-pink--button-filled-hover)",
    "variable": "var(--colors-pink--button-filled-hover)"
  },
  "colors.pink.ButtonFilledActive": {
    "value": "var(--colors-pink--button-filled-active)",
    "variable": "var(--colors-pink--button-filled-active)"
  },
  "colors.pink.ButtonLight": {
    "value": "var(--colors-pink--button-light)",
    "variable": "var(--colors-pink--button-light)"
  },
  "colors.pink.ButtonLightHover": {
    "value": "var(--colors-pink--button-light-hover)",
    "variable": "var(--colors-pink--button-light-hover)"
  },
  "colors.pink.ButtonLightActive": {
    "value": "var(--colors-pink--button-light-active)",
    "variable": "var(--colors-pink--button-light-active)"
  },
  "colors.pink.ButtonLightColor": {
    "value": "var(--colors-pink--button-light-color)",
    "variable": "var(--colors-pink--button-light-color)"
  },
  "colors.pink.ButtonOutline": {
    "value": "var(--colors-pink--button-outline)",
    "variable": "var(--colors-pink--button-outline)"
  },
  "colors.pink.ButtonOutlineHover": {
    "value": "var(--colors-pink--button-outline-hover)",
    "variable": "var(--colors-pink--button-outline-hover)"
  },
  "colors.pink.ButtonOutlineActive": {
    "value": "var(--colors-pink--button-outline-active)",
    "variable": "var(--colors-pink--button-outline-active)"
  },
  "colors.fuchsia.ButtonFilled": {
    "value": "var(--colors-fuchsia--button-filled)",
    "variable": "var(--colors-fuchsia--button-filled)"
  },
  "colors.fuchsia.ButtonFilledHover": {
    "value": "var(--colors-fuchsia--button-filled-hover)",
    "variable": "var(--colors-fuchsia--button-filled-hover)"
  },
  "colors.fuchsia.ButtonFilledActive": {
    "value": "var(--colors-fuchsia--button-filled-active)",
    "variable": "var(--colors-fuchsia--button-filled-active)"
  },
  "colors.fuchsia.ButtonLight": {
    "value": "var(--colors-fuchsia--button-light)",
    "variable": "var(--colors-fuchsia--button-light)"
  },
  "colors.fuchsia.ButtonLightHover": {
    "value": "var(--colors-fuchsia--button-light-hover)",
    "variable": "var(--colors-fuchsia--button-light-hover)"
  },
  "colors.fuchsia.ButtonLightActive": {
    "value": "var(--colors-fuchsia--button-light-active)",
    "variable": "var(--colors-fuchsia--button-light-active)"
  },
  "colors.fuchsia.ButtonLightColor": {
    "value": "var(--colors-fuchsia--button-light-color)",
    "variable": "var(--colors-fuchsia--button-light-color)"
  },
  "colors.fuchsia.ButtonOutline": {
    "value": "var(--colors-fuchsia--button-outline)",
    "variable": "var(--colors-fuchsia--button-outline)"
  },
  "colors.fuchsia.ButtonOutlineHover": {
    "value": "var(--colors-fuchsia--button-outline-hover)",
    "variable": "var(--colors-fuchsia--button-outline-hover)"
  },
  "colors.fuchsia.ButtonOutlineActive": {
    "value": "var(--colors-fuchsia--button-outline-active)",
    "variable": "var(--colors-fuchsia--button-outline-active)"
  },
  "colors.purple.ButtonFilled": {
    "value": "var(--colors-purple--button-filled)",
    "variable": "var(--colors-purple--button-filled)"
  },
  "colors.purple.ButtonFilledHover": {
    "value": "var(--colors-purple--button-filled-hover)",
    "variable": "var(--colors-purple--button-filled-hover)"
  },
  "colors.purple.ButtonFilledActive": {
    "value": "var(--colors-purple--button-filled-active)",
    "variable": "var(--colors-purple--button-filled-active)"
  },
  "colors.purple.ButtonLight": {
    "value": "var(--colors-purple--button-light)",
    "variable": "var(--colors-purple--button-light)"
  },
  "colors.purple.ButtonLightHover": {
    "value": "var(--colors-purple--button-light-hover)",
    "variable": "var(--colors-purple--button-light-hover)"
  },
  "colors.purple.ButtonLightActive": {
    "value": "var(--colors-purple--button-light-active)",
    "variable": "var(--colors-purple--button-light-active)"
  },
  "colors.purple.ButtonLightColor": {
    "value": "var(--colors-purple--button-light-color)",
    "variable": "var(--colors-purple--button-light-color)"
  },
  "colors.purple.ButtonOutline": {
    "value": "var(--colors-purple--button-outline)",
    "variable": "var(--colors-purple--button-outline)"
  },
  "colors.purple.ButtonOutlineHover": {
    "value": "var(--colors-purple--button-outline-hover)",
    "variable": "var(--colors-purple--button-outline-hover)"
  },
  "colors.purple.ButtonOutlineActive": {
    "value": "var(--colors-purple--button-outline-active)",
    "variable": "var(--colors-purple--button-outline-active)"
  },
  "colors.violet.ButtonFilled": {
    "value": "var(--colors-violet--button-filled)",
    "variable": "var(--colors-violet--button-filled)"
  },
  "colors.violet.ButtonFilledHover": {
    "value": "var(--colors-violet--button-filled-hover)",
    "variable": "var(--colors-violet--button-filled-hover)"
  },
  "colors.violet.ButtonFilledActive": {
    "value": "var(--colors-violet--button-filled-active)",
    "variable": "var(--colors-violet--button-filled-active)"
  },
  "colors.violet.ButtonLight": {
    "value": "var(--colors-violet--button-light)",
    "variable": "var(--colors-violet--button-light)"
  },
  "colors.violet.ButtonLightHover": {
    "value": "var(--colors-violet--button-light-hover)",
    "variable": "var(--colors-violet--button-light-hover)"
  },
  "colors.violet.ButtonLightActive": {
    "value": "var(--colors-violet--button-light-active)",
    "variable": "var(--colors-violet--button-light-active)"
  },
  "colors.violet.ButtonLightColor": {
    "value": "var(--colors-violet--button-light-color)",
    "variable": "var(--colors-violet--button-light-color)"
  },
  "colors.violet.ButtonOutline": {
    "value": "var(--colors-violet--button-outline)",
    "variable": "var(--colors-violet--button-outline)"
  },
  "colors.violet.ButtonOutlineHover": {
    "value": "var(--colors-violet--button-outline-hover)",
    "variable": "var(--colors-violet--button-outline-hover)"
  },
  "colors.violet.ButtonOutlineActive": {
    "value": "var(--colors-violet--button-outline-active)",
    "variable": "var(--colors-violet--button-outline-active)"
  },
  "colors.indigo.ButtonFilled": {
    "value": "var(--colors-indigo--button-filled)",
    "variable": "var(--colors-indigo--button-filled)"
  },
  "colors.indigo.ButtonFilledHover": {
    "value": "var(--colors-indigo--button-filled-hover)",
    "variable": "var(--colors-indigo--button-filled-hover)"
  },
  "colors.indigo.ButtonFilledActive": {
    "value": "var(--colors-indigo--button-filled-active)",
    "variable": "var(--colors-indigo--button-filled-active)"
  },
  "colors.indigo.ButtonLight": {
    "value": "var(--colors-indigo--button-light)",
    "variable": "var(--colors-indigo--button-light)"
  },
  "colors.indigo.ButtonLightHover": {
    "value": "var(--colors-indigo--button-light-hover)",
    "variable": "var(--colors-indigo--button-light-hover)"
  },
  "colors.indigo.ButtonLightActive": {
    "value": "var(--colors-indigo--button-light-active)",
    "variable": "var(--colors-indigo--button-light-active)"
  },
  "colors.indigo.ButtonLightColor": {
    "value": "var(--colors-indigo--button-light-color)",
    "variable": "var(--colors-indigo--button-light-color)"
  },
  "colors.indigo.ButtonOutline": {
    "value": "var(--colors-indigo--button-outline)",
    "variable": "var(--colors-indigo--button-outline)"
  },
  "colors.indigo.ButtonOutlineHover": {
    "value": "var(--colors-indigo--button-outline-hover)",
    "variable": "var(--colors-indigo--button-outline-hover)"
  },
  "colors.indigo.ButtonOutlineActive": {
    "value": "var(--colors-indigo--button-outline-active)",
    "variable": "var(--colors-indigo--button-outline-active)"
  },
  "colors.blue.ButtonFilled": {
    "value": "var(--colors-blue--button-filled)",
    "variable": "var(--colors-blue--button-filled)"
  },
  "colors.blue.ButtonFilledHover": {
    "value": "var(--colors-blue--button-filled-hover)",
    "variable": "var(--colors-blue--button-filled-hover)"
  },
  "colors.blue.ButtonFilledActive": {
    "value": "var(--colors-blue--button-filled-active)",
    "variable": "var(--colors-blue--button-filled-active)"
  },
  "colors.blue.ButtonLight": {
    "value": "var(--colors-blue--button-light)",
    "variable": "var(--colors-blue--button-light)"
  },
  "colors.blue.ButtonLightHover": {
    "value": "var(--colors-blue--button-light-hover)",
    "variable": "var(--colors-blue--button-light-hover)"
  },
  "colors.blue.ButtonLightActive": {
    "value": "var(--colors-blue--button-light-active)",
    "variable": "var(--colors-blue--button-light-active)"
  },
  "colors.blue.ButtonLightColor": {
    "value": "var(--colors-blue--button-light-color)",
    "variable": "var(--colors-blue--button-light-color)"
  },
  "colors.blue.ButtonOutline": {
    "value": "var(--colors-blue--button-outline)",
    "variable": "var(--colors-blue--button-outline)"
  },
  "colors.blue.ButtonOutlineHover": {
    "value": "var(--colors-blue--button-outline-hover)",
    "variable": "var(--colors-blue--button-outline-hover)"
  },
  "colors.blue.ButtonOutlineActive": {
    "value": "var(--colors-blue--button-outline-active)",
    "variable": "var(--colors-blue--button-outline-active)"
  },
  "colors.sky.ButtonFilled": {
    "value": "var(--colors-sky--button-filled)",
    "variable": "var(--colors-sky--button-filled)"
  },
  "colors.sky.ButtonFilledHover": {
    "value": "var(--colors-sky--button-filled-hover)",
    "variable": "var(--colors-sky--button-filled-hover)"
  },
  "colors.sky.ButtonFilledActive": {
    "value": "var(--colors-sky--button-filled-active)",
    "variable": "var(--colors-sky--button-filled-active)"
  },
  "colors.sky.ButtonLight": {
    "value": "var(--colors-sky--button-light)",
    "variable": "var(--colors-sky--button-light)"
  },
  "colors.sky.ButtonLightHover": {
    "value": "var(--colors-sky--button-light-hover)",
    "variable": "var(--colors-sky--button-light-hover)"
  },
  "colors.sky.ButtonLightActive": {
    "value": "var(--colors-sky--button-light-active)",
    "variable": "var(--colors-sky--button-light-active)"
  },
  "colors.sky.ButtonLightColor": {
    "value": "var(--colors-sky--button-light-color)",
    "variable": "var(--colors-sky--button-light-color)"
  },
  "colors.sky.ButtonOutline": {
    "value": "var(--colors-sky--button-outline)",
    "variable": "var(--colors-sky--button-outline)"
  },
  "colors.sky.ButtonOutlineHover": {
    "value": "var(--colors-sky--button-outline-hover)",
    "variable": "var(--colors-sky--button-outline-hover)"
  },
  "colors.sky.ButtonOutlineActive": {
    "value": "var(--colors-sky--button-outline-active)",
    "variable": "var(--colors-sky--button-outline-active)"
  },
  "colors.cyan.ButtonFilled": {
    "value": "var(--colors-cyan--button-filled)",
    "variable": "var(--colors-cyan--button-filled)"
  },
  "colors.cyan.ButtonFilledHover": {
    "value": "var(--colors-cyan--button-filled-hover)",
    "variable": "var(--colors-cyan--button-filled-hover)"
  },
  "colors.cyan.ButtonFilledActive": {
    "value": "var(--colors-cyan--button-filled-active)",
    "variable": "var(--colors-cyan--button-filled-active)"
  },
  "colors.cyan.ButtonLight": {
    "value": "var(--colors-cyan--button-light)",
    "variable": "var(--colors-cyan--button-light)"
  },
  "colors.cyan.ButtonLightHover": {
    "value": "var(--colors-cyan--button-light-hover)",
    "variable": "var(--colors-cyan--button-light-hover)"
  },
  "colors.cyan.ButtonLightActive": {
    "value": "var(--colors-cyan--button-light-active)",
    "variable": "var(--colors-cyan--button-light-active)"
  },
  "colors.cyan.ButtonLightColor": {
    "value": "var(--colors-cyan--button-light-color)",
    "variable": "var(--colors-cyan--button-light-color)"
  },
  "colors.cyan.ButtonOutline": {
    "value": "var(--colors-cyan--button-outline)",
    "variable": "var(--colors-cyan--button-outline)"
  },
  "colors.cyan.ButtonOutlineHover": {
    "value": "var(--colors-cyan--button-outline-hover)",
    "variable": "var(--colors-cyan--button-outline-hover)"
  },
  "colors.cyan.ButtonOutlineActive": {
    "value": "var(--colors-cyan--button-outline-active)",
    "variable": "var(--colors-cyan--button-outline-active)"
  },
  "colors.teal.ButtonFilled": {
    "value": "var(--colors-teal--button-filled)",
    "variable": "var(--colors-teal--button-filled)"
  },
  "colors.teal.ButtonFilledHover": {
    "value": "var(--colors-teal--button-filled-hover)",
    "variable": "var(--colors-teal--button-filled-hover)"
  },
  "colors.teal.ButtonFilledActive": {
    "value": "var(--colors-teal--button-filled-active)",
    "variable": "var(--colors-teal--button-filled-active)"
  },
  "colors.teal.ButtonLight": {
    "value": "var(--colors-teal--button-light)",
    "variable": "var(--colors-teal--button-light)"
  },
  "colors.teal.ButtonLightHover": {
    "value": "var(--colors-teal--button-light-hover)",
    "variable": "var(--colors-teal--button-light-hover)"
  },
  "colors.teal.ButtonLightActive": {
    "value": "var(--colors-teal--button-light-active)",
    "variable": "var(--colors-teal--button-light-active)"
  },
  "colors.teal.ButtonLightColor": {
    "value": "var(--colors-teal--button-light-color)",
    "variable": "var(--colors-teal--button-light-color)"
  },
  "colors.teal.ButtonOutline": {
    "value": "var(--colors-teal--button-outline)",
    "variable": "var(--colors-teal--button-outline)"
  },
  "colors.teal.ButtonOutlineHover": {
    "value": "var(--colors-teal--button-outline-hover)",
    "variable": "var(--colors-teal--button-outline-hover)"
  },
  "colors.teal.ButtonOutlineActive": {
    "value": "var(--colors-teal--button-outline-active)",
    "variable": "var(--colors-teal--button-outline-active)"
  },
  "colors.emerald.ButtonFilled": {
    "value": "var(--colors-emerald--button-filled)",
    "variable": "var(--colors-emerald--button-filled)"
  },
  "colors.emerald.ButtonFilledHover": {
    "value": "var(--colors-emerald--button-filled-hover)",
    "variable": "var(--colors-emerald--button-filled-hover)"
  },
  "colors.emerald.ButtonFilledActive": {
    "value": "var(--colors-emerald--button-filled-active)",
    "variable": "var(--colors-emerald--button-filled-active)"
  },
  "colors.emerald.ButtonLight": {
    "value": "var(--colors-emerald--button-light)",
    "variable": "var(--colors-emerald--button-light)"
  },
  "colors.emerald.ButtonLightHover": {
    "value": "var(--colors-emerald--button-light-hover)",
    "variable": "var(--colors-emerald--button-light-hover)"
  },
  "colors.emerald.ButtonLightActive": {
    "value": "var(--colors-emerald--button-light-active)",
    "variable": "var(--colors-emerald--button-light-active)"
  },
  "colors.emerald.ButtonLightColor": {
    "value": "var(--colors-emerald--button-light-color)",
    "variable": "var(--colors-emerald--button-light-color)"
  },
  "colors.emerald.ButtonOutline": {
    "value": "var(--colors-emerald--button-outline)",
    "variable": "var(--colors-emerald--button-outline)"
  },
  "colors.emerald.ButtonOutlineHover": {
    "value": "var(--colors-emerald--button-outline-hover)",
    "variable": "var(--colors-emerald--button-outline-hover)"
  },
  "colors.emerald.ButtonOutlineActive": {
    "value": "var(--colors-emerald--button-outline-active)",
    "variable": "var(--colors-emerald--button-outline-active)"
  },
  "colors.green.ButtonFilled": {
    "value": "var(--colors-green--button-filled)",
    "variable": "var(--colors-green--button-filled)"
  },
  "colors.green.ButtonFilledHover": {
    "value": "var(--colors-green--button-filled-hover)",
    "variable": "var(--colors-green--button-filled-hover)"
  },
  "colors.green.ButtonFilledActive": {
    "value": "var(--colors-green--button-filled-active)",
    "variable": "var(--colors-green--button-filled-active)"
  },
  "colors.green.ButtonLight": {
    "value": "var(--colors-green--button-light)",
    "variable": "var(--colors-green--button-light)"
  },
  "colors.green.ButtonLightHover": {
    "value": "var(--colors-green--button-light-hover)",
    "variable": "var(--colors-green--button-light-hover)"
  },
  "colors.green.ButtonLightActive": {
    "value": "var(--colors-green--button-light-active)",
    "variable": "var(--colors-green--button-light-active)"
  },
  "colors.green.ButtonLightColor": {
    "value": "var(--colors-green--button-light-color)",
    "variable": "var(--colors-green--button-light-color)"
  },
  "colors.green.ButtonOutline": {
    "value": "var(--colors-green--button-outline)",
    "variable": "var(--colors-green--button-outline)"
  },
  "colors.green.ButtonOutlineHover": {
    "value": "var(--colors-green--button-outline-hover)",
    "variable": "var(--colors-green--button-outline-hover)"
  },
  "colors.green.ButtonOutlineActive": {
    "value": "var(--colors-green--button-outline-active)",
    "variable": "var(--colors-green--button-outline-active)"
  },
  "colors.lime.ButtonFilled": {
    "value": "var(--colors-lime--button-filled)",
    "variable": "var(--colors-lime--button-filled)"
  },
  "colors.lime.ButtonFilledHover": {
    "value": "var(--colors-lime--button-filled-hover)",
    "variable": "var(--colors-lime--button-filled-hover)"
  },
  "colors.lime.ButtonFilledActive": {
    "value": "var(--colors-lime--button-filled-active)",
    "variable": "var(--colors-lime--button-filled-active)"
  },
  "colors.lime.ButtonLight": {
    "value": "var(--colors-lime--button-light)",
    "variable": "var(--colors-lime--button-light)"
  },
  "colors.lime.ButtonLightHover": {
    "value": "var(--colors-lime--button-light-hover)",
    "variable": "var(--colors-lime--button-light-hover)"
  },
  "colors.lime.ButtonLightActive": {
    "value": "var(--colors-lime--button-light-active)",
    "variable": "var(--colors-lime--button-light-active)"
  },
  "colors.lime.ButtonLightColor": {
    "value": "var(--colors-lime--button-light-color)",
    "variable": "var(--colors-lime--button-light-color)"
  },
  "colors.lime.ButtonOutline": {
    "value": "var(--colors-lime--button-outline)",
    "variable": "var(--colors-lime--button-outline)"
  },
  "colors.lime.ButtonOutlineHover": {
    "value": "var(--colors-lime--button-outline-hover)",
    "variable": "var(--colors-lime--button-outline-hover)"
  },
  "colors.lime.ButtonOutlineActive": {
    "value": "var(--colors-lime--button-outline-active)",
    "variable": "var(--colors-lime--button-outline-active)"
  },
  "colors.yellow.ButtonFilled": {
    "value": "var(--colors-yellow--button-filled)",
    "variable": "var(--colors-yellow--button-filled)"
  },
  "colors.yellow.ButtonFilledHover": {
    "value": "var(--colors-yellow--button-filled-hover)",
    "variable": "var(--colors-yellow--button-filled-hover)"
  },
  "colors.yellow.ButtonFilledActive": {
    "value": "var(--colors-yellow--button-filled-active)",
    "variable": "var(--colors-yellow--button-filled-active)"
  },
  "colors.yellow.ButtonLight": {
    "value": "var(--colors-yellow--button-light)",
    "variable": "var(--colors-yellow--button-light)"
  },
  "colors.yellow.ButtonLightHover": {
    "value": "var(--colors-yellow--button-light-hover)",
    "variable": "var(--colors-yellow--button-light-hover)"
  },
  "colors.yellow.ButtonLightActive": {
    "value": "var(--colors-yellow--button-light-active)",
    "variable": "var(--colors-yellow--button-light-active)"
  },
  "colors.yellow.ButtonLightColor": {
    "value": "var(--colors-yellow--button-light-color)",
    "variable": "var(--colors-yellow--button-light-color)"
  },
  "colors.yellow.ButtonOutline": {
    "value": "var(--colors-yellow--button-outline)",
    "variable": "var(--colors-yellow--button-outline)"
  },
  "colors.yellow.ButtonOutlineHover": {
    "value": "var(--colors-yellow--button-outline-hover)",
    "variable": "var(--colors-yellow--button-outline-hover)"
  },
  "colors.yellow.ButtonOutlineActive": {
    "value": "var(--colors-yellow--button-outline-active)",
    "variable": "var(--colors-yellow--button-outline-active)"
  },
  "colors.amber.ButtonFilled": {
    "value": "var(--colors-amber--button-filled)",
    "variable": "var(--colors-amber--button-filled)"
  },
  "colors.amber.ButtonFilledHover": {
    "value": "var(--colors-amber--button-filled-hover)",
    "variable": "var(--colors-amber--button-filled-hover)"
  },
  "colors.amber.ButtonFilledActive": {
    "value": "var(--colors-amber--button-filled-active)",
    "variable": "var(--colors-amber--button-filled-active)"
  },
  "colors.amber.ButtonLight": {
    "value": "var(--colors-amber--button-light)",
    "variable": "var(--colors-amber--button-light)"
  },
  "colors.amber.ButtonLightHover": {
    "value": "var(--colors-amber--button-light-hover)",
    "variable": "var(--colors-amber--button-light-hover)"
  },
  "colors.amber.ButtonLightActive": {
    "value": "var(--colors-amber--button-light-active)",
    "variable": "var(--colors-amber--button-light-active)"
  },
  "colors.amber.ButtonLightColor": {
    "value": "var(--colors-amber--button-light-color)",
    "variable": "var(--colors-amber--button-light-color)"
  },
  "colors.amber.ButtonOutline": {
    "value": "var(--colors-amber--button-outline)",
    "variable": "var(--colors-amber--button-outline)"
  },
  "colors.amber.ButtonOutlineHover": {
    "value": "var(--colors-amber--button-outline-hover)",
    "variable": "var(--colors-amber--button-outline-hover)"
  },
  "colors.amber.ButtonOutlineActive": {
    "value": "var(--colors-amber--button-outline-active)",
    "variable": "var(--colors-amber--button-outline-active)"
  },
  "colors.orange.ButtonFilled": {
    "value": "var(--colors-orange--button-filled)",
    "variable": "var(--colors-orange--button-filled)"
  },
  "colors.orange.ButtonFilledHover": {
    "value": "var(--colors-orange--button-filled-hover)",
    "variable": "var(--colors-orange--button-filled-hover)"
  },
  "colors.orange.ButtonFilledActive": {
    "value": "var(--colors-orange--button-filled-active)",
    "variable": "var(--colors-orange--button-filled-active)"
  },
  "colors.orange.ButtonLight": {
    "value": "var(--colors-orange--button-light)",
    "variable": "var(--colors-orange--button-light)"
  },
  "colors.orange.ButtonLightHover": {
    "value": "var(--colors-orange--button-light-hover)",
    "variable": "var(--colors-orange--button-light-hover)"
  },
  "colors.orange.ButtonLightActive": {
    "value": "var(--colors-orange--button-light-active)",
    "variable": "var(--colors-orange--button-light-active)"
  },
  "colors.orange.ButtonLightColor": {
    "value": "var(--colors-orange--button-light-color)",
    "variable": "var(--colors-orange--button-light-color)"
  },
  "colors.orange.ButtonOutline": {
    "value": "var(--colors-orange--button-outline)",
    "variable": "var(--colors-orange--button-outline)"
  },
  "colors.orange.ButtonOutlineHover": {
    "value": "var(--colors-orange--button-outline-hover)",
    "variable": "var(--colors-orange--button-outline-hover)"
  },
  "colors.orange.ButtonOutlineActive": {
    "value": "var(--colors-orange--button-outline-active)",
    "variable": "var(--colors-orange--button-outline-active)"
  },
  "colors.red.ButtonFilled": {
    "value": "var(--colors-red--button-filled)",
    "variable": "var(--colors-red--button-filled)"
  },
  "colors.red.ButtonFilledHover": {
    "value": "var(--colors-red--button-filled-hover)",
    "variable": "var(--colors-red--button-filled-hover)"
  },
  "colors.red.ButtonFilledActive": {
    "value": "var(--colors-red--button-filled-active)",
    "variable": "var(--colors-red--button-filled-active)"
  },
  "colors.red.ButtonLight": {
    "value": "var(--colors-red--button-light)",
    "variable": "var(--colors-red--button-light)"
  },
  "colors.red.ButtonLightHover": {
    "value": "var(--colors-red--button-light-hover)",
    "variable": "var(--colors-red--button-light-hover)"
  },
  "colors.red.ButtonLightActive": {
    "value": "var(--colors-red--button-light-active)",
    "variable": "var(--colors-red--button-light-active)"
  },
  "colors.red.ButtonLightColor": {
    "value": "var(--colors-red--button-light-color)",
    "variable": "var(--colors-red--button-light-color)"
  },
  "colors.red.ButtonOutline": {
    "value": "var(--colors-red--button-outline)",
    "variable": "var(--colors-red--button-outline)"
  },
  "colors.red.ButtonOutlineHover": {
    "value": "var(--colors-red--button-outline-hover)",
    "variable": "var(--colors-red--button-outline-hover)"
  },
  "colors.red.ButtonOutlineActive": {
    "value": "var(--colors-red--button-outline-active)",
    "variable": "var(--colors-red--button-outline-active)"
  },
  "colors.neutral.ButtonFilled": {
    "value": "var(--colors-neutral--button-filled)",
    "variable": "var(--colors-neutral--button-filled)"
  },
  "colors.neutral.ButtonFilledHover": {
    "value": "var(--colors-neutral--button-filled-hover)",
    "variable": "var(--colors-neutral--button-filled-hover)"
  },
  "colors.neutral.ButtonFilledActive": {
    "value": "var(--colors-neutral--button-filled-active)",
    "variable": "var(--colors-neutral--button-filled-active)"
  },
  "colors.neutral.ButtonLight": {
    "value": "var(--colors-neutral--button-light)",
    "variable": "var(--colors-neutral--button-light)"
  },
  "colors.neutral.ButtonLightHover": {
    "value": "var(--colors-neutral--button-light-hover)",
    "variable": "var(--colors-neutral--button-light-hover)"
  },
  "colors.neutral.ButtonLightActive": {
    "value": "var(--colors-neutral--button-light-active)",
    "variable": "var(--colors-neutral--button-light-active)"
  },
  "colors.neutral.ButtonLightColor": {
    "value": "var(--colors-neutral--button-light-color)",
    "variable": "var(--colors-neutral--button-light-color)"
  },
  "colors.neutral.ButtonOutline": {
    "value": "var(--colors-neutral--button-outline)",
    "variable": "var(--colors-neutral--button-outline)"
  },
  "colors.neutral.ButtonOutlineHover": {
    "value": "var(--colors-neutral--button-outline-hover)",
    "variable": "var(--colors-neutral--button-outline-hover)"
  },
  "colors.neutral.ButtonOutlineActive": {
    "value": "var(--colors-neutral--button-outline-active)",
    "variable": "var(--colors-neutral--button-outline-active)"
  },
  "colors.stone.ButtonFilled": {
    "value": "var(--colors-stone--button-filled)",
    "variable": "var(--colors-stone--button-filled)"
  },
  "colors.stone.ButtonFilledHover": {
    "value": "var(--colors-stone--button-filled-hover)",
    "variable": "var(--colors-stone--button-filled-hover)"
  },
  "colors.stone.ButtonFilledActive": {
    "value": "var(--colors-stone--button-filled-active)",
    "variable": "var(--colors-stone--button-filled-active)"
  },
  "colors.stone.ButtonLight": {
    "value": "var(--colors-stone--button-light)",
    "variable": "var(--colors-stone--button-light)"
  },
  "colors.stone.ButtonLightHover": {
    "value": "var(--colors-stone--button-light-hover)",
    "variable": "var(--colors-stone--button-light-hover)"
  },
  "colors.stone.ButtonLightActive": {
    "value": "var(--colors-stone--button-light-active)",
    "variable": "var(--colors-stone--button-light-active)"
  },
  "colors.stone.ButtonLightColor": {
    "value": "var(--colors-stone--button-light-color)",
    "variable": "var(--colors-stone--button-light-color)"
  },
  "colors.stone.ButtonOutline": {
    "value": "var(--colors-stone--button-outline)",
    "variable": "var(--colors-stone--button-outline)"
  },
  "colors.stone.ButtonOutlineHover": {
    "value": "var(--colors-stone--button-outline-hover)",
    "variable": "var(--colors-stone--button-outline-hover)"
  },
  "colors.stone.ButtonOutlineActive": {
    "value": "var(--colors-stone--button-outline-active)",
    "variable": "var(--colors-stone--button-outline-active)"
  },
  "colors.zinc.ButtonFilled": {
    "value": "var(--colors-zinc--button-filled)",
    "variable": "var(--colors-zinc--button-filled)"
  },
  "colors.zinc.ButtonFilledHover": {
    "value": "var(--colors-zinc--button-filled-hover)",
    "variable": "var(--colors-zinc--button-filled-hover)"
  },
  "colors.zinc.ButtonFilledActive": {
    "value": "var(--colors-zinc--button-filled-active)",
    "variable": "var(--colors-zinc--button-filled-active)"
  },
  "colors.zinc.ButtonLight": {
    "value": "var(--colors-zinc--button-light)",
    "variable": "var(--colors-zinc--button-light)"
  },
  "colors.zinc.ButtonLightHover": {
    "value": "var(--colors-zinc--button-light-hover)",
    "variable": "var(--colors-zinc--button-light-hover)"
  },
  "colors.zinc.ButtonLightActive": {
    "value": "var(--colors-zinc--button-light-active)",
    "variable": "var(--colors-zinc--button-light-active)"
  },
  "colors.zinc.ButtonLightColor": {
    "value": "var(--colors-zinc--button-light-color)",
    "variable": "var(--colors-zinc--button-light-color)"
  },
  "colors.zinc.ButtonOutline": {
    "value": "var(--colors-zinc--button-outline)",
    "variable": "var(--colors-zinc--button-outline)"
  },
  "colors.zinc.ButtonOutlineHover": {
    "value": "var(--colors-zinc--button-outline-hover)",
    "variable": "var(--colors-zinc--button-outline-hover)"
  },
  "colors.zinc.ButtonOutlineActive": {
    "value": "var(--colors-zinc--button-outline-active)",
    "variable": "var(--colors-zinc--button-outline-active)"
  },
  "colors.gray.ButtonFilled": {
    "value": "var(--colors-gray--button-filled)",
    "variable": "var(--colors-gray--button-filled)"
  },
  "colors.gray.ButtonFilledHover": {
    "value": "var(--colors-gray--button-filled-hover)",
    "variable": "var(--colors-gray--button-filled-hover)"
  },
  "colors.gray.ButtonFilledActive": {
    "value": "var(--colors-gray--button-filled-active)",
    "variable": "var(--colors-gray--button-filled-active)"
  },
  "colors.gray.ButtonLight": {
    "value": "var(--colors-gray--button-light)",
    "variable": "var(--colors-gray--button-light)"
  },
  "colors.gray.ButtonLightHover": {
    "value": "var(--colors-gray--button-light-hover)",
    "variable": "var(--colors-gray--button-light-hover)"
  },
  "colors.gray.ButtonLightActive": {
    "value": "var(--colors-gray--button-light-active)",
    "variable": "var(--colors-gray--button-light-active)"
  },
  "colors.gray.ButtonLightColor": {
    "value": "var(--colors-gray--button-light-color)",
    "variable": "var(--colors-gray--button-light-color)"
  },
  "colors.gray.ButtonOutline": {
    "value": "var(--colors-gray--button-outline)",
    "variable": "var(--colors-gray--button-outline)"
  },
  "colors.gray.ButtonOutlineHover": {
    "value": "var(--colors-gray--button-outline-hover)",
    "variable": "var(--colors-gray--button-outline-hover)"
  },
  "colors.gray.ButtonOutlineActive": {
    "value": "var(--colors-gray--button-outline-active)",
    "variable": "var(--colors-gray--button-outline-active)"
  },
  "colors.slate.ButtonFilled": {
    "value": "var(--colors-slate--button-filled)",
    "variable": "var(--colors-slate--button-filled)"
  },
  "colors.slate.ButtonFilledHover": {
    "value": "var(--colors-slate--button-filled-hover)",
    "variable": "var(--colors-slate--button-filled-hover)"
  },
  "colors.slate.ButtonFilledActive": {
    "value": "var(--colors-slate--button-filled-active)",
    "variable": "var(--colors-slate--button-filled-active)"
  },
  "colors.slate.ButtonLight": {
    "value": "var(--colors-slate--button-light)",
    "variable": "var(--colors-slate--button-light)"
  },
  "colors.slate.ButtonLightHover": {
    "value": "var(--colors-slate--button-light-hover)",
    "variable": "var(--colors-slate--button-light-hover)"
  },
  "colors.slate.ButtonLightActive": {
    "value": "var(--colors-slate--button-light-active)",
    "variable": "var(--colors-slate--button-light-active)"
  },
  "colors.slate.ButtonLightColor": {
    "value": "var(--colors-slate--button-light-color)",
    "variable": "var(--colors-slate--button-light-color)"
  },
  "colors.slate.ButtonOutline": {
    "value": "var(--colors-slate--button-outline)",
    "variable": "var(--colors-slate--button-outline)"
  },
  "colors.slate.ButtonOutlineHover": {
    "value": "var(--colors-slate--button-outline-hover)",
    "variable": "var(--colors-slate--button-outline-hover)"
  },
  "colors.slate.ButtonOutlineActive": {
    "value": "var(--colors-slate--button-outline-active)",
    "variable": "var(--colors-slate--button-outline-active)"
  },
  "colors.Button.default.color": {
    "value": "var(--colors--button-default-color)",
    "variable": "var(--colors--button-default-color)"
  },
  "colors.Button.default.bg": {
    "value": "var(--colors--button-default-bg)",
    "variable": "var(--colors--button-default-bg)"
  },
  "colors.Button.default.bgHover": {
    "value": "var(--colors--button-default-bg-hover)",
    "variable": "var(--colors--button-default-bg-hover)"
  },
  "colors.Button.default.bgActive": {
    "value": "var(--colors--button-default-bg-active)",
    "variable": "var(--colors--button-default-bg-active)"
  },
  "colors.Button.default.borderColor": {
    "value": "var(--colors--button-default-border-color)",
    "variable": "var(--colors--button-default-border-color)"
  },
  "colors.Button.disabled.color": {
    "value": "var(--colors--button-disabled-color)",
    "variable": "var(--colors--button-disabled-color)"
  },
  "colors.Button.disabled.bg": {
    "value": "var(--colors--button-disabled-bg)",
    "variable": "var(--colors--button-disabled-bg)"
  },
  "colors.Button.white.bgHover": {
    "value": "var(--colors--button-white-bg-hover)",
    "variable": "var(--colors--button-white-bg-hover)"
  },
  "colors.Button.white.bgActive": {
    "value": "var(--colors--button-white-bg-active)",
    "variable": "var(--colors--button-white-bg-active)"
  },
  "spacing.-1": {
    "value": "calc(var(--spacing-1) * -1)",
    "variable": "var(--spacing-1)"
  },
  "spacing.-2": {
    "value": "calc(var(--spacing-2) * -1)",
    "variable": "var(--spacing-2)"
  },
  "spacing.-3": {
    "value": "calc(var(--spacing-3) * -1)",
    "variable": "var(--spacing-3)"
  },
  "spacing.-4": {
    "value": "calc(var(--spacing-4) * -1)",
    "variable": "var(--spacing-4)"
  },
  "spacing.-5": {
    "value": "calc(var(--spacing-5) * -1)",
    "variable": "var(--spacing-5)"
  },
  "spacing.-6": {
    "value": "calc(var(--spacing-6) * -1)",
    "variable": "var(--spacing-6)"
  },
  "spacing.-7": {
    "value": "calc(var(--spacing-7) * -1)",
    "variable": "var(--spacing-7)"
  },
  "spacing.-8": {
    "value": "calc(var(--spacing-8) * -1)",
    "variable": "var(--spacing-8)"
  },
  "spacing.-9": {
    "value": "calc(var(--spacing-9) * -1)",
    "variable": "var(--spacing-9)"
  },
  "spacing.-10": {
    "value": "calc(var(--spacing-10) * -1)",
    "variable": "var(--spacing-10)"
  },
  "spacing.-11": {
    "value": "calc(var(--spacing-11) * -1)",
    "variable": "var(--spacing-11)"
  },
  "spacing.-12": {
    "value": "calc(var(--spacing-12) * -1)",
    "variable": "var(--spacing-12)"
  },
  "spacing.-14": {
    "value": "calc(var(--spacing-14) * -1)",
    "variable": "var(--spacing-14)"
  },
  "spacing.-16": {
    "value": "calc(var(--spacing-16) * -1)",
    "variable": "var(--spacing-16)"
  },
  "spacing.-20": {
    "value": "calc(var(--spacing-20) * -1)",
    "variable": "var(--spacing-20)"
  },
  "spacing.-24": {
    "value": "calc(var(--spacing-24) * -1)",
    "variable": "var(--spacing-24)"
  },
  "spacing.-28": {
    "value": "calc(var(--spacing-28) * -1)",
    "variable": "var(--spacing-28)"
  },
  "spacing.-32": {
    "value": "calc(var(--spacing-32) * -1)",
    "variable": "var(--spacing-32)"
  },
  "spacing.-36": {
    "value": "calc(var(--spacing-36) * -1)",
    "variable": "var(--spacing-36)"
  },
  "spacing.-40": {
    "value": "calc(var(--spacing-40) * -1)",
    "variable": "var(--spacing-40)"
  },
  "spacing.-44": {
    "value": "calc(var(--spacing-44) * -1)",
    "variable": "var(--spacing-44)"
  },
  "spacing.-48": {
    "value": "calc(var(--spacing-48) * -1)",
    "variable": "var(--spacing-48)"
  },
  "spacing.-52": {
    "value": "calc(var(--spacing-52) * -1)",
    "variable": "var(--spacing-52)"
  },
  "spacing.-56": {
    "value": "calc(var(--spacing-56) * -1)",
    "variable": "var(--spacing-56)"
  },
  "spacing.-60": {
    "value": "calc(var(--spacing-60) * -1)",
    "variable": "var(--spacing-60)"
  },
  "spacing.-64": {
    "value": "calc(var(--spacing-64) * -1)",
    "variable": "var(--spacing-64)"
  },
  "spacing.-72": {
    "value": "calc(var(--spacing-72) * -1)",
    "variable": "var(--spacing-72)"
  },
  "spacing.-80": {
    "value": "calc(var(--spacing-80) * -1)",
    "variable": "var(--spacing-80)"
  },
  "spacing.-96": {
    "value": "calc(var(--spacing-96) * -1)",
    "variable": "var(--spacing-96)"
  },
  "spacing.-xs": {
    "value": "calc(var(--spacing-xs) * -1)",
    "variable": "var(--spacing-xs)"
  },
  "spacing.-sm": {
    "value": "calc(var(--spacing-sm) * -1)",
    "variable": "var(--spacing-sm)"
  },
  "spacing.-md": {
    "value": "calc(var(--spacing-md) * -1)",
    "variable": "var(--spacing-md)"
  },
  "spacing.-lg": {
    "value": "calc(var(--spacing-lg) * -1)",
    "variable": "var(--spacing-lg)"
  },
  "spacing.-xl": {
    "value": "calc(var(--spacing-xl) * -1)",
    "variable": "var(--spacing-xl)"
  },
  "spacing.-0.5": {
    "value": "calc(var(--spacing-0\\.5) * -1)",
    "variable": "var(--spacing-0\\.5)"
  },
  "spacing.-1.5": {
    "value": "calc(var(--spacing-1\\.5) * -1)",
    "variable": "var(--spacing-1\\.5)"
  },
  "spacing.-2.5": {
    "value": "calc(var(--spacing-2\\.5) * -1)",
    "variable": "var(--spacing-2\\.5)"
  },
  "spacing.-3.5": {
    "value": "calc(var(--spacing-3\\.5) * -1)",
    "variable": "var(--spacing-3\\.5)"
  },
  "colors.colorPalette.50": {
    "value": "var(--colors-color-palette-50)",
    "variable": "var(--colors-color-palette-50)"
  },
  "colors.colorPalette.100": {
    "value": "var(--colors-color-palette-100)",
    "variable": "var(--colors-color-palette-100)"
  },
  "colors.colorPalette.200": {
    "value": "var(--colors-color-palette-200)",
    "variable": "var(--colors-color-palette-200)"
  },
  "colors.colorPalette.300": {
    "value": "var(--colors-color-palette-300)",
    "variable": "var(--colors-color-palette-300)"
  },
  "colors.colorPalette.400": {
    "value": "var(--colors-color-palette-400)",
    "variable": "var(--colors-color-palette-400)"
  },
  "colors.colorPalette.500": {
    "value": "var(--colors-color-palette-500)",
    "variable": "var(--colors-color-palette-500)"
  },
  "colors.colorPalette.600": {
    "value": "var(--colors-color-palette-600)",
    "variable": "var(--colors-color-palette-600)"
  },
  "colors.colorPalette.700": {
    "value": "var(--colors-color-palette-700)",
    "variable": "var(--colors-color-palette-700)"
  },
  "colors.colorPalette.800": {
    "value": "var(--colors-color-palette-800)",
    "variable": "var(--colors-color-palette-800)"
  },
  "colors.colorPalette.900": {
    "value": "var(--colors-color-palette-900)",
    "variable": "var(--colors-color-palette-900)"
  },
  "colors.colorPalette.950": {
    "value": "var(--colors-color-palette-950)",
    "variable": "var(--colors-color-palette-950)"
  },
  "colors.colorPalette.color": {
    "value": "var(--colors-color-palette-color)",
    "variable": "var(--colors-color-palette-color)"
  },
  "colors.colorPalette.bg": {
    "value": "var(--colors-color-palette-bg)",
    "variable": "var(--colors-color-palette-bg)"
  },
  "colors.colorPalette.ButtonFilled": {
    "value": "var(--colors-color-palette--button-filled)",
    "variable": "var(--colors-color-palette--button-filled)"
  },
  "colors.colorPalette.ButtonFilledHover": {
    "value": "var(--colors-color-palette--button-filled-hover)",
    "variable": "var(--colors-color-palette--button-filled-hover)"
  },
  "colors.colorPalette.ButtonFilledActive": {
    "value": "var(--colors-color-palette--button-filled-active)",
    "variable": "var(--colors-color-palette--button-filled-active)"
  },
  "colors.colorPalette.ButtonLight": {
    "value": "var(--colors-color-palette--button-light)",
    "variable": "var(--colors-color-palette--button-light)"
  },
  "colors.colorPalette.ButtonLightHover": {
    "value": "var(--colors-color-palette--button-light-hover)",
    "variable": "var(--colors-color-palette--button-light-hover)"
  },
  "colors.colorPalette.ButtonLightActive": {
    "value": "var(--colors-color-palette--button-light-active)",
    "variable": "var(--colors-color-palette--button-light-active)"
  },
  "colors.colorPalette.ButtonLightColor": {
    "value": "var(--colors-color-palette--button-light-color)",
    "variable": "var(--colors-color-palette--button-light-color)"
  },
  "colors.colorPalette.ButtonOutline": {
    "value": "var(--colors-color-palette--button-outline)",
    "variable": "var(--colors-color-palette--button-outline)"
  },
  "colors.colorPalette.ButtonOutlineHover": {
    "value": "var(--colors-color-palette--button-outline-hover)",
    "variable": "var(--colors-color-palette--button-outline-hover)"
  },
  "colors.colorPalette.ButtonOutlineActive": {
    "value": "var(--colors-color-palette--button-outline-active)",
    "variable": "var(--colors-color-palette--button-outline-active)"
  },
  "colors.colorPalette.bgHover": {
    "value": "var(--colors-color-palette-bg-hover)",
    "variable": "var(--colors-color-palette-bg-hover)"
  },
  "colors.colorPalette.bgActive": {
    "value": "var(--colors-color-palette-bg-active)",
    "variable": "var(--colors-color-palette-bg-active)"
  },
  "colors.colorPalette.borderColor": {
    "value": "var(--colors-color-palette-border-color)",
    "variable": "var(--colors-color-palette-border-color)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar
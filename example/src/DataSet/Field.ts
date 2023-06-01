export const FieldType = {
  auto: 'auto',
  string: 'string',
  number: 'number',
  boolean: 'boolean',
  date: 'date',
  object: 'object',
} as const;

export type Field = {
  name: string;
  type: keyof typeof FieldType;
};

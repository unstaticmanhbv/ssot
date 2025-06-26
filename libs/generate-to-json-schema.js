import { zodToJsonSchema } from './zod';

export function generateToJsonSchema(zodSchema) {
  console.log(zodToJsonSchema(zodSchema));
}

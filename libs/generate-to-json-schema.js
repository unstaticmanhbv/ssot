import { zodToJsonSchema } from './zod';

export function generateToJsonSchema(zodSchema) {
  console.log(JSON.stringify(zodToJsonSchema(zodSchema)));
}

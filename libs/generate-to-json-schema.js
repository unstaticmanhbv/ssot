import { zodToJsonSchema } from './zod/index';

export function generateToJsonSchema(zodSchema) {
  console.log(JSON.stringify(zodToJsonSchema(zodSchema)));
}

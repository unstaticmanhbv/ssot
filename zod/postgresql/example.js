import { generateToJsonSchema } from '../../libs/generate-to-json-schema';
import { z } from '../../libs/zod';

generateToJsonSchema(
  z.object({
    id: z.string().max(125),
    name: z.string().max(255),
  }),
);

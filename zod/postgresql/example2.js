import { generateToJsonSchema } from '../../libs/generate-to-json-schema';
import { z } from '../../libs/zod';

const CircleSchema = z.object({
  type: z.literal('circle'),
  radius: z.number(),
});

const RectangleSchema = z.object({
  type: z.literal('rectangle'),
  width: z.number(),
  height: z.number(),
});

const ShapeSchema = z.discriminatedUnion('type', [
  CircleSchema,
  RectangleSchema,
]);
generateToJsonSchema(ShapeSchema);

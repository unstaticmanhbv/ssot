import { zodToJsonSchema } from "../../../libs/zod";
import { z } from "../../../libs/zod";

// Định nghĩa schema
const catSchema = z.object({
  type: z.literal("cat"),
  lives: z.number(),
});

const dogSchema = z.object({
  type: z.literal("dog"),
  breed: z.string(),
});

const petSchema = z.discriminatedUnion("type", [catSchema, dogSchema]);


// convert to JSON Schema
const jsonSchema = zodToJsonSchema(petSchema, "PetSchema");
console.log(JSON.stringify(jsonSchema, null, 2));

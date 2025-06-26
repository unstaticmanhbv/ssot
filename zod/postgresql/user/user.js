import z from "../../../libs/zod.mjs";
import zodToJsonSchema from "../../../libs/zodToJsonSchema.mjs";

// Định nghĩa schema
const HabitSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.string().datetime().optional(),
  email: z.string().email().optional(),
  isActive: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
});

// Chuyển thành JSON Schema
const jsonSchema = zodToJsonSchema(HabitSchema, "Habit");

// In ra
console.log(JSON.stringify(jsonSchema, null, 2));

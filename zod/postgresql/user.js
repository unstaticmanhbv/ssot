import { generateToJsonSchema } from '../../libs/generate-to-json-schema';
import { z } from '../../libs/zod';

generateToJsonSchema(
  z.object({
    id: z.string().max(125),
    name: z.string().max(255).nullable().optional(),
    email: z.string().max(255).nullable().optional(),
    premiumStatus: z.number().int().nullable().optional(),
    premiumExpireDate: z
      .string()
      .datetime({ offset: true })
      .nullable()
      .optional(),
    profileImage: z.string().nullable().optional(),
    firstName: z.string().max(255).nullable().optional(),
    lastName: z.string().max(255).nullable().optional(),
    lastActiveTime: z.string().datetime({ offset: true }).nullable().optional(),
    lastActiveTimeZone: z.string().max(50).nullable().optional(),
    firstWeekDay: z.number().int().nullable().optional(),
    lastSeenLocale: z.string().max(50).nullable().optional(),
    lastSeenLangCode: z.string().max(50).nullable().optional(),
    metadata: z.record(z.any()).nullable().optional(),
  }),
);

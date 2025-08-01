## Single Source of Truth (SSOT)
Centralized repository for all project-related information, including documentation, code, and resources.

### Setup
```bash
bash setup.sh
```

### JSONSchema with Zod

**Step 1:** Define the schema using Zod

```typescript
import { generateToJsonSchema } from '../../libs/generate-to-json-schema';
import { z } from '../../libs/zod';

generateToJsonSchema(
  z.object({
    id: z.string().max(125),
    name: z.string().max(255),
    email: z.string().max(255),
    premiumStatus: z.number().int().optional(),
    premiumExpireDate: z
      .string()
      .datetime({ offset: true }) // ISO 8601 string with timezone
      .optional(),
    profileImage: z.string().optional(),
    firstName: z.string().max(255).optional(),
    lastName: z.string().max(255).optional(),
    lastActiveTime: z
      .string()
      .datetime({ offset: true }) // ISO 8601 string with timezone
      .optional(),
    lastActiveTimeZone: z.string().max(50).optional(),
    firstWeekDay: z.number().int().optional(),
    lastSeenLocale: z.string().max(50).optional(),
    lastSeenLangCode: z.string().max(50).optional(),
    metadata: z.record(z.any()).optional(),
  }),
);
```

**Step 2:** Add & commit the `.js` schema file

=> The JSONSchema will be generated in the `/json-schema` folder.

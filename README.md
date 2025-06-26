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
  }),
);
```

**Step 2:** Add & commit the `.js` schema file

=> The JSONSchema will be generated in the `/json-schema` folder.

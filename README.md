# @doranapp/graphql-no-introspection

## Installation

```bash
yarn add @doranapp/graphql-no-introspection
```

## Usage


```javascript
import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { graphqlSchema } from './schema';

import { noIntrospection } from '@doranapp/graphql-no-introspection';

const app = express();
app.use(
  '/graphql',
  createHandler({
    schema: graphqlSchema,
    validationRules: [noIntrospection],
  })
);
```

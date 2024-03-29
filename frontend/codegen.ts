import type { CodegenConfig } from '@graphql-codegen/cli'
import dotenv from 'dotenv'
import { resolve } from 'path'
dotenv.config()

dotenv.config({ path: resolve(__dirname, '.env.local') })

const sharedConfig = {
  immutableTypes: true,
  enumsAsConst: true,
  useTypeImports: true,
  defaultScalarType: 'unknown',
  strictScalars: true,
  scalars: {
    DateTime: 'string',
    createdAt: 'string',
    updatedAt: 'string',
  },
  avoidOptionals: true,
}

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env['NEXT_PUBLIC_GRAPHQL_URL'] ?? '',
  documents: ['src/**/*.graphql', 'app/**/*.graphql'],
  ignoreNoDocuments: true,
  generates: {
    'src/lib/graphql/graphql.type.ts': {
      plugins: ['typescript'],
      config: sharedConfig,
    },
    'src/': {
      preset: 'near-operation-file',
      config: sharedConfig,
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: '~@src/lib/graphql/graphql.type',
      },
      plugins: [
        'typescript-operations',
        'typed-document-node',
        {
          add: {
            content: '// @ts-nocheck',
          },
        },
      ],
      hooks: {
        afterOneFileWrite: ['eslint --fix', 'prettier --write'],
      },
    },
    './schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
}

export default config

import {defineConfig} from '@sanity-typed/types'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
/* import type {InferSchemaValues} from '@sanity-typed/types' */

const config = defineConfig({
  name: 'deliveroo',
  title: 'Deliveroo',

  projectId: 'q7rho0bw',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

export default config

/* export type Values = InferSchemaValues<typeof config>
export type Restaurant = Values['restaurant']
export type Featured = Values['featured']
export type Dish = Values['dish']
export type Category = Values['category']
 */
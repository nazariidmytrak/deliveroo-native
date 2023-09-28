import {defineField, defineType, defineArrayMember} from '@sanity-typed/types'

export default defineType({
  name: 'featured',
  title: 'Featured categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Featured category name',
      validation: (Rule: {required: () => any}) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule: {max: (arg0: number) => any}) => Rule.max(200),
    }),
    defineField({
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'restaurant' as const}],
        }),
      ],
    }),
  ],
})

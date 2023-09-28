import {defineField, defineType} from '@sanity-typed/types'

export default defineType({
  name: 'category',
  title: 'Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category name',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image of the category',
      type: 'image',
    }),
  ],
})

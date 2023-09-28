import {defineField, defineType} from '@sanity-typed/types'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of dish',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule: {max: (arg0: number) => any}) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of the dish',
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price of the dish in GBP',
    }),
  ],
})

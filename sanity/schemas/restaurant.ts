import {defineField, defineType, defineArrayMember} from '@sanity-typed/types'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Restaurant name',
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
      title: 'Image of the restaurant',
    }),
    defineField({
      name: 'lat',
      type: 'number',
      title: 'Latitude of restaurant',
    }),
    defineField({
      name: 'long',
      type: 'number',
      title: 'Longtitude of restaurant',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Restaurant address',
      validation: (Rule: {required: () => any}) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Enter a rating from (1-5 Stars)',
      validation: (Rule: {
        required: () => {
          (): any
          new (): any
          min: {
            (arg0: number): {
              (): any
              new (): any
              max: {
                (arg0: number): {(): any; new (): any; error: {(arg0: string): any; new (): any}}
                new (): any
              }
            }
            new (): any
          }
        }
      }) => Rule.required().min(1).max(5).error('Please enter a value between 1 and 5'),
    }),

    defineField({
      name: 'type',
      type: 'reference',
      title: 'Category',
      to: [{type: 'category' as const}],
      validation: (Rule: {required: () => any}) => Rule.required(),
    }),
    defineField({
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'dish' as const}],
        }),
      ],
    }),
  ],
})

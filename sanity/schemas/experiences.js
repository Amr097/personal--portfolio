export default {
  name: 'summary',
  title: 'Summary',
  type: 'document',
  fields: [
    // {
    //   name: 'year',
    //   title: 'Year',
    //   type: 'string',
    // },
    // {
    //   name: 'works',
    //   title: 'Works',
    //   type: 'array',
    //   of: [{type: 'workExperience'}],
    // },

    {
      type: 'markdown',
      description: 'Write a short summary about yourself',
      name: 'about',
      title: 'Summary',
    },
  ],
}

export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'bgColor',
      title: 'BgColor',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
  ],
  orderings: [
    {
      title: 'Order, New',
      name: 'OrderAsc',
      by: [{field: 'Order', direction: 'asc'}],
    },
    {
      title: 'Order, Old',
      name: 'OrderDesc',
      by: [{field: 'Order', direction: 'desc'}],
    },
  ],
}

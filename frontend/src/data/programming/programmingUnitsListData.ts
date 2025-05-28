export const programmingUnits = import.meta.glob('@/docs/programming/*.md', {
  as: 'raw',
  eager: true,
})

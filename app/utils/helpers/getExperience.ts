export function getExperience() {
  const today = new Date()
  const startDate = new Date('05-01-2015')
  const diff = today.valueOf() - startDate.valueOf()
  const timeDiff = new Date(diff)
  return Math.abs(timeDiff.getUTCFullYear() - 1970)
}

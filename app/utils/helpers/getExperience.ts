export function getExperience() {
  const today = new Date()
  const startDate = new Date('01/05/2016')
  const diff = today.valueOf() - startDate.valueOf()
  const timeDiff = new Date(diff)
  return Math.abs(timeDiff.getUTCFullYear() - 1970)
}

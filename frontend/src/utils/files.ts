export const handleSaveFile = (
  content: string,
  fileName: string,
  type = 'text/json',
) => {
  const blob = new Blob([content], { type })
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = fileName.replaceAll(' ', '_') // Replace spaces with underscores
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)

  URL.revokeObjectURL(url)
}

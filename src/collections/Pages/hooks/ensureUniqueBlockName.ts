import type { FieldHook } from 'payload'

export const ensureUniqueBlockIdentifier: FieldHook = async ({ value, data }) => {
  if (typeof value !== 'string') return value

  const id = value.trim()
  if (!id) return value

  const blocks = Array.isArray(data?.contents) ? data.contents : []

  let occurrences = 0
  for (const block of blocks) {
    if (block?.identifier?.trim?.() === id) {
      occurrences++
      if (occurrences > 1) {
        throw new Error(`Block identifier "${id}" must be unique within this page.`)
      }
    }
  }

  return id // returning trimmed value is nice
}

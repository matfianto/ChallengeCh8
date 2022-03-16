export const cleanMultipleSpaces = (input) => {
  return input.replace(/[ ]{2,}/g, "")
}
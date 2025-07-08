export function onlyNumberAndLimit(e, modelValue, maxDigits = 10) {
  const char = String.fromCharCode(e.which)
  const isNumber = /\d/.test(char)
  const maxLengthReached = modelValue?.length >= maxDigits

  if (!isNumber || maxLengthReached) {
    e.preventDefault()
  }
}
export function onlyLetters(e) {
  const key = e.key;  // کلید فشرده شده (string)
  const regex = /^[\u0600-\u06FFa-zA-Z\s]$/; // فقط یک کاراکتر مجاز
  if (!regex.test(key)) {
    e.preventDefault();
  }
}

 
const storageKey = 'theme-preference'

const onClick = () => {
  theme.value = theme.value === 'false'
  ? 'true'
  : 'false'
  setPreference()
}

const getColorPreference = () => {
  if (localStorage.getItem(storageKey))
  return localStorage.getItem(storageKey)
  else
  return window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'true'
  : 'false'
}

const setPreference = () => {
  localStorage.setItem(storageKey, theme.value)
  reflectPreference()
}

const reflectPreference = () => {
  document.firstElementChild
  .setAttribute('data-prefers-dark', theme.value)

  document
  .querySelector('#themes')
  ?.setAttribute('aria-pressed', theme.value)
}

const theme = {
  value: getColorPreference(),
}

reflectPreference()

window.onload = () => {
  reflectPreference()
  document
  .querySelector('#themes')
  .addEventListener('click', onClick)
}

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({matches:isDark}) => {
  theme.value = isDark ? 'true' : 'false'
  setPreference()
})
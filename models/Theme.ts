class Theme {

  static init() {
    // On page load or when changing themes,
    // best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.dataset.theme = 'dark'
    }
    else {
      document.documentElement.dataset.theme = 'light'
    }
  }

  static toggle() {
    const { dataset } = document.documentElement
    if (dataset.theme === 'dark') {
      localStorage.setItem('theme', 'light')
      dataset.theme = 'light'
    }
    else {
      localStorage.setItem('theme', 'dark')
      dataset.theme = 'dark'
    }
  }
}

export default Theme

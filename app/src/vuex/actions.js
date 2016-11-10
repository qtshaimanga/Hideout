export const setSkipState = function ({ dispatch, state }) {
  dispatch('SKIP')
  dispatch('PRES')
}

export const setPresState = function ({ dispatch, state }) {
  dispatch('PRES')
}

export const setChoiceState = function ({ dispatch, state }) {
  dispatch('CHOICE')
}

export const setWebglHomeState = function ({ dispatch, state }) {
  dispatch('WEBGLHOME')
}

export const setShareState = function ({ dispatch, state }) {
  dispatch('SHARE')
}

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

export const setWritingState = function ({ dispatch, state }) {
  dispatch('WRITING')
}

export const setTellingState = function ({ dispatch, state }) {
  dispatch('TELLING')
}

export const setShareChoiceState = function ({ dispatch, state }) {
  dispatch('SHARECHOICE')
}

export const setTypeState = function ({ dispatch, state }, from) {
  dispatch('TYPE', from)
}

export const setResetShareState = function ({ dispatch, state }) {
  dispatch('RESETSHARE')
}

export const setSecretMessageState = function ({ dispatch, state }) {
  dispatch('MESSAGE')
}

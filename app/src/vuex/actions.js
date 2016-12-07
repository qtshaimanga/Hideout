export const setPresState = function ({ dispatch, state }) {
  dispatch('PRES')
}

export const setSkipeState = function ({ dispatch, state }) {
  dispatch('SKIPE')
}

export const setChoiceState = function ({ dispatch, state }) {
  dispatch('CHOICE')
}

export const setWebglHomeState = function ({ dispatch, state }) {
  dispatch('WEBGLHOME')
}

export const setInstanciateWebglHomeState = function ({ dispatch, state }) {
  dispatch('INSTANCIATEWEBGLHOME')
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

export const setLockControlsState = function ({ dispatch, state }) {
  dispatch('CONTROLS')
}

export const setFocusState = function ({ dispatch, state }) {
  dispatch('FOCUS')
}

export const setDataState = function ({ dispatch, state }, data) {
  dispatch('DATA', data)
}

export const setMoveObjectState = function ({ dispatch, state }, objectsMoved) {
  dispatch('MOVE', objectsMoved)
}

export const setLoaderState = function ({ dispatch, state }) {
  dispatch('LOADER')
}

export const setRessourcesState = function({ dispatch, state }, ressources){
	dispatch('RESSOURCES', ressources)
}

export const setCursorProgressState = function({ dispatch, state }, cursorProgress){
	dispatch('OPEN', cursorProgress)
}

export const setCursorLoaderState = function ({ dispatch, state }) {
  dispatch('CURSOR')
}

export const setAboutState = function ({ dispatch, state }) {
  dispatch('ABOUT')
}

export const setInstanciateSpaceBarState = function ({ dispatch, state }) {
  dispatch('SPACEBAR')
}

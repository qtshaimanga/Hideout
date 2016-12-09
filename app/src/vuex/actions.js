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

export const setShareChoiceState = function ({ dispatch, state }, from) {
  dispatch('SHARECHOICE', from)
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

export const setSoundState = function ({ dispatch, state }) {
  dispatch('SOUND')
}

export const setPlayerState = function({ dispatch, state }, player){
	dispatch('PLAYER', player)
}

export const setSavingState = function({ dispatch, state }, saving){
	dispatch('SAVING', saving)
}

export const setSavingRowidState = function({ dispatch, state }, savingRowid){
	dispatch('SAVINGROWID', savingRowid)
}
export const setSavingTypeContaintState = function({ dispatch, state }, savingTypeContaint){
	dispatch('SAVINGTYPECONTAINT', savingTypeContaint)
}
export const setSavingSoundState = function({ dispatch, state }, savingSound){
	dispatch('SAVINGSOUND', savingSound)
}
export const setSavingTextState = function({ dispatch, state }, savingText){
	dispatch('SAVINGTEXT', savingText)
}
export const setSavingTypeSecretState = function({ dispatch, state }, savingTypeSecret){
	dispatch('SAVINGTYPESECRET', savingTypeSecret)
}
export const setSavingXState = function({ dispatch, state }, savingX){
	dispatch('SAVINGX', savingX)
}
export const setSavingYState = function({ dispatch, state }, savingY){
	dispatch('SAVINGY', savingY)
}
export const setSavingZState = function({ dispatch, state }, savingZ){
	dispatch('SAVINGZ', savingZ)
}
export const setSavingTextureState = function({ dispatch, state }, savingTexture){
	dispatch('SAVINGTEXTURE', savingTexture)
}
export const setSavingColorState = function({ dispatch, state }, savingColor){
	dispatch('SAVINGCOLOR', savingColor)
}
export const setSavingDateState = function({ dispatch, state }, savingDate){
	dispatch('SAVINGDATE', savingDate)
}
export const setSavingTerrainCollisionneurState = function({ dispatch, state }, savingTerrainCollisionneur){
	dispatch('SAVINGTERRAIN', savingTerrainCollisionneur)
}
export const setCallTerrainCollisionneurState = function({ dispatch, state }, callTerrainCollisionneur){
	dispatch('CALLTERRAIN', callTerrainCollisionneur)
}

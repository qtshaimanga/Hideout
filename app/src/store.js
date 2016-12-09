import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loader: true,
  lockControls: true,

  pres: true,
  skipe: false,
  instanciateSpaceBar: false,

  webglHome: false,
  instanciateWebglHome: false,

  choice: false,
  share: false,
  writing: false,
  telling: false,
  type: { statut:false, from:"home"},
  sharechoice: false,

  secretMessage: false,

  data: Array(),
  ressources: Object(),
  cursorLoader: false,
  cursorProgress: Number(),
  focus: false,
  objectsMoved: Array(),

  about: false,

  sound: true,
  player: Object(),

  saving: Object(),
  savingRowid: String(),
  savingTypeContaint: String(),
  savingSound: String(),
  savingText: String(),
  savingTypeSecret: String(),
  savingX: String(),
  savingY: String(),
  savingZ: String(),
  savingTexture: String(),
  savingColor: String(),
  savingDate: String(),
  savingTerrainCollisionneur: Object(),
  callTerrainCollisionneur: true
}

const mutations = {
  SAVINGROWID(state, savingRowid)
  {
    state.savingRowid = savingRowid
  },
  SAVINGTYPECONTAINT(state, savingTypeContaint)
  {
    state.savingTypeContaint = savingTypeContaint
  },
  SAVINGSOUND(state, savingSound)
  {
    state.savingSound = savingSound
  },
  SAVINGTEXT(state, savingText)
  {
    state.savingText = savingText
  },
  SAVINGTYPESECRET(state, savingTypeSecret)
  {
    state.savingTypeSecret = savingTypeSecret
  },
  SAVINGX(state, savingX)
  {
    state.savingX = savingX
  },
  SAVINGY(state, savingY)
  {
    state.savingY = savingY
  },
  SAVINGZ(state, savingZ)
  {
    state.savingZ = savingZ
  },
  SAVINGTEXTURE(state, savingTexture)
  {
    state.savingTexture = savingTexture
  },
  SAVINGCOLOR(state, savingColor)
  {
    state.savingColor = savingColor
  },
  SAVINGDATE(state, savingDate)
  {
    state.savingDate = savingDate
  },
  SAVINGTERRAIN(state, savingTerrainCollisionneur)
  {
    state.savingTerrainCollisionneur = savingTerrainCollisionneur
  },
  CALLTERRAIN(state, callTerrainCollisionneur)
  {
    state.callTerrainCollisionneur = state.callTerrainCollisionneur ? false : state.callTerrainCollisionneur ? false : true;
  },
  PRES (state)
  {
    state.pres = state.pres ? false : state.pres ? false : true;
  },
  SKIPE (state)
  {
    state.skipe = state.skipe ? false : state.skipe ? false : true;
  },
  SPACEBAR(state)
  {
    state.instanciateSpaceBar = state.instanciateSpaceBar ? false : state.instanciateSpaceBar ? false : true;
  },
  CHOICE (state)
  {
    state.choice = state.choice ? false : state.choice ? false : true;
  },
  WEBGLHOME (state)
  {
    state.webglHome = state.webglHome ? false : state.webglHome ? false : true;
  },
  INSTANCIATEWEBGLHOME (state)
  {
    state.instanciateWebglHome = state.instanciateWebglHome ? false : state.instanciateWebglHome ? false : true;
  },
  SHARE (state)
  {
    state.share = state.share ? false : state.share ? false : true;
  },
  WRITING (state)
  {
    state.writing = state.writing ? false : state.writing ? false : true;
  },
  TELLING (state)
  {
    state.telling = state.telling ? false : state.telling ? false : true;
  },
  SHARECHOICE (state)
  {
    state.sharechoice = state.sharechoice ? false : state.sharechoice ? false : true;
  },
  TYPE (state, from)
  {
    state.type.statut = state.type.statut ? false : state.type.statut ? false : true;
    state.type.from = from;
  },
  RESETSHARE (state, from)
  {
    state.type.statut = false;
    state.telling = false;
    state.writing = false;
  },
  MESSAGE (state)
  {
    state.secretMessage = state.secretMessage ? false : state.secretMessage ? false : true;
  },
  CONTROLS (state)
  {
    state.lockControls = state.lockControls ? false : state.lockControls ? false : true;
  },
  FOCUS (state)
  {
    state.focus = state.focus ? false : state.focus ? false : true;
  },
  DATA (state, data)
  {
    state.data = data;
  },
  MOVE (state, objectsMoved)
  {
    state.objectsMoved = objectsMoved;
	},
  LOADER (state)
  {
    state.loader = state.loader ? false : state.loader ? false : true;
  },
  RESSOURCES(state, ressources)
  {
    state.ressources = ressources
  },
  OPEN(state, cursorProgress)
  {
    state.cursorProgress = cursorProgress
  },
  CURSOR(state)
  {
    state.cursorLoader = state.cursorLoader ? false : state.cursorLoader ? false : true;
  },
  ABOUT(state)
  {
    state.about = state.about ? false : state.about ? false : true;
  },
  SOUND(state)
  {
    state.sound = state.sound ? false : state.sound ? false : true;
  },
  PLAYER(state, player)
  {
    state.player = player
  },
  SAVING(state, saving)
  {
    state.saving = saving
  },
}

export default new Vuex.Store({
  state,
  mutations
})

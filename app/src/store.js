import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loader: true,
  lockControls: true,

  pres: true,
  skipe: false,

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
}

const mutations = {
  PRES (state)
  {
    state.pres = state.pres ? false : state.pres ? false : true;
  },
  SKIPE (state)
  {
    state.skipe = state.skipe ? false : state.skipe ? false : true;
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
  }
}

export default new Vuex.Store({
  state,
  mutations
})

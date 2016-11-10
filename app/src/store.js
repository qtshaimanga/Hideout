import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  skip: false,
  pres: false,
  choice: false,
  webglHome: true,
  share: false
}

const mutations = {
  SKIP (state){
    state.skip = state.skip ? false : state.skip ? false : true;
  },
  PRES (state)
  {
    state.pres = state.pres ? false : state.pres ? false : true;
  },
  CHOICE (state)
  {
    state.choice = state.choice ? false : state.choice ? false : true;
  },
  WEBGLHOME (state)
  {
    state.webglHome = state.webglHome ? false : state.webglHome ? false : true;
  },
  SHARE (state)
  {
    state.share = state.share ? false : state.share ? false : true;
  },
}

export default new Vuex.Store({
  state,
  mutations
})

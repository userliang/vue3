export interface commonStateTypes {
  collapse: boolean
}

const commonModule = {
  namespaced: true,
  state: {
    collapse: false
  },
  mutations: {
    handleCollapse(state: commonStateTypes, collapse: boolean) {
      state.collapse = collapse
    }
  },
  actions: {}
}

export default commonModule

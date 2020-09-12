import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      status: false,
      list: []
    }),
    mutations: {
      increment(state) {
        state.category
      }
    },
    modules: {
      categories: {
        namespaced: true,
        state: () => ({
          list: []
        }),
        mutations: {
          setData(state, { category }) {
            state.list = category
          },
          remove(state, { todo }) {
            state.list = state.list.filter(item => item.id !== todo.id)
          },
          setData(state, { category }) {
            state.list = category
          }
        }
      }
    }
  })
}

export default createStore
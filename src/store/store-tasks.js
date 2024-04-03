const state = {
  task: {
    ID1: {
      name: "Go to ship",
      completed: false,
      dueDate: "2019/02/03",
      dueTime: "17:00",
    },
    ID2: {
      name: "Go to market",
      completed: true,
      dueDate: "2019/12/03",
      dueTime: "17:00",
    },
    ID3: {
      name: "Go to holiday",
      completed: false,
      dueDate: "2020/02/03",
      dueTime: "06:00",
    },
  },
};

const mutations = {
  updateTask(state, payload){
    Object.assign(state.task[payload.id], payload.updates)
  },
  deleteTask(state, id){
    delete state.task[id]
  }
};

const actions = {
  updateTask({commit}, payload){
    commit('updateTask', payload)
  },
  deleteTask({commit}, id){
    commit('deleteTask', id)
  }
};

const getters = {
  tasks: (state) => {
    return state.task;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

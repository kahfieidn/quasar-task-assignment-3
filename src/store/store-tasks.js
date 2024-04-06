import { uid } from "quasar";

const state = {
  tasks: {
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
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  deleteTask(state, id) {
    delete state.tasks[id];
  },
  addTask(state, payload) {
    payload.tasks.completed = false
    state.tasks[payload.id] = (payload.id, payload.tasks.completed, payload.tasks)
  },
};

const actions = {
  updateTask({ commit }, payload) {
    commit("updateTask", payload);
  },
  deleteTask({ commit }, id) {
    commit("deleteTask", id);
  },
  addTask({commit}, tasks) {
    let taskId = uid();
    let payload = {
      id: taskId,
      tasks: tasks,
    };
    commit("addTask", payload);
  },
};

const getters = {
  tasksTodo: (state) => {
    let tasks = {}
    Object.keys(state.tasks).forEach(function(key){
      let task = state.tasks[key]
      if(!task.completed){
        tasks[key] = task
      }
    })
    return tasks;
  },
  tasksCompleted: (state) => {
    let tasks = {}
    Object.keys(state.tasks).forEach(function(key){
      let task = state.tasks[key]
      if(task.completed){
        tasks[key] = task
      }
    })
    return tasks;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

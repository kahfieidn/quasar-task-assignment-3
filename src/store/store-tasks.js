const state = {
    tasks: [
      {
        id: 1,
        name: 'Go to ship',
        completed: false,
        dueDate: '2019/02/03',
        dueTime: '17:00'
      },
      {
        id: 2,
        name: 'Go to market',
        completed: true,
        dueDate: '2019/12/03',
        dueTime: '17:00'
      },
      {
        id: 3,
        name: 'Go to holiday',
        completed: false,
        dueDate: '2020/02/03',
        dueTime: '06:00'
      },
    ]
  
  };
  const mutations = {};
  const actions = {};
  const getters = {};
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
  };
  
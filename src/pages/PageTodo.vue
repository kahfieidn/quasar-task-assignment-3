<template>
  <q-page class="q-pa-md">

    <no-tasks @showAddTask="showAddTask = true" v-if="!Object.keys(tasksTodo).length"></no-tasks>
    <tasks-todo v-else :tasksTodo="tasksTodo"></tasks-todo>
    <tasks-completed  v-if="Object.keys(tasksCompleted).length" :tasksCompleted="tasksCompleted"></tasks-completed>

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn @click="showAddTask = true" round color="primary" size="24px" icon="add" />
    </div>

    <q-dialog v-model="showAddTask">
      <add-task-modal @close="showAddTask = false"></add-task-modal>
    </q-dialog>

    <br>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import Task from 'components/Tasks/Task.vue'
import TasksTodo from 'components/Tasks/TaskTodo.vue'
import TasksCompleted from 'components/Tasks/TaskCompleted.vue'
import NoTasks from 'components/Tasks/NoTasks.vue'
import AddTaskModal from 'components/Tasks/Modals/AddTask.vue'

export default defineComponent({

  name: 'PageTodo',
  data() {
    return {
      showAddTask: false,
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted'])
  },
  components: {
    Task, AddTaskModal, TasksTodo, TasksCompleted, NoTasks
  }

})
</script>

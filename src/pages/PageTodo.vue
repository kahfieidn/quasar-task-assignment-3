<template>
  <q-page class="q-pa-md">
    <q-list separator bordered>

      <task v-for="(task, key) in tasks" :key="task.id" :task="task" :id="key"></task>

    </q-list>

    <q-btn round color="primary" size="24px" icon="add" />
    <br>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import Task from 'components/Tasks/Task.vue'

export default defineComponent({

  name: 'PageTodo',

  computed: {
    ...mapGetters('tasks', ['tasks'])
  },
  components: {
    Task
  }

})
</script>

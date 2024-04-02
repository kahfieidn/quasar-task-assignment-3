<template>
  <q-page class="q-pa-md">
    <q-list separator bordered>

      <q-item @click="task.completed == !task.completed" v-for="task in tasks" :key="task.id"
        :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'" tag="label" v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{ 'text-strike': task.completed }">{{ task.name }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row">
            <div class="column justify-center">
              <q-icon name="event" size="18px" class="q-mr-xs" />
            </div>
            <div class="column">
              <q-item-label class="row justify-end" caption>{{ task.dueDate }}</q-item-label>
              <q-item-label class="row justify-end" caption><small>{{ task.dueTime }}</small></q-item-label>
            </div>
          </div>
        </q-item-section>

      </q-item>

    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageTodo',
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: 'Go to shop',
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
    }
  }
})
</script>

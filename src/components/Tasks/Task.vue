<template>
  <q-item @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'" clickable v-ripple>
    <q-item-section side top>
      <q-checkbox class="no-pointer-events" v-model="task.completed" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ 'text-strike': task.completed }">
        {{ task.name }}
      </q-item-label>
    </q-item-section>

    <q-item-section v-if="task.dueDate" side>
      <div class="row">
        <div class="column justify-center">
          <q-icon class="q-mr-xs" name="event" size="18px" />
        </div>
        <div class="column">
          <q-item-label class="row justify-end" caption>
            {{ task.dueDate }}
          </q-item-label>
          <q-item-label class="row justify-end" caption>
            <small>{{ task.dueTime }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-btn @click.stop="showEditTask = true" flat round color="green" icon="edit" />
        <q-btn @click.stop="promptToDelete(id)" flat round color="red" icon="delete" />
      </div>

    </q-item-section>


    <q-dialog v-model="showEditTask">
      <edit-task-modal @close="showEditTask = false" :task="task" :id="id"></edit-task-modal>
    </q-dialog>

  </q-item>
</template>

<script>
import { mapActions } from 'vuex';
import EditTaskModal from 'components/Tasks/Modals/EditTask.vue'

export default {
  data(){
    return{
      showEditTask: false
    }
  },
  props: ['task', 'id'],
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    promptToDelete(id){
      this.$q.dialog({
        title: 'Confirm',
        message: 'Ingin menghapus data ini?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      }).onCancel(() => {
        console.log('>>>> Cancel')
      })
    },
  },
  components: {
    EditTaskModal
  }
}
</script>

<style></style>
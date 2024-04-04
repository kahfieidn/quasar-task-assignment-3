<template>
    <q-card>

        <modal-header>Edit Task</modal-header>

        <q-form @submit="submitForm" class="q-gutter-md">
            <q-card-section>
                <modal-task-name ref="modalTaskName" v-model:name="taskToSubmit.name"></modal-task-name> 
                <modal-due-date v-model:dueDate="taskToSubmit.dueDate"></modal-due-date>
                <modal-due-time v-if="taskToSubmit.dueDate" v-model:dueTime="taskToSubmit.dueTime"></modal-due-time>
            </q-card-section>
            <modal-buttons></modal-buttons>
        </q-form>

    </q-card>
</template>

<script>
import { mapActions } from 'vuex'
import ModalHeader from 'components/Tasks/Modals/Shared/ModalHeader.vue'
import ModalTaskName from 'components/Tasks/Modals/Shared/ModalTaskName.vue'
import ModalDueDate from 'components/Tasks/Modals/Shared/ModalDueDate.vue'
import ModalDueTime from 'components/Tasks/Modals/Shared/ModalDueTime.vue'
import ModalButtons from 'components/Tasks/Modals/Shared/ModalButtons.vue'

export default {

    data() {
        return {
            taskToSubmit: {
                
            }
        }
    },
    mounted() {
        this.taskToSubmit = Object.assign({}, this.task)
    },
    props:['task', 'id'],
    methods: {
        ...mapActions('tasks', ['updateTask']),
        submitForm() {
            if(!this.$refs.modalTaskName.name.hasError){
                this.submitTask()
            }
        },
        submitTask() {
            this.updateTask({
                id: this.id,
                updates: this.taskToSubmit
            })
            this.$emit('close')
        }
    },
    components: {
        ModalHeader,
        ModalTaskName,
        ModalDueDate,
        ModalDueTime,
        ModalButtons
    }
}
</script>

<style lang="scss" scoped></style>
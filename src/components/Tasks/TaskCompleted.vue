<template>

    <div class="q-mt-lg">
        <list-header bgColor="bg-green-4">Completed</list-header>
        <q-list separator bordered>

            <task v-for="(task, key) in tasksCompleted" :key="task.id" :task="task" :id="key"></task>

        </q-list>
    </div>
</template>

<script>
import Task from 'components/Tasks/Task.vue'
import ListHeader from 'components/Shared/ListHeader.vue'

export default {
    props: ['tasksCompleted'],
    components: {
        Task, ListHeader
    },
    setup() {


        return {}
    },
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped></style>
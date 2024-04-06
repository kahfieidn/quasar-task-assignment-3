<template>
    <div>

        <list-header bgColor="bg-orange-4">Todo</list-header>

        <q-list separator bordered>

            <task v-for="(task, key) in tasksTodo" :key="task.id" :task="task" :id="key"></task>

        </q-list>
    </div>

</template>

<script>
import Task from 'components/Tasks/Task.vue'
import ListHeader from 'components/Shared/ListHeader.vue'

export default {
    props: ['tasksTodo'],
    components: {
        Task, ListHeader
    },
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped></style>
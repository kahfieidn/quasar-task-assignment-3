<template>
    <div class="row q-mb-sm">
        <q-input clearable outlined v-model="nameValue" :rules="[val => !!val || 'Field is required']" autofocus ref="name"
            label="Task name" class="col">
        </q-input>
    </div>
</template>

<script>
export default {
    props: ['name'],
    computed: {
        nameValue: {
            get() {
                return this.name
            },
            set(value) {
                this.$emit('update:name', value)
            }
        }
    }
}
</script>
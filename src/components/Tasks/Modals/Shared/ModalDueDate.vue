<template>
    <div class="row q-mb-sm">
        <q-input clearable label="Due Date" outlined v-model="dueDateValue" ref="dueDate">
            <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-date v-model="dueDateValue">
                            <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                        </q-date>
                    </q-popup-proxy>
                </q-icon>
            </template>
        </q-input>
    </div>
</template>

<script>
export default {
    props: ['dueDate'],
    computed: {
        dueDateValue: {
            get(){
                return this.dueDate
            },
            set(value){
                this.$emit('update:dueDate', value)
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>
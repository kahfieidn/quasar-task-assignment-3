<template>
    <div class="row q-mb-sm">
        <q-input clearable label="Due Time" outlined v-model="dueTimeValue" mask="time" ref="dueTime">
            <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                        <q-time v-model="dueTimeValue">
                            <div class="row items-center justify-end">
                                <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                        </q-time>
                    </q-popup-proxy>
                </q-icon>
            </template>
        </q-input>
    </div>
</template>

<script>
export default {
    props: ['dueTime'],
    computed: {
        dueTimeValue: {
            get(){
                return this.dueTime
            },
            set(value){
                this.$emit('update:dueTime', value)
            }
        }
    }

}
</script>

<style lang="scss" scoped></style>
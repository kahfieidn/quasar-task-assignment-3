<template>
<q-banner inline-actions dense :class="bgColor" class="text-white text-center">
      <span class="text-bold text-subtitle-1"><slot></slot></span>
    </q-banner>
</template>

<script>
export default {
    props: ['bgColor'],
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
.list-header {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
</style>
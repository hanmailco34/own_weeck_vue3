<template>
    <h1>{{msg}}</h1>
</template>

<script>
export default {
    data() {
        return {
            msg: '자식에게 오는 메시지'
        }
    },
    mounted() {
        this.$emit('send-message',this.msg);
    }
}
</script>

<style>

</style>
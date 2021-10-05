<template>
    <button type="button" @click="childFunc" ref="btn">Click</button>
</template>

<script>
export default {
    methods: {
        childFunc() {
            console.log('부모에서 발생 이벤트');
        }
    }
}
</script>

<style>

</style>
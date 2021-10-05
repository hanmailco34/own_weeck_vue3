<template>
    <div></div>
</template>

<script>
export default {
    methods: {
        childFunc() {
            console.log('부모에서 발생 이벤트');
        },
        callFromParent() {
            console.log('부모에서 발생 함수');
        }
    },
}
</script>

<style>

</style>
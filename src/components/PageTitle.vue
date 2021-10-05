<template>
    <h2>{{title}}</h2>
</template>

<script>
export default {
    /* 
    부모에게서 받은 데이터가 저장하는 부분
    */
    props: {
        title: {
            type: String,
            default: "페이지 제목입니다."
        }
    }
}
</script>

<style>

</style>
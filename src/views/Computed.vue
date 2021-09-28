<template>
    <h1>Full Name : {{fullName}} </h1>
</template>

<script>
export default {
    data() {
        return {
            firstName:"Seungwon",
            lastName:"Go"
        };
    },
    computed: {
        fullName() {
            /*
            데이터 값에 변경이 일어나는지 감시
            함수이자 데이터 화면 내 여러 곳에서 사용해도 연산은 한 번뿐
            기존에 정의된 데이터 값을 기반으로 새로운 값 도출
            */
            return this.firstName + ' ' + this.lastName;
        }
    }
};
</script>

<style>

</style>
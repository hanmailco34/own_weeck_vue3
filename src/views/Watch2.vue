<template>
    <div>
        <h1>Full Name : {{fullName}} </h1>
        <button type="button" @click="changName">변경</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            firstName:"Seungwon",
            lastName:"Go",
            fullName:""
        };
    },
    watch: {
        /*
        데이터 값 하나만을 감시
        실제 데이터 변경이 일어나기 전까지 실행 x
        */
        firstName() {
            this.fullName = this.firstName + ' ' + this.lastName;
        },
        lastName() {
            this.fullName = this.firstName + ' ' + this.lastName;
        },
    },
    methods: {
        changName() {
            this.firstName = 'Eunsol';
        }
    }
};
</script>

<style>

</style>
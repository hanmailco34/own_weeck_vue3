<template>
    <ChildComponent3 ref="ChildComponent3" />
    <button type="button" @click="changChildData">Change Child Data</button>
</template>

<script>
//  ref를 이용한 자식 컴포넌트 데이터 변경
import ChildComponent3 from './ChildComponent3';

export default {
    components: {ChildComponent3},
    methods: {
        changChildData() {
            this.$refs.ChildComponent3.msg = '부모가 변경한 데이터';
        }
    }
}
</script>

<style>

</style>
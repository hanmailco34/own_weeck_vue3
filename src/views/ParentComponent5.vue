<template>
    <button type="button" @click="checkChild">자식 컴포넌트 데이터 조회</button>
    <ChildComponent5 ref="child_component" />
</template>

<script>
//  computed를 이용한 자식 컴포넌트와의 데이터 동기화
import ChildComponent5 from './ChildComponent5';

export default {
    components: {ChildComponent5},
    computed : {
        msg() {
            return this.$refs.child_component.msg;
        }
    },
    methods: {
        checkChild() {
            console.log(this.msg);
        }
    }
}
</script>

<style>

</style>
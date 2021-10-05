<template>
    <div>
        <h2>계산기</h2>
        <div>
            <input type="text" v-model="num1">
            <span> + </span>
            <input type="text" v-model="num2">
            <span> = </span>
            <span> {{result}} </span>
        </div>
    </div>
</template>

<script>
//  재사용 가능한 코드

import { computed, reactive, toRefs } from '@vue/reactivity';
function plusCalculator() {
    const state = reactive({
        num1: 0,
        num2: 0,
        result: computed(() => parseInt(state.num1) + parseInt(state.num2))
    });
    return toRefs(state);
}

export default {
    setup() {
        const {num1, num2, result} = plusCalculator();
        return {
            num1, num2, result
        }
    }
}
</script>

<style>

</style>
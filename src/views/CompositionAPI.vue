<template>
    <div>
        <h2>계산기</h2>
        <div>
            <input type="text" v-model="state.num1" @keyup="plusNumbers">
            <span> + </span>
            <input type="text" v-model="state.num2" @keyup="plusNumbers">
            <span> = </span>
            <span> {{state.result}} </span>
        </div>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
//  연관성 있는 로직을 같이 구현
export default {
    setup() {
        const state = reactive({
            num1:0,
            num2:0,
            result:0
        });
        const plusNumbers = () => {
            state.result = parseInt(state.num1) + parseInt(state.num2);
        }
        return {
            state,
            plusNumbers
        }
    }
}
</script>

<style>

</style>
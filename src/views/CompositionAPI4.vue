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
//  common.js에 있는 내용을 import해서 사용
import {plusCalculator} from '../common';

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
<template>
    <ProvideInjectChild />
</template>

<script>
//  손자 컴포넌트에 전달을 쉽게 provide / inject로
import ProvideInjectChild from './ProvideInjectChild';

export default {
    components: {ProvideInjectChild},
    data() {
        return {
            items: ['A','B']
        }
    },
    provide() {
        return {
            itemLength: this.items.length
        }
    }
}
</script>

<style>

</style>
<template>
    <ChildComponent2 ref="ChildComponent2" />
</template>

<script>
import ChildComponent2 from './ChildComponent2';

export default {
    components: {ChildComponent2},
    mounted() {
        this.$refs.ChildComponent2.callFromParent();
    }
}
</script>

<style>

</style>
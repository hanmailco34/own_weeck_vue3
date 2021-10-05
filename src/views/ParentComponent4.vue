<template>
    <ChildComponent4 @send-message="sendMessage" />
</template>

<script>
//  이벤트로 전달받은 데이터 사용
import ChildComponent4 from './ChildComponent4';

export default {
    components: {ChildComponent4},
    methods: {
        sendMessage(data) {
            console.log(data);
        }
    }
}
</script>

<style>

</style>
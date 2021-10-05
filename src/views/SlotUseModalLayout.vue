<template>
    <SlotModalLayout>
        <template v-slot:header>
            <h1>팝업 타이틀</h1>
        </template>
        <template v-slot:default>
            <p>팝업 컨텐츠</p>
        </template>
        <template v-slot:footer>
            <button type="button">닫기</button>
        </template>
    </SlotModalLayout>
</template>

<script>
//  named slots 사용
import SlotModalLayout from './SlotModalLayout';

export default {
    components: {SlotModalLayout}
}
</script>

<style>

</style>
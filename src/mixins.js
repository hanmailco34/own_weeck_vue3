import axios from 'axios';

export default {
    data() {
        return {
            time: ''
        }
    },
    methods: {
        async $api(url, method, data) {
            return (await axios({
                method:method,
                url,
                data
            }).catch(e => {
                console.log(e);
            })).data;
        }
    },
    mounted() {
        this.time = new Date();
    },
    unmounted() {
        console.log('총 페이지 있던 시간:'+ (new Date().getTime() - this.time.getTime()) + ' ms');
    },
}
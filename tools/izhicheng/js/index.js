import { createApp, ref } from '/tools/izhicheng/js/vue.js'

createApp({
    data() {
        return {
            avatar: ref(null),
            imgUrl: ""
        }
    },
    mounted() {
    },
    methods: {
        submitAvatar() {
            let file = this.$refs.avatar.files[0]
            let fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onloadend = e => {
                this.imgUrl = e.target.result
                localStorage.setItem('avatar', `background-image: url('${e.target.result}');`)
                location.replace("/tools/izhicheng/pass.html")
            }
        }
    },
}).mount('#app')
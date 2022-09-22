import { createApp, ref } from '/tools/izhicheng/js/vue.js'

createApp({
    data() {
        return {
            hasLast: false,
            avatar: ref(null),
            imgUrl: "",
            stuInfo: {
                name: "",
                sno: "",
                departments: "",
                major: "",
            },
        }
    },
    created() {
        localStorage.getItem('avatar') && localStorage.getItem('stuInfo') && (this.hasLast = true)
    },
    methods: {
        setStuInfo() {
            let stuInfo = this.stuInfo
            if (stuInfo.name == "" || stuInfo.sno == "" || stuInfo.departments == "" || stuInfo.major == "") {
                alert("请完善身份信息")
                return false
            } else {
                localStorage.setItem('stuInfo', JSON.stringify(this.stuInfo))
                return true
            }
        },
        setAvatar() {
            let files = this.$refs.avatar.files
            if (files.length == 0) {
                alert("请上传图片")
            } else {
                let file = this.$refs.avatar.files[0]
                let fileReader = new FileReader();
                fileReader.readAsDataURL(file)
                fileReader.onloadend = e => {
                    this.imgUrl = e.target.result
                    localStorage.setItem('avatar', `background-image: url('${e.target.result}');`)
                }
            }
            return files.length != 0
        },
        newPass() {
            this.setStuInfo() && this.setAvatar() && this.showPass()
        },
        showPass() {
            location.replace("/tools/izhicheng/pass.html")
        }
    },
}).mount('#app')
import { createApp } from '/tools/izhicheng/js/vue.js'

createApp({
    data() {
        return {
            avatar: `background-image: url('/tools/izhicheng/imgs/avatar_default.png');`,
            stuInfo: {
                name: "刻晴",
                sno: "212206301",
                departments: "计算机工程系",
                major: "2022软件工程1",
            },
            currentTime: {
                hour: 0,
                minute: 0,
                second: 0,
                millsecond: 0,
            },
            currentDate: "",
        }
    },
    created() {
        this.setStuInfo()
        this.setAvatar()
        this.setCurrentDate()
        this.setCurrentTime()
    },
    methods: {
        setStuInfo() {
            let stuInfo = localStorage.getItem('stuInfo')
            if (stuInfo != null) {
                this.stuInfo = JSON.parse(stuInfo)
            }
        },
        setAvatar() {
            this.avatar = localStorage.getItem('avatar') ?? this.avatar
        },
        setCurrentDate() {
            var date = new Date()
            var year = date.getFullYear()
            var month = date.getMonth() + 1
            if (month < 10) {
                month = "0" + month
            }
            var day = date.getDate()
            this.currentDate = year + "年" + month + "月" + day + "日"
        },
        setCurrentTime() {
            setInterval(() => {
                var date = new Date()
                this.currentTime.hour = date.getHours()
                this.currentTime.minute = date.getMinutes()
                this.currentTime.second = date.getSeconds()
                this.currentTime.millsecond = date.getMilliseconds()
                if (this.currentTime.hour < 10) {
                    this.currentTime.hour = "0" + this.currentTime.hour
                }
                if (this.currentTime.minute < 10) {
                    this.currentTime.minute = "0" + this.currentTime.minute
                }
                if (this.currentTime.second < 10) {
                    this.currentTime.second = "0" + this.currentTime.second
                }
                if (this.currentTime.millsecond < 10) {
                    this.currentTime.millsecond = "00" + this.currentTime.millsecond
                }
                if (this.currentTime.millsecond < 100) {
                    this.currentTime.millsecond = "0" + this.currentTime.millsecond
                }
            }, 17);
        }
    },
}).mount('#app')
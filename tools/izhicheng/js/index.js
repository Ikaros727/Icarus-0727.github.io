import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
    data() {
        return {
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
        this.setCurrentDate()
        this.setCurrentTime()
    },
    methods: {
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
import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
const { createApp } = Vue
createApp({
    data() {
        return {
            msg: 'Hello Vue!'
        }
    },
}).mount('#app')
import { defineStore } from 'pinia'
import { ref } from 'vue'
export const uselayout= defineStore('layout',()=>{
    const collapse=ref(false)
    return{collapse}
})
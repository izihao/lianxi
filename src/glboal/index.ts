import glenmenticon from "./glenmenticon";
import glelment from "./glelment";
import type { App } from "vue";
export const globals =(app:App)=>{
    app.use(glelment)
    app.use(glenmenticon)
}
import { writable} from "svelte/store";
let id=2;
const habitadd_store = writable([{
    id:1,
    habit:"Reading",
    logo:"Read-Book",
    count:"156 Sheets",
    backcolor:"hsl(240, 45%, 38%)",
},
{
    id:2,
    habit:"Walk",
    logo:"Walk",
    count:"15 km",
    backcolor:"#DC143C",
},]);
console.log(habitadd_store);
export default habitadd_store;
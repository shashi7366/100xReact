import {atom, selector} from "recoil";
import axios from "axios";

export const countAtom=atom({
    key:"countAtom",
    default:0
})

export const evenSelector=selector({
    key:"evenAtom",
    get:({get})=>{
        const count=get(countAtom);
        return count%2==0;
    }
})

export const allTodosAtom=atom({
    key:"allTodosAtom",
    default:selector({
        key:"allTodoAtomSelector",
        get:async ()=>{
            await new Promise((r)=>{setTimeout(r,3000)});
            const res=await axios.get("https://jsonplaceholder.typicode.com/posts");
            return res.data;
        }
    })
})
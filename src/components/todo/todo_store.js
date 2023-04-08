import {  writable } from "svelte/store";

const todoList=writable([
    {task:"kannan"},
    {task:"ramesh"},
    {task:"kannan"},
    {task:"kannan"},
]);

export default todoList;
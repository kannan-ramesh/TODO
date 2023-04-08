import {writable} from "svelte/store";

const userName = writable (
    name="Ramesh"
);

export default userName;
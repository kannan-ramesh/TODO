<script>
import { fade, fly } from 'svelte/transition';
import Icon from "../../Icon.svelte";
import habitadd_store from './habitadd_store';

export let habits=[];

habitadd_store.subscribe(data =>{
    habits = data;
});

</script>

<div class="box" transition:fade>
    {#each habits as {habit,logo,count,backcolor}}
        <div class="box1" style="background-color: {backcolor};" transition:fade>
            <div class="icons-habit">
                <Icon name={logo} class="icon-habit"></Icon>
            </div>
            <h5>{habit}</h5>
            <h3>{count}</h3>
        </div>
    {/each}
</div>

<style>
.box{
    width:90vw;
    height:100%;
    margin: 10px;
    display:flex;
    column-gap: 10px;
    background-color: hwb(40 96% 3%);
    border-radius: 10px;
    overflow-x: scroll;
    padding-right: 100px;
    
}
::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
:global(body.dark-mode) .box{
   background-color:#3b3737;
}
.box1 {
    width:80px;
    height:200px;
    padding: 50px;
    border-radius: 20px;
    margin: 5px;
    box-sizing:content-box;
}

.icons-habit{
  display: flex;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-style: solid;
  border-color: #f9f8f8;
  border-radius: 50px;
  background-color: hsl(0, 2%, 55%);
}
:global(.icon-habit){
    width: 50px;
    height: 50px;
    fill: #f8f7f5;
    display: flex;
    justify-content: center;
}

h5{
    font-size: 20px;
    margin:10px;
    margin-right: 10px;
    font-weight: 40px;
    color: #f8f7f5;
    text-align:start;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
h3{
    width: 60vw;
    text-align: start;
    color: #f8f7f5;
    font-size: 25px;
    margin-top: 10px;
    font-weight: 40px;
}
</style>
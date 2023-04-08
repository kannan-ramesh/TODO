<script>
    import {push,pop} from 'svelte-spa-router';
    import Icon from "../../Icon.svelte";
    import HabitShow from "./HabitShow.svelte";
    
</script>

<div class="header">
    <h3>Your habits</h3>
    <button class="icon_btn"  on:click={() => push('/habitadd/')}>
        
        <Icon name="add" class="ico"></Icon>
    </button>
</div>
<div class="habit">
    <HabitShow/>
</div>

<style>
    .header{
        margin: 10px;
        height: 60px;
    }
    h3{
        float: left;
        margin: 10px;
        font-size: 30px;
        font-weight: 10px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    .icon_btn{
        margin-top: 10px;
        float: right;
        margin-right: 10px;
        border: none;
        width: 40px;
        height: 30px;
        background-color: transparent;
    }
    :global(.ico){
    width: 40px;
    height: 40px;
    fill: aliceblue;
    background-color: hsl(240, 59%, 47%);
    border-radius: 30px;
   }

   :global(body.dark-mode) :global(.ico){
    background-color: #872c2c;
   }
  
   
</style>
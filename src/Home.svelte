<script>
    import Header from "./components/Header/Header.svelte";
    import Calander from "./components/Calander/Calander.svelte";
    import Habit from "./components/Habit/Habit.svelte";
    import Todo from "./components/todo/Todo.svelte";
    import Icon from "./Icon.svelte";
    import {link,push,pop} from 'svelte-spa-router';

    const today =new Date;
</script>

<div class="Home">
    <Header/>
	<Calander {today} year={2022}/>
	<Habit/>
    <Todo/>
</div>

<div class="footer">
    <button class="icon_btn1">
        <a href="/home/" use:link>
        <Icon name="Home" class="home-ico"></Icon></a>
    </button>
    <button class="icon_btn2"  on:click|once={() => push('/todoadd/')}>
        <Icon name="add" class="home-ico"></Icon>
    </button>
    <button class="icon_btn3"  on:click|once={() => pop('/useradd/')}>
        <Icon name="adduser" class="home-ico"></Icon>
    </button>
</div>

<style>
    .footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 70px;
    background-color: #ebebeb;
    color: white;
    text-align: center;
    border-radius: 40px 40px  0px 0px;
    }
    :global(body.dark-mode) .footer{
        background-color: black;
    }
    

    :global(.home-ico){
        width: 40px;
        height: 40px;
    }
    :global(body.dark-mode .home-ico){
        border-radius: 30px;
        fill: aliceblue;
    }

    .icon_btn1{
        border: none;
        float: left;
        margin-top: 20px;
        margin-left: 20px;
    }
    :global(body.dark-mode .icon_btn1){
        background-color:black;
    }
    .icon_btn2{
        background-color: blue;
        border-radius: 30px;
        fill: aliceblue;
        border: none;
        justify-content: center;
        margin-top: 20px;
    }
   
    :global(body.dark-mode) .icon_btn2{
        background-color: brown;
    }
   
    .icon_btn3{
        border: none;
        float:right;
        margin-right: 20px;
        margin-top: 20px;
    }
    :global(body.dark-mode .icon_btn3){
        background-color:black;
    }
</style>

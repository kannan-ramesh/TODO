
<script>
    import Icon from '../../Icon.svelte';
    import {link,push,pop} from 'svelte-spa-router'
    import todo_store from '../todo/todo_store';
    let newItem="";
    
    
    function addTodo(){
        
        if(newItem !== ""){
            $todo_store=[...$todo_store,{task:newItem,completed:false},];
            newItem="";
        }
        console.log(todo_store);
    }
    
    
   
    </script>
    
    <div class="container">
        <div>
            <form on:submit|preventDefault={addTodo}>
                <input bind:value={newItem} type="task" class="todos_input" placeholder="Add item">
                <button class="todos_button">Add</button>
            </form>
        </div>
    
    </div>
    
    <div class="footer">
        <button class="icon_btn1"> <a href="/home/" use:link>
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
       .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 90vh;
    background-size: cover;
    padding-top: 10vh;
    background-color: #e3e1da;
    
    }

    .todos_input{
        background-color: inherit;
        border: none;
        box-shadow: none;
        text-decoration: none;
        font-size: 1.2rem;
        border-bottom: 1px solid black;
        margin-top: 15px;
        outline:none;
        width: 60vw;
        font-size: 30px;
        font-weight: 30px;
    }

    .todos_button{
        background-color: inherit;
        border:2px solid black;
        font-size: 1.2rem;
        cursor: pointer;
        background-color: blue;
        color: aliceblue;
    }
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

        .icon_btn1{
        border: none;
        float: left;
        margin-top: 20px;
        margin-left: 20px;
    }
    .icon_btn2{
        border: none;
        justify-content: center;
        margin-top: 20px;
    }
    .icon_btn3{
        border: none;
        float:right;
        margin-right: 20px;
        margin-top: 20px;
    }
    </style>
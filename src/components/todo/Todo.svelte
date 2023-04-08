<script>
    import todo_store from '../todo/todo_store';
    import Icon from '../../Icon.svelte';

    export let todoList=[];

    todo_store.subscribe(data =>{
        todoList = data;
    });

    function removeList(i){
        todoList.splice(i,1);
        todoList=todoList;
    }
</script>


<div class="header">
    <h3>Today's tasks:</h3>
</div>
<div class="todo_box">
    <div class="to">
        {#each todoList as item,i}
                <div class="todo">
                    <span class={`todo_text ${item.completed ?"todo_strick": ""}`}>{item.task}</span>
                    <div class="icons">
                        <button class="icon_btn" on:click={()=> (item.completed = !item.completed)}>
                            <Icon name="check-mark" class="check-icon"></Icon>
                        </button>
                        <button class="icon_btn" on:click={()=> removeList(i)}>
                            <Icon name="delete" class="delete-icon"></Icon>
                        </button>
                    </div>
                </div>
            {/each}
    </div>
</div>


<style>
    .header h3{
        font-size: 30px;
    }
    .to{
    
        height: 370px;
        overflow-x: scroll ;
        margin-bottom: 80px;
        overflow-y: scroll;
    }
    ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
    }
    .todo{
        display: flex;
        padding:20px;
        border-radius: 20px;
        box-shadow: 0 0 15px rgb(0 0 0/20%);
        background-color:hsla(0, 0%, 100%, 0.2);;
        margin-top: 15px;
        font-size:2rem;
        justify-content: space-between;
        align-items: center;
        margin-left: 20px;
        margin-right: 20px;  
        
    }
    .icon_btn{
        border: none;
        background-color: aliceblue;
    }
    :global(body.dark-mode) .icon_btn{
        background-color:hsla(0, 0%, 100%, 0.2);;
    }
    :global(.check-icon,.delete-icon){
        background-color: blue;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        fill: aliceblue;
    }
    :global(body.dark-mode .check-icon,body.dark-mode .delete-icon){
        background-color: brown;

    }
    
    .todo_strick{
        text-decoration: line-through;
    }
</style>
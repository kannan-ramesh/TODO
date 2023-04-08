<script>
    import Icon from "../../Icon.svelte";
    import userName from "./userName";

    export let name="";

    userName.subscribe((data)=>{
        name=data;
    });

    const date=new Date();
    const currentTime=date.getHours();

    let show=false;

    function toggle(){
        show=!show;
        window.document.body.classList.toggle('dark-mode');
    }

</script>

<div class="header">
    <div class="user_name">
        {#if currentTime >=0 && currentTime <=12}
            <h3>Good morning,<br>{name}</h3>
        {:else if currentTime > 12 && currentTime <= 18}
            <h3>Good Afternoon,<br>{name}</h3>
        {:else}
            <h3>Good Evening,<br>{name}</h3>
        {/if}
    </div>

    <div class="icons">
        {#if show}
            <button class="icon_btn" on:click={toggle}>
                <Icon name="night-mode" class="headicon"></Icon>
            </button>
        {:else}
            <button class="icon_btn" on:click={toggle}>
                <Icon name="dark-mode" class="headicon"></Icon>
            </button>
        {/if}
    </div>
   
</div>

<style>
    .header{
        margin-top: 20px;
        height: 100px;
    }
    .header .user_name{
        width:75%;
        margin-left: 20px;
        float: left;
        
    }
    .user_name h3{
        color: rgb(4, 4, 4);
        font-size:22px;
        font-weight: bold;
       margin-top: 10px;
       
       font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
    .header .icons{
        width:25px;
        float: right;
        margin-right: 30px;
        margin-top: 10px;
    }

    .icon_btn{
        border: 2px solid hwb(0 93% 5%);
        border-radius: 30px;
        background-color: black;
        height: 50px;
        width: 50px;
        fill: hwb(30 94% 5%);
    }

    :global(body.dark-mode) .header .user_name h3 {
		color:#f1eded;
	}

    

   
</style>
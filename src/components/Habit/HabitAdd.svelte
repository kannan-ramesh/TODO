<script>
    import habitadd_store from "./habitadd_store";
    import Home from "../../Home.svelte";
    import {pop} from 'svelte-spa-router';

    let habit;
    let logo;
    let count;
    let backcolor;

    const  addhapit= ()=> {
        const newItem = {id:3,habit:habit, logo:logo,count:count,backcolor:backcolor};
        $habitadd_store = [...$habitadd_store, newItem];
        id++;
    };

    let show = false;


</script>

<main class="container">
    <div class="back">
        <button class="btn" on:click={() => pop('/habitadd/')} >Back</button>
    </div>
    <div class="habitAdd">
        <form on:submit|preventDefault={addhapit} >
            <label for="habits">Choose your habits:</label>
            <input list="habits" name="habit" id="habit" bind:value={habit}>
            <datalist id="habits">
                <option value="Read-Book">
                <option value="Walk">
                <option value="Sing">
                <option value="Game">
                <option value="Draw">
            </datalist>
            <br>
            <label for="logos">Choose your logo:</label>
            <input list="logos" name="logo" id="logo" bind:value={logo}>
            <datalist id="logos">
                <option  value="Read-Book">
                <option value="Walk">
                <option value="Sing" >
                <option value="Game">
                <option value="Draw">
            </datalist>
            <br>
            <label for="habit">Habits Scores:</label>
            <br>
            <input type="number" min="0" max="100" bind:value={count} name="num">
            <br>
            <label for="color">Select Color:</label>
            <br>
            <input type="color"  name="color" bind:value={backcolor}>
            <br>
            <button type="submit">Submit</button>
        </form>
    </div>
</main>

{#if show}
    <Home/>
{/if}

<style>
    main{
        margin: 0;
       height: 100vh;
        background-color: aquamarine;
       
    }

    .back .btn{
        margin-top: 10px;
        margin-left: 10px;
        width: 30%;
        height: 40px;
        font-size: 30px;
        color: hsl(240, 24%, 96%);
        background-color: #260de8;
        border-radius: 20px;
        border: 2px solid whitesmoke;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    }
    .btn:hover{
        color: brown;
        background-color: darkgray;
    }

    .habitAdd{
        margin-top: 20px;
        width: 80%;
        margin-left: 35px;
        height:80vh;
        background-color: hsl(233, 92%, 47%);
        border: 3px solid black;
        border-radius: 10px;
        
    }

    form{
        width: 100%;
        height: 80vh;
        margin-top: 20px;
        align-items: center;
        font-size: 30px;
        color: hsl(216, 17%, 94%);
        margin-left: 20px;
    }

    label{
        font-size: 30px;
        color: #ffca1e;
        font-family: Impact, Haettenschweiler;
        font-weight: 20px;
        text-shadow:1px black;
    }
    input{
        width: 80%;
        height: 50px;
        margin-top: 15px;
        margin-bottom: 15px;
        border-radius: 10px;
        font-size: 30px;
    }
    input:hover{
        border: 3px solid red;
    }

    button{
        width: 40%;
        height: 8vh;
        margin-top: 30px;
        margin-left: 70px;
        background-color: aqua;
        font-size: 30px;
        border-radius: 20px;
        border: 2px solid blue;
        font-weight: 50px;
    }

    
</style>
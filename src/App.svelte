<script>
	import Router from "svelte-spa-router";
	import routes from './routes';	
</script>

<main>
	<Router {routes}/>
</main>

<style>
	main{
		overflow: hidden;
	}
	:global(body) {
		background-color: hsl(0, 20%, 99%);
		color: hwb(240 5% 95%);
		transition: background-color 0.3s
	}
	:global(body.dark-mode){
		background-color: #3b3737;
		color: rgb(248, 248, 248);
	}
	::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
</style>
<script>
   	import calendarize from 'calendarize';

   export let year=2019;
   export let month=0;//jan
   export let offset = 0;//sun
   export let today =null;//Date

   export let labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	//export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

   $: today_month = today && today.getMonth();
	$: today_year = today && today.getFullYear();
	$: today_day = today && today.getDate();

   let prev = calendarize(new Date(year, month-1), offset);
	let current = calendarize(new Date(year, month), offset);
	let next = calendarize(new Date(year, month+1), offset);

   function isToday(day) {
		return today && today_year === year && today_month === month && today_day === day;
	}
</script>

<div class="dat">
   <div class="month">
      {#each labels as txt, idx (txt)}
         <span class="label">{ labels[(idx + offset) % 7] }</span>
      {/each}
   
      {#each { length:1 } as w,idxw (idxw)}
         {#if current[idxw]}
            {#each { length:7 } as d,idxd (idxd)}
               {#if current[idxw][idxd] !=0 }
                  <span class="date" class:today={isToday(current[idxw][idxd])}>
                     { current[idxw][idxd] }
                  </span>
               {:else if (idxw < 6)}
                  <span class="date other">{ prev[prev.length - 1][idxd] }</span>
               {:else}
                  <span class="date other">{ next[0][idxd] }</span>
               {/if}
            {/each}
         {/if}
      {/each}
   </div>
  
</div>

<style>
 .dat{
    width: 80%;
    height: 90px;
    background-color: black;
    display:flex;
    margin-right: 10px;
    margin-left:10%;
    border-radius: 10px;
 }
 :global(body.dark-mode) .dat{
    background-color: hwb(210 69% 29%);
 }
 .month {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		text-align: center;
		grid-gap: 4px;
	}
	
	.label {
      color:#d4d3d3;
      font-size: 10px;
		font-weight: 10px;
		text-align: center;
		text-transform: uppercase;
		margin-bottom: 0.5rem;
      margin-top: 10px;
      margin-left:10px;
	}
   :global(body.dark-mode) .label{
      color:black;
   }
	
	.date {
      color: aliceblue;
		height: 20px;
      width: 20px;
		font-size: 16px;
		letter-spacing: -1px;
		border: 1px solid #e6e4e4;
		padding-right: 4px;
		font-weight: 700;
		padding: 0.5rem;
      background-color: rgb(225, 28, 28);
      border-radius: 20px;
	}
	:global(body.dark-mode) .date{
      color: aliceblue;
      background-color: brown;
   }
	.date.today {
		color: hwb(0 7% 16%);
		background: #c4d9fd;
		border-color: currentColor;
	}
	
	

</style>



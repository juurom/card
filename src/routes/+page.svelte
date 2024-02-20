<script>
    import { onMount } from 'svelte';
	export let data;
	
	let cnt = data.heartcount;
    const incrementHeartCount = async () => {
        try {
            const response = await fetch('http://localhost:5173/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ increment: true })
            });

            if (!response.ok) {
                throw new Error('server error');
            }

            //client counter increment
            cnt++;
        } catch (error) {
            console.error(error);
        }
    };

    onMount(() => {
        const button = document.getElementById('heartcountBtn');
        button.addEventListener('click', incrementHeartCount);
    });
</script>


<h2>{data.job}</h2>
<h1>{data.name}</h1>
<div>
	응원의 하트를 보내주세요!
</div>
<button id="heartcountBtn">
	{cnt}
</button>


<style>
	h1{
		font-size: 30px;
	}
</style>
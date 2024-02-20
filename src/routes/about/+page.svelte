<script>
    export let data;
    //console.log(data.skills)

</script>

<div>
    <div>
        name: {data.name}
    </div>
    <div>
        birth: {data.birth}
    </div>
    <div>
        bio: {data.bio}
    </div>
    <div>
        skills:
        {#each data.skills as skill}
            <div>{skill.skillname} </div>
            {#each Array.from({ length: skill.skillstat }) as _, index}
                <div id="statblock"></div>
            {/each}
        {/each}
    </div>
</div>

<style>
	#statblock{
        display: inline-block;
        width: 10px; height: 10px;
		background-color: rgb(0,0,0);
	}
</style>
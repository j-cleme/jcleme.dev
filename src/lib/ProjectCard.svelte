<script lang="ts">
	export let title: String;
	export let shortDesc: String;
</script>

<div
	class="bg-base shadow-xl shadow-black rounded-md w-[40rem] h-[20rem] grid grid-cols-2 grid-rows-6 text-white"
>
	<img class="min-h-full row-span-6" src="./projectIcons/{title.toLowerCase()}.png" alt="" />
	<h1 class="text-4xl">{title}</h1>
	<p class="">{shortDesc}</p>
</div>

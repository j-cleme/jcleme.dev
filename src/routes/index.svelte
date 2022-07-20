<script context="module">
	export const prerender = true;
	import Namedrop from '$lib/namedrop.svelte';
	import { Github, Instagram, Linkedin } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<center>
	<Namedrop />
	<section id="sm-links">
		<a href="https://www.linkedin.com/in/clemensjosh/" target="_blank" title="LinkedIn"
			><Linkedin size="2.5rem" /></a
		>
		<a href="https://github.com/j-cleme" target="_blank" title="Github"><Github size="2.5rem" /></a>
		<a href="https://www.instagram.com/clemensjosh1/" target="_blank" title="Instagram"
			><Instagram size="2.5rem" /></a
		>
	</section>
</center>

<style>
	section {
		margin-top: 2vh;
	}

	#sm-links {
		max-width: 45%;
		min-height: 5rem;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	#sm-links a {
		border: 0.25rem solid var(--color-black);
		border-radius: 50%;
		width: 5rem;
		height: 5rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-image: linear-gradient(to right, var(--color-white), var(--color-white));
		background-position: center;
		background-repeat: no-repeat;
		background-size: 0 0;
		transition: all 0.5s ease;
	}

	#sm-links a:hover {
		color: var(--color-black);
		background-size: 100% 25rem;
	}
</style>

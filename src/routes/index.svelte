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
		<a href="https://www.linkedin.com/in/clemensjosh/" target="_blank"><Linkedin size="2.5rem" /></a
		>
		<a href="https://github.com/j-cleme" target="_blank"><Github size="2.5rem" /></a>
		<a href="https://www.instagram.com/clemensjosh1/" target="_blank"><Instagram size="2.5rem" /></a
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

	#sm-links a:hover {
		color: var(--color-green);
	}
</style>

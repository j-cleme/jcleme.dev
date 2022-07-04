<script>
	import { page } from '$app/stores';
	import '../../app.css';
	import { Code2 } from 'lucide-svelte';
</script>

<div>
	<a class="icon" sveltekit:prefetch href="/">
		<Code2 size="45" />
	</a>
	<nav>
		<a class:active={$page.url.pathname === '/'} sveltekit:prefetch href="/">Home</a>
		<a class:active={$page.url.pathname === '/blog'} sveltekit:prefetch href="/blog">Blog</a>
		<a class:active={$page.url.pathname === '/contact'} sveltekit:prefetch href="/contact"
			>Contact</a
		>
	</nav>
</div>

<style>
	div {
		font-family: 'Staatliches', cursive;
		font-size: 2.5rem;
		width: 98vw;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-left: 2vw;
		margin-top: 4vh;
	}

	nav {
		display: grid;
		grid-template-columns: auto auto auto;
		column-gap: 1.5rem;
		margin-right: 2.5rem;
	}

	.icon {
		color: var(--color-black);
		align-self: flex-start;
		width: 72px;
		height: 72px;
		border-radius: 50%;
		background-color: var(--color-green);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.active {
		/* text-decoration: underline solid var(--color-green); */
		color: var(--color-green);
	}
	/* 
	.active::before {
		content: '';
		left: -100%;
		top: 1rem;
		width: 10rem;
		height: 2px;
		background-color: var(--color-green);
	} */
</style>

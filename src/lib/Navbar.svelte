<script>
	import { page } from '$app/stores';
	import '../app.css';
	import { Code2 } from 'lucide-svelte';
</script>

<div>
	<a class="icon" sveltekit:prefetch href="/">
		<Code2 size="45" />
	</a>
	<nav>
		<a class:active={$page.url.pathname === '/'} class="link-internal" sveltekit:prefetch href="/"
			>Home</a
		>
		<!-- <a
			class:active={$page.url.pathname === '/blog'}
			class="link-internal"
			sveltekit:prefetch
			href="/blog">Blog</a
		> -->
		<a
			class:active={$page.url.pathname === '/contact'}
			class="link-internal"
			sveltekit:prefetch
			href="/contact">Contact</a
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
		color: var(--color-green);
	}

	.link-internal {
		background-image: linear-gradient(to right, var(--color-white), var(--color-white));
		background-position: bottom left;
		background-repeat: no-repeat;
		background-size: 0 0.25rem;
		transition: background-size 0.5s ease;
	}

	.link-internal:hover {
		background-size: 100% 0.25rem;
	}
</style>

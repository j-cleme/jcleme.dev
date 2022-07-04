<svelte:head>
	<title>Blog</title>
</svelte:head>

<center>
	<header>
		<h1>Josh Clemens</h1>
		<h2><span>Web Design </span><span>& </span><span>Development</span></h2>
	</header>
</center>

<style>
	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 8vh;
	}
	h1 {
		color: var(--color-green);
		font-size: 120px;
	}
	h2 {
		font-size: 60px;
	}
	h2 :nth-child(2) {
		color: var(--color-green);
	}
</style>

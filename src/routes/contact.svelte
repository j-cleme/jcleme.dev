<script>
	import Namedrop from '$lib/namedrop.svelte';
	import { Mail } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<center>
	<Namedrop />
	<section id="icons">
		<a href="mailto:clemensjosh@proton.me" class="icon">
			<Mail size="2.5rem" />
		</a>
	</section>
	<section>
		<h3>Contact Me!</h3>
		<p>
			The best way to get in contact with me is to send an email to clemensjosh (at) proton (dot)
			me.
		</p>
		<!-- <p>Alternatively, feel free to send me a message on</p> -->
	</section>
</center>

<style>
	h3 {
		font-size: 40px;
	}
	#icons {
		display: flex;
		justify-content: center;
		align-items: center;
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
	section {
		margin-top: 2vh;
		margin-left: 10%;
		margin-right: 10%;
		min-width: fit-content;
		max-width: 45vw;
		text-align: start;
	}
</style>

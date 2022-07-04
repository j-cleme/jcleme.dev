<script>
	import { Mail } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<center>
	<header>
		<h1>Josh Clemens</h1>
		<h2><span>Web Design </span><span>& </span><span>Development</span></h2>
	</header>
	<section id="icons">
		<a href="mailto:clemensjosh@proton.me" class="icon">
			<Mail size="2.5rem" />
		</a>
	</section>
	<section>
		<h3>Contact Me!</h3>
		<form action="/api/contact" method="post" enctype="application/json">
			<input type="text" name="name" id="name" placeholder="Name" />
			<input type="email" name="email" id="email" placeholder="Email" />
			<input type="text" name="subject" id="subject" placeholder="Subject" />
			<textarea name="message" id="message" cols="30" rows="6" placeholder="Message" />
			<input type="submit" value="Send" />
		</form>
	</section>
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
	section form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: 95%;
		margin-left: 2.5%;
		margin-right: 2.5%;
		min-width: fit-content;
	}
	section form input,
	section form textarea {
		width: 100%;
		min-width: 40%;
		margin-top: 1vh;
		border: none;
		border-bottom: 1px solid;
		border-color: var(--color-green);
		background-color: var(--color-black);
		color: var(--color-white);
	}
	section form [type='submit'] {
		align-self: flex-end;
		max-width: fit-content;
		min-width: fit-content;
		background-color: var(--color-green);
		color: var(--color-black);
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}
</style>

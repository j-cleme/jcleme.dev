<script lang="ts">
	import { Send } from 'lucide-svelte';
	import SideNav from '../lib/SideNav.svelte';
</script>

<svelte:head>
	<title>Josh Clemens</title>
	<meta property="og:image" content="og.png" />
	<meta property="description" content="Josh Clemens, Full Stack Web Developer" />
	<meta property="og:description" content="Josh Clemens, Full Stack Web Developer" />
	<meta property="og:title" content="Josh Clemens, Full Stack Web Developer" />
	<meta property="og:url" content="joshclemens.dev" />
</svelte:head>

<div class="bg-base min-w-full min-h-screen">
	<main class="w-9/12 mx-auto pt-10 flex flex-col">
		<img
			src="headshot.png"
			alt="headshot"
			class="w-80 h-80 from-cat-purple bg-gradient-to-br to-pink-600 rounded-full shadow-xl shadow-black my-4"
		/>
		<h1
			class="text-6xl md:text-7xl lg:text-8xl text-purple-600 font-['Staatliches'] bg-clip-text text-transparent from-cat-purple bg-gradient-to-br to-pink-600"
		>
			Hi, I'm Josh Clemens.
		</h1>
		<h2 class="text-3xl md:text-4xl lg:text-5xl text-neutral-50 font-['Staatliches']">
			<span class="text-pink-600">Full Stack </span><span>Web Developer</span>
		</h2>
		<a
			href="mailto:jcleme@proton.me"
			class="group px-4 py-2 my-4 max-h-max max-w-max bg-pink-600 rounded-md text-white shadow-black transition-all duration-200 hover:shadow-lg hover:text-black hover:-translate-y-2 active:animate-ping flex flex-row gap-2"
			><span>Contact Me</span>
			<span class="group-hover:text-black transition-all duration-200"><Send /></span>
		</a>
		<SideNav />
	</main>
</div>

<script lang="ts">
	import { Github, Linkedin, Send } from 'lucide-svelte';
</script>

<div
	class="bg-black/60 my-8 md:my-auto fill-purple-600 h-max p-4 rounded-xl w-3/4 mx-auto flex flex-row gap-8 justify-center items-center md:w-max md:flex-col md:absolute md:right-40 md:top-20"
>
	<a
		href="mailto:jcleme@proton.me"
		title="Send me an email!"
		class="hidden group p-2 max-h-max max-w-max bg-pink-600 rounded-md text-white transition-all duration-200 hover:shadow-lg hover:text-black hover:scale-105 hover:-translate-y-2 md:flex flex-row gap-2"
		><Send />
	</a>
	<a
		href="https://www.linkedin.com/in/clemensjosh/"
		target="_blank"
		rel="noreferrer"
		title="Visit my LinkedIn page!"
		class="p-2 max-h-max max-w-max bg-cat-purple rounded-md text-white transition-all duration-200 hover:shadow-lg hover:text-black hover:scale-105 hover:-translate-y-2"
	>
		<Linkedin />
	</a>
	<a
		href="https://github.com/j-cleme"
		target="_blank"
		rel="noreferrer"
		title="Check out my Github profile!"
		class="p-2 max-h-max max-w-max bg-cat-purple rounded-md text-white transition-all duration-200 hover:shadow-lg hover:text-black hover:scale-105 hover:-translate-y-2"
	>
		<Github />
	</a>
</div>

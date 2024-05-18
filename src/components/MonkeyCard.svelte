<script async script lang="ts">
  export let title;
  export let href;
  export let key: string;

  const APE_URL = "https://api.monkeytype.com/users/vasci/profile";

  async function getMonkeyStats() {
    const ape = await fetch(APE_URL, {
      headers: {
        Authorization: `ApeKey ${key}`,
      },
    });
    const apeResponse = await ape.json();
    console.log(apeResponse);

    if (ape.ok) {
      return apeResponse;
    } else {
      throw new Error(apeResponse);
    }
  }

  let monkeyStats = getMonkeyStats();
</script>

<a {href} target="_blank" class="card">
  <i data-lucide="arrow-up-right" />
  <h2>{title}</h2>
  {#await monkeyStats}
    <p>fetching data from monkeytype...</p>
  {:then stats}
    <p>Completed Tests: {stats.data.typingStats.completedTests}</p>
    <p>
      Time Typing: {Math.floor(
        (stats.data.typingStats.timeTyping % 86400) / 3600
      )} hours,
      {Math.floor((stats.data.typingStats.timeTyping % 3600) / 60)} minutes
    </p>
    <p>
      Personal Best WPM: {stats.data.personalBests.time["30"][0].wpm}
    </p>
  {:catch error}
    <p>Something went wrong: {error.message}</p>
  {/await}
</a>

<style>
  .card {
    overflow: hidden;
    padding: 1.5rem /* 24px */;
    border: 1px;
    border-radius: 0.5rem /* 8px */;
    align-self: flex-start;
    justify-self: flex-start;
    position: relative;
    grid-column: span 1 / span 1;
    grid-row: span 2 / span 2;
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: var(--gray-a2);
    backdrop-filter: blur(60px);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 75ms;
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }

  @media (max-width: 640px) {
    .card {
      grid-column: span 1 / span 1;
      grid-row: span 1 / span 1;
    }
  }

  svg {
    height: 1.5rem /* 24px */;
    position: absolute;
    top: 1rem /* 16px */;
    right: 1rem /* 16px */;
  }
</style>

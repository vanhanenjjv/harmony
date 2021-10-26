<script lang="ts">
  import { state } from '../state'
  import Guild from './Guilds/Guild.svelte'
</script>

<div class="inline-flex flex-col p-3 gap-3 bg-gray-800 h-full hidden-scrollbar overflow-y-scroll">
  {#each $state.guilds as guild (guild.id)}
  <Guild id={guild.id} name={guild.name} logo={guild.logo} />
  {/each}
</div>  

<style scoped>
  .hidden-scrollbar::-webkit-scrollbar {
    display: none;
  }

  .hidden-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
</style>

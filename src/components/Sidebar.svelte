<script lang="ts">
  import { state } from '../state'
  import Guild from './Guilds/Guild.svelte'
</script>

<div class="inline-flex flex-col p-3 gap-3 bg-gray-800 h-full">
  {#each $state.guilds as guild (guild.id)}
    <Guild id={guild.id} name={guild.name} logo={guild.logo} />
  {/each}
</div>

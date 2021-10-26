<script lang="ts">
  import type * as types from '../../types'

  import { state } from '../../state'

  import Channel from './Channel.svelte'

  $: guildName = $state.guilds.filter(g => g.id === $state.openGuild)[0].name
  $: channels = $state.guilds.filter(g => g.id === $state.openGuild)[0].channels
</script>

<div class="w-64 bg-gray-700">
  <div class="p-4 border-b border-black flex justify-between hover:bg-gray-600">
    <h1 class="text-white font-semibold">{guildName}</h1>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
  <div class="px-2 py-4 flex gap-1 flex-col">
    {#each channels as channel (channel.id)}
     <Channel {...channel} />
    {/each}
  </div>
</div>

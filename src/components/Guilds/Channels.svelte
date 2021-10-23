<script>
  const channels = [
    { id: 1, type: 'voice', name: 'salmarikengät' },
    { id: 2, type: 'voice', name: 'Sauna' },
    { id: 3, type: 'text', name: 'yleinen' },
    { id: 4, type: 'text', name: 'nutturannokka' }
  ]
</script>

<div class="w-64 bg-gray-700">
  <div class="p-4 border-b border-black flex justify-between hover:bg-gray-600">
    <h1 class="text-white font-semibold">Kuisti</h1>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
  <div class="px-2 py-4 flex gap-1 flex-col">
    {#each channels as channel (channel.id)}
      <div class="flex gap-2 items-center hover:bg-gray-600 p-1 rounded">
        {#if channel.type === 'text'}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
          </svg>
        {:else if channel.type === 'voice'}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        {/if}
        <span class="text-gray-400 hover:text-gray-300">{channel.name}</span>
      </div>
    {/each}
  </div>
</div>

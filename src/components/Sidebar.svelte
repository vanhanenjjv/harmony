<script lang="ts">
  import ServerIcon from './ServerIcon.svelte'

  import kuistiLogo from './kuisti.webp'
  import upantoriLogo from './upantori.webp'

  const servers = [
    { id: 1, name: 'Kuisti', logo: kuistiLogo },
    { id: 2, name: 'Upantori', logo: upantoriLogo }
  ]
</script>

<div class="inline-flex flex-col p-2 gap-2 bg-gray-700 h-full">
  {#each servers as server (server.id)}
    <ServerIcon id={server.id} name={server.name} logo={server.logo} />
  {/each}
</div>

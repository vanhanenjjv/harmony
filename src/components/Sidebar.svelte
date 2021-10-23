<script lang="ts">
  import Guild from './Guilds/Guild.svelte'

  import kuistiLogo from './kuisti.webp'
  import upantoriLogo from './upantori.webp'

  const guilds = [
    { id: 1, name: 'Kuisti', logo: kuistiLogo },
    { id: 2, name: 'Upantori', logo: upantoriLogo }
  ]
</script>

<div class="inline-flex flex-col p-3 gap-3 bg-gray-800 h-full">
  {#each guilds as guild (guild.id)}
    <Guild id={guild.id} name={guild.name} logo={guild.logo} />
  {/each}
</div>

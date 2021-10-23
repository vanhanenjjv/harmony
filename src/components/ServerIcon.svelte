<script lang="ts">
  export let id: number
  export let logo: string
  export let name: string
</script>

<a href={`/guilds/${id}`}>
  <img 
    class="w-14 h-14 rounded-full"
    src={logo} 
    alt={name} />
</a>
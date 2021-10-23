<script lang="ts">
  import { page } from '$app/stores'

  export let id: number
  export let logo: string
  export let name: string

  $: isActive = $page.path.endsWith(`/guilds/${id}`)
</script>

<a href={`/guilds/${id}`}>
  <img 
    class="w-14 h-14 hover:rounded-2xl"
    class:rounded-full={!isActive}
    class:rounded-2xl={isActive}
    src={logo} 
    alt={name} />
</a>
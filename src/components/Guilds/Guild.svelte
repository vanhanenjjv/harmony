<script lang="ts">
  import { state } from '../../state'

  export let id: number
  export let logo: string
  export let name: string

  $: isActive = $state.openGuild === id
</script>

<div on:click={() => state.setActiveGuild(id)} 
  class="w-14 h-14 hover:rounded-2xl cursor-pointer overflow-hidden flex-shrink-0"
  class:rounded-full={!isActive}
  class:rounded-2xl={isActive}>
  <img src={logo} alt={name} />
</div>
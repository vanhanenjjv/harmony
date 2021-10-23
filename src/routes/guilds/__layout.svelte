<script lang="ts">
  import { page } from '$app/stores'

  import Channels from '../../components/Guilds/Channels.svelte'

  $: guild = $page.params.guild
</script>


<div class="flex">
  <Channels />
</div>
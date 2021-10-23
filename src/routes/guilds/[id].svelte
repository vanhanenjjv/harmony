<script lang="ts">
  import { page } from '$app/stores'

  import Channels from '../../components/Guilds/Channels.svelte'

  $: id = $page.params.id
</script>

<div class="flex">
  <Channels />
</div>

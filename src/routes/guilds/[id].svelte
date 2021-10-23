<script lang="ts">
  import { page } from '$app/stores'
  import { onMount } from 'svelte'

  let id: string

  onMount(() => {
    id = $page.params.id
  })
</script>

<div>
  {id}
</div>

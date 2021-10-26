<script lang="ts">
  import { state } from '../../../../state'

  $: openGuild = $state.guilds.filter(g => g.id === $state.openGuild)[0]
  $: openTextChannel = openGuild.channels.filter(c => c.id === openGuild.openTextChannel)[0]
</script>

<h1>
  {openTextChannel.name}
</h1>

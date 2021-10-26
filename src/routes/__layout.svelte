<script>
  import Sidebar from '../components/Sidebar.svelte'
</script>

<div id="wrapper" class="bg-gray-500 flex overflow-hidden">
  <Sidebar />
  <slot></slot>
</div>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  html, body, #svelte, #wrapper {
    height: 100%;
  }
</style>

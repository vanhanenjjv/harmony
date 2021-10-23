<script>
  import Sidebar from '../components/Sidebar.svelte'
</script>

<div id="wrapper" class="bg-gray-600 flex">
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

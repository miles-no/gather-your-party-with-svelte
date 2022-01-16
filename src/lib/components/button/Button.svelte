<button class="button" on:click><slot/></button>

<style>
  .button {
    height: var(--interactive-height);
    width: var(--interactive-width);
    border: var(--interactive-border);
    border-radius: var(--interactive-border-radius);
    cursor: pointer;
  }
  .button:focus,
  .button:hover {
    font-weight: bold;
    box-shadow: 0 0 2px 1px gray;
  }
</style>

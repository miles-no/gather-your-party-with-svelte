<script lang="ts">
	export let href = '';
	export let title: string = undefined;
</script>

<a {href} target="_blank" {title}><slot /></a>

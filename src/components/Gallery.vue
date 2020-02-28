<template>
	<ul>
		<GalleryItem v-for="(item, index) in items" :key="index" :item="item" />
	</ul>
</template>

<script>
import { mapGetters } from 'vuex';
import GalleryItem from './GalleryItem.vue';
export default {
	name: 'Gallery',
	computed: {
		...mapGetters([
			'items'
		])
	},
	components: {
		GalleryItem
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

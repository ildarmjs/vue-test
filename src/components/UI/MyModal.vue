<template>
	<div class="fixed top-0 left-0 right-0 bottom-0 flex bg-black/90" v-if="show" @click.stop="hideModal">
		<div @click.stop class="p-5 m-auto bg-white rounded min-w-[600px] min-h-[50px]">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'MyModal',
		props: {
			show: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			hideModal() {
				this.$emit('update:show', false)
			}
		}
	}
</script>

<style scoped>

</style>
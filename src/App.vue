<template>
	<Navbar></Navbar>
	<div class="app p-[20px]">
		<router-view></router-view>
	</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
	export default {
		components: {
			Navbar
		},
		
	}
	
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
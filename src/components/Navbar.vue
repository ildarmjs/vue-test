<template>
	<div
		class="fixed w-full px-10 py-5 flex items-center bg-gradient-to-br from-purple-600 to-blue-500text-white"
	>
		<div class="cursor-pointer font-bold text-5xl" @click="$router.push('/')">
			LOGO
		</div>
		<div class="ml-auto">
			<a
				class="cursor-pointer mr-5 hover:text-red-400"
				@click="$router.push('/')"
				>Главная странца</a
			>
			<a
				class="cursor-pointer mr-5 hover:text-red-400"
				@click="$router.push('/tokens')"
				>Токены</a
			>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style></style>

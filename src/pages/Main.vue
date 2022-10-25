<template>
	<div class="container sm:mx-auto pt-[100px]">
		<div
			class="text-center mt-[100px] from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent"
		>
			<div class="">
				<h1 class="mb-5 text-5xl font-bold">Добро пожаловать</h1>
				<h3 class="mb-5 text-4xl font-bold">
					Cоздайте свой <br />
					первый токен
				</h3>
				<button
					@click="$router.push('/tokens')"
					class="m-4 rounded bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
				>
					<span class="block text-black px-9 py-4 text-3xl font-semibold rounded-full"
						>Начать</span
					>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style></style>

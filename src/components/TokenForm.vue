<template>
	<form class="flex flex-col" @submit.prevent>
		<h4 class="mb-3 font-bold">Создание токена</h4>

		<input
			:class="{ error: isRegularError }"
			v-model="token.org"
			class="mb-7 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
			type="text "
			placeholder="Введите Организацию"
		/>
		<p class="text-red-500" v-if="isRegularError">Заполните данное поле по примеру: <span class="font-bold text-black">https://www.google.ru/</span></p>
		<input
			:class="{ error: isRegularError }"
			v-model="token.domen"
			class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
			type="text "
			placeholder="Введите доменное имя"
		/>
		
		<MyButton
			:disabled="!isRegularUrl"
			style="align-self: flex-end"
			@click="createToken()"
		>
			Создать токен
		</MyButton>
	</form>
</template>

<script>
const regularUrl =
	/^((http|https|ftp):\/\/)?(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)/i

export default {
	data() {
		return {
			token: {
				org: '',
				domen: '',
				tokenId: Math.floor(Math.random()* (100000000000000 - 1 + 1 ) + 1)
			},
		}
	},
	computed: {
		isRegularUrl() {
			return regularUrl.test(this.token.domen) 
		},
		isRegularError() {
			return !this.isRegularUrl
		},
	},
	methods: {
		createToken() {
			this.token.id = Date.now()
			this.$emit('create', this.token)
			this.token = {
				org: '',
				domen: '',
				tokenId: Math.floor(Math.random()* (100000000000000 - 1 + 1 ) + 1)
			}
		},
	},
}
</script>

<style scoped>


</style>

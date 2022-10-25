<template>
	<div class="pt-[140px] max-w-[600px] mx-auto">
		<div class="absolute right-1/4">
			<MyButton @click="showModal">Создать Токен</MyButton>
		</div>

		<MyModal v-model:show="formVisible">
			<TokenForm @create="createToken" />
		</MyModal>

		<TokenList @remove="removeToken" :tokens="tokens" v-if="!isLoading" />
		<div class="absolute left-1/3 top-1/2" v-else>
			<h3 class="text-center text-2xl font-bold text-blue-400">
				Идет загрузка
			</h3>
			<img
				class="w-[300px] h-[300px]"
				src="https://www.fcase.ru/catalog/view/javascript/loading.gif"
				alt=""
			/>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import TokenForm from '@/components/TokenForm.vue'
import TokenList from '@/components/TokenList.vue'

export default {
	components: {
		TokenForm,
		TokenList,
	},
	data() {
		return {
			tokens: [],
			isLoading: false,
			formVisible: false,
		}
	},
	methods: {
		createToken(token) {
			this.tokens.push(token)
			this.formVisible = false
		},
		showModal() {
			this.formVisible = true
		},
		removeToken(token) {
			this.tokens = this.tokens.filter(t => t.id !== token.id)
		},
		async fetchTokens() {
			try {
				this.isLoading = true
				const response = await axios.get(
					'https://633ab4c7e02b9b64c6155e2f.mockapi.io/test'
				)
				console.log(response)
				this.tokens = response.data
			} catch (error) {
				alert('Ошибка')
			} finally {
				this.isLoading = false
			}
		},
	},
	mounted() {
		this.fetchTokens()
	},
}
</script>

<style></style>

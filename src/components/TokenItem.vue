<template>
	<div class="p-5 rounded border-2 border-blue-500 mt-5">
		<div class="">
			<div class="mb-2"><strong>Организация: </strong>{{ token.org }}</div>
			<div class="mb-2"><strong>Домменное имя: </strong>{{ token.domen }}</div>
			<div class="mb-2"><strong>Токен: </strong>{{ token.tokenId }}</div>
		</div>
		<div class="token__btn">
			<MyModal v-model:show="modalVisible">
				<h2 class="text-center font-semibold">
					Вы дейтсвительно хотите удалить токен для организации {{ token.org }}
				</h2>
				<div class="text-center">
					<MyButton @click="$emit('remove', token)">Да</MyButton>
					<MyButton @click="hideModal">Нет</MyButton>
				</div>
			</MyModal>
			<MyButton @click="showModal">Удалить токен</MyButton>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		token: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			modalVisible: false,
		}
	},

	methods: {
		showModal() {
			this.modalVisible = true
		},
		hideModal() {
			this.modalVisible = false
		},
	},
}
</script>

<style scoped></style>

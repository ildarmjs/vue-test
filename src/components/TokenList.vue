<template>
	<div  v-show="tokens.length > 0">
		<h3 class="text-4xl mt-8">Список всех токенов</h3>
		<p class="pt-4">Всего токенов: <strong>{{tokens.length}}</strong> </p>
		<transition-group name="token-list">
			<TokenItem
				@remove="$emit('remove', token)"
				:key="token.id"
				:token="token"
				v-for="token in tokens"
			/>
		</transition-group>
	</div>
	<h2 v-show="tokens.length === 0" class="list-none">Список токенов пуст</h2>
</template>

<script>
import TokenItem from './TokenItem.vue'
export default {
	components: { TokenItem },
	props: {
		tokens: {
			type: Array,
			required: true,
		},
	},
	
}
</script>

<style scoped>
.list-none {
	color: teal;
	font-size: 20px;
	font-weight: bold;
}

.token-list-item {
  display: inline-block;
  margin-right: 10px;
}
.token-list-enter-active,
.token-list-leave-active {
  transition: all 0.4s ease;
}
.token-list-enter-from,
.token-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
</style>

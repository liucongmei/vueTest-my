<template>
	<button class="didi-btn" :class="{'disable': disabled, 'didi-btn-highlight': highlight}" @click="handleClick($event)">
	</button>
</template>
<script>
	export default {
		name: 'dd-button',
		props: {
			disabled: Boolean,
			highlight: Boolean
		},
		methods: {
			handleClick: function(event) {
				console.log('刘丛梅');
				if(this.disabled) {
					event.stopPropagation();
					event.preventDefault();
				}
			}
		}
	}
</script>
<style>
	.didi-btn{
		display:block;
		padding:0;
		width:100%;
		height:40px;
		line-height:40px;
		cursor:pointer;
		vertical-align:middle;
		font-size:16px;
		border:1px solid #ccc;
		background: #fafafa;
	}
	.didi-btn.disabled {
		background:#ddd;
	}
	.didi-btn.highlight {
		background:blue;
	}

</style>
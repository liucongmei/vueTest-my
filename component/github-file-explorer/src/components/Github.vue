<template>
	<div id="container" class="container">
		<div class="row">
			<legend><h2><span class=""></span>GitHub文件浏览器</h2></legend>
			<form class="form-inline" @submit.prevent="changeRepo()">
				<div class="form-group">
					<label for="fullRepoName"> Full Repo Name: </label>
					<input type="text" id="fullRepoName" name="" class="form-control" placeholder="xiaoluoboding/ghost-theme-kaldorei" v-model="fullRepoName" style="width:300px">
				</div>
				<button type="submit" class="btn btn-primary">获&nbsp;取</button>
			</form>
			<hr>
			<file-explorer :username="username" :repo="repo"></file-explorer>
		</div>
	</div>

</template>
<script >
	import FileExplorer from './FileExplorer.vue'
	export default {
		name: 'Github',
		data: function() {
			return {
				fullRepoName: '',
				username: '',
				repo: ''
			}
		},
		methods: {
			changeRepo: function() {
				this.username = this.fullRepoName.split('\/').shift();
				this.repo = this.fullRepoName.split('\/').pop();
				console.group("Vue Data");
			    console.log("fullRepoName:", this.fullRepoName);
			    console.log("username:", this.username);
			    console.log("repo:", this.repo);
			    console.groupEnd("Vue Data");
			}
		},
		components: {
			FileExplorer
		}
	}
</script>
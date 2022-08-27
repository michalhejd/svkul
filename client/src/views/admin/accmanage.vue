<style lang="scss" scoped>
	.accmanage {
		.to-center {
			width: 100%;
			height: calc(100vh - 65px);
			display: flex;
			justify-content: center;
			align-items: center;
			.loader {
				width: 48px;
				height: 48px;
				border-radius: 50%;
				display: inline-block;
				border-top: 3px solid rgb(72, 155, 194);
				border-right: 3px solid transparent;
				box-sizing: border-box;
				animation: rotation 1s linear infinite;
			}
		}
        @keyframes rotation {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
        .users{
            .user{

            }
        }
	}
</style>
<template>
	<div class="accmanage">
		<!--<div class="to-center" v-if="loading == true">
			<span class="loader"></span>
		</div>-->
		<div class="users" v-if="users != undefined && loading != true">
			<template v-for="user in users">
				<div class="user" :key="user._id">
					<p>{{ user.name }}</p>
					<p>role: {{user.role}}</p>
				</div>
			</template>
		</div>
	</div>
</template>
<script>
	import axios from "axios";

	export default {
		data() {
			return {
				users: undefined,
                loading: false
			};
		},
		mounted() {
            this.loading = true;
			axios.get("users").then((response) => {
				this.users = response.data;
                setTimeout(() => {
                    this.loading = false;
                }, 100);
			})
            .catch((error) => {
                
                setTimeout(() => {
                    this.loading = false;
                }, 100);
            });
		},
	};
</script>
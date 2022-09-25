<style lang="scss" scoped>
	.accmanage {
		padding-top: 20px;
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
		components: {
		},
		mounted() {
            this.$store.commit('SET_LOADING', true)
			axios.get("users").then((response) => {
				this.users = response.data;
                setTimeout(() => {
            this.$store.commit('SET_LOADING', false)
                }, 100);
			})
            .catch((error) => {
                setTimeout(() => {
            this.$store.commit('SET_LOADING', false)
                }, 100);
            });
		},
	};
</script>
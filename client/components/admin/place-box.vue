<style lang="scss" scoped>
	.place-box {
		background-color: white;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 10px;
		border-radius: 10px;
		box-shadow: 3px 3px 5px 0px rgb(206, 206, 206);
		min-height: 100px;
		.skeleton-loading-banner {
			width: 100%;
			height: 300px;
			border-radius: 15px;
			background: linear-gradient(
				90deg,
				#dfdfdf 0px,
				#e7e7e7 80px,
				#e7e7e7 160px,
				#dfdfdf 240px
			);
			background-size: 600px 300px;
			animation: loading 1.5s infinite ease;

			@keyframes loading {
				0% {
					background-position: -300px 0;
				}
				100% {
					background-position: 300px 0;
				}
			}
		}
		h3 {
            margin-top: 10px;
			text-align: center;
		}
		.users {
			max-height: 100px;
			overflow-y: auto;
			text-align: left;
            .text-center,.action{
                text-align: center;
            }
            .action{
                cursor: pointer;
                .edit{
                    color: #f0ad4e;
                }
                .delete{
                    color: #d9534f;
                }
            }
			tr {
				border-spacing: 0 10px;
			}
			//hover
			tr:hover {
				background-color: #f2f2f2;
			}
		}
		::-webkit-scrollbar {
			width: 7px;
		}
		::-webkit-scrollbar-track {
			background: #f1f1f1;
		}
		::-webkit-scrollbar-thumb {
			background: #888;
		}
		::-webkit-scrollbar-thumb:hover {
			background: #555;
		}
	}
</style>
<template>
	<div class="place">
		<div class="place-box">
			<div class="skeleton-loading-banner"></div>
			<div class="banner" v-if="place.banner">
				<img alt="" />
			</div>
			<h3>{{ place.name }}</h3>
			<div class="users">
				<v-simple-table dense fixed-header>
					<template v-slot:default>
						<thead>
							<tr>
								<th class="text-left">Jméno</th>
								<th class="text-left">Role</th>
								<th class="text-center">Upravit</th>
								<th class="text-center">Smazat</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="user in users" :key="user._id">
								<td>{{ user.name }}</td>
								<td>{{ user.role }}</td>
                                <td>
                                    <div class="action" @click="showEditPopup(user)">
                                        <font-awesome-icon class="edit" icon="fa-solid fa-edit" />
                                    </div>
                                </td>
								<td>
									<div class="action" @click="showDeletePopup(user)">
										<font-awesome-icon class="delete" icon="fa-solid fa-xmark" />
									</div>
								</td>
							</tr>
						</tbody>
					</template>
				</v-simple-table>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				users: null,
			};
		},
		props: ["place"],
		mounted() {
			//get users from place._id
			this.$axios.$get(`/places/${this.place._id}/users`).then((response) => {
				this.users = response;
			});
		},
	};
</script>
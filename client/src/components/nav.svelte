<script>
    let cartElement;
    function openCart() {
        cartElement.focus();
        console.log("Opening cart", document.activeElement);
    }
</script>
<div class="navigationBar">
	<nav>
		<div class="container">
			<div class="left">
				<img
					src="https://www.ujep.cz/wp-content/themes/ujep/img-ujep/logo.png"
					alt=""
				/>
			</div>
			<div class="right">
				<a href="/">
					<div class="home">Domů</div>
				</a>
				<a href="/database"><div class="database">Databáze</div></a>
				<a href="/myaccount"><div class="myaccount">Můj účet</div></a>
				<a href="/contacts"><div class="contacts">Kontakty</div></a>
			</div>
		</div>
	</nav>
</div>

<style>
	.navigationBar {
		
		font-family: "Roboto", sans-serif;
		display: flex;
		background-color: white;
		width: 100%;
		border-bottom: 1px solid #f2f2f2;
	}
	nav {
		margin: 25px;
		width: 100%;
	}
	.container {
		color: black;
		font-size: 20px;
		font-weight: 500;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.left {
		display: flex;
		align-items: center;
		font-size: 25px;
	}
	.left img {
		width: 100%;
		max-width: 125px;
	}
	.right {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 75px;
		margin-right: 20px;
	}
	.right a {
		color: black;
		text-decoration: none;
	}
	
</style>


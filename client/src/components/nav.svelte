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
            <div class="leftGap" />
            <div class="middle">
                <div class="home active">Domů</div>
                <span></span>
                <div class="database">Databáze</div>
                <span></span>
                <div class="shop">E-Shop</div>
            </div>
            <div class="rightSide">
                <div class="cart" on:click|stopPropagation|preventDefault={openCart}>
                    <div class="productCount">1</div>
                    <i class="fas fa-shopping-cart"></i>
                </div>
            </div>
        </div>
    </nav>
</div>

<div class="cartPopup" bind:this={cartElement} tabindex="0">
    <div class="item">
        <img src="/karlakocka.jpg" alt="">
        <span class="title">Kočka Karla</span>
        <div class="count">1</div>
        <div class="close">✖</div>
    </div>
</div>

<style>
    .cartPopup {
        display: none;
        position: fixed;
        z-index: 100;
        right: 0;
        top: 50px;
        background: white;
        border-radius: 5px;
    }
    .cartPopup:focus {
        display: block;
    }
    .active {
        text-decoration: underline;
    }
    .navigationBar {
        display: flex;
        background-color: #ffcaa4;
        width: 100%;
        box-shadow: 0 -10px 15px 10px rgb(114, 114, 114);
        z-index: 99;
        position: fixed;
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
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    .middle {
        display: flex;
        justify-content:space-around;

    }
    .middle > div {
        cursor: pointer;
        user-select: none;
    }
    span {
        content: '';
        border: solid 1px black;
    }
    .rightSide {
        display: flex;
        justify-content: flex-end;
    }
    .cart {
        position: relative;
        cursor: pointer;
    }
    .productCount {
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15px;
        height: 15px;
        font-size: 10px;
        background-color: white;
        border-radius: 50%;
    }
    i {
        margin: 4px;
    }
    .productCount:hover {
    }
</style>

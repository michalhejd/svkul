<div class="navigationBar">
    <nav>
        <div class="container">
            <div class="leftGap" />
            <div class="middle"><div class="home">Domů</div><span></span><div class="database">Databáze</div><span></span><div class="shop">E-Shop</div></div>
            <div class="rightSide"><div class="cart"><div class="productCount">1</div><i class="fas fa-shopping-cart"></i></div></div>
        </div>
    </nav>
</div>

<style>
    .navigationBar {
        display: flex;
        background-color: #ffcaa4;
        width: 100%;
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
    .middle{
        display: flex;
        justify-content:space-around;

    }
    span{
        content: '';
        border: solid 1px black;
    }
    .rightSide{
        display: flex;
        justify-content: flex-end;
    }
    .cart{
        display:  flex;
        justify-content: flex-start;
        align-items: flex-end;
    }
    .productCount{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15px;
        height: 15px;
        font-size: 10px;
        background-color: white;
        border-radius: 50%;
    }
    i{
        margin: 4px;
    }
    .productCount:hover{
    }
</style>

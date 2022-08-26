<template>
    <div class="hello"></div>

    <div>
        <h1>Morpion V1.0</h1>

    </div>
    <div class="board">
        <div class="case">
            <div class="div1"> </div>
            <div class="div2"> </div>
            <div class="div3"> </div>
            <div class="div4"> </div>
            <div class="div5"> </div>
            <div class="div6"> </div>
            <div class="div7"> </div>
            <div class="div8"> </div>
            <div class="div9"> </div>
        </div>
    </div>
    <h2><button class="ui button toggle">Player 1</button></h2>
    <h2><button class="ui button toggle">Player 2</button></h2>

</template>

<script>
export default {
    name: 'DammierMorpion',

}

</script>

<style scoped>
h3 {
    margin: 10px 0 2;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 0 10px;
}

a {
    color: #42b983;
}

.board {
    display: grid;
    justify-content: flex-start;
    align-self: center;
    height: 300px;
    margin: auto;

    /* grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);*/

}

.case {
    display: grid;
    justify-content: center;
    margin-left: 510px;
}

.div1 {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    color: black;

    grid-area: 1 / 1 / 2 / 2;
}

.div2 {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    color: brown;

    grid-area: 1 / 2 / 2 / 3;
}

.div3 {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    grid-area: 1 / 3 / 2 / 4;
}

.div4 {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    grid-area: 2 / 1 / 3 / 2;
}

.div5 {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    grid-area: 2 / 2 / 3 / 3;
}

.div6 {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    grid-area: 2 / 3 / 3 / 4;
}

.div7 {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    grid-area: 3 / 1 / 4 / 2;
}

.div8 {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    grid-area: 3 / 2 / 4 / 3;
}

.div9 {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    grid-area: 3 / 3 / 4 / 4;
}
</style>
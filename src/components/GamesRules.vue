<template>
    <div>
        <h1>Games Rules Morpion V1.0</h1>
    </div>
    <p> Jeu qui se joue à deux joueurs, sur un damier de 3 cases par 3 cases.

        Chaque joueur est représenté par un "symbole"
        Un joueur utilise toujours le même type de "symbole"
        Un premier joueur dessine son symbole sur une case. Puis c'est au tour de l'autre joueur de dessiner son symbole
        sur une case vide.
        Le but du jeu est de réussir à aligner ses trois symboles (horizontal, vertical ou diagonale), on remporte alors
        la partie.
        Si la grille est remplie et qu'aucune ligne ne comporte trois symboles identiques, les joueurs finissent par un
        match nul.
    </p>
</template>
    
<script>
export default {
    name: 'GamesRules'
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
</style>

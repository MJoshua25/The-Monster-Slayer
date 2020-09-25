new Vue({
    el:'#app',
    data:{
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    method:{
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attach: function () {
            const max = 10;
            const min = 3;
            var damage = Math.max(Math.floor(Math.random() *max) + 1, min)
        },
        specialAttack: function () {

        },
        heal: function () {

        },
        giveUp: function () {

        }
    }
})
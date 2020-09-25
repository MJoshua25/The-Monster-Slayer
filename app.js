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

        },
        calculateDamage: function(min, max){
            var damage = Math.max(Math.floor(Math.random() *max) + 1, min)
        },
        checkWin: function () {
            if (this.monsterHealth <= 0){
                this.monsterHealth = 0;
                if(confirm('Vous avez gagnez! Nouvelle partie?')){
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                this.playerHealth = 0;
                if (confirm('Vous avez perdu! Nouvelle partie?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else {
                return false;
            }
        },
    }
})
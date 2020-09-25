new Vue({
    el:'#app',
    data:{
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods:{
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attach: function () {
            if (this.playerAttach(3, 10)) {
                return;
            }
            this.monterAttach(5, 12)
        }
        ,
        specialAttack: function () {

        },
        heal: function () {

        },
        giveUp: function () {

        },
        playerAttach: function (min, max) {
            this.monsterHealth -= this.calculateDamage(3, 10)

            return this.checkWin()
        },
        monterAttach: function (min, max) {
            this.playerHealth -= this.calculateDamage(min, max)
            this.checkWin();
        },
        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random() *max) + 1, min);
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
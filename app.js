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
            this.monterAttach()
        }
        ,
        specialAttack: function () {
            if (this.playerAttach(10, 20)) {
                return;
            }
            this.monterAttach()
        },
        heal: function () {
            this.playerHealth = Math.min(this.playerHealth+10, 100);
            this.monterAttach()
        },
        giveUp: function () {

        },
        playerAttach: function (/*number*/min, /*number*/max) {
            this.monsterHealth -= this.calculateDamage(min, max)

            return this.checkWin()
        },
        monterAttach: function (min=5, max=12) {
            this.playerHealth -= this.calculateDamage(min, max)
            this.checkWin();
        },
        calculateDamage: function(/*number*/min, /*number*/max){
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
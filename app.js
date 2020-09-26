new Vue({
    el:'#app',
    data:{
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: [],
    },
    methods:{
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = []
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
            let newHeatlh = Math.min(this.playerHealth + 10, 100);
            let diff = newHeatlh - this.playerHealth
            this.playerHealth = newHeatlh
            this.turns.unshift({
                isPlayer:true,
                text: 'Player heal for ' + diff
            })
            this.monterAttach()
        },
        giveUp: function () {
            this.gameIsRunning = false;
        },
        playerAttach: function (/*number*/min, /*number*/max) {
            var damage = this.calculateDamage(min, max)
            this.monsterHealth -= damage
            this.turns.unshift({
                isPlayer:true,
                text: 'Player hits Monster for ' + damage
            })
            return this.checkWin()
        },
        monterAttach: function (min=5, max=12) {
            var damage = this.calculateDamage(min, max)
            this.playerHealth -= damage
            this.turns.unshift({
                isPlayer:false,
                text: 'Monster hits Player for ' + damage
            })
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
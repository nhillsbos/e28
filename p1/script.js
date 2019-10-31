//vue app
let myApp = new Vue({
    el: "#myApp",
    data: {
        gameTitle: "Rock, Paper, Scissors!",
        playerName: null,
        playerChoice: null,
        cpuChoice: null,
        victor: null,
        playerWins: null,
        cpuWins: null,
        rps: ['cpuRock','cpuPaper','cpuScissors'],
        imgs: ['imgs/rock.gif','imgs/paper.gif','imgs/scissors.gif',],
        
    },
    methods: {
        makeChoice: function (e) {//fires when player clicks choice, cpu
            this.playerChoice = e.target.id;
            this.cpuChoice = this.randomSelect;
            console.log('cpuChoice: ' + this.cpuChoice + ". playerChoice: " + this.playerChoice);
            
            //player wins
            if ((this.playerChoice == 'playerRock') && (this.cpuChoice == 'cpuScissors') || (this.playerChoice == 'playerPaper') && (this.cpuChoice == 'cpuRock') || 
            (this.playerChoice == 'playerScissors') && (this.cpuChoice == 'cpuPaper')) {
                this.victor = 'player';
                this.playerWins += 1;
                console.log(this.victor);
                console.log(this.playerWins);
                //cpu wins
            } else if ((this.playerChoice == 'playerRock') && (this.cpuChoice == 'cpuPaper') || (this.playerChoice == 'playerPaper') && (this.cpuChoice == 'cpuScissors') || 
            (this.playerChoice == 'playerScissors') && (this.cpuChoice == 'cpuRock')) {
                this.victor = 'cpu';
                this.cpuWins += 1;
                console.log(this.victor);
                console.log(this.cpuWins);
                //no winner
            } else {
                this.victor = 'draw';
                console.log(this.victor);
            }
        },
    },
    computed: {
        randomSelect: function() {
            return this.rps[Math.floor(Math.random() * 3)];
        },//end of function
        whoIsWinning: function() {
            if (this.playerWins > this.cpuWins) { 
                return true;
            } else {
                return false;
            }
        }//end of function
    },//end of computed
    mounted: function () {
        alert('The app has been mounted!');
    }
});

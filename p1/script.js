//vue app
let myApp = new Vue({
    el: "#myApp",
    data: {
        gameTitle: "Rock, Paper, Scissors!",
        playerName: null,
        playerChoice: null,
        cpuChoice: null,
        victor: null,
        rps: ['cpuRock','cpuPaper','cpuScissors'],
        imgs: ['imgs/rock.svg','imgs/paper.svg','imgs/scissors.svg',]
    },
    methods: {
        makeChoice: function (e) {
            this.playerChoice = e.target.id;
            this.cpuChoice = this.rps[Math.floor(Math.random() * 3)];
            console.log('cpuChoice: ' + this.cpuChoice + ". playerChoice: " + this.playerChoice);
            let victor = this.victor;
            if ((this.playerChoice == 'playerRock') && (this.cpuChoice == 'cpuScissors') || (this.playerChoice == 'playerPaper') && (this.cpuChoice == 'cpuRock') || 
            (this.playerChoice == 'playerScissors') && (this.cpuChoice == 'cpuPaper')) {
                this.victor = 'player';
                console.log(this.victor);
            } else if ((this.playerChoice == 'playerRock') && (this.cpuChoice == 'cpuPaper') || (this.playerChoice == 'playerPaper') && (this.cpuChoice == 'cpuScissors') || 
            (this.playerChoice == 'playerScissors') && (this.cpuChoice == 'cpuRock')) {
                this.victor = 'cpu';
                console.log(this.victor);
            } else {
                this.victor = 'draw';
                console.log(this.victor);
            }
        }
    }
});


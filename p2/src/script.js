

//importing components...
import Vue from 'vue';
import GameHeader from './components/GameHeader.vue';
import EnterName from './components/EnterName.vue';
import PlayerOptions from './components/PlayerOptions.vue';
import DisplayPlayerChoice from './components/DisplayPlayerChoice.vue';
import DisplayCpuChoice from './components/DisplayCpuChoice.vue';
import DisplayWinner from './components/DisplayWinner.vue';
import DisplayStars from './components/DisplayStars.vue';

//vue root instance
let myApp = new Vue({
    el: "#myApp",
    components: {
        'game-header' : GameHeader,
        'enter-name' : EnterName,
        'player-options' : PlayerOptions,
        'display-player-choice' : DisplayPlayerChoice,
        'display-cpu-choice' : DisplayCpuChoice,
        'display-winner' : DisplayWinner,
        'display-stars' : DisplayStars,
    },
    data: {
        gameTitle: "Rock, Paper, Scissors!",
        playerName: null,
        playerChoice: null,
        cpuChoice: null,
        victor: null,
        playerWins: null,
        cpuWins: null,
        rps: ['cpuRock','cpuPaper','cpuScissors'],
        imgs: ['imgs/rock.gif','imgs/paper','imgs/scissors'],
        rockImg: 'imgs/rock.gif',
        paperImg: 'imgs/paper.gif',
        scissorsImg: 'imgs/scissors.gif',
        cpuRock: 'cpuRock',
        cpuPaper: 'cpuPaper',
        cpuScissors: 'cpuScissors',
        playerRock: 'playerRock',
        playerPaper: 'playerPaper',
        playerScissors: 'playerScissors',
        placeholderName: 'Sideshow Bob',
        
    },
    
    methods: {
        defaultName: function(playerName) {
            this.playerName = playerName;
            if (this.playerName === null) {
                this.playerName = this.placeholderName;
            }
        },
        makeChoice: function (playerChoice) {//fires when player clicks choice, cpu
            this.defaultName(this.playerName);
            console.log(this.playerName);
            this.playerChoice = playerChoice;
            let randSel = this.randomSelect();
            console.log('randSel is: ' + randSel);
            this.cpuChoice = this.randomSelect();
            //this.cpuChoice = this.rps[Math.floor(Math.random() * 3)];//cpu random choice
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
        randomSelect: function() {
            return this.rps[Math.floor(Math.random() * 3)];
        },
    },
    computed: {
        //end of function
        whoIsWinning: function() {
            if (this.playerWins > this.cpuWins) { 
                return true;
            } else {
                return false;
            }
        }//end of function
    },//end of computed
    /*
    mounted: function () {
        alert('The app has been mounted!');
    },*/
    
});

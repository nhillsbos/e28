//vue app
let myApp = new Vue({
    el: "#myApp",
    data: {
        gameTitle: "Rock, Paper, Scissors!",
        playerName: null,
        teamName: "Cool Gang West",
        imgs: ['imgs/rock.svg', 'imgs/paper.svg', 'imgs/scissors.svg'],
        victor: 'cpu'
    },
    methods: {
        calcChoice: function() {
            return gameChoices[0];
        },
        playGame: function(e) {
            playerChoice = this.value,
            cpuChoice = calcChoice();
        } 
    }
});

var gameChoices = ['rock','paper','scissors'];
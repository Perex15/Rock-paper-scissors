let result;

let [wins, losses, ties] = [JSON.parse(localStorage.getItem('score1')),JSON.parse(localStorage.getItem('score2')),JSON.parse(localStorage.getItem('score3')) ];

if (wins === null && losses === null && ties === null)
{
    wins = 0;
    losses = 0;
    ties = 0;
}

const computerView = document.querySelector(".p");

const computerScore = document.querySelector(".results");

const rockBtn = document.querySelector(".rock");

     rockBtn.addEventListener("click", function() {
        const randomMove = Math.random();
    let computerMove;
   if (randomMove >= 0 && randomMove < 1/3 )
    {
    computerMove = '<img src="rock-emoji.png">';
    result = 'Tie.';
    }
    else if (randomMove >= 1/3 && randomMove < 2/3) 
    {
    computerMove= '<img src="paper-emoji.png">';
    result = 'You loss.';
} 
    else 
    {
    computerMove='<img src="scissors-emoji.png">';
    result = 'You win.';
    }
         computerView.innerHTML= 'You <img src="rock-emoji.png">' + computerMove +'Computer';
     }
);

rockBtn.addEventListener("click" ,function ()
{
    if (result === 'You win.')
{
    wins += 1;
} else if (result === 'You loss.')
{
    losses += 1;
} else
{
    ties += 1;
}
    
    localStorage.setItem('score1', JSON.stringify(wins));
    localStorage.setItem('score2', JSON.stringify(losses));
   localStorage.setItem('score3', JSON.stringify(ties));
    
computerScore.innerHTML = 'Wins : ' + wins + ', Losses : ' + losses + ', Ties : ' + ties;}
);

     const paperBtn = document.querySelector(".paper");
     paperBtn.addEventListener("click", function () {
     const randomMove = Math.random();
    let computerMove;
   if (randomMove >= 0 && randomMove < 1/3)
     {
    computerMove = '<img src="rock-emoji.png">';
         result = 'You win.';
     }
    else if (randomMove >= 1/3 && randomMove < 2/3) 
    {
    computerMove= '<img src="paper-emoji.png">';
        result = 'Tie.';
    } 
    else
    {
    computerMove= '<img src="scissors-emoji.png">';
        result = 'You loss.';
    }
    computerView.innerHTML= 'You <img src="paper-emoji.png">' + computerMove +'Computer';
     }
);


paperBtn.addEventListener("click" ,function ()
{
    if (result === 'You win.')
{
    wins += 1;
} else if (result === 'You loss.')
{
    losses += 1;
} else
{
    ties += 1;
}
    
    localStorage.setItem('score1', JSON.stringify(wins));
    localStorage.setItem('score2', JSON.stringify(losses));
   localStorage.setItem('score3', JSON.stringify(ties));
    
computerScore.innerHTML = 'Wins : ' + wins + ', Losses : ' + losses + ', Ties : ' + ties;}
);

     const scissorBtn = document.querySelector(".scissor");
     scissorBtn.addEventListener("click", function () {
        const randomMove = Math.random();
    let computerMove;
   if (randomMove >= 0 && randomMove < 1/3)
    {
    computerMove = '<img src="rock-emoji.png">';
        result = 'You loss.';
    }
    else if (randomMove >= 1/3 && randomMove < 2/3) 
    {
    computerMove= '<img src="paper-emoji.png">';
        result = 'You win.';
    } 
    else
    {
    computerMove = '<img src="scissors-emoji.png">';
        result = 'Tie.';
    }
    computerView.innerHTML= 'You <img src="scissors-emoji.png">' + computerMove +'Computer';
     }
);

scissorBtn.addEventListener("click" ,function ()
{
    if (result === 'You win.')
{
    wins += 1;
} else if (result === 'You loss.')
{
    losses += 1;
} else
{
    ties += 1;
}
    
    localStorage.setItem('score1', JSON.stringify(wins));
    localStorage.setItem('score2', JSON.stringify(losses));
   localStorage.setItem('score3', JSON.stringify(ties));
    
computerScore.innerHTML = 'Wins : ' + wins + ', Losses : ' + losses + ', Ties : ' + ties;}
);

const resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener("click" ,function ()
{
    wins -= wins;
    losses -= losses;
    ties -= ties;
    
    localStorage.setItem('score1', JSON.stringify(wins));
    localStorage.setItem('score2', JSON.stringify(losses));
   localStorage.setItem('score3', JSON.stringify(ties));
    
computerScore.innerHTML = 'Wins : ' + wins + ', Losses : ' + losses + ', Ties : ' + ties;}
);
let userScores=0;
let compScores=0;

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#user-score");

const compgener=()=>{
    const options=["paper","scissors","rock"];
    const ranI=Math.floor(Math.random()*3);
    return options[ranI];
};


const draw=()=>{
    console.log("Draw game");
    msg.innerText=("Draw was game! play again.");
    msg.style.backgroundColor="rgb(12, 12, 83)";
};

const userWinner=(userwin, userchoice, compchoice)=>{
    if(userwin){
    userScores++;
    userscorePara.innerText=userScores;
    msg.innerText=(`You win! your ${userchoice} beats ${compchoice}`);
    msg.style.backgroundColor="green";
    }else{
    compScores++;
    compscorePara.innerText=compScores;
        msg.innerText=(`You loss! ${compchoice} beats your ${userchoice}`);
        msg.style.backgroundColor="red";
    }
};

const playgame=(userchoice)=>{

    console.log("user choice=",userchoice);

const compchoice=compgener();

console.log("compcchoice=",compchoice);

if(userchoice===compchoice){
    draw();
}else {

    let userwin=true;

    if(userchoice==="rock"){
        userwin=compchoice=="paper"?false:true;

    }else if(userchoice==="paper"){
    userwin=compchoice=="scissors"?false:true;
}else{
    userwin=compchoice=="rock"?false:true;
}
    console.log("userwin=",userwin);
    userWinner(userwin, userchoice, compchoice);
}
};
choices.forEach((choice)=>{

    const userchoice=choice.getAttribute("id");

    choice.addEventListener(("click"),()=>{
        playgame(userchoice);
    });
});

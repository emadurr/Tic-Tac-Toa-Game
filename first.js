console.log("Emad ur Rehman");


let buttons = document.querySelectorAll(".buttons");
let reset = document.querySelector(".reset");
let newButton = document.querySelector(".new");
let after = document.querySelector(".after");
let para = document.querySelector(".winpara");


let play1 = prompt("Enter Your Name (Player 1)")   //"Player 1";
let play2 = prompt("Enter Your Name (Player 2)")   //"Player 2";

const winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let draw = 0;
let turn = true;

buttons.forEach((click)=>{
    click.addEventListener("click" , ()=>{
        console.log("clx");
        if(turn === true){
            click.innerText="X";
            turn=false;
            draw++;
            console.log(draw);
        }
        else{
            click.innerText="O";
            turn=true;
            draw++;
            console.log(draw);
        }
        click.disabled =true;
        checkwinner ();
})  
});

const disable = ()=>{
    for(let box of buttons){
        box.disabled=true;
    }
};

const winnerText = (user)=>{
        if(user === "O"){
            para.innerText=  "Congratulations! The Winner is '"+ play2 + "'" ;
        }
        else{
            para.innerText=  "Congratulations! The Winner is '"+ play1 + "'" ;
        };

        
        after.classList.remove("hide");
        disable();
};

const checkwinner = ()=>{
    for(let set of winning){
             let position1 = buttons[set[0]].innerText;
             let position2 = buttons[set[1]].innerText;
             let position3 = buttons[set[2]].innerText;

        if(position1 != "" && position2 != "" && position3 != ""){
            if(position1 === position2 && position2 ===position3){
                console.log("Winner" , position1);
                winnerText(position1);               
            }
        }
        if(draw === 9){
            console.log("before f");
            if(position1 != position2 && position2 != position3){
                drawf();
            }            
        };   
    }
 };

 const drawf = ()=>{
    para.innerText=  "Match Draw";
    after.classList.remove("hide");
    disable();
};

// --------------------------------reset and new game

const enableButton = ()=>{
    for (let box of buttons){
        box.disabled = false ;
        box.innerText = "" ;
    };
    console.log("clearen1st");
};

const enable = ()=>{
    turn = true;
    enableButton();
    after.classList.add("hide");
    console.log("clearen");
    draw=0;
};

reset.addEventListener("click", enable);
newButton.addEventListener("click", enable);
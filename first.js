console.log("Emad ur Rehman");


let buttons = document.querySelectorAll(".buttons");
let reset = document.querySelector(".reset");
let newButton = document.querySelector(".new");
let after = document.querySelector(".after");
let para = document.querySelector(".winpara");
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button0 = document.querySelector(".show");
let bg = document.querySelector("body");
let heading =document.querySelector(".heading");
let song = document.querySelector(".song");


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
            button1.classList.add("hide");
            button2.classList.add("hide");
            song.classList.add("hide");
            setting="off";
        }
        else{
            click.innerText="O";
            turn=true;
            draw++;
            console.log(draw);
            button1.classList.add("hide");
            button2.classList.add("hide");
            song.classList.add("hide");
            setting="off";
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
    button1.classList.add("hide");
    button2.classList.add("hide");
    song.classList.add("hide");
    setting="off";
};

reset.addEventListener("click", enable);
newButton.addEventListener("click", enable);

console.log("Emad Ur Rehman");



// ------------------------------------

let setting = "off";
button0.addEventListener("click" , ()=>{

    if(setting === "off"){
        button1.classList.remove("hide");
        button2.classList.remove("hide");
        song.classList.remove("hide");
        console.log("i done");
        setting="on";
    }
    else{
        button1.classList.add("hide");
        button2.classList.add("hide");
        song.classList.add("hide");
        setting="off";
    }
})



// ----------------------------------------

let mode = "dark";

button1.addEventListener("click" , ()=>{
    if(mode === "dark"){
        mode="light";
        console.log("dark");
        bg.style.backgroundColor = "black";
        button1.innerText="Light Mode"
        bg.classList.remove("light");
        bg.classList.remove("dark");
        theme = "dark";
        button2.innerText="Apply Theme";
        heading.style.color = "white";
        para.style.color = "white";
    }
    else{
        mode="dark";
        console.log("white");
        bg.style.backgroundColor = "white";
        button1.innerText="Dark Mode";
        bg.classList.remove("light");
        bg.classList.remove("dark");
        theme = "dark";
        button2.innerText="Apply Theme";
        heading.style.color = "black";
        para.style.color = "black";
       
    }
} )

let theme = "dark";

button2.addEventListener("click" , ()=>{
    if(theme === "dark"){
    theme = "light";
    console.log("Dark theme");
    bg.classList.add("dark");
    bg.classList.remove("light");
    button2.innerText="Light Theme";
    bg.style.backgroundColor = "white";
    mode === "dark"
    heading.style.color = "white";
    para.style.color = "white";
    for(let boxs of buttons){
        boxs.style.backgroundColor="#bfbfbf";
        boxs.style.color="#193C40"
    };
    }
    else if(theme === "light"){
        theme="no theme";
        console.log("Light theme");
        bg.classList.add("light");
        bg.classList.remove("dark");
        button2.innerText="Default";
        bg.style.backgroundColor = "white";
        mode === "dark";
        heading.style.color = "#40110D";
        para.style.color = "#40110D";
        for(let boxs of buttons){
            boxs.style.backgroundColor="#F27781";
            boxs.style.color="white"
        };
    }
    else{
        theme="dark";
        console.log("No theme");
        bg.classList.remove("light");
        button2.innerText="Dark Theme";
        bg.style.backgroundColor = "#07cbf7";
        mode === "dark";

        heading.style.color = "black";
        para.style.color = "black";
        for(let boxs of buttons){
            boxs.style.backgroundColor="#ff5eb7";
            boxs.style.color="#b6f874"
        };
    }
})



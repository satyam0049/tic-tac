let boxes = document.querySelectorAll(".box");
let turn = "x";
let isGameover = false;


boxes.forEach(e => {
    e.innerHTML = "";
    e.addEventListener("click", () => {
        if (!isGameover && e.innerHTML === "") {
            e.innerHTML = turn;
            cheakwin();
            cheakDraw();
            changeTurn();
        }
    })
})

function changeTurn() {
    if (turn === "x") {
        turn = "o";
        document.querySelector(".bg").style.left = "85px";
    } else {
        turn = "x";
        document.querySelector(".bg").style.left = "0";
    }
}

function cheakwin() {
    console.log('cheakwin');
    let wincondtions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    for (let i = 0; i < wincondtions.length; i++) {
        let v0 = boxes[wincondtions[i][0]].innerHTML;
        let v1 = boxes[wincondtions[i][1]].innerHTML;
        let v2 = boxes[wincondtions[i][2]].innerHTML;

        if (v0 !== "" && v0 === v1 && v0 === v2) {
            isGameover = true;
            document.querySelector("#results").innerHTML = turn + " wins!";
            document.querySelector("#play-again").style.display = "inline";

            for (let j = 0; j < 3; j++) {
                boxes[wincondtions[i][j]].style.backgroundColor = "#08D9Dc";
                boxes[wincondtions[i][j]].style.color = "#000";
            }
        }
    }
}

function cheakDraw() {
    if (!isGameover) {
        let isDraw = true;
        boxes.forEach(e => {
            if (e.innerHTML === "") isDraw = false;
        })
        if (isDraw) {
            isGameover = true;
            document.querySelector("#results").innerHTML = "It's a draw!";
            document.querySelector("#play-again").style.display = "inline";
        }
    }
}


document.querySelector("#play-again").addEventListener("click", () => {
    
    isGameover = false;
    turn = "x"; 
    document.querySelector(".bg").style.left = "0"; 

    
    boxes.forEach(e => {
        e.innerHTML = "";
        e.style.backgroundColor = ""; 
        e.style.color = ""; 
    });

    
    document.querySelector("#play-again").style.display = "none";

    
    document.querySelector("#results").innerHTML = "";
});

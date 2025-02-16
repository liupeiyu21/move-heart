const nameE = document.querySelector("#name");
// const nameE = document.getElementById("name");


const nameAnimation = () => {
    let fontSize = 60;
    let growing = true;
    const interval = setInterval(() =>{
        // fontSize += 2;
        // nameE.style.fontSize = fontSize + "px";
        // if( fontSize >= 800 )
        //     clearInterval( interval);

        if ( growing){
            fontSize += 2;
            if( fontSize >=200 ) growing =false;
        } else{
            fontSize -= 2;
            if( fontSize <= 60) growing = true;
        }
        nameE.style.fontSize = fontSize + "px";
    }, 0);
}

nameAnimation();



















// document.getElementById("kuku")
//九九表
// const kuku = document.querySelector("#kuku");
// const table = document.createElement("table");
// table.setAttribute("border", "1")

// for(let i = 1; i <= 9; i++){
//     const tr = document.createElement("tr");
//     for(let j =1; j <=9; j++){
//         const td = document.createElement("td");
//         td.textContent = i * j;
//         // td.style.border = "1px solid black";
//         td.style.padding = "5px";
//         td.style.textAlign = "center"

//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }
// kuku.appendChild(table)

//ユーロパ
// const kuku2 = document.querySelector("#kuku2");
// const table2 = document.createElement("table");
// table2.setAttribute("border", "1")

// for(let i = 1; i <=9; i++){
//     const tr2 =document.createElement("tr");
//     for(let j =1; j <= 9; j++){
//         const td2 = document.createElement("td")
//         const x = i * j;
//         td2.textContent = `${i}X${j}=${x}`;
    
//         tr2.appendChild(td2);
//     }
//     table2.appendChild(tr2)
//     table2.style.marginTop = "100px";
// }
// kuku2.appendChild(table2)




// const btn = document.querySelector("#button");
// btn.addEventListener("click", () => {
//     const name1 = document.getElementById("name1").value;
//     const email = document.getElementById("email").value;
//     console.log(name1, email);
// }
  
// )

//jsonデータの変換
// const json = JSON.stringify



// console.log( typeof "ryu")


// let score = 0;

// function addScore(points) {
//  score += points;
// }

// function getScore() {
//  return score;
// }
// score = 922999;
// console.log(getScore())









// function createScoreManager() {
//     let score = 0;
//      return {
//         addScore: function(points) {
//             if (points > 0 && points <= 100) {
//                 score += points;
//                 console.log(`スコア加算：${points}点`);
//             }
//         },
//         getCurrentScore: function() {
//             return score;
//         }
//     };
//    }

//    const scoreManager = createScoreManager();  // スコア管理オブジェクトを作成

// scoreManager.addScore(20); // 「スコア加算：20点」と表示
// scoreManager.addScore(50); // 「スコア加算：50点」と表示
// console.log(scoreManager.getCurrentScore()); // 70 と表示



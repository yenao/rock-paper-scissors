import { useState } from 'react';
import Box from './component/Box';
import './App.css'

// 1. 박스 2개 ( 타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 존재한다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임.
// 4. 컴퓨터틑 랜덤하게 아이템 선택이 된다.
// 5. 3 & 4의 결과를 가지고 승패를 정한다.
// 6. 승 : 녹 / 패 : 적 / 비김 : 흑

const choice = {
  rock:{
    name:"Rock",
    img:"https://blog.kakaocdn.net/dn/bO9Tjy/btspTIUAe9B/aisxcHYqlhdrkMd8knRJCK/img.jpg"
  },
  scissors:{
    name:"Scissors",
    img:"https://dmtusr.vipweb.kr/goods_img/AT/ATS30210/l_2.jpg"
  },
  paper:{
    name:"Paper",
    img:"https://www.officewarehouse.com.ph/__resources/_web_data_/products/products/image_gallery/6932_4640.jpg"
  }
};
function App() {

  const [userSelect, setUserSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const [res, setRes] = useState("");
  // const [comRes, setComRes] = useState("");

  const play = (userChoice) => {
    console.log('선택됨!  ',userChoice);
    setUserSelect(choice[userChoice]);
    let comChoice = randomChoice();
    setComSelect(comChoice);
    setRes(judgement(choice[userChoice],comChoice));
    // setComRes(comJudge(setRes));
  };
  
  const judgement = (user,computer) => {
    console.log('user : ',user,',   computer :  ',computer);

    // 가위바위보의 알고리즘.
    if(user.name == computer.name)
    {
      return "tie";
    }
    else if(user.name=="Rock") 
      return computer.name=="Scissors"?"Win":"Lose";
    else if(user.name=="Scissors") 
      return computer.name=="Papaer"?"Win":"Lose";
    else if(user.name=="Paper") 
      return computer.name=="Rock"?"Win":"Lose";
  };

  // const comJudge = (userRes) => {
  //   console.log('oyn   userRes  : ',userRes);
  //   if(userRes == "Win"){
  //     return "Lose";
  //   }else if(userRes == "Lose"){
  //     return "Win";
  //   }else{
  //     return "tie";
  //   }
  // };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);                  // Object.keys() : 객체에 키 값만 뽑아서 만들어주는 함수.
    console.log('itemArry  ::  ', itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);    // Math.random() : JavaScript의 0부터 1사이의 숫자를 랜덤하게 가져오는 함수. | Math.floor() : 소수점 아래에 있는 숫자를 버리는 함수.
    console.log("randomItem :::::: ",randomItem);
    let final = itemArray[randomItem];
    console.log("final  ",final);
    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={res}/>
        <Box title="Computer" item={comSelect} result={res}/>
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;

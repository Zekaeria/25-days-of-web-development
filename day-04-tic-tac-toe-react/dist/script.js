/*
resources: 
kitty: https://unsplash.com/photos/white-kitten-Tn8DLxwuDMA
doggy: https://unsplash.com/photos/brown-and-white-corgi-puppy-g-Dui8tCdrI
Thank you to GreatStack for the help: https://www.youtube.com/watch?v=lYtPscvwgP4
Thank you to catdad for the confetti: https://www.npmjs.com/package/canvas-confetti
*/

/* string array for storage */
let array = ["", "", "", "", "", "", "", "", ""];

/* IMPORTANT: React hooks */
const { useState } = React;
const { useRef } = React;

const App = () => {

  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null); /* used to change title for winner */
  /* find easier way to ref elements? one 'box' ref
  ref & build box_array
  */
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 == 0) {
      e.target.innerHTML = '<img src="https://github.com/Zekaeria/25-days-of-web-development/blob/main/day-04-tic-tac-toe-react/hang_niu_kitty.png?raw=true" />';
      array[num] = "c";
      setCount(++count); /* ++count to toggle correctly, not count++ */
    } else
    {
      e.target.innerHTML = '<img src="https://github.com/Zekaeria/25-days-of-web-development/blob/main/day-04-tic-tac-toe-react/fatty_corgi.png?raw=true" />';
      array[num] = "d";
      setCount(++count);
    }
    /* call to check if win after every move */
    checkWinner();
  };

  /* checks if winner after every move */
  const checkWinner = () => {
    /* winner winner chicken dinner - 8 winning combinations */
    /* HORIZONTAL */
    if (array[0] == array[1] && array[1] == array[2] && array[2] != "") {
      win(array[2]);
    } else
    if (array[3] == array[4] && array[4] == array[5] && array[5] != "") {
      win(array[5]);
    } else
    if (array[6] == array[7] && array[7] == array[8] && array[8] != "") {
      win(array[8]);
    }
    /* VERTICAL */else
      if (array[0] == array[3] && array[3] == array[6] && array[6] != "") {
        win(array[6]);
      } else
      if (array[1] == array[4] && array[4] == array[7] && array[7] != "") {
        win(array[7]);
      } else
      if (array[2] == array[5] && array[5] == array[8] && array[8] != "") {
        win(array[8]);
      }
      /* DIAGONAL */else
        if (array[0] == array[4] && array[4] == array[8] && array[8] != "") {
          win(array[8]);
        } else
        if (array[2] == array[4] && array[4] == array[6] && array[6] != "") {
          win(array[6]);
        }
  };

  /* executes when winner found */
  const win = winner => {
    confetti();
    setLock(true); /* array cannot be modified */
    /* Change title ref when winner is found */
    if (winner == "c") {
      titleRef.current.innerHTML = 'winner: <img src="https://github.com/Zekaeria/25-days-of-web-development/blob/main/day-04-tic-tac-toe-react/hang_niu_kitty.png?raw=true" />';;
    } else
    {
      titleRef.current.innerHTML = 'winner: <img src="https://github.com/Zekaeria/25-days-of-web-development/blob/main/day-04-tic-tac-toe-react/fatty_corgi.png?raw=true" />';
    }
  };

  const restart = () => {
    /* reset lock, board, array, and html*/
    setLock(false);
    boxArray.map(e => {
      e.current.innerHTML = "";
    });
    array = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = 'tic-tac-toe';
  };


  return /*#__PURE__*/(
    React.createElement("div", { class: "container" }, /*#__PURE__*/
    React.createElement("h1", { class: "title", ref: titleRef }, " tic-tac-toe "), /*#__PURE__*/

    React.createElement("div", { class: "board" }, /*#__PURE__*/
    React.createElement("div", { class: "row-1" }, /*#__PURE__*/
    React.createElement("div", { class: "box", ref: box1, onClick: e => {toggle(e, 0);} }, " "), /*#__PURE__*/
    React.createElement("div", { class: "box", ref: box2, onClick: e => {toggle(e, 1);} }, " "), /*#__PURE__*/
    React.createElement("div", { class: "box", ref: box3, onClick: e => {toggle(e, 2);} }, " ")), /*#__PURE__*/

    React.createElement("div", { class: "row-2" }, /*#__PURE__*/
    React.createElement("div", { class: "box", ref: box4, onClick: e => {toggle(e, 3);} }, " "), /*#__PURE__*/
    React.createElement("div", { class: "box", ref: box5, onClick: e => {toggle(e, 4);} }, " "), /*#__PURE__*/
    React.createElement("div", { class: "box", ref: box6, onClick: e => {toggle(e, 5);} }, " ")), /*#__PURE__*/

    React.createElement("div", { class: "row-3" }, /*#__PURE__*/
    React.createElement("div", { class: "box", ref: box7, onClick: e => {toggle(e, 6);} }, " "), /*#__PURE__*/
    React.createElement("div", { class: "box", ref: box8, onClick: e => {toggle(e, 7);} }, " "), /*#__PURE__*/
    React.createElement("div", { class: "box", ref: box9, onClick: e => {toggle(e, 8);} }, " "))), /*#__PURE__*/



    React.createElement("button", { class: "restart", onClick: () => {restart();} }, " restart ")));



};

// Renders app
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#app'));
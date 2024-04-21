/*
kitty: https://unsplash.com/photos/white-kitten-Tn8DLxwuDMA

doggy: https://unsplash.com/photos/brown-and-white-short-coated-dog-on-white-sand-during-daytime-eYoIHeMC6Mo
*/


/* string array for storage */
let array = ["", "", "", "", "", "", "", "", ""];

const { useState } = React;

const App = () => {

  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 == 0) {
      e.target.innerHTML = '<img src="https://github.com/Zekaeria/25-days-of-web-development/blob/main/day-04-tic-tac-toe-react/hang_niu_kitty.png?raw=true" />';
      array[num] = "c";
      setCount(++count);
    } else
    {
      e.target.innerHTML = '<img src="https://github.com/Zekaeria/25-days-of-web-development/blob/main/day-04-tic-tac-toe-react/fatty_corgi.png?raw=true" />';
      array[num] = "d";
      setCount(++count);
    }
  };


  return /*#__PURE__*/(
    React.createElement("div", { class: "container" }, /*#__PURE__*/
    React.createElement("h1", { class: "title" }, " Tic Tac Toe "), /*#__PURE__*/

    React.createElement("div", { class: "board" }, /*#__PURE__*/
    React.createElement("div", { class: "row-1" }, /*#__PURE__*/
    React.createElement("div", { class: "box", onClick: e => {toggle(e, 0);} }, " "), /*#__PURE__*/
    React.createElement("div", { class: "box", onClick: e => {toggle(e, 1);} }, " "), /*#__PURE__*/
    React.createElement("div", { class: "box", onClick: e => {toggle(e, 2);} }, " ")), /*#__PURE__*/

    React.createElement("div", { class: "row-2" }, /*#__PURE__*/
    React.createElement("div", { class: "box", onClick: e => {toggle(e, 3);} }, " "), /*#__PURE__*/
    React.createElement("div", { class: "box", onClick: e => {toggle(e, 4);} }, " "), /*#__PURE__*/
    React.createElement("div", { class: "box", onClick: e => {toggle(e, 5);} }, " ")), /*#__PURE__*/

    React.createElement("div", { class: "row-3" }, /*#__PURE__*/
    React.createElement("div", { class: "box", onClick: e => {toggle(e, 6);} }, " "), /*#__PURE__*/
    React.createElement("div", { class: "box", onClick: e => {toggle(e, 7);} }, " "), /*#__PURE__*/
    React.createElement("div", { class: "box", onClick: e => {toggle(e, 8);} }, " "))), /*#__PURE__*/



    React.createElement("button", { class: "restart" }, " Restart ")));



};

// Renders app
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#app'));
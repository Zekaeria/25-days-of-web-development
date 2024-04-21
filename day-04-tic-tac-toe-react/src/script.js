/*
kitty: https://unsplash.com/photos/white-kitten-Tn8DLxwuDMA

doggy: https://unsplash.com/photos/brown-and-white-short-coated-dog-on-white-sand-during-daytime-eYoIHeMC6Mo
*/


/* string array for storage */
let array = ["", "", "","", "", "","", "", ""];

const { useState } = React;

const App = () => {
  
  let [count, setCount] = useState(0);
  let [lock,setLock] = useState(false);
  
  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if(count%2==0) {
      e.target.innerHTML = '<img src="https://github.com/Zekaeria/25-days-of-web-development/blob/main/day-04-tic-tac-toe-react/hang_niu_kitty.png?raw=true" />';
      array[num]="c";
      setCount(++count);
    }
    else {
      e.target.innerHTML = '<img src="https://github.com/Zekaeria/25-days-of-web-development/blob/main/day-04-tic-tac-toe-react/fatty_corgi.png?raw=true" />';
      array[num]="d";
      setCount(++count);
    }
  }
  
  
  return (
    <div class="container">
      <h1 class="title"> Tic Tac Toe </h1>
      
      <div class="board"> 
        <div class="row-1">
          <div class="box" onClick={(e)=>{toggle(e,0)}}> </div>
          <div class="box" onClick={(e)=>{toggle(e,1)}}> </div>
          <div class="box" onClick={(e)=>{toggle(e,2)}}> </div>
        </div>
        <div class="row-2">
          <div class="box"onClick={(e)=>{toggle(e,3)}}> </div>
          <div class="box"onClick={(e)=>{toggle(e,4)}}> </div>
          <div class="box"onClick={(e)=>{toggle(e,5)}}> </div>
        </div>  
        <div class="row-3">
          <div class="box"onClick={(e)=>{toggle(e,6)}}> </div>
          <div class="box"onClick={(e)=>{toggle(e,7)}}> </div>
          <div class="box"onClick={(e)=>{toggle(e,8)}}> </div>
        </div>
      </div>
       
      <button class="restart"> Restart </button>
   
    </div>
  )
}

// Renders app
ReactDOM.render(<App />, document.querySelector('#app'));
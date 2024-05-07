import { useState } from 'react';

export default function BoardAssignment () {
   // bad recipes, scary eyebrows, feelin' cheesey
   const [boardName, setBoardName] = useState('no boeards yet!');


   const boards = [
      {label: "Bad Recipes", value: "badRecipes"},
      {label: "scary eyebrows", value: "scaryEyebrows"},
      {label: "feelin' cheesey", value: "feelinCheesey"}
   ];


   const handleChange = (event) => {
      setBoardName(event.target.value)
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      {boards.map((board) => {
         return (
            <option key={board.label} value={board.value}>{board.label}</option>
         )
      })}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}

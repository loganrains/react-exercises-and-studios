import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://thecozycook.com/stovetop-mac-and-cheese/";
   let authorPhoto = "https://thecozycook.com/wp-content/uploads/2021/11/The-Cozy-Cook.jpg";
   let authorName = "Stephanie Melchione";

   return (
      <div>
         <img src={authorPhoto} alt = {authorName} style={{objectFit: "contain", borderRadius: "50%", width: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = [
      "uncooked macaroni",
      "butter",
      "flour",
      "heavy cream",
      "milk"
   ];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            {ingredients.map((ingredient,
            index) => {
               return <li key={index}>
                  {ingredient}</li>
            
            })}
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Stovetop Mac and Cheese</h1>
            <p>This Creamy Stovetop Mac and Cheese is the BEST 30-minute meal for a busy week. Your family will love it every time!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://thecozycook.com/wp-content/uploads/2021/10/Stovetop-Mac-and-Cheese-2.jpg" alt="Creamy Stovetop Mac and Cheese" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}


// [
//    {
//       "name": "Stovetop Mac and Cheese",
//       "author": "Stephanie Melchione",
//       "description": "This Creamy Stovetop Mac and Cheese is the BEST 30-minute meal for a busy week. Your family will love it every time!",
//       "website": "https://thecozycook.com/stovetop-mac-and-cheese/",
//       "recipeImage": "https://thecozycook.com/wp-content/uploads/2021/10/Stovetop-Mac-and-Cheese-2.jpg",
//       "authorImage": "https://thecozycook.com/wp-content/uploads/2021/11/The-Cozy-Cook.jpg",
//       "ingredients": [
//         "uncooked macaroni",
//         "butter",
//         "flour",
//         "heavy cream",
//         "milk"
//       ]
//     }
//   ]
  
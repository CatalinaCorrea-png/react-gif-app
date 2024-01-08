import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Piece', 'Sailor Moon' ]);

  const onAddCategory = ( newCategory ) => {
    if ( categories.includes(newCategory) ) return;
    setCategories([ newCategory, ...categories ]);
    // setCategories( cat => ['Valorant', ...cat ] );
  }

  return (
    <>
      <h1>- GifExpertApp -</h1>

      {/* //? INPUT */}
      <AddCategory onNewCategory={ value => onAddCategory(value) } />

      {/* //? LISTADO DE GIFS */}
      { 
        categories.map( category => (
            <GifGrid key={category} category={category}/>
        )) 
      }

      {/* //? GIF ITEM */}


    </>
  );
};

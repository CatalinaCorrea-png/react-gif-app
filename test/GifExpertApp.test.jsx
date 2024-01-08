import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {

  test('Debe agregar nueva categoria al array de categories', () => { 

    render( <GifExpertApp /> );
    // screen.debug(); 

    const categories = ['One Piece', 'Sailor Moon'];
    screen.debug(); 
    // console.log(categories);


  });

  test('No debe agregar nueva categoría si esta ya existe', () => { 
    
    // render( <GifExpertApp /> );
    // screen.debug(); 

  });

});
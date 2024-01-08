import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GifItem />', () => {

  const title = 'Luffy';
  const url = 'https://one-piece.com/luffy.jpg';

  test('Match con el Snapshot', () => {

    const { container } = render( <GifItem title={ title } url={ url }/> );
    expect( container ).toMatchSnapshot();

  });

  test('Debe mostrar la imagen con el URL y el ALT indidcado', () => {

    render( <GifItem title={ title } url={ url }/> );
    // screen.debug();
    // expect( screen.getByRole('img').src ).toBe( url );
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(alt);

  });

  test('Debe mostrar el titulo en el componente', () => {

    render( <GifItem title={ title } url={ url }/> );
    expect( screen.getByText( title )).toBeTruthy();
    
  });

});
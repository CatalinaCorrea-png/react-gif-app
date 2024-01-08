import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'One Piece';

  test('debe de mostrar el Loading inicialmente', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    })


    render( <GifGrid category={ category }/> );
    expect( screen.getByText('Cargando...') );
    expect( screen.getByText(category) );

  });

  test('Debe mostrar items cuando se cargan las imagenes de useFetchGifs', () => {

    const gifs = [
      {
        id: 'ABC',
        title: 'Luffy',
        url: 'https://localhost/luffy.lpg'
      },
      {
        id: '123',
        title: 'Zoro',
        url: 'https://localhost/zoro.lpg'
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    })

    render( <GifGrid category={ category }/> );

    expect( screen.getAllByRole('img').length ).toBe(2);

  });

});
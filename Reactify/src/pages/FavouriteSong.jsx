import SearchResults from '../components/SearchResult';
import { useSelector } from 'react-redux';
import { Container, ListGroup } from 'react-bootstrap';

export default function FavouritesCompany() {

    const song = useSelector(state => state.fav);
    console.log(song);
    
    return (
        <Container className='my-5'>
            <ListGroup>
                {song.map(c => <SearchResults key={c._id} data={c} />)}
            </ListGroup>
        </Container>
    );
}



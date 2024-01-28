import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlbum, setPlayer } from "../redux/actions";

const Albums = ({ artist }) => {
  // Accedi allo stato utilizzando il nome dell'artista
  const albums = useSelector((state) => state.album.albumsByArtist[artist] || []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbum(artist));
  }, [dispatch, artist]); // Le dipendenze dell'effetto sono corrette

  return (
    <>
      {albums
        .filter((album, index) => index < 4) // Mostra solo i primi 4 album
        .map((album) => (
          <Col
            className="text-center mt-3"
            key={album.id}
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(setPlayer(album))}
          >
            <img className="img-fluid" src={album.album.cover_medium} alt={album.title} />
            <p>
              Track: {album.title.length < 16 ? album.title : album.title.substring(0, 16) + "..."}
              <br />
              Artist: {album.artist.name}
            </p>
          </Col>
        ))}
    </>
  );
};

export default Albums;

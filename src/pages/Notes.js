import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { Paper } from "@mui/material";
import NoteCard from "../components/NoteCard";
import Masonry from "react-masonry-css";
import ResponsiveMasonry from "react-masonry-css";
// import ResponsiveMasonry

export default function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);
  console.log(notes);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  };

  const breakpoints = {
    default:3,
    1100:2,
    700:6
  }
  return (
    <Container>
      <ResponsiveMasonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
          {notes.map((note) => (
            <div width={30} key={note.id} md={3} sm={6} xs={12}>
              <Paper>
                <NoteCard note={note} handleDelete={handleDelete} />
              </Paper>
            </div>
          ))}
      </ResponsiveMasonry>
    </Container>
  );
}

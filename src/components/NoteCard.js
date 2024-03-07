import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { IconButton, Typography} from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";

export default function NoteCard({ note, handleDelete }) {
    const fClasses=(note)=>{
      return{
        test: {
          border: (() => {
              switch (note.category) {
                  case 'work':
                      return '2px solid blue';
                  case 'todos':
                      return '2px solid yellow';
                  case 'reminders':
                      return '2px solid red';
                  case 'money':
                      return '2px solid green';
                  default:
                      return null;
              }
          })()
      }
      
      }
    }
    const classes = fClasses(note);
  return (
    <div>
      <Card elevation={1} sx={classes.test}>
        <CardHeader
        action={
            <IconButton aria-label="settings" onClick={()=> handleDelete(note.id)}>
              <DeleteOutlined/>
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary">
                {note.details}
            </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

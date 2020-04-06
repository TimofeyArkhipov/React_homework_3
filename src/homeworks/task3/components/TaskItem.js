import React, {useCallback, useState} from 'react';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Alert from '@material-ui/lab/Alert';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {Grid} from "@material-ui/core";
import apiClient from "./axios";


export default function TaskItem({task, onRemove, complete, }) {

    const removeItem = useCallback(() => {
        apiClient.delete('/todos/'+task.id).then(() => {
            onRemove(task.id);
        })
    },[task, onRemove]);


    const toggle = useCallback(() => {
        apiClient.patch(`/todos/${task.id}`, { completed: !task.completed})
            .then(response => {
                complete({...task, ...response.data});
                console.log(response.data.completed);
            })
    },[task, complete]);

     return (
      <div>
          <List component="nav" aria-label="main mailbox folders">

              <Grid container wrap="nowrap" spacing={2}>
                  <Grid item xs zeroMinWidth>
                     <Alert severity={task.completed ? "success" : "info" } button onClick={toggle}>
                         <ListItemText  primary={task.title} />
                     </Alert>
                  </Grid>
                  <Grid item >
                      <DeleteForeverIcon fontSize="large" onClick={removeItem}></DeleteForeverIcon>
                  </Grid>
              </Grid>
          </List>
      </div>
    )
}
import React, {useCallback, useState, useEffect, useRef} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import useUsersnames from './usernames';

export default function NewTask({addTask}) {
    const [open, setOpen] = useState(false);
    const [text, updateText] = useState('');
    const textRef = useRef();
    const [ users ] = useUsersnames();
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        textRef.current = text;
    });

    const handleOk = useCallback(() => {
        addTask(textRef.current);
        console.log(textRef.current);
        handleClose();
    }, [addTask, textRef])

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}> Add new Task </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"New task"}</DialogTitle>
                <DialogContent>
                        <form noValidate autoComplete="off">
                            <TextField id="outlined-basic" label="text" variant="outlined" value={text} onChange={e => updateText(e.target.value)} />

                            <InputLabel id="demo-simple-select-label">Select User</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onChange={handleChange}>
                                {users.map( user =>
                                    <MenuItem value={user.id}>{user.name}</MenuItem>
                                )}
                            </Select>
                        </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleOk} color="primary" autoFocus> OK  </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}














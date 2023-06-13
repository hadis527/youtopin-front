import React, { useState } from 'react';
import {
    Stack,
    Grid,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux'

const ToDoListTable = () => {
const todoSate = useSelector(state => state.ToDo);
const {toDoList} = todoSate;
    return (
        <Grid>
            <Stack spacing={3}>

            </Stack>
        </Grid>
    );
}

export default ToDoListTable;

import React, { useState } from 'react';
import {
    Box,
    Text,
    Link,
    VStack,
    Code,
    Button,
    Stack,
    Textarea,
    Input,
    Grid,
} from '@chakra-ui/react';
import ArrowForwardIcon from "../../assets/icons/StarIcon";
import { useDispatch } from 'react-redux'
import { addToList } from "../../redux/toDo/actions";

const AddToDo = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState({ title: "", description: "" });
    const addToDoHandler = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setTask({
            ...task,
            [name]: value,
        })
    }
    const addToDoListHandler = () => {
        if (task.title.length > 0) {
            dispatch(addToList({ title: task.title, description: task.description, status: false }));
            setTask({
                ...task,
                title:"",
                description:""
            })
        }
    }
    return (
        <Grid>
            <Stack spacing={3}>
                <Input
                    name="title"
                    variant='outline'
                    placeholder='عنوان'
                    size='md'
                    value={task.title}
                    onChange={(e) => addToDoHandler(e)}
                />
                <Textarea
                    name="description"
                    variant='outline'
                    placeholder='توضیحات'
                    size='md'
                    value={task.description}
                    onChange={(e) => addToDoHandler(e)}
                />
                <Button
                    colorScheme='teal'
                    variant='solid'
                    rightIcon={<ArrowForwardIcon />}
                    onClick={() => addToDoListHandler()}
                >
                    افزودن
                </Button>
            </Stack>
        </Grid>
    );
}

export default AddToDo;

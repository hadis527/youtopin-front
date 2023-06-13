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

const AddToDo = () => {
    const [task, setTask] = useState({ title: "", description: "" });
    const addToDoHandler = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setTask({
            ...task,
            [name]: value,
        })
    }
    const addToDoList = () =>{
        if(task.title.length>0){

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
                    value={task.title}
                    onChange={(e) => addToDoHandler(e)}
                />
                <Button
                    colorScheme='teal'
                    variant='solid'
                    rightIcon={<ArrowForwardIcon />}
                    onClick={() => addToDoList()}
                >
                    افزودن
                </Button>
            </Stack>
        </Grid>
    );
}

export default AddToDo;

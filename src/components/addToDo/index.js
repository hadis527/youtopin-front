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
    useToast
} from '@chakra-ui/react';
import ArrowForwardIcon from "../../assets/icons/StarIcon";
import { useDispatch } from 'react-redux'
import { addToDoList } from "../../redux/toDo/actions";
import Axios from "axios";

const AddToDo = () => {
    const dispatch = useDispatch();
    const toast = useToast();
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
            Axios({
                method: 'post',
                url: `http://localhost:3000/toDos`,
                params: { title: task.title, description: task.description, status: false },
                headers: {
                    Authorization: `Bearer`,
                    "content-type": "application/json",
                },
            }).then(res => {
                dispatch(addToDoList({id:res.data.id, title: task.title, description: task.description, status: false }));
                toast({
                    title: 'با موفقیت اضافه شد',
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                    position :"bottom-right"
                  })
            }).catch(err => {
                console.log(err)
            })
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

import React, { useEffect, useState } from 'react';
import {
    Button,
    Stack,
    Textarea,
    Input,
    useToast
} from '@chakra-ui/react';
import ArrowForwardIcon from "../../assets/icons/StarIcon";
import { useDispatch } from 'react-redux'
import { addToDoList, updateToDoList, showUpdateToDoModal } from "../../redux/toDo/actions";
import Axios from "axios";

const AddToDo = (props) => {
    const {mode , selectedTask} = props;
    const dispatch = useDispatch();
    const toast = useToast();
    const [task, setTask] = useState({ title: "", description: "" });
    useEffect(() => {
        if(mode === "edit"){
            setTask({
                ...task,
                title:selectedTask.title,
                description:selectedTask.description
            })
        }
    },[selectedTask])
    const onchangeHandler = (e) => {
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
                data: { title: task.title, description: task.description, status: false },
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
    const updateToDoListHandler = (id) => {
            Axios({
                method: 'put',
                url: `http://localhost:3000/toDos/${id}`,
                data: { title: task.title, description: task.description, status: false },
                headers: {
                    Authorization: `Bearer`,
                    "content-type": "application/json",
                },
            }).then(res => {
                dispatch(updateToDoList({id:res.data.id, title: task.title, description: task.description, status: false }));
                toast({
                    title: 'با موفقیت ویرایش شد',
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                    position :"bottom-right"
                  })
            }).catch(err => {
                console.log(err)
            })
        
    }
    const submitHandler = () =>{
        if(mode === "add"){
            addToDoListHandler(); 
        }
        else{
            updateToDoListHandler(selectedTask.id);
            dispatch(showUpdateToDoModal( false ));
        }
    }
    return (
        <>
            <Stack spacing={3} backgroundColor='white'   p={2}>
                <Input
                    name="title"
                    variant='outline'
                    placeholder='عنوان'
                    size='md'
                    value={task.title}
                    onChange={(e) => onchangeHandler(e)}
                />
                <Textarea
                    name="description"
                    variant='outline'
                    placeholder='توضیحات'
                    size='md'
                    value={task.description}
                    onChange={(e) => onchangeHandler(e)}
                />
                <Button
                    colorScheme='teal'
                    variant='solid'
                    rightIcon={<ArrowForwardIcon />}
                    onClick={() => submitHandler()}
                >
                    {mode === "add" ? "افزودن" : "ویرایش"}
                </Button>
            </Stack>
        </>
    );
}

export default AddToDo;

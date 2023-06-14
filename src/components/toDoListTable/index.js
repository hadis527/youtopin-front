import React, { useEffect, useState } from 'react';
import Axios from "axios";
import {
    Stack,
    Grid,
    Switch,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    useToast 
} from '@chakra-ui/react';
import { useSelector } from 'react-redux'
import DeleteIcon from '../../assets/icons/DeleteIcon';
import EditIcon from '../../assets/icons/EditIcon';
import { useDispatch } from 'react-redux'
import { toDoListView ,deleteToDoList } from "../../redux/toDo/actions";

const ToDoListTable = () => {
    const dispatch = useDispatch();
    const toast = useToast();
    const todoSate = useSelector(state => state.ToDo);
    const { toDoList } = todoSate;
    const tableHead = ['عنوان', 'توضیحات', 'وضعیت', 'عملیات']
    useEffect(() => {
        getToDosList();
    }, [])
    
    const getToDosList =() => {
        Axios({
            method: 'get',
            url: `http://localhost:3000/toDos`,
            headers: {
                Authorization: `Bearer`,
                "content-type": "application/json",
            },
        }).then(res => {
            dispatch(toDoListView(res.data));
        }).catch(err => {
            console.log(err)
        })
    }

    const deleteToDoListHandler = (id) => {
            Axios({
                method: 'delete',
                url: `http://localhost:3000/toDos/${id}`,
                headers: {
                    Authorization: `Bearer`,
                    "content-type": "application/json",
                },
            }).then(res => {
                dispatch(deleteToDoList(id));
                toast({
                    title: 'با موفقیت حذف شد',
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                    position :"bottom-right"
                  })
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <Grid>
            <Stack spacing={3}>
                <TableContainer>
                    <Table variant='simple'>
                        <TableCaption>نمایش لیست تسک ها</TableCaption>
                        <Thead>
                            <Tr>
                                {tableHead.map(each => {
                                    return (
                                        <Th>{each}</Th>
                                    )
                                })}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {toDoList.length > 0 && toDoList?.map((each, index) => {
                                return (
                                    <Tr key={index}>
                                        <Td>{each.title}</Td>
                                        <Td>{each.description}</Td>
                                        <Td>
                                            <Switch size='md' />
                                        </Td>
                                        <Td>
                                            <span onClick={() => deleteToDoListHandler(each.id)}><DeleteIcon /></span>
                                            <EditIcon />
                                        </Td>
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Stack>
        </Grid>
    );
}

export default ToDoListTable;

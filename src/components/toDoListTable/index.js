import React, { useEffect, useState } from 'react';
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
} from '@chakra-ui/react';
import { useSelector } from 'react-redux'
import DeleteIcon from '../../assets/icons/DeleteIcon';
import EditIcon from '../../assets/icons/EditIcon';

const ToDoListTable = () => {
    const todoSate = useSelector(state => state.ToDo);
    const { toDoList } = todoSate;
    const tableHead = ['عنوان', 'توضیحات', 'وضعیت', 'عملیات']
    useEffect(() => {

    }, [toDoList])
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
                                            <DeleteIcon />
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

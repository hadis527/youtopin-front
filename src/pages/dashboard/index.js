import React from 'react';
import AddToDo from '../../components/addToDo';
import ToDoListTable from '../../components/toDoListTable';


const Dashboard = () => {
    return (
        <>
            <AddToDo />
            <ToDoListTable />
        </>
    );
}

export default Dashboard;

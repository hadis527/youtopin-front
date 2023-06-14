import { Grid, GridItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import AddToDo from '../../components/addToDo';
import ToDoListTable from '../../components/toDoListTable';

const Dashboard = () => {
  const [mode, setMode] = useState('add');

  return (
    <Grid maxW="100vw" height="100vh" marginX="auto" backgroundColor="gray.400">
      <Grid
        templateColumns={['1fr', '1fr', '2fr 1fr']}
        gap={2}
        width="100%"
        marginX="auto"
        p={10}
      >
        <GridItem bg="white">
          <ToDoListTable setMode={setMode} mode={mode} />
        </GridItem>
        <GridItem bg="white">
          <AddToDo mode={mode} />
        </GridItem>
      </Grid>
    </Grid>
  );
};

export default Dashboard;

import { Grid, GridItem } from '@chakra-ui/react';
import React,{useState} from 'react';
import AddToDo from '../../components/addToDo';
import ToDoListTable from '../../components/toDoListTable';
import { Box } from '@chakra-ui/react';
const Dashboard = () => {
    const [mode ,setMode] = useState("add")

  return (
    <Grid
      //   backgroundImage="url('../../assets/images/background.png')"
      //   backgroundPosition="center"
      //   backgroundRepeat="no-repeat"
      backgroundColor="tomato"
      p={10}
      width={'100vw'}
      height={'100vh'}
      display="flex"
    >
      {/* <Box display="flex" width={'100%'} columns={2}> */}
        <GridItem xs={4}>
          <AddToDo mode={mode}/>
        </GridItem>
        <GridItem xs={8}>
          <ToDoListTable setMode={setMode} mode={mode}/>
        </GridItem>
      {/* </Box> */}
    </Grid>
  );
};

export default Dashboard;

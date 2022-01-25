import React from "react";
import BasicCard from "./card";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import LargeCard from "./cardL";
import { CardHeader } from "@mui/material";
import PrimarySearchAppBar from './navbar'


const List = (props) => {
  
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses!</h2>
  }
  return (
    <div xs={12}>
      <PrimarySearchAppBar/>
    <Container>
      <Grid container spacing={3}>
      {props.items.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
          <BasicCard
          title={item.title}
          amount={item.amount}
          />
          </Grid>
      ))} 
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
           <LargeCard
           title={'Earnings Overview'}
           component={'BarChart'}
           />
        </Grid>
        <Grid item xs={12} md={4}>
           <LargeCard
           title={'Product Sales'}
           component={'PieChartOutlined'}
           />
        </Grid>
      </Grid>
    </Container>
    </div>
  );

};

export default List
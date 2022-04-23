import React, { useEffect } from "react";
import db from "../../src/Firebase";
//import { movies } from '../data';

//const dispatch=useDispatch();

//useEffect(()=>{
//db.collection("movies").onSnapshot((snapshot)=>{

// let tempMovies=snapshot.docs.map((doc)=>{
//     console.log(doc.data());
//return {id:doc.id, ...doc.data()}
//   })

// dispatch(setMovies(tempMovies));
//})
//},[])

import styled from "styled-components";
import Imageslider from "./Imageslider";
import Movies from "./Movies";
import View from "./View";
//import Slider from "./Slider";

//import {useDispatch} from "react-redux"
//import { setMovies } from '../features/movie/movieSlice';
const Home = () => {
  
    
  return (
    <Container>
    <Imageslider/>
      <View />
      <Movies />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  height: 100vh;
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

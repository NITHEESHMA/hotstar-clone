import React from 'react';
import styled from 'styled-components';
import { selectMovies } from '../features/movie/movieSlice';
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom'
import { data } from '../data';

const Movies = () => {
//const movies=useSelector(selectMovies);
//console.log(movies);

    return (
        <Container>
            <h4>Recomended for you</h4>
            <Content>
{/*
{movies && 
movies.map((movie)=>(

    <Wrap>
    <img src={movie.img}/>
    </Wrap>

)
)}  */}


{data.map((movie)=>(

    <Wrap key={movie.id}>
    <Link to={`/details/${movie.id}`}>
    <img src={movie.img} alt=""/>
    </Link>
    </Wrap>
))
}
      
{/*
<Wrap>
            <img src='https://tse1.mm.bing.net/th?id=OIP.QKg05hMuDeu-BAzehy0svAHaFj&pid=Api&rs=1&c=1&qlt=95&w=159&h=119'/>
            </Wrap>

            <Wrap>
            <img src='https://tse1.mm.bing.net/th?id=OIP.QKg05hMuDeu-BAzehy0svAHaFj&pid=Api&rs=1&c=1&qlt=95&w=159&h=119'/>
            </Wrap>

            <Wrap>
            <img src='https://tse1.mm.bing.net/th?id=OIP.QKg05hMuDeu-BAzehy0svAHaFj&pid=Api&rs=1&c=1&qlt=95&w=159&h=119'/>
            </Wrap>

            <Wrap>
            <img src='https://tse1.mm.bing.net/th?id=OIP.QKg05hMuDeu-BAzehy0svAHaFj&pid=Api&rs=1&c=1&qlt=95&w=159&h=119'/>
            </Wrap>

            <Wrap>
            <img src='https://tse1.mm.bing.net/th?id=OIP.QKg05hMuDeu-BAzehy0svAHaFj&pid=Api&rs=1&c=1&qlt=95&w=159&h=119'/>
            </Wrap>

            <Wrap>
            <img src='https://tse1.mm.bing.net/th?id=OIP.QKg05hMuDeu-BAzehy0svAHaFj&pid=Api&rs=1&c=1&qlt=95&w=159&h=119'/>
            </Wrap>

            <Wrap>
            <img src='https://tse1.mm.bing.net/th?id=OIP.QKg05hMuDeu-BAzehy0svAHaFj&pid=Api&rs=1&c=1&qlt=95&w=159&h=119'/>
            </Wrap>
*/}
            </Content>
        </Container>
    );
};

export default Movies;


const Container=styled.div`



`

const Content=styled.div`

display: grid;
grid-gap:25px;
grid-template-columns:repeat(4,minmax(0,1fr));

`

const Wrap=styled.div`

border-radius: 10px;
overflow: hidden;
border: 3px solid rgba(249,249,249,0.1);
box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
rgb(0 0 0 /73%) 0px 16px 10px -10px;

img{
    width: 100%;height: 100%;
    object-fit: cover;
}

:hover{
    transform: scale(1.05);
    border-color:rgba(249,249,249,0.8)
}

`
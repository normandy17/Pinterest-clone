import React, { Component } from 'react'
import styled from 'styled-components'
import { DataContext } from '../Context/DataContextProvider'

const Wrapper = styled.div`
    box-sizing: border-box;
    width: 100% !important;
    height: auto !important;
    display: flex;
    flex-flow: column wrap;
`;

const ImageCard = styled.div`
    width : 18%;
    margin : 10px;
`;
    
const Image = styled.img`
    width: 100%;
    background-size : cover;
    border-radius  :20px;
    &:hover {
        cursor : zoom-in;
    }
`;

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             pins : []
        }
    }
    componentDidMount() {
        const { getPins,getUsers} = this.context;
        getPins();
        getUsers();
    }
    
    
    render() {
        const { pins } = this.context
        return (
            <Wrapper className="main">
                {
                    pins.map( pin => (
                        <ImageCard key={pin.id}>
                            <Image src={pin.img_url}/>
                        </ImageCard>
                    ))
                }
            </Wrapper>
        )
    }
}
Home.contextType = DataContext

export  {Home}

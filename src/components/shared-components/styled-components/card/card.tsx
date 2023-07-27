import styled from 'styled-components';

interface CardTypes {
    width: string,
    height: string,
    flexDirection?: string,
    backgroundcolor?: string,
    padding?: string
}

export const Card = styled.div<CardTypes>`
width:${({ width }) => width};
height:${({ height }) => height};
background-color:${({ backgroundcolor }) => backgroundcolor};
border-radius:10px;
display:flex;
flex-flow:${({ flexDirection }) => flexDirection ? flexDirection : 'row'};
gap: 10px;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding:${({ padding }) => padding}; 
`
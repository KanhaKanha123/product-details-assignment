import styled from 'styled-components';

interface CardTypes {
    width: string,
    height: string,
    flexflow?: string,
    backgroundcolor?: string,
    padding?: string,
    cursortype?: string,
    flexwrap?: string,
    alignitems?: string
}

export const Card = styled.div<CardTypes>`
width:${({ width }) => width};
height:${({ height }) => height};
background-color:${({ backgroundcolor }) => backgroundcolor};
border-radius:10px;
display:flex;
flex-flow:${({ flexflow }) => flexflow ? flexflow : 'row'};
gap: 10px;
flex-wrap: ${({ flexwrap }) => flexwrap ? flexwrap : 'wrap'};
justify-content: center;
align-items: ${({ alignitems }) => alignitems ? alignitems : 'center'};
padding:${({ padding }) => padding};
cursor:${({ cursortype }) => cursortype ? cursortype : 'null'};
`;
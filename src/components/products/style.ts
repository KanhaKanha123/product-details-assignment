import styled from 'styled-components';

export const ProductsWrapper = styled.div`
width:auto;
height:auto;
display: flex;
gap: 10px;
flex-wrap: wrap;
justify-content: center;
margin-top: 15px;
`;

export const Header = styled.div`
width: 100%;
height: 20px;
display: flex;
align-items: start;
justify-content: space-between;

& .linkStyle{
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
    color: #4792ef;
    text-decoration: none;
}
`;

export const ChipsContainer = styled.div`
width:100%;
height:20px;
display: flex;
align-items: center;
gap: 10px;
`;

export const BodyContainer = styled.div`
width:100%;
display: flex;
align-items: start;
flex-flow: column;
gap:5px;
`;

export const FooterWrapper = styled.div`
width:100%;
height:50px;
display: flex;
align-items: center;
justify-content: space-between;
`;

export const CommentsWrapper = styled.section`
width:100%;
height:auto;
display: flex;
flex-flow: column;
gap:10px;
`;

export const Image = styled.img`
height:300px;
width:300px;
`;

export const TitleTextWrapper = styled.span`
font-weight:bold;
font-size:12px;
`;

export const Text = styled.span`
font-size:12px;
font-weight:bold;
`;

export const ProductImageContainer = styled.div`
font-size:15px;
`;

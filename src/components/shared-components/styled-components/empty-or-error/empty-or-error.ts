import styled from 'styled-components';

interface EmptyOrErrorTypes {
    height?: string,
    color?: string,
}
export const EmptyOrError = styled.div<EmptyOrErrorTypes>`
    height:${({ height }) => height ? height : '500px'};
    display: flex;
    color:${({ color }) => color ? color : 'red'};;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`;


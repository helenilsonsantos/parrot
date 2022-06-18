import styled from 'styled-components';


export const StyledContainer = styled.div`
    display: flex;
    flex-flow: nowrap column;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    width: 100%;
    max-width: 700px;
    height: 60vh;
    margin: 0 auto;
    text-align: center;
    border: 1px solid #C5C5C5;

    h1 {
        font-size: 1.375rem;
        color: #909090;
    }

    img {
        opacity: 0.2;
        align-self: center;
    }
`
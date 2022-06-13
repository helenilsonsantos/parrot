import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-flow: nowrap row;
    width: 100%;
    max-width: 700px;
    background-color: #FFF;
    margin: 0 auto;
    align-items: center;
    
    img {
        margin: 0 1rem;
    }
    @media (min-width: 460px) {
            
        img {
            padding: 2.5rem 1rem;
        }

    }
`

export const CardText = styled.div`
    display: flex;
    flex-flow: wrap column;
    max-width: 500px;
    padding: 1rem 0;

    .username {
        color: #76BB4C;
        font-size: 1rem;
        line-height: 1rem;
    }

    .timestamp {
        color: #919191;
        font-size: 0.875rem;
        line-height: 0.875rem;
        margin-bottom: 0.5rem;
    }

    p {
        margin: 0;
        font-size: 1rem;
        line-height: 1rem;
    }
`

import styled from "styled-components";

export const Container = styled.div`
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
export const ProfileContent = styled.div`
    display: flex;
    flex-flow: nowrap column;
    flex: 1;
`

export const ProfileHeader = styled.div`
    display: flex;
    flex-flow: nowrap row;
    max-width: 90%;

    .username {
        color: #76BB4C;
        font-size: 1.5rem;
        line-height: 1.5rem;
        margin-bottom: 0.5rem;
        flex-grow: 1;
    }

    .button {
        margin-left: auto;
        background-color: #76BB4C;
        border-radius: 30px;
        border: none;
        padding: 0 1.5rem;
    }


`

export const ProfileBody = styled.div`
    display: flex;
    flex-flow: wrap column;



    .userinfo {
        margin: 0;
        font-size: 1rem;
        line-height: 1rem;
    }
`

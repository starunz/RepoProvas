import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    height: 80px;
    padding: 12px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    position: fixed;
    top: 0;
    left: 0;
    
    background-color: #1C1C1C;
    box-shadow: 0 4px 4px rgba(0,0,0,0.5);
`

const Name = styled.div`

    font-size: 30px;
    font-family: 'Saira Stencil One', sans-serif;

    color: #ffffff;

    margin-left: 10px;
`

const ContainerLogout = styled(Link)`
  margin-left: 10px;
  font-size: 30px;
`

export {
    Container,
    ContainerLogout,
    Name,
}
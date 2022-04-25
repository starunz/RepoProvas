import { Container, Name, ContainerLogout } from "./style";
import * as Ioicons from 'react-icons/io5'
import useAuth from "../../hooks/useAuth";

export default function Header() {
    const { logoff } = useAuth();

    return (
        <Container>

            <Name>RepoProvas</Name>

            <ContainerLogout to ='/' onClick={() => { logoff()}}>
                  <span><Ioicons.IoExitSharp /></span>
            </ContainerLogout> 

        </Container>
    );
}
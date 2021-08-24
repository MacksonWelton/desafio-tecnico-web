import { useHistory } from 'react-router-dom';
import * as S from './styled'

const Header = () => {
    const history = useHistory()

    return (<S.Container>
        <S.Title onClick={() => history.push("/")}>Movies</S.Title>
    </S.Container>)
}

export default Header;
import {Link} from 'react-router-dom';
import {HeaderDiv, NavDiv, NavContent,NavLoginBtn, Logo, ContentDiv,Logoimg } from './../component_css/Header_style';

const Header = () => {
    return (
            <HeaderDiv>            
                    <NavDiv>
                        <Link to={"/"} style={{ textDecoration: 'none' }}>
                            <Logo>
                                <Logoimg src={`${process.env.PUBLIC_URL}/img/logo-fin-02.png`}/>
                            </Logo>
                        </Link>

                        <ContentDiv>
                            <Link to={"/service_intro"} style={{ textDecoration: 'none' }}>
                                <NavContent>서비스소개</NavContent>
                            </Link>
                            <Link to={"/study"} style={{ textDecoration: 'none' }}>
                                <NavContent>수강하기</NavContent>
                            </Link>

                            <Link to={"/test_home"} style={{ textDecoration: 'none' }}>
                                <NavContent>테스트하기</NavContent>
                            </Link>
                            
                            <Link to={"/mypage"} style={{ textDecoration: 'none' }}>
                                <NavContent>마이페이지</NavContent>
                            </Link>

                            <Link to={"/login"} style={{ textDecoration: 'none' }}>
                                <NavLoginBtn>로그아웃</NavLoginBtn>
                            </Link>   
                        </ContentDiv>  

                    </NavDiv>            
            </HeaderDiv>
        
    )
}

export default Header
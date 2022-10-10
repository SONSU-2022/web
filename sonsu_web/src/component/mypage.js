import React, { useState, useEffect } from 'react';
import Chart from "./chart/chart";
import axios from 'axios';
import {useLocation, Link} from 'react-router-dom';
import Header from './header'
import { FadeHome } from '../component_css/Home_style';
import { MediaDiv,
        LevelBox,
        StudyBtn,
} from '../component_css/Study_style';
// import Chart from 'react-apexcharts';
import {
    Myheader,
    MypageDiv,
    Profilecontain,
    PCA,
    PCB,
    Profile,
    ProfileText,
    Profileimg,
    Profilename,
    Profileemail,
    Profiledate,
    Going,
    MyBtn,
    Process,
    ChartBox,
    Circle,
    Chartcontain,
    PCAcontent,
    PCAprofile,
    ChartName,
    PieName,
    GoDiv,
    GoBtn
} from './../component_css/Mypage_style';
import { HeaderDiv } from '../component_css/Home_style';
import userEvent from '@testing-library/user-event';

// 예상되는 서버에서 오는 유저정보
const user={   
    profileimg : 'urlurl',
    nickname : '홍길동',
    email : 'abcd@gmail.com',
    date : 10,
}

// 수강하기의 모든 문항에 대해서 해당 데이터 필요
const word={
    level : 1,
    counts : 6,
    number : 1002,
    follow : 'True',
}

const Curri_Arr=[
    {
        level : 1,
        level_name : '초급',
    }
    ,
    {
        level : 2,
        level_name : '중급',
    }
    ,
    {
        level : 3,
        level_name : '고급',
    }    
]

const Mypage = () => {
    // const level=useLocation().state.level;

    // const level_name=Curri_Arr[(level-1)].level;
    // const curri_arr=Curri_Arr[(level-1)].level_name;

    // const [cur_curri,setCurri] = useState(Levels[0]);
     
    
    // console.log(Images[Images.findIndex((element)=>element.curri === cur_curri)].urls);

    //서버
    const [Users,setUsers] = useState();
    
    //서버에게서 데이터 받아오기
    useEffect(()=>{
        axios.get(`/mypage/1`)
        .then((response)=>{
         console.log(response.data.data);
        //  setUsers(response.data.data);
        })

    }, [])

    return (
        <>
            <Myheader>
                <HeaderDiv>
                    <Header/>
                </HeaderDiv>
            </Myheader>
            <MediaDiv>
                <FadeHome>
                {Users && Users.map((obj)=>(   
                        <MypageDiv>
                            <Profilecontain>
                                <PCA>
                                    <Profile>
                                        <img src='img/bar.png' alt="image"/>
                                        <ProfileText>
                                            프로필
                                        </ProfileText>
                                    </Profile>
                                    <PCAprofile>
                                        <Profileimg></Profileimg>
                                        <PCAcontent>
                                            <Profilename> {obj.userName} </Profilename>
                                            <Profileemail> {obj.email} </Profileemail>
                                            <Profiledate> 손수와 함께한지 {obj.withDate}일째 </Profiledate>
                                        </PCAcontent>
                                    </PCAprofile>
                                </PCA>
                                <PCB>
                                    <Going>
                                        <img src="img/bar.png" alt="image"/>
                                        <ProfileText>
                                            바로가기
                                        </ProfileText>
                                    </Going>
                                    <Link to={"/grade"} style={{ textDecoration: 'none' }}>
                                        <MyBtn><Circle></Circle> 성적표 </MyBtn>
                                    </Link>
                                    <Link to={"/wrong"} style={{ textDecoration: 'none' }}>
                                        <MyBtn><Circle></Circle> 오답노트 </MyBtn>
                                    </Link>
                                </PCB>
                            </Profilecontain>
                            <Chartcontain>
                                <Process>
                                    <img src='img/bar.png' alt="image"/>
                                    <ProfileText>
                                        수강 진행 상황
                                    </ProfileText>
                                </Process>
                                <ChartBox>
                                    <Chart/>
                                    <ChartName>
                                        <PieName> 70% </PieName>
                                        <PieName> 20% </PieName>
                                        <PieName> 30% </PieName>
                                    </ChartName>
                                    <GoDiv>
                                        {Study_level(1)}
                                        {Study_level(2)}
                                        {Study_level(3)} 
                                        {/* <GoBtn> 초급 바로가기 </GoBtn>
                                        <GoBtn> 중급 바로가기 </GoBtn>
                                        <GoBtn> 고급 바로가기 </GoBtn> */}
                                    </GoDiv>
                                </ChartBox>
                            </Chartcontain>
                        </MypageDiv>
                    )
                    )} 
                </FadeHome>
            </MediaDiv>
            {/* <Chart options={options} series={series} type="radialBar" height="50" /> */}
        </>       
    )

}

function Study_level(level){

    return(
        // <LevelBox>
            <div>
                <Link to = {"/study/study_class"} style={{ textDecoration: 'none'}} state={{level : (level)}}>
                    <GoBtn>수강하기</GoBtn>
                </Link>
            </div> 
        // </LevelBox>
    );
}

export default React.memo(Mypage);
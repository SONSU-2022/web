import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, Cell,   Tooltip, Legend } from "recharts";
import axios from 'axios';
import {useLocation, Link} from 'react-router-dom';
import Header from './header'
import { FadeHome } from '../component_css/Home_style';
import { MediaDiv,
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
    GoingBtn,
    MyBtn,
    Process,
    ChartBox,
    Chartcontain,
    PCAcontent,
    PCAprofile,
    ChartName,
    PieName,
    GoDiv,
    GoBtn,
    LevelBox,
} from './../component_css/Mypage_style';
import { HeaderDiv } from '../component_css/Home_style';
import userEvent from '@testing-library/user-event';

const COLORS = ["#FF7A00", "#ffffff"];

const Mypage = () => {

    const [UserData,setUserData] = useState();
    
    //서버에게서 데이터 받아오기
    useEffect(()=>{
        axios.get(`/mypage/1`)
        .then((response)=>{
         console.log(response.data.data);
         setUserData(response.data.data);
        })

    }, [])

    
    var level1_per = UserData && Math.round((UserData.progressDto[0].doneCount / UserData.progressDto[0].totalCount)*100)
    var level2_per = UserData && Math.round((UserData.progressDto[1].doneCount / UserData.progressDto[1].totalCount)*100)
    var level3_per = UserData && UserData && Math.round((UserData.progressDto[2].doneCount / UserData.progressDto[2].totalCount)*100)
    
    const data1 = [
        { name: "process", value: UserData && (UserData.progressDto[0].doneCount) },
        { name: "n process", value: UserData && (UserData.progressDto[0].totalCount-UserData.progressDto[0].doneCount) },
    ];
    
    const data2 = [
        { name: "process", value: UserData && (UserData.progressDto[1].doneCount) },
        { name: "n process", value: UserData && (UserData.progressDto[1].totalCount-UserData.progressDto[1].doneCount) },
    ];
    
    const data3 = [
        { name: "process", value: UserData && (UserData.progressDto[2].doneCount) },
        { name: "n process", value: UserData && (UserData.progressDto[2].totalCount-UserData.progressDto[2].doneCount) },
    ];

    return (
        <>            
            <HeaderDiv>
                <Header/>
            </HeaderDiv>
            
            <MediaDiv>
                <FadeHome>
                {/* {Users && Users.map((obj)=>(    */}
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
                                        <Profileimg src={UserData && UserData.picture}></Profileimg>
                                        <PCAcontent>
                                            <Profilename> {UserData && UserData.userName} </Profilename>
                                            <Profileemail> {UserData && UserData.email} </Profileemail>
                                            <Profiledate> 손수와 함께한지 {UserData && UserData.withDate}일째 </Profiledate>
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

                                    <GoingBtn>
                                        <Link to={"/grade"} style={{ textDecoration: 'none' }}>
                                            <MyBtn src={'img/gograde.png'}></MyBtn>
                                        </Link>
                                        <Link to={"/wrong"} style={{ textDecoration: 'none' }}>
                                            <MyBtn src={'img/gowrong.png'}></MyBtn>
                                        </Link>
                                    </GoingBtn>
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
                                    {/* <Chart/> */}
                                    <PieChart width={850} height={250}>
                                        {/* <Legend /> */}
                                        {/* <Tooltip /> */}
                                        <Pie
                                            data={data1}
                                            cx={190}
                                            cy={130}
                                            innerRadius={60}
                                            outerRadius={90}
                                            fill="#8884d8"
                                            stroke="#FF7A00"
                                            strokeWidth={1}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {data1.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        {/* <ChartName>
                                            <PieName> {level1_per} % </PieName>
                                        </ChartName>
                                        <GoDiv>{Study_level(1)}</GoDiv> */}

                                        <Pie
                                            data={data2}
                                            cx={460}
                                            cy={130}
                                            innerRadius={60}
                                            outerRadius={90}
                                            fill="#8884d8"
                                            stroke="#FF7A00"
                                            strokeWidth={1}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {data2.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        {/* <ChartName>
                                            <PieName> {level2_per} % </PieName>
                                        </ChartName>
                                        <GoDiv>{Study_level(2)}</GoDiv> */}

                                        <Pie
                                            data={data3}
                                            cx={730}
                                            cy={130}
                                            // cx="85%"
                                            // cy="60%"
                                            innerRadius={60}
                                            outerRadius={90}
                                            fill="#8884d8"
                                            stroke="#FF7A00"
                                            strokeWidth={1}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {data3.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        {/* <ChartName>
                                            <PieName> {level3_per} % </PieName>
                                        </ChartName>
                                        <GoDiv>{Study_level(3)}</GoDiv> */}

                                        </PieChart>
                                    <ChartName>
                                        <PieName> {level1_per} % </PieName>
                                        <PieName> {level2_per} % </PieName>
                                        <PieName> {level3_per} % </PieName>
                                    </ChartName>
                                    <GoDiv>
                                        {Study_level(1)}
                                        {Study_level(2)}
                                        {Study_level(3)} 
                                    </GoDiv>
                                </ChartBox>
                            </Chartcontain>
                        </MypageDiv>
                    
                </FadeHome>
            </MediaDiv>
            {/* <Chart options={options} series={series} type="radialBar" height="50" /> */}
        </>       
    );

}

function Study_level(level){

    return(
        // <MediaDiv>
            <LevelBox>
                {/* <div> */}
                    <Link to = {"/study/study_class"} style={{ textDecoration: 'none'}} state={{level : (level)}}>
                        <GoBtn>수강하기</GoBtn>
                    </Link>
                {/* </div>  */}
            </LevelBox>
        // </MediaDiv>
    );
}

export default React.memo(Mypage);
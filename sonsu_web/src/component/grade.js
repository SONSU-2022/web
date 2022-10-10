import React,{useCallback, useState,useEffect} from 'react';
import { useLocation, Link } from 'react-router-dom';
import Chart from "./chart/chart2";
import axios from 'axios';
import Header from './header'
import {
    GradeDiv,
    GradeTitle,
    GradeLevel,
    GradeChart,
    ChartDivA,
    ChartDivB,
} from './../component_css/Grade_style';
import { 
    MediaDiv,
    Curri, 
} from './../component_css/Study_style';
import { HeaderDiv } from '../component_css/Home_style';

// 탭 구성 리소스
const Level_Arr=[
    {
        level_name:["초급", "중급", "고급"],
    },
]

const Grade = (props) => {

    const level_name = Level_Arr.curri_arr;

    const [cur_curri,setCurri] = useState(level_name[0]);

    //서버
    const [Curris,setCurris] = useState();

    //서버에게서 데이터 받아오기
    useEffect(()=>{
        axios.get(`/study/${encodeURIComponent(cur_curri)}`)
        .then((response)=>{
            console.log(response.data.data);
            setCurris(response.data.data);
        })

    }, [cur_curri])

    return (
        <>
            <HeaderDiv>
                <Header/>
            </HeaderDiv>
            <MediaDiv>
                <GradeDiv>
                    <GradeTitle>성적표</GradeTitle>
                    <GradeLevel>
                        {level_name.map(i => (                    
                            <Curri onClick={()=> {setCurri(i)}}>{i}</Curri>                
                        )
                        )}
                    </GradeLevel>
                    <GradeChart>
                        <ChartDivA>
                            <Chart/>
                        </ChartDivA>
                        <ChartDivB>
                            <Chart/>
                        </ChartDivB>
                    </GradeChart>
                </GradeDiv>
            </MediaDiv>
        </>
    )
}

export default Grade
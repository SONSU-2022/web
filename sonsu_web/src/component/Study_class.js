import React,{useCallback, useState,useEffect} from 'react';
import { useLocation, Link } from 'react-router-dom';
import Study_play from './Study_play';
import axios from 'axios';
import Header from './header'
import { 
    MediaDiv,
    LevelDiv, 
    TitleDiv, 
    CurriDiv,
    Curri, 
    WordDiv, 
    WordThumb, 
    WordName,
    WordDesDiv,
    WordDes,
    ClassBtn,
    StyledSlider,
} from './../component_css/Study_style';

import { FadeHome } from '../component_css/Home_style';
import { colors } from '@material-ui/core';

//프론트 고정 리소스
const Curri_Arr=[
    {
        level: 1,
        level_name:"초급",
        curri_arr: ["자음","모음"],
    },
    {
        level: 2,
        level_name:"중급",
        curri_arr: ["짧은 문장"],
    },
    {
        level: 3,
        level_name:"고급",
        curri_arr: ["단어"],
    },
]



// -----------------------리소스------------------------------------

function Study_class(props){

    const level=useLocation().state.level;

    const level_name=Curri_Arr[(level-1)].level_name;
    const curri_arr=Curri_Arr[(level-1)].curri_arr;

    const [cur_curri,setCurri] = useState(curri_arr[0]);
     

    //서버
    const [Curris,setCurris] = useState();
    
    //서버에게서 데이터 받아오기
    useEffect(()=>{
        axios.get(`/study/${level}/${encodeURIComponent(cur_curri)}`)
        .then((response)=>{
         console.log(response.data.data);
         setCurris(response.data.data);
        })

    }, [cur_curri])

    // 슬라이드 구현
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,      
    //   nextArrow: <SampleNextArrow />,
    //   prevArrow: <SamplePrevArrow />
    //centerMode: false,
    };

    return(
        
        <MediaDiv>  
            <Header/>
            {/* 수강하기 - 단계선택 - 메뉴바 (ex. 초급 자음|모음) */}
            <TitleDiv>
                <LevelDiv>{level_name}</LevelDiv>

                <CurriDiv>
                {curri_arr.map(i=> (                    
                        <Curri onClick={()=> {setCurri(i)}}>{i}</Curri>                
                )
                )}
                </CurriDiv>
            </TitleDiv>

            {/* 각 영상 하나 섹션별 */}
        
            
            <FadeHome>

                <StyledSlider {...settings}> 

                {Curris && Curris.map((obj,index)=>(                        
                        <WordDiv key={obj.wordIdx}>
                            
                            {/* <WordThumb alt={obj.wordName} src={Images[index]}/> */}
                            {/* <WordThumb alt={obj.wordName} src={
                                Images[Images.findIndex((element)=>element.curri === cur_curri)].urls[index]
                            }/> */}

                            <WordThumb alt={obj.wordName} src={obj.thumbnailUrl}/>

                            <WordDesDiv>
                                <WordName>{obj.wordName}</WordName>
                                <WordDes>{obj.wordInfo}</WordDes>
                            </WordDesDiv>

                            <Link to = "study_play" state={{
                                level : (level), 
                                word_name: (obj.wordName), 
                                word_idx: (obj.wordIdx), 
                                }} >

                                <ClassBtn>강의 수강하기</ClassBtn>
                            </Link>
                            
                        </WordDiv>                        
                    )
                    )}                    

                
                </StyledSlider>  

            </FadeHome>
        
        </MediaDiv>
        
    );
}


export default Study_class;
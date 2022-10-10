import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/header";
import Home from "./component/home";
import Mypage from "./component/mypage";
import Wrong from "./component/wrong";
import Grade from "./component/grade";
import TestHome from './component/TestHome';
import Test from './component/Test';
import Study from './component/Study';
import Study_play from './component/Study_play';
import Study_class from './component/Study_class';
import Login from './component/login';
import Service_intro from './component/Service_intro';
import WebcamStreamCapture from './component/WebcamStreamCapture';
import StudyResult from './component/StudyResult';
import TestResult from './component/TestResult';

import { GlobalStyles } from './component_css/Study_style';
import { MediaDiv } from './component_css/Study_style';

function App() {
  return (
      // <Layout>
      // </Layout>
    <div className="App"> 
      <BrowserRouter>
        <GlobalStyles/>          
          {/* <Header /> */}
            <Routes>
              {/* 홈 */}
              <Route exact path="/" element={<Home />}/>
              {/* 홈 */}
              <Route exact path="home" element={<Home />}/>
              {/* 서비스소개 */}
              <Route exact path="service_intro" element={<Service_intro />}/>
              {/* 로그인 */}
              <Route exact path="login" element={<Login />} /> 
              {/* 마이페이지 */}
              <Route exact path="mypage" element={<Mypage />} />
              {/* 오답노트 */}
              <Route exact path="wrong" element={<Wrong />} />
              {/* 성적표 */}
              <Route exact path="grade" element={<Grade />} />
              {/* 수강하기 */}
              <Route exact path="study" element={<Study />}/>
              {/* 수강하기 중간 페이지 */}
              <Route path="study/study_class" element={<Study_class/>} />
              {/* 수강 영상나오는 페이지 */}
              <Route path="study/study_class/study_play" element={<Study_play/>} />
              {/* 사용자 웹캠 페이지 */}
              <Route path="webcam" element={<WebcamStreamCapture/>}/>
              {/* 수강하기 결과 페이지 */}
              <Route path="studyresult" element={<StudyResult/>}/>
              {/* 테스트하기 */}
              <Route path="test_home" element={<TestHome/>} />
              {/* 테스트 영상나오는 페이지 */}
              <Route path="test_home/test" element={<Test/>} />
              {/* 테스트하기 결과 페이지 */}
              <Route path="testresult" element={<TestResult/>}/>
            </Routes>
            {/* <a><Footer /></a> */}
      </BrowserRouter> 
    </div>
  );
}

export default App;

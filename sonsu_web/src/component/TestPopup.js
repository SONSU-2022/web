import React from 'react';
import Webcam from "react-webcam";
import '../component_css/TestPopup.css';

class TestPopup extends React.Component{

    render(){
        return (
            <div className='TestPopup'>
                <Testdetail />
                <Testsidebar />
            </div>
        );
    }
}

function Testdetail(){
    return(
        <div className="Testdetail">
            <Webcam
                audio={false}
                mirrored={true}
                height={720}
                width={1280}
            ></Webcam>
        </div>
    );
}

function Testsidebar(){
    return(
        <div className="Testsidebar">
            <h1>초급</h1>
            <ul>                
                <ol type="1">
                    <li>1번 문제</li>
                    <li>2번 문제</li>
                    <li>3번 문제</li> 
                    <li>4번 문제</li>
                    <li>5번 문제</li>    
                </ol>
            </ul>
        </div>
    );
}

export default TestPopup;
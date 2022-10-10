import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import events from './events';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Header from './header'
import { HeaderDiv } from '../component_css/Home_style';
import {
    WrongTitle,
    WrongDiv,
    WrongContent,
    Wrongcalendar,
    WrongText,
} from '../component_css/Wrong_style';
// import { Toolbar } from '@material-ui/core';
import Toolbar from './Toolbar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import 'react-big-calendar/dist/react-big-calendar.css'; // css import

// const allViews = Object
//   .keys(Calendar.Views)
//   .map(k => Calendar.Views[k])

const Wrong = () => {
    moment.locale('ko-KR');
    const localizer = momentLocalizer(moment);
    const [value, onChange] = useState(new Date());

    return (
        <>
            <HeaderDiv>
                <Header/>
            </HeaderDiv>
            <WrongDiv>
                <WrongTitle>
                    <img src='img/bar.png' alt="image"/>
                    <WrongText>
                        오답노트
                    </WrongText>
                </WrongTitle>
                <WrongContent>
                    <Wrongcalendar>
                        <Calendar
                            onChange={onChange}
                            value={value}   // 
                            localizer={localizer}
                            // events={events} // 캘린더 내의 일자별 일정추가 기능
                            // style={{ height: 500 }}
                            // step={60}
                            // views={allViews}
                            // defaultDate={new Date(2015, 3, 1)}
                            components={{
                                toolbar: Toolbar,
                            }}
                        />
                        <div className="text-gray-500 mt-4">
                            {moment(value).format("YYYY년 MM월 DD일")} 
                        </div>
                    </Wrongcalendar>
                </WrongContent>
            </WrongDiv>
        </>
    )
}

export default Wrong

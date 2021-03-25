(this["webpackJsonpreact-hw4"]=this["webpackJsonpreact-hw4"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(15),a=n.n(s),i=(n(35),n(36),n(0)),o=function(e){var t=e.name,n=e.type,c=e.placeholder,r=e.onChange;return Object(i.jsx)("input",{type:n,id:t,name:t,placeholder:c,onChange:r},t+"_inp_key")},j=n(4),d=n(26),l=n(5),b=function(e){var t=e.className,n=e.onClick,c=e.name,r=e.disabled,s=e.key;return Object(i.jsx)("button",{className:t+"-btn",onClick:n,disabled:r,children:c},s)},O=n(18),u=n.n(O),m=function(e,t,n,c){e({type:"SET_CURRENT_PATICIPANT",payload:{id:t,firstName:n,secondName:c}})},h=function(e,t){e({type:"CONTESTS_FILTER",payload:{filterParam:t}})},p=function(e){e({type:"SAVE_TO_LOCALSTORAGE"})},f=function(e){var t=e.contest,n=t.id,c=t.contestName,r=t.isFinished,s=t.winner,a=Object(j.b)(),o="contest_card_key_"+e.index;return Object(i.jsxs)("div",{className:"contest-card",children:[Object(i.jsx)("div",{className:"delete-contest",onClick:function(){!function(e,t){e({type:"DELETE_CONTEST",payload:t})}(a,e.contest)},children:Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX///8TRWMAPV4KQmEAQF85W3N5i5tddYgAN1myvsfm6u0AOlsAQGH4+vqZqLQANVierrlBYnktVXAAMlYALVPFztXw8/XY3+Rth5iPoa5ge47V29+puMLN1dqFmqhHaYAiUGwAIk4AGUi2wspSbYJpgJF7jp0US2m3wMguWXPf5elZcoaDlaSSpbEwVnAKIIBNAAAIl0lEQVR4nO2dbXuiOhCGC6hFkGKrYqu2dbcvrnbr//95Z+02M4EEsDKTsWdzf0QvkoeXZPJkEi4uPB6Px+PxeDwej8fj8Xg8Ho/H4/F4/hV2q9vHvp3H29VOunqdGW6ncRjVEcbT7VC6ip24306ioJko386kq3k6d3Gbvg+N8Z10RU9lER+h70D+Il3V07g9VmAQxLfSlT2FcX60wD93cSxd3a+zC78gMAjC79dtLHSFNZ2FrnAhXeGvMp9g7dN0vb8x2a/TFP80mUtX+Yv8hlsYjd53RVaYZMXufQT3MfwtXeUvMkKBScPfEpAY9ZzVjYQdPKR589M3hxZ38r3ampmq+KitM1+ou51/r+BtpXr7dNX2T9XaxG3/PC+uoN5td2YG1+J7dfqgsPXZg+c5vXJSMyq8QuS7KhyfoPAc3sPkWIo7FdLEw5a/DlVLE94VR5+fTeGP8Fh6EG+OWv4JwU/QO/rsP9gUToPzYOoVeoVeoTheoVf4Lyv8GSs0CymMOdEcuxQO/mRTuBoqYIQbhIOnIR9PA5AYa6WzKdQAHyZ9Zy3nDp6WnLUcE3xIX1nLwXsYsJZjslUu4IjXrAajKtqylmPyCD7n4/+iHJMXuLY3rOXcOHpWTF7V+xFtWMsJlELnrj+2cUHBWEyBvaHrqXAwYoLGeYmuJGABOLdxtC6fc1psrnX4jMXYAKs6SO8Zi7mHR6XVPKdmiZNLnEXPcGpqyViMjQQUxr8YiwGvMZhwvu42EnhBWJsAbNBC1wqLDXRUD4zFPGC3y9kp2cj2oJAz2+cWFN5kjMXYyK6dhFMYeF8zlmLnTRn3o2fGUp6Vwt4bYyl2Xnouri48KT33yX0DF2+I9rbzDrRtPKh2nLOVwxY75Wyx7TSH3qvxJ1daxDNUB8da5vPsSh20BJ6CgbcebcSWVJ+bOP3LZIAHnyfqoNY4DdTB2DKU3kHQFrtPB79vjBj78P5oCi9V49S7xIP4PvfN02jRL2d8b2eJ99ASehMpxBFM7Drwbhu5ESnURqHus94SyJu0pYkQKbxCr8R14N0WehMpFAy8LzSfz9YZEylER4/Xs7QDImwJlkQK0ZW1/MgOuNG20JtIIQTezh3vA4um60uksC/meB/QXG8z9KZRmG0EA2/d9U7ZFGIREou/IH05mJotOY3CAhIHWpOpOXhCo8+MN2gUYsZ//MQhoQWMGS1RMY1CjO6dO94HllB8bl5gGoVPWIT7wLs0djNfEhqFGHjnEstNCkzHMMffNArRR5gIhKVahpQl9KZRCIF3MOEQ0Ap4KBbXm0YhON7BiENAKzC46JmBKY3CZ/BkJYYWeiKImepCoxCSdkQCb931NtOVaBRCIoaA433gd0M7QKMQWmuhBaZookyN0JtEYYZhqcyKIQy9zRloEoU4ky4SeJdCbyPhhEThXDbw1vMkzHQMEoVNBTgBL7EZepMoxMBbaLE+jk/NaRMShTj5YxljuyCDS2w2dSQKsbHOXacp/CVT5Vu6KxKF2OEGQgrR9TZCDhKFL/DTVkYhBqZm6E2iEANvmbC0MdmFRKGblJ0msHL76k8kCve2kzgFWoJoXW3NKRQWa7Ecb8V7/fwlhcIEzs68LqceDL1HVSuMQuEOU02kNgXBqCqt2pkUCpfY4csE3rolbbjeFAobTu+KXb3rTaFQc7ylth9qyISmUCiYAa1INqCwOr1HoRAnKCUSMT4o6tMxKBRqiRhSCjPUUXW9KRRijndfKPD+ExpHlip/QKEQ/h5x5lk3c1mbDEKhENNZqtfPHfXPEYHChnfAHfWhN4HCMwi89dC7x6AQ9ikS3CNLm4Wu9MkECpOmWXRXzGpdbwKFmuMtt6PiPd7DSiUIFKLjHUsF3n8uM67wrHjCBArRD07ltqfd1S6HIFA4rh9fu6PAXO9K6E2gEAPvSCosvWjYD4BAIXa2rvf80FnXhR0ECjFgWrPVvx1cPFdZHkigEB1v94srEVhmWa0egcJ+3dVzCj5Jlf0/CBRuziDw1hPP4vIPBArRpXG/9BAZ1yWcdFeopZpIbt1au+VBd4Xapg2SX6LREk7Krnd3hffSqSaf1ajLB+mucCbveB/Y1T1K3RUOm5YCuKN2QUR3hY3LORyCCstTfN0VYuDNtw/kMUB/WHG9uyvEzfZkMqAVEHpXkgm6K8Q0iDVj/dvBTOhyeNxdIQT1Yqkmf6m70t0V1j0droH5oSAqHe+uENc6SCw9RLDFC0uBaWeFGc6+yn53rm6etrPCBBdXyn4zYVVj+XVWqBmVst+f0TauKEWPnRXeN2674ZBljfXeWeGsbtTimrqt9zor/CW32V6ZAt/DUoPQWSE2YbFo4K3toFp2U/rq+7GppvBNHQw192yQqoMlhegAse4A246WCV1yxN6uP+lrwgd9dVCT/aAOXpdMQ8HN9sqwbb2n5R/LKtQ8YdqUkOez8IMPYD49rfeOTZX0l3QxNWtP+TRljfv7OIVp6z3RzfbKYL8VUfbM2j5b0h8r02bbKU2/XW2GgHNmPFtXLKWXHrJXhenCnQJ+nJp0HCe62V4ZbdkHZfaZ6GZ7ZbQMQspmHTfbMxYcuSbjWX414AkkTgJDb8rw6kVwl+sqsC0e6a7XPGc9De1jPnTPE2ZACzveB3A5cjWLtgMFOt7yH5XXHFO6xhRPegZf60Zjs+1D8cdT9CDwFsyeBdAyijY0EpM9fmw3JTljN141ifnrPOvK/CGHOyib8aXAfIxDjSZxb9SFXjzRPnkobXh/8qJXiZYz6A0P7MKova6nIT50+mSVt9f1JGLZyVGNQdxe2xNIpa1SjQWHxFRuYaWF15z8Xcwvz0ngxcUwStsr/QXCUG7BWg3JIE6p7mOU5gtpe8ZG8r6Z5urbJKcT59Po7hz1fZDMhuOrboyHM2nvyePxeDwej8fj8Xg8Ho/H4/F4PB6Ph4f/AJT+osnyyWxQAAAAAElFTkSuQmCC",alt:"Delete"})}),Object(i.jsxs)("span",{children:[Object(i.jsx)("b",{children:"ID:"})," ",n]},o+"_id"),Object(i.jsxs)("span",{children:[Object(i.jsx)("b",{children:"Name:"})," ",c]},o+"_name"),Object(i.jsxs)("span",{children:[Object(i.jsx)("b",{children:"Status:"})," ",r?"finished":"active"]},o+"_status"),r&&Object(i.jsxs)("span",{children:[Object(i.jsx)("b",{children:"Winner:"})," ",s.firstName+" "+s.secondName]},o+"_winner"),Object(i.jsx)(b,{className:"show-contest",name:"Show",onClick:function(){a({type:"SET_CURRENT_CONTEST",payload:e.contest}),e.route.history.push("/competition/"+n)}})]},o+"_div")},N=n(10),x=function(e){var t={hours:0,minutes:0,seconds:0};return e/60<1?t.seconds=e:e/3600<1?(t.minutes=Math.floor(e/60),t.seconds=e%60):(t.hours=Math.floor(e/3600),t.minutes=Math.floor(e/60%60),t.seconds=e%60),(t.hours<10?"0"+t.hours:t.hours)+":"+(t.minutes<10?"0"+t.minutes:t.minutes)+":"+(t.seconds<10?"0"+t.seconds:t.seconds)},C=function(e,t,n){var r=Object(c.useState)("00:00:00"),s=Object(N.a)(r,2),a=s[0],i=s[1],o=Object(c.useState)(0),j=Object(N.a)(o,2),d=j[0],l=j[1];return Object(c.useEffect)((function(){var t;return e&&(t=setInterval((function(){var e=x(d);i(e),l(d+1)}),20)),function(){clearInterval(t)}}),[e,i,d]),[a,function(){return i(t)},function(){return l(n)},d]},A=n(21),E=function(e){var t=e.user,n=t.id,c=t.firstName,r=t.secondName,s=t.time,a=Object(j.b)();Object(A.a)((function(){p(a)}));var o="user_card_key";return Object(i.jsxs)("div",{className:"user-card",children:[Object(i.jsxs)("span",{children:[Object(i.jsx)("b",{children:"ID:"})," ",n]},o+"_id"),Object(i.jsxs)("span",{children:[Object(i.jsx)("b",{children:"Name:"})," ",c]},o+"_name"),Object(i.jsxs)("span",{children:[Object(i.jsx)("b",{children:"Surname:"})," ",r]},o+"_secName"),Object(i.jsxs)("span",{children:[Object(i.jsx)("b",{children:"Time:"})," ",x(s)]},o+"_time"),!e.isFinished&&Object(i.jsx)(b,{className:"delete-user",name:"Delete",onClick:function(){return function(e,t){e({type:"DELETE_PARTICIPANT",payload:t})}(a,e.user)}})]},o+"_div")},T=n(2),v=function(e){return{addParticipant:function(t){var n=t.id,c=t.firstName,r=t.secondName,s=t.time;e({type:"ADD_PARTICIPANT",payload:{id:n,firstName:c,secondName:r,time:s}})},openTimer:function(){e({type:"OPEN_TIMER"})},setCurrentParticipant:function(t,n,c){e({type:"SET_CURRENT_PATICIPANT",payload:{id:t,firstName:n,secondName:c}})}}},y=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.currentContest})),n=Object(c.useState)(!1),r=Object(N.a)(n,2),s=r[0],a=r[1],o=Object(c.useState)(!1),d=Object(N.a)(o,2),l=d[0],O=d[1],u=Object(c.useState)(!1),h=Object(N.a)(u,2),p=h[0],f=h[1],x=Object(c.useState)(!0),A=Object(N.a)(x,2),E=A[0],v=A[1],y=t.currentParticipant,P=C(s,"00:00:00",0),R=Object(N.a)(P,4),S=R[0],F=R[1],I=R[2],w=R[3];return Object(i.jsx)("div",{className:"timer-container",children:Object(i.jsxs)("div",{className:"common-wraper",children:[Object(i.jsx)("h2",{children:"Participant"}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"ID:"})," ",y.id]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:"Participant:"})," ",t.currentParticipant.firstName+" "+y.secondName]}),Object(i.jsxs)("div",{className:"timer-wraper",children:[Object(i.jsx)("h1",{children:S}),Object(i.jsxs)("div",{className:"btn_section",children:[Object(i.jsx)(b,{className:"start",name:"Start",onClick:function(){a(!0),O(!0),f(!1),v(!0)},disabled:s||!l&&p}),Object(i.jsx)(b,{className:"stop",name:"Stop",onClick:function(){a(!1),O(!1),f(!0),v(!0)},disabled:!l}),Object(i.jsx)(b,{className:"reset",name:"Reset",onClick:function(){a(!1),O(!1),f(!1),v(!0),I(),F()},disabled:!p})]}),Object(i.jsxs)("div",{className:"final-btn-container",children:[Object(i.jsx)(b,{className:"cancel-timer",name:"Cancel",onClick:function(){m(e,{}),function(e){e({type:"OPEN_TIMER"})}(e)},disabled:!E}),Object(i.jsx)(b,{className:"save-timer",name:"Save",onClick:function(){w?(!function(e,t){e({type:"ADD_PARTICIPANT",payload:{id:t.id,firstName:t.firstName,secondName:t.secondName,time:t.time}})}(e,Object(T.a)(Object(T.a)({},y),{},{time:w})),m(e,{})):alert('\u0412\u0440\u0435\u043c\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c "00:00:00"')},disabled:!p})]})]})]})})},P=function(){var e=Object(j.c)((function(e){return e.currentContest})),t=e.isTimerActive,n=e.isFinished,c=Object(j.b)();return Object(i.jsxs)("div",{className:"registration-form",children:[Object(i.jsx)("h2",{children:"Registration user"}),Object(i.jsxs)("form",{action:"submit",onSubmit:function(e){e.preventDefault();var t=e.target.elements,r=t.firstName,s=t.secondName;if(r.value&&s.value)if(r.value.match(/([A-z]|[\u0430-\u044f]|[\u0410-\u042f])/)&&s.value.match(/([A-z]|[\u0430-\u044f]|[\u0410-\u042f])/)){var a=u()();v(c).setCurrentParticipant(a,r.value,s.value,n),v(c).openTimer(),r.value="",s.value="",r.className="",r.placeholder="Enter first name...",s.className="",s.placeholder="Enter second name..."}else alert("\u0412 \u0438\u043c\u0435\u043d\u0438 \u0438 \u0444\u0430\u043c\u0438\u043b\u0438\u0438 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0430 \u0431\u0443\u043a\u0432\u0430");else r.value||(r.className="ampty-input",r.placeholder="\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435"),s.value||(s.className="ampty-input",s.placeholder="\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435")},children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"first-name",children:"First name:"}),Object(i.jsx)(o,{name:"firstName",type:"text",placeholder:"Enter first name..."})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"secondName",children:"Second name:"}),Object(i.jsx)(o,{name:"secondName",type:"text",placeholder:"Enter second name..."})]}),Object(i.jsx)(b,{className:"regis-patric",name:"Register participant"})]}),t&&Object(i.jsx)(y,{})]})},R=function(e){var t=e.props,n=Object(j.c)((function(e){return e.currentContest})),c=Object(j.b)(),r=n.listOfUsers,s=n.winner,a=n.isFinished;return Object(i.jsxs)("div",{className:"winner-info_container",children:[Object(i.jsxs)("h3",{children:["Total participants: ",r?r.length:"0"]}),s&&a?Object(i.jsxs)("div",{className:"winner-info",children:[Object(i.jsxs)("span",{children:[Object(i.jsx)("b",{children:"ID:"})," ",s.id]}),Object(i.jsxs)("span",{children:[Object(i.jsx)("b",{children:"Name:"})," ",s.firstName]}),Object(i.jsxs)("span",{children:[Object(i.jsx)("b",{children:"Surname:"})," ",s.secondName]}),Object(i.jsxs)("span",{children:[Object(i.jsx)("b",{children:"Time:"})," ",x(s.time)]})]}):Object(i.jsx)(b,{className:"show-winner",name:"Show winner",onClick:function(){r.length?(!function(e){e({type:"SHOW_WINNER"})}(c),t.history.push("/")):alert("\u0414\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c 1 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a")}})]})},S=n(20),F=function(e){var t=Object(j.c)((function(e){return e.currentContest})),n=t.arrayForRender,c=t.isFinished,r=t.winner,s=t.contestName,a=t.id,d=Object(j.b)(),l=Object(S.useDebouncedCallback)((function(e){!function(e,t){e({type:"FILTER_PARTICIPANT",payload:{filterParam:t}})}(d,e.target.value)}),300);return Object(i.jsxs)("div",{className:"contest",children:[Object(i.jsxs)("div",{className:"users-container",children:[Object(i.jsx)(o,{name:"searchParticipants",placeholder:"Enter participant name...",onChange:l}),Object(i.jsx)("div",{className:"users-cards",children:n.map((function(e){return Object(i.jsx)(E,{user:e,isFinished:c})}))})]}),Object(i.jsxs)("div",{className:"aside-container",children:[Object(i.jsx)(b,{className:"to-competitions",name:"To competitions",onClick:function(){h(d,""),e.history.push("/")}}),c&&Object(i.jsx)(b,{className:"reopen-competition",name:"Reopen competition",onClick:function(){return function(e){e({type:"REOPEN_COMPETITION"})}(d)}}),c&&Object(i.jsxs)("div",{className:"contest-winner-info",children:[Object(i.jsx)("h2",{children:"Contest Info"}),Object(i.jsxs)("span",{children:[Object(i.jsx)("b",{children:"ID:"})," ",a]}),Object(i.jsxs)("span",{children:[Object(i.jsx)("b",{children:"Name:"})," ",s]}),Object(i.jsxs)("span",{children:[Object(i.jsx)("b",{children:"Winner:"})," ",r.firstName+" "+r.secondName]}),Object(i.jsxs)("span",{children:[Object(i.jsx)("b",{children:"Time:"})," ",x(r.time)]})]}),!c&&Object(i.jsx)(P,{}),!c&&Object(i.jsx)(R,{props:e})]})]})},I=function(e){var t=Object(j.c)((function(e){return e.compititionsArrayForRender})),n=Object(j.b)(),c=Object(S.useDebouncedCallback)((function(e){h(n,e.target.value)}),300);return Object(i.jsxs)("div",{className:"competitions",children:[Object(i.jsxs)("div",{className:"competitions_top",children:[Object(i.jsx)(o,{name:"searchContest",placeholder:"Enter contest name...",onChange:c}),Object(i.jsx)(d.b,{to:"/create",children:Object(i.jsx)(b,{className:"create-contest",name:"Create contest"})})]}),Object(i.jsx)("div",{className:"contests-list",children:t.map((function(t,n){return Object(i.jsx)(f,{contest:t,index:n,route:e})}))})]})},w=function(e){var t=Object(j.b)();return Object(i.jsx)("div",{className:"create-contest-container",children:Object(i.jsxs)("form",{action:"submit",onSubmit:function(n){n.preventDefault();var c=n.target.elements.contestName;c?(!function(e,t){e({type:"CREATE_CONTEST",payload:{contestName:t,id:u()(),isFinished:!1,listOfUsers:[],winner:"",arrayForRender:[],isTimerActive:!1,currentParticipant:{}}})}(t,c.value),e.history.push("/")):alert("\u0418\u043c\u044f \u0441\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u043e\u0439")},children:[Object(i.jsx)("h2",{children:"Create contest"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{htmlFor:"secondName",children:"Contest name:"}),Object(i.jsx)(o,{name:"contestName",type:"text",placeholder:"Enter contest name..."})]}),Object(i.jsx)(b,{className:"create-contest",name:"Create"})]})})};var X=function(){var e=Object(j.c)((function(e){return e.compititionsArray})),t=Object(j.b)();return Object(A.a)((function(){p(t)})),Object(i.jsx)(d.a,{children:Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(l.c,{children:[Object(i.jsx)(l.a,{exact:!0,path:"/",component:I}),Object(i.jsx)(l.a,{path:"/create",component:w}),e.map((function(e,t){var n=e.id;return Object(i.jsx)(l.a,{path:"/competition/:"+n,component:F},"key_"+e+t)}))]})})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))},g=n(17),k=n(11),D="CREATE_CONTEST",V="ADD_PARTICIPANT",L="SHOW_WINNER",Y="DELETE_PARTICIPANT",K="FILTER_PARTICIPANT",W="CONTESTS_FILTER",B="OPEN_TIMER",H="SET_CURRENT_PATICIPANT",Q="SET_CURRENT_CONTEST",U="SAVE_TO_LOCALSTORAGE",_="REOPEN_COMPETITION",Z="DELETE_CONTEST",G=JSON.parse(localStorage.getItem("state"))||{compititionsArray:[],compititionsArrayForRender:[],currentContest:{}},J=Object(g.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload,r=Object(T.a)({},e.currentContest),s=e.compititionsArray.findIndex((function(t){return t.id===e.currentContest.id})),a=Object(k.a)(e.compititionsArray),i=r.listOfUsers,o=r.arrayForRender;switch(n){case D:return Object(T.a)(Object(T.a)({},e),{},{compititionsArray:[].concat(Object(k.a)(e.compititionsArray),[c]),compititionsArrayForRender:[].concat(Object(k.a)(e.compititionsArrayForRender),[c])});case Q:return Object(T.a)(Object(T.a)({},e),{},{currentContest:c});case V:var j=Object(T.a)(Object(T.a)({},r),{},{listOfUsers:[c].concat(Object(k.a)(i)),arrayForRender:[c].concat(Object(k.a)(o)),isTimerActive:!r.isTimerActive,winner:""});return a[s]=Object(T.a)({},j),Object(T.a)(Object(T.a)({},e),{},{compititionsArray:a,compititionsArrayForRender:a,currentContest:Object(T.a)({},j)});case L:var d=a[s].listOfUsers.sort((function(e,t){return e.time-t.time}));return a[s].winner=d[0],a[s].isFinished=!0,Object(T.a)(Object(T.a)({},e),{},{compititionsArray:a,compititionsArrayForRender:a,currentContest:{}});case _:return a[s].isFinished=!1,console.log(a),Object(T.a)(Object(T.a)({},e),{},{compititionsArray:a,compititionsArrayForRender:a,currentContest:Object(T.a)(Object(T.a)({},r),{},{isFinished:!1})});case Y:var l=e.currentContest.listOfUsers.findIndex((function(e){return e.id===c.id})),b=Object(k.a)(i);return b.splice(l,1),a[s].listOfUsers=b,a[s].arrayForRender=b,a[s].winner="",Object(T.a)(Object(T.a)({},e),{},{currentContest:Object(T.a)(Object(T.a)({},r),{},{listOfUsers:b,arrayForRender:b,winner:""})});case K:var O=r.listOfUsers.filter((function(e){return e.firstName.toLowerCase().includes(c.filterParam.toLowerCase())||e.id.toLowerCase().includes(c.filterParam.toLowerCase())}));return Object(T.a)(Object(T.a)({},e),{},{currentContest:Object(T.a)(Object(T.a)({},r),{},{arrayForRender:O})});case W:var u=e.compititionsArray.filter((function(e){return e.contestName.toLowerCase().includes(c.filterParam.toLowerCase())||e.id.toLowerCase().includes(c.filterParam.toLowerCase())}));return Object(T.a)(Object(T.a)({},e),{},{compititionsArrayForRender:u});case B:return Object(T.a)(Object(T.a)({},e),{},{currentContest:Object(T.a)(Object(T.a)({},e.currentContest),{},{isTimerActive:!e.currentContest.isTimerActive})});case H:return Object(T.a)(Object(T.a)({},e),{},{currentContest:Object(T.a)(Object(T.a)({},e.currentContest),{},{currentParticipant:c})});case U:return localStorage.state=JSON.stringify(e),e;case Z:var m=e.compititionsArray.findIndex((function(e){return e.id===c.id})),h=Object(k.a)(e.compititionsArray);return h.splice(m,1),Object(T.a)(Object(T.a)({},e),{},{compititionsArray:h,compititionsArrayForRender:h});default:return e}}));a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(j.a,{store:J,children:Object(i.jsx)(X,{})})}),document.getElementById("root")),M()}},[[46,1,2]]]);
//# sourceMappingURL=main.c698ca70.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Andy",image:"https://s3.us-east-2.amazonaws.com/school-umn-coding-bootcamp/Friendfinder/andy_bernard.jpg"},{id:2,name:"Darryl",image:"https://s3.us-east-2.amazonaws.com/school-umn-coding-bootcamp/Friendfinder/darryl_philbin.jpg"},{id:3,name:"Dwight",image:"https://s3.us-east-2.amazonaws.com/school-umn-coding-bootcamp/Friendfinder/dwight_schrute.jpg"},{id:4,name:"Angela",image:"https://s3.us-east-2.amazonaws.com/school-umn-coding-bootcamp/Friendfinder/angela_martin.jpg"},{id:5,name:"Erin",image:"https://s3.us-east-2.amazonaws.com/school-umn-coding-bootcamp/Friendfinder/erin_hannon.jpg"},{id:6,name:"Stanley",image:"https://s3.us-east-2.amazonaws.com/school-umn-coding-bootcamp/Friendfinder/stanley_hudson.jpg"},{id:7,name:"Jim",image:"https://s3.us-east-2.amazonaws.com/school-umn-coding-bootcamp/Friendfinder/jim_halpert.jpg"},{id:8,name:"Kelly",image:"https://s3.us-east-2.amazonaws.com/school-umn-coding-bootcamp/Friendfinder/kelly_kapoor.jpg"},{id:9,name:"Kevin",image:"https://s3.us-east-2.amazonaws.com/school-umn-coding-bootcamp/Friendfinder/kevin_malone.jpg"},{id:10,name:"Meredith",image:"https://s3.us-east-2.amazonaws.com/school-umn-coding-bootcamp/Friendfinder/meredith_palmer.jpg"},{id:11,name:"Michael",image:"https://s3.us-east-2.amazonaws.com/school-umn-coding-bootcamp/Friendfinder/michael_scott.jpg"},{id:12,name:"Pam",image:"https://s3.us-east-2.amazonaws.com/school-umn-coding-bootcamp/Friendfinder/pam_beesly.jpg"}]},,,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(8),i=t.n(o),r=t(1),s=t(2),m=t(4),l=t(3),d=t(5),u=(t(14),function(e){return c.a.createElement("div",{className:"navbar sticky-top"},c.a.createElement("a",{className:"navbar-brand",href:"/Clickety-Click-Game/"},"Clickety Click Game"),c.a.createElement("li",{className:"score"},"Score: ",e.score," | Top Score: ",e.topScore))}),h=(t(16),function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"The Office Clickety-Click Game"),c.a.createElement("p",null,"Click on any image to earn a point, do not click the same image twice!"))}}]),a}(n.Component)),p=(t(18),function(e){return c.a.createElement("div",{className:"card",onClick:function(){return e.clickedImage(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})))}),g=(t(20),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)}),f=t(6),b=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e},k=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(c)))).state={characters:f,score:0,topScore:0,clickedCharacters:[]},t.clickedImage=function(e){var a=t.state.clickedCharacters,n=t.state.score,c=t.state.topScore;-1===a.indexOf(e)?(a.push(e),console.log(a),t.handleIncrement(),t.imageShuffle()):12===t.state.score?(alert("You win! You clicked each and every office character once! Great job!"),t.setState({score:0,clickedCharacters:[]})):(t.setState({score:0,clickedCharacters:[]}),console.log("duplicate"),alert("Oops! You clicked the same person twice, start over")),n>c&&t.setState({topScore:n})},t.handleIncrement=function(){t.setState({score:t.state.score+1})},t.imageShuffle=function(){t.setState({characters:b(f)})},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(u,{score:this.state.score,topScore:this.state.topScore}),c.a.createElement(h,null),c.a.createElement(g,null,this.state.characters.map(function(a){return c.a.createElement(p,{key:a.id,id:a.id,name:a.name,image:a.image,clickedImage:e.clickedImage})})))}}]),a}(n.Component);i.a.render(c.a.createElement(k,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.e1dafac1.chunk.js.map
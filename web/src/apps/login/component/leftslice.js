// React Component
import React,{ Component,PropTypes } from 'react'


export default class LeftSlice extends Component {
  constructor(props) {
      super(props);
      this.state = {
        imgwidth:580,
        curindex:0,
        slices:[
          {
              url:"http://mobile.chanjet.com/tp1210.htm",
              src:require('../img/web1.png')
          },{
              url:"http://service.chanjet.com/?from=tplus",
              src:require('../img/web2.png')
          },{
              url:"http://gzq.chanjet.com/?from=tplus",
              src:require('../img/web3.png')
          },{
              url:"http://www.uu.com.cn/?from=tplus",
              src:require('../img/web4.png')
          }
        ]
      };
      if(this.state.timerID != null)window.clearInterval(this.state.timerID);
      this.state.timerID = window.setInterval(function(){
         if(this.state.stop)return;
         this.state.curindex++;
         this.state.curindex %= this.state.slices.length;
         try {
           if(!this.isMounted())throw new Error("is not mounted!");
           this.setState(this.state);
         } catch (e) {
           window.clearInterval(this.state.timerID);
         } finally {

         }
       }.bind(this),5000);
  }
  setIndex(e){
    this.state.curindex = Number(e.target.textContent);
    this.state.stop = 1;
    this.setState(this.state);
  }
  start(){
    this.state.stop=0;
    this.setState(this.state);
  }
  render() {
    return (
      <div className="main-left">
          <div className="CenterLeft" >
              <ul className="slider slider2" style={{left:-this.state.imgwidth*this.state.curindex}}>
                {this.state.slices.map((value,index)=>
                  <li key={index}>
                      <a href={value.url} target="_blank"><img src={value.src} /></a></li>
                )}
              </ul>
              <ul className="num" id="idNum2">
                {this.state.slices.map((value,index)=>
                  <li key={index} className={index==this.state.curindex?"on":""}
                    onMouseEnter={this.setIndex.bind(this)}
                    onMouseLeave={this.start.bind(this)}>{index}</li>
                )}
              </ul>
          </div>
          <div className="left-bottom">软件使用权被许可人：<a href="#">激活</a></div>
      </div>
    )
  }
}

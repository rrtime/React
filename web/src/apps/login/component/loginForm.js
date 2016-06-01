// React Component
import React,{ Component,PropTypes } from 'react'
import moment from 'moment'

const Field = {
  isAdmin:"isAdmin",
  showAccounts:"showAccounts",
  curAccount:"curAccount",
  accountList:"accountList"
}



export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAccounts : false,
      user:localStorage["login/user"]||"",
      psw:undefined,
      loginDate:moment().format("YYYY-MM-DD")
    }
    this.binder();
 }

   handleLogin(e){
     e.preventDefault();
     var user = this.refs.user.value;
     var pwd = this.refs.password.value;
     var logindate = this.refs.loginDate.value;
     var accNum = this.refs.curAccount.dataset.code;
     this.props.login(user,pwd,accNum,logindate,(result)=>{
       localStorage["login/user"] = user;
       if(result.error){
          this.props.onLoginError(result,user,accNum);
       }else{
          this.props.onLoginSuccess();
       }
     });
   }

  selectAccount(e){
    var li = e.target;
    while(li.tagName!="LI")li=li.parentElement;
    var data = li.dataset;
    var curAccount={id:data.id,code:data.code,text:data.text};
    this.state.showAccounts = false;
    this.set(Field.curAccount,curAccount);
  }

  loadAccounts(){
    var user = this.refs.user.value;
    var psw = this.refs.password.value;
    if(user==this.state.user && psw == this.state.psw)return;

    this.state.user = user;
    this.state.psw = psw;

    this.props.loadAccounts(user,psw,function(){
    })
  }

  toggleValue(field,e){
    this.state[field] = !this.state[field];
    this.setState(this.state);
  }
  set(field,value,e){
    // if(e)e.preventDefault();
    this.props.set(field,value);
  }
  get(field,defaultvalue){
    return this.props.payload.get(field) || defaultvalue;
  }

  binder(){
    this.link = key=>({
      "isAdmin0": r=>r||{
        onChange : this.set.bind(this,"isAdmin",false),
        checked: !this.get("isAdmin")
      },
      "isAdmin1": r=>r||{
        onChange : this.set.bind(this,"isAdmin",true),
        checked: this.get("isAdmin")
      },
      "user": r=>r||{
        onBlur : this.loadAccounts.bind(this),
        disabled : this.get("isAdmin")
      },
      "password": r=>r||{
        onBlur : this.loadAccounts.bind(this)
      },
      "curAccount": r=>r||{
        value : this.get("curAccount",{text:""}).text,
        "data-code" : this.get("curAccount",{code:""}).code,
        disabled : this.get("isAdmin")
      },
      "dropdown-toggle": r=>r||{
        onClick : this.toggleValue.bind(this,Field.showAccounts)
      },
      "dropdown": r=>r||{
        onClick : this.selectAccount.bind(this),
        style : {display:(this.state[Field.showAccounts]?"":"none")}
      },
      "loginDate": r=>r||{
        // onBlur : this.set.bind(this,"loginDate",this.refs.logindate.value),
        disabled : this.get("isAdmin")
      }
    })[key](0);
  }

  render() {
    return (
      <div className="main-right">
        <form role="form" className="form-inline"  onSubmit={::this.handleLogin}>
            <div className="checkbox">
                <label className="radio-inline">
                    <input type="radio" name="inlineRadioOptions" {...this.link("isAdmin0")}  />
                    普通用户
                </label>
                <label className="radio-inline">
                    <input type="radio" name="inlineRadioOptions" {...this.link("isAdmin1")}  />
                    系统管理员
                </label>
            </div>
            <div className="userlogin" >
                企业用户登录
            </div>

            <div className="input-group">
                <span className="input-group-addon"><span className="glyphicon glyphicon-user"></span></span>
                <input type="text" required="required" ref="user" className="form-control input" defaultValue={this.state.user}
                   autoComplete="off"   maxLength="200" placeholder="请输入手机号/邮箱/账号" {...this.link("user")}  />
            </div>
            <div className="input-group">
                <span className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></span>
                <input type="password" className="form-control input" ref="password"  maxLength="30"  {...this.link("password")} placeholder="请输入密码"/>
            </div>
            <div className="advance-toggle" >
                <div  className="input-group">
                    <span className="input-group-addon" ><span className="glyphicon glyphicon-th-list" ></span></span>
                    <input type="text" className="form-control input"  placeholder="账套"  ref="curAccount"  {...this.link("curAccount")}  />
                    <div className="input-group-btn" >
                        <button type="button" className="btn dropdown-toggle"   {...this.link("dropdown-toggle")}  >
                            <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-right" role="menu" {...this.link("dropdown")}>
                          {(this.get(Field.accountList)||[{id:'',text:''}]).map((value,index)=>
                            <li key={index} data-id={value.id} data-code={value.code} data-text={value.text}><a href="#">{value.text}</a></li>
                          )}
                        </ul>
                    </div>

                </div>
                <div className="input-group date form_date">
                    <span className="input-group-addon"><span className="glyphicon glyphicon-calendar"></span></span>
                    <input className="form-control input"  {...this.link("loginDate")} ref="loginDate" type="text" defaultValue={this.state.loginDate} />
                </div>
            </div>
            <div className="input-group hide" id="showCheckCode"  data-ctltype="checkbox" data-toggle="#showCheckCode">
                <span className="input-group-btn">
                    <button className="btn btn-checkcode" id="loadCheckCode" type="button">
                        <img id="checkCodeImgUrl"/></button>
                </span>
                <input type="text" className="form-control input" id="checkCodeInputed" placeholder="请输入验证码"/>
            </div>

            <div id="cbxForget" className="checkbox left" >
                <span className="right" id="rememberClass">
                    <a href="#" >忘记密码</a>
                </span>
            </div>
            <input type="submit" className="btn btn-primary btn-block btn-login" value="登录"/>
        </form>
      </div>
  )};
}

import md5 from 'md5'

const url = m => "/ajaxpro/Ufida.T.SM.Login.UIP.LoginManager,Ufida.T.SM.Login.UIP.ashx?method=" + m;

export function CheckPassword(post,user,pwd,accNum,loginDate){
  	var arrdate = loginDate.split('-');
    var data = {
      "AccountNum":accNum,
      "UserName":user,
      "Password":md5(pwd),
      "rdpYear":arrdate[0],
      "rdpMonth":arrdate[1],
      "rdpDate":arrdate[2],
      "webServiceProcessID":""
    }
    return post(url("CheckPassword"),data);
}

export function GetAccountsByUser(post,user,pwd){
  var data = {
    "userName":user,
    "pwd":md5(pwd),
    "includeHide":false,
    "aqdKey":""
  }
  return post(url("GetAccountsByUser"),data);
}

export function ReLogin(post,user,accNum){
  var data = {
    "userName":user,
    "AccountNum":accNum
  }
  return post(url("ReLoginIn"),data);
}

<template>
  <div class="index">
<div class="loginBg">
    <div class="login">
        <div class="leftImg"></div>
        <div class="loginBox">
            <h2 id='tit'><a href="javascript:void(0);" class='active' name='1'>账号登录</a></h2>
            <div class="formBox">
                <div class="zhongke form">
                    <div class="errMess" v-show="errMsgShow">errMsg</div>
                    <ul>
                        <li><input type="text" v-model="acc" placeholder="手机号/账号" id='user' class='user'><span><img
                                src="/gongyu/static/image/login/login_03.png" alt=""></span></li>
                        <li style='margin-top:20px;'><input type="password" v-model="pass" placeholder="密码" id='pwd'  class='pwd'><span><img
                                src="/gongyu/static/image/login/login_06.png" alt=""></span>
                        </li>
                    </ul>                  
                    <div class='remeberPwd clear'><a href="javascript:;" id="backPwd">忘记密码？</a>                      
                    </div>
                    <button class="loginBtn" type="button" @click="login">登录</button>
                    <p style="padding-top: 10px;text-align: right">还没有注册？<a style="color: #4474f2" href="javascript:;">立即注册</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="loginFoot"></div>

  </div>
</template>

<script>
import md5 from "js-md5";
export default {
  data() {
    return {
      errMsgShow: false,
      errMsg: "",
      acc: "",
      pass: ""
    };
  },
  methods: {
    async login() {
      console.log(this.acc);
      console.log(this.pass);
      try {
        var result = await this.$api.user.login({
          loginName: this.acc,
          password: md5(this.pass)
        });
        if (data.responseObject.loginType == 0) {
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="less">
body {
  background: #161835;
  position: relative;
  width: 100%;
  height: 100%;
}

.loginFoot {
  position: fixed;
  width: 100%;
  height: 280px;
  background: url(/gongyu/static/image/login/loginFoot_02.png) no-repeat;
  background-size: 100%;
  left: 0px;
  bottom: 0px;
}

.nav {
  display: none;
}

.loginBg {
  width: 100%;
  height: 585px;
  border-top: 1px solid #333;
  position: relative;
}

.login {
  position: absolute;
  width: 1280px;
  height: 586px;
  left: 50%;
  margin-left: -640px;
  .leftImg {
    position: absolute;
    width: 485px;
    height: 382px;
    background: url(/gongyu/static/image/login/login_01.png) no-repeat;
    top: 82px;
    left: 80px;
  }
  .loginBox {
    width: 382px;
    min-height: 342px;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #dddddd;
    position: absolute;
    right: 80px;
    top: 82px;
    padding-bottom: 20px;
    z-index: 99;
    h2 {
      text-align: center;
      width: 100%;
      height: 61px;
      border-bottom: 1px solid #e2e2e2;
      line-height: 61px;
      font-size: 20px;
      color: #333;
      font-weight: 400;
      a {
        display: inline-block;
        width: 50%;
        height: 58px;
        line-height: 58px;
        &.active {
          color: #ff8b1a;
          border-bottom: 3px solid #ff8b1a;
        }
      }
    }
    .zhongkezhang {
      display: none;
    }
    .form {
      width: 322px;
      margin: 0 auto;
      .errMess {
        line-height: 26px;
        font-size: 12px;
        color: red;
        text-align: center;
      }
      ul > li {
        height: 48px;
        line-height: 48px;
        width: 320px;
        border: 1px solid #cccccc;
        font-size: 14px;
        position: relative;
        overflow: hidden;
        span {
          position: absolute;
          width: 37px;
          left: 0;
          top: 0px;
          text-align: center;
          img {
            padding-top: 12px;
          }
        }
        input {
          width: 282px;
          height: 48px;
          line-height: 48px;
          border: none;
          outline: none;
          margin-left: 37px;
        }
      }
      .remeberPwd {
        margin: 10px 0 20px 0;
        height: 16px;
        line-height: 16px;
        /*background:url(/tang/static/image/icon/check.png) no-repeat 0 0;*/
        padding-left: 20px;
        a {
          float: right;
          &:hover {
            color: #2342df;
            text-decoration: underline;
          }
        }
        /*&.checked{
            background:url(/tang/static/image/icon/check.png) no-repeat 0 -16px;
        }*/
      }
      .pwdS {
        height: 40px;
        line-height: 40px;
        color: #8b8d8e;
        font-size: 14px;
        display: none;
        span {
          display: inline-block;
          width: 40px;
          height: 10px;
          border: 1px solid #b7b7b5;
          text-align: center;
          position: relative;
          display: none;
          &.weak {
            display: inline-block;
            background: #ed3500;
          }
          &.medium {
            display: inline-block;
            background: #f98015;
          }
          &.strong {
            display: inline-block;
            background: #69a400;
          }
          label {
            position: absolute;
            width: 40px;
            text-align: center;
            left: 0px;
          }
        }
      }
      .loginBtn {
        width: 320px;
        height: 46px;
        text-align: center;
        line-height: 46px;
        background: #ff8b1a;
        font-size: 18px;
        color: #fff;
        border-radius: 4px;
        border: none;
        outline: none;
        cursor: pointer;
        font-weight: 600;
      }
    }
  }
}
</style>

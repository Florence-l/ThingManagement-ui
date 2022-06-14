<template>
  <div class="back">
  <div class="section">
    <div class="container">
      <div class="row full-height justify-content-center">
        <div class="col-12 text-center align-self-center py-5">
          <div class="section pb-5 pt-5 pt-sm-2 text-center">

            <h4 class="mb-0 pb-3"><span>登录</span><span>注册</span></h4>
            <input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
            <label for="reg-log"></label>

            <div class="card-3d-wrap mx-auto">
              <div class="card-3d-wrapper">
                <div class="card-front">
                  <div class="center-wrap">
                    <div class="section text-center">
                      <h3 class="mb-4 pb-3">登录</h3>
                      <div class="form-group">
                        <input type="email" class="form-style" placeholder="邮箱" v-model="login.email">
                        <Icon icon="uil:at"class="input-icon"/>
                      </div>

                      <div class="form-group mt-2">
                        <input type="password" class="form-style" placeholder="密码" v-model="login.password">
                        <Icon icon="uil:lock-alt"class="input-icon"/>
                      </div>

                      <a class="btn mt-6" @click="login">提交</a>
                      <p class="mb-0 mt-4 text-center"><a class="link">忘记密码?</a></p>
                    </div>
                  </div>
                </div>
                <div class="card-back">
                  <div class="center-wrap">
                    <div class="section text-center">
                      <h3 class="mb-4 pb-3">注册</h3>
                      <div class="form-group">
                        <input type="text" class="form-style" placeholder="用户名" v-model="signup.name">
                        <Icon icon="uil:user"class="input-icon"/>
                      </div>

                      <div class="form-group mt-2">
                        <input type="email" class="form-style" placeholder="邮箱" v-model="signup.email">
                        <Icon icon="uil:at"class="input-icon"/>
                      </div>

                      <div class="form-group mt-2">
                        <input type="password" class="form-style" placeholder="密码" v-model="signup.password">
                        <Icon icon="uil:lock-alt"class="input-icon"/>
                      </div>
                      <a class="btn mt-8">提交</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
 export default {
    name: 'Login',
    data:()=>({
      login:{
        email:'',
        password:'',
      },
      signup:{
        username:'',
        email:'',
        password:'',
      }
    }),
    components:{
      Icon
    },
   methods:{
      login(){
        console.log(this.login.email)
        this.$axios.post('/logIn',{
          email:this.login.email,
          password:this.login.password,
        })
        .then((res)=>{
          console.log(res.data)
          })
          .catch((err)=>{
          })
      },
     signup(){
       console.log(this.signup.email)
       this.$axios.post('/signUp',{
         // email:this.signup.email,
         username:this.signup.username,
         password:this.signup.password,
       })
           .then((res)=>{
             console.log(res.data)
           })
           .catch((err)=>{
           })
     }
   }

  }
</script>
<style scoped>
@import "../assets/styles/login.css";

</style>

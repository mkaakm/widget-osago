<template>
  <div>
    <div class="sidebar">
      <div class="sidebar-header">
        <h1 class="heading-title">Страхування ОСЦПВ</h1>
        <span class="sidebar-header-text">Додати в бажане</span>
      </div>
      <Sidebar @next="setStep"/>
    </div>
    <Step1 v-if="step === 1"/>
    <Step2 v-if="step === 2"/>
    <Step3 v-if="step === 3"/>
<!--    <Contract/>-->
<!--    <PaymentSuccess/>-->
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from "./components/SideBar";
import Step1 from "./views/Step1";
import Step2 from "./views/Step2";
import Step3 from "./views/Step3";
// import Contract from "./views/Contract";
// import PaymentSuccess from "./views/PaymentSuccess";
export default {
  name: "App",
  data(){
    return {step: 1}
  },
  methods:{
    setStep(nextStep){
      this.step = nextStep
    }
  },
  components: {
    Sidebar,
    Step1,
    Step2,
    Step3,
    // Contract,
    // PaymentSuccess
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Raleway:ital,wght@0,400;0,700;1,400;1,700&display=swap');
@import "reset.css";
body{
  font-family: 'Raleway', sans-serif;
}
.sidebar{
  width: 1140px;
  margin: 0 auto;
}
@media (max-width: 480px) {
  .sidebar{
    display: none;
  }
}
.sidebar-header{
  display: flex;
  justify-content: space-between;
  height: 84px;
  margin-bottom: 26px;
}
.heading-title{
  font-size: 20px;
  margin-top: 60px;
  font-family: Open Sans;
  font-weight: 600;
  color: #171717;
}
.sidebar-header-text{
  margin-top: 62px;
  font-family: Open Sans;
  font-weight: 600;
  font-size: 14px;
  color: #F88908;
}
</style>

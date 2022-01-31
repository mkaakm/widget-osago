<template>
  <div class="step1">
    <div class="central-section">
        <div class="left-side">
          <Menu @next="changeTab"/>
          <div v-if="tab === 1" class="first-tab">
            <div class="double-input">
              <Input placeholder="АА"/>
              <Input placeholder="АА 1234 АА"/>
            </div>
            <div class="block-small">
              <p class="text">Вік страхувальника <span class="text-grey">(повних років)</span></p>
              <Input placeholder="21"/>
            </div>
            <p class="text">Місце реєстрації власника ТЗ</p>
            <InputSearch placeholder="Київ, Київська обл., 01001"/>
            <div class="search-btn">
              <ButtonDefault text="Київ" class="btn-default"/>
              <ButtonDefault text="Львів" class="btn-default"/>
              <ButtonDefault text="Дніпро" class="btn-default"/>
              <ButtonDefault text="Харків" class="btn-default"/>
              <ButtonDefault text="Одесса" class="btn-default"/>
            </div>
            <div class="btn">
              <ButtonSuccess text="Розрахувати"/>
            </div>
            <p class="text-footer">Розрахунок можливий тільки якщо авто вже було колись застраховано.</p>
          </div>
          <div v-if="tab === 2">
            <TypeAuto/>
          </div>
        <div class="right-side"></div>
      </div>
  </div>
  </div>
</template>

<script>

import Menu from "../components/Menu";
import Input from "../components/Input";
import InputSearch from "../components/InputSearch"
import ButtonDefault from "../components/ButtonDefault";
import ButtonSuccess from "../components/ButtonSuccess";
import TypeAuto from "../components/TypeAuto";
export default {
  name: "Step1",
  data(){
    return {tab: 1}
  },
  methods:{
    changeTab(newTab){
      this.tab = newTab
    }
  },
  components: {TypeAuto, Menu, Input, InputSearch, ButtonDefault, ButtonSuccess}
}
</script>

<style scoped>
.step1{
  width: 1140px;
  margin: 0 auto;
  border: 2px solid #F8F9FB;
  box-sizing: border-box;
  border-radius: 8px;
}
.first-tab{
  width: 50%;
}
@media (max-width: 480px) {
  .step1{
    width: 100%;
    border: none;
    margin-left: 16px;
    margin-right: 16px;
    box-sizing: border-box;
  }
}
.central-section{
  margin-top: 60px;
}
.left-side{
  margin-left: 98px;
}
.double-input{
  display: flex;
  margin-top: 40px;
  margin-bottom: 48px;
}
.block-small{
  margin-bottom: 24px;
}
.search-btn{
  display: flex;
}
@media (max-width: 480px) {
  .left-side{
    margin: 0 auto;
  }
}
.grid{
  display: grid;
  grid-template-columns: repeat(2,1fr);
}

@media (max-width: 480px) {
  .grid{
    grid-template-columns: 1fr;
  }
}
.text-grey{
  width: 360px;
  color: #757575;
  font-size: 12px;
  font-family: Open Sans;
  margin-top: 16px;
  line-height: 20px;
}
.btn{
  display: flex;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 20px;
}
@media (max-width: 480px) {
  .btn{
    display: grid;
  }
}
.text{
  font-size: 14px;
  color: #171717;
  font-family: Open Sans;
  margin-bottom: 8px;
}
.text-footer{
  font-size: 12px;
  color: #757575;
  font-family: Open Sans;
  margin-bottom: 60px;
}
</style>

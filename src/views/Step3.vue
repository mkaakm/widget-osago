<template>
<div class="step3">
  <div class="central-section">
    <div class="grid">
    <div class="left-side">
  <h1 class="header">Дані ТЗ</h1>
  <div class="block-big">
    <p class="text">Марка</p>
    <Input/>
  </div>
  <div class="block-small">
    <p class="text">Модель</p>
    <Input/>
  </div>
  <div class="block-big block-flex">
    <div class="block-left">
      <p class="text">Рік Випуску</p>
      <Input/>
    </div>
    <div class="block-right">
      <p class="text">Реєстраційний номер</p>
      <Input/>
    </div>
  </div>
  <div class="block-big">
    <p class="text">Номер Кузову</p>
    <Input placeholder="XX XXXXX XXXXX XXXXX"/>
  </div>
      <p class="text">ТЗ підлягає обов’язковому технічному контролю</p>
      <RadioBtn class="radio-text" firstText="Так" secondText="Ні"/>
  <h4 class="header">Особисті данні власника авто</h4>
      <div class="block-big">
        <p class="text">Прізвище</p>
        <Input/>
      </div>
      <div class="block-small">
        <p class="text">Ім’я</p>
        <Input/>
      </div>
      <div class="block-big">
        <p class="text">Прізвище та ім’я <span class="text-faded">(Латиницею)</span></p>
        <Input/>
      </div>
      <div class="block-big">
        <p class="text">Дата народження</p>
        <DatePicker/>
      </div>
      <div class="block-big">
        <p class="text">Номер мобільного телефону</p>
        <Input placeholder="+38 XXX XXX XX XX"/>
      </div>
      <div class="block-big">
        <p class="text">E-mail</p>
        <Input placeholder="mail@example.com"/>
      </div>
      <h4 class="header">Документи власника авто</h4>
      <div class="block-big">
        <p class="text">Ідентифікаційний код (ІПН)</p>
        <Input placeholder="XX-XX-XX-XX-XX"/>
      </div>
  <p class="text">Статус</p>
  <RadioBtn class="radio-text" firstText="Резидент" secondText="Не резидент"/>
  <h4 class="header">Адреса</h4>
  <p class="text">Населений пункт</p>
  <InputSearch/>
  <div class="search-btn">
    <ButtonDefault text="Київ" class="btn-default"/>
    <ButtonDefault text="Львів" class="btn-default"/>
    <ButtonDefault text="Дніпро" class="btn-default"/>
    <ButtonDefault text="Харків" class="btn-default"/>
    <ButtonDefault text="Одесса" class="btn-default"/>
  </div>
      <div class="block-big">
        <p class="text">Вулиця</p>
        <Input placeholder="Хрещатик"/>
      </div>
  <div class="block-big">
    <p class="text">Будинок</p>
    <Input placeholder="1"/>
  </div>
  <p class="text">Адреса <span class="text-faded">(латиницею)</span></p>
  <Input class="input-address" placeholder="01001, Ukraine, Kyivska obl., Kyiv, Khreshchatyk, 1"/>
      </div>
      </div>
    <h4 class="header">Договір</h4>
    <div class="block-big">
      <p class="text">Термін дії договору з</p>
      <DatePicker/>
    </div>
    <div class="block-big">
      <p class="text">Термін дії договору по</p>
      <DatePicker/>
    </div>

    <div class="btn">
      <div class="btn-footer">
        <ButtonDefault text="Внести зміни"/>
      </div>
      <ButtonSuccess text="Придбати (672,48 грн.)"/>
    </div>
    </div>
</div>
</template>

<script>
import Input from "../components/Input";
import DatePicker from "../components/DatePicker";
import RadioBtn from "../components/RadioBtn";
import InputSearch from "../components/InputSearch";
import ButtonDefault from "../components/ButtonDefault";
import ButtonSuccess from "../components/ButtonSuccess";
export default {
  name: "Step3",
  components: {ButtonSuccess, ButtonDefault, InputSearch, RadioBtn, Input, DatePicker}
}
</script>

<style scoped>
.grid{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  margin-bottom: 32px;
}
.left-side{
  width: 360px;
}
.central-section{
  width: 1140px;
  margin: 0 auto;
  border: 2px solid #F8F9FB;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 60px 0 60px 98px;
}
@media (max-width: 480px) {
  .central-section{
    width: 100%;
    border: none;
    margin-left: 16px;
    margin-right: 16px;
    box-sizing: border-box;
    padding: 48px 0;
  }
}
.header{
  width: 360px;
  margin-bottom: 32px;
  font-family: Open Sans;
  font-weight: 600;
  font-size: 20px;
  color: #171717;
  padding-bottom: 8px;
  border-bottom: 1px solid #EBEEF5;
}
@media (max-width: 480px) {
  .header{
    width: 328px;
    padding-bottom: 8px;
    border-bottom: 1px solid #EBEEF5;
  }
}
.header-section{
  font-family: Open Sans;
  font-weight: 600;
  font-size: 14px;
  color: #171717;

  margin-bottom: 32px;
}
@media (max-width: 480px) {
  .header-section{
    width: 328px;
  }
}
.block-flex{
  display: flex;
}
.block-left{
margin-right: 30px;
}
.block-big{
margin-bottom: 24px;
}
@media (max-width: 480px) {
  .block-big{
    width: 328px;
  }
}
.block-small{
margin-bottom: 14px;
}
@media (max-width: 480px) {
  .block-small{
    width: 328px;
  }
}
.text{
  font-size: 14px;
  color: #171717;
  font-family: Open Sans;
  margin-bottom: 8px;
}
.text-faded{
  color: #C0C4CC;
}
.radio-text{
  font-family: Open Sans;
  font-size: 14px;
  color: #757575;
  margin-bottom: 56px;
}
@media (max-width: 480px) {
  .radio-text{
    display: grid;
  }
}

.double-input{
  display: flex;
}
.search-btn{
  display: flex;
  margin-left: -10px;
  margin-bottom: 30px;
}
@media (max-width: 480px) {
  .search-btn{
    margin-left: 0;
  }
}
@media (max-width: 480px) {
  .btn-default{
    width: 59px;
  }
}
@media (max-width: 480px) {
  .input-address{
    width: 328px;
  }
}
.btn{
  display: flex;
  justify-content: center;
  margin-top: 24px;
}
.btn-footer{
  margin-right: 10px;
}
@media (max-width: 480px) {
  .btn{
    justify-content: flex-start;
  }
}

</style>

<template>
<div>
  <h4 class="title">Тип транспортного засобу</h4>
  <div class="transport-types">
    <div class="transport-types-item">
      <img src="../assets/img/car.png" alt="car" class="transport-image">
      <p class="text">Легковий</p>
    </div>
    <div class="transport-types-item">
      <img src="../assets/img/truck.png" alt="truck" class="transport-image">
      <p class="text">Вантажний</p>
    </div>
    <div class="transport-types-item">
      <img src="../assets/img/bus.png" alt="bus" class="transport-image">
      <p class="text">Автобус</p>
    </div>
    <div class="transport-types-item">
      <img src="../assets/img/motorcycle.png" alt="motorcycle" class="transport-image">
      <p class="text">Мотоцикл</p>
    </div>
    <div class="transport-types-item">
      <img src="../assets/img/trailer.png" alt="trailer" class="transport-image">
      <p class="text">Причіп</p>
    </div>
  </div>
  <div class="auto-parametres">
    <h4 class="title">Об’єм двигуна</h4>
    <div class="parametres">
      <ButtonDefaultAuto text="До 1.6 л"/>
      <ButtonDefaultAuto text="1.6 - 2 л"/>
      <ButtonDefaultAuto text="2 - 2.5 л"/>
      <ButtonDefaultAuto text="2.5 - 3 л"/>
      <ButtonDefaultAuto text="понад 3 л"/>
      <div class="btn-parametres">
        <ButtonDefaultAuto text="електро"/>
      </div>
    </div>
  </div>
  <div class="auto-parametres">
    <h4 class="title">Вантажопідйомність</h4>
    <div class="block">
    <ButtonChoice text="До 2 т (включно)"/>
    <ButtonDefault text="Понад 2 т"/>
    </div>
  </div>
  <div class="auto-parametres">
    <h4 class="title">Кількість місць для сидіння</h4>
    <div class="block">
    <ButtonChoice text="До 20 (включно)"/>
    <ButtonDefault text="Більше 20"/>
    </div>
  </div>
  <div class="auto-parametres">
    <h4 class="title">Об’єм двигуна</h4>
    <div class="block">
    <ButtonChoice text="До 300 (включно)"/>
    <ButtonDefault text="Більше 300"/>
    </div>
  </div>
  <div class="auto-parametres">
    <h4 class="title">Призначення</h4>
    <div class="block">
    <ButtonChoice text="До легкового"/>
    <ButtonDefault text="До вантажного"/>
    </div>
  </div>
  <div class="auto-data">
    <div class="big-grid">
      <div class="block-big">
        <div class="block-small">
          <p class="text-grid">Марка ТЗ</p>
          <Input placeholder="Chevrolet"/>
        </div>
        <p class="text-grid">Місце реєстрації власника ТЗ</p>
        <InputSearch placeholder="Харків, Харківська обл., 61000"/>
        <div class="search-btn">
          <ButtonDefault text="Київ" class="btn-default"/>
          <ButtonDefault text="Львів" class="btn-default"/>
          <ButtonDefault text="Дніпро" class="btn-default"/>
          <ButtonDefault text="Харків" class="btn-default"/>
          <ButtonDefault text="Одесса" class="btn-default"/>
        </div>
      </div>
      <div class="block-big">
        <div class="block-small">
          <p class="text-grid">Рік випуску ТЗ</p>
          <Input placeholder="2001"/>
        </div>
        <div class="block-small">
          <p class="text-grid">Вік страхувальника <span class="text-grey">(повних років)</span></p>
          <Input placeholder="21"/>
        </div>
      </div>
    </div>
  </div>
  <div class="btn">
    <ButtonSuccess text="Розрахувати"/>
  </div>
</div>
</template>

<script>
import ButtonSuccess from "./ButtonSuccess";
import ButtonChoice from "./ButtonChoice";
import InputSearch from "./InputSearch"
import ButtonDefaultAuto from "./ButtonDefaultAuto";
import ButtonDefault from "./ButtonDefault";
import Input from "./Input";
export default {
  name: "TypeAuto",
  components: { ButtonDefaultAuto, ButtonChoice, ButtonSuccess, ButtonDefault, InputSearch, Input}
}
</script>

<style scoped>
.title{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #171717;
}
.transport-image{
  margin-bottom: 14px;
}
.text{
  text-align: center;
  font-family: Open Sans;
  font-weight: 600;
  font-size: 14px;
  color: #C0C4CC;
}
.transport-types{
  display: flex;
  justify-content: space-around;
  margin-top: 68px;
  margin-bottom: 105px;
}
.parametres{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 42px;
  margin-bottom: 90px;
}
.btn-parametres{
  margin-top: 25px;
}
.block{
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 152px;
}
.big-grid{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 70px;
}
.text-grid{
  font-family: Open Sans;
  font-size: 14px;
  margin-bottom: 8px;
  color: #171717;
}
.block-big{
  width: 360px;
}
.block-small{
  margin-bottom: 24px;
}
.search-btn{
  display: flex;
}
.btn{
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
}
</style>

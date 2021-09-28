<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">Data Binding</router-link> |
    <router-link to="/databindinginputtext">DataBindingInputText</router-link> |
    <router-link to="/databindinginputnumber">DataBindingInputNumber</router-link> |
    <router-link to="/databindingtextarea">Data BindingTextarea</router-link> |
    <router-link to="/databindingselect">Data BindingSelect</router-link> |
    <router-link to="/databindingcheckbox">Data BindingCheckbox</router-link> |
    <router-link to="/databindingcheckbox2">Data BindingCheckbox2</router-link> |
    <router-link to="/databindingradio">Data BindingRadio</router-link> |
    <router-link to="/DataBindingAttribue">DataBindingAttribue</router-link> |
    <router-link to="/DataBindingButton">DataBindingButton</router-link> |
    <router-link to="/DataBindingClass">DataBindingClass</router-link> |
    <router-link to="/DataBindingClass2">DataBindingClass2</router-link> |
    <router-link to="/DataBindingList">DataBindingList</router-link> |
    <router-link to="/DataBindingVIf">DataBindingVIf</router-link> |
    <router-link to="/EventClick">EventClick</router-link> |
    <router-link to="/EventChange">EventChange</router-link> |
    <router-link to="/Computed">Computed</router-link> |
    <router-link to="/Watch">Watch</router-link> |
    <router-link to="/Watch2">Watch2</router-link> |
    <router-link to="/DataBindingList2">DataBindingList2</router-link> |
    
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

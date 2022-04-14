<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <p> Go home </p>
      </router-link>
    </div>
    <div id="side">
      <router-link to="/about">
        <div class="menu-item about">
          <p>about</p>
        </div>
        </router-link>
      </div>
      <div id = "word">
      <router-link to="/word">
        <div class="menu-item">
          <p>Play here!</p>
        </div>
      </router-link>
      </div>
    
  </div>
  <router-view />
  <footer id = "footer"><a href="https://github.com/BYUCS260/grocery-store-sjorgy3.git">https://github.com/BYUCS260/grocery-store-sjorgy3.git</a></footer>
</div>
</template>

<style>
#menu{
  display:flex;
  justify-content: space-around;
  font-family: 'Courier New', Courier, monospace;
  
  
}

</style>

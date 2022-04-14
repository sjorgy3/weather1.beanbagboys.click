<template>
  <div class="about">
   <div>
  <link rel="stylesheet" href="styles.css">
  <h1>About</h1>
  <div id = "explanation"><p>Worday is an API based word generator that helps you expand your vocabulary. Today we have 6 words displayed from our mock data. Stay tuned to hopefully see a fully functional database.<br> Happy learning!</p></div>

</div>

  </div>
</template>
<style scoped>
body{
    background-color: rgb(35, 35, 132);
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
h1{
    background-color: aliceblue;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: monospace;
    font-size: 65px;
}
#explanation{
    color:rgb(2, 26, 47);
    font-family: monospace;
    width: 100%;
    max-width: 600px;
    font-size: 26px;
    padding: 40px;
    height:1000px;
}

#word{
    color: rgb(0, 27, 51);
    display: flex;
    font-size: 100px;
    font-family: monospace  ;
    padding: 40px;
    justify-content: center;
    
}
#pronunciation{
display: flex;
color: rgb(1, 44, 81);
font-family: monospace;
padding: 40px;
font-size: 26px;

}
#definition{
display: flex;
color: rgb(3, 40, 72);
font-family: monospace;
padding: 40px;
font-size: 26px;
}
#refresh{
    display: flex;
    justify-content: center;
    padding: 10px;
    }
button{
    background-color: aliceblue;
    height: 40px;
    width: 100%;
    max-width: 200px;
    font-size: 26px;
    font-family: monospace;
    border-radius: 10px;
    transition: all 0.2s ease;

}
button:hover{
    letter-spacing: 2px;
    transition: all 0.2s ease;
}
#footer{
    display: flex;
    align-items: bottom;
    bottom: 0;
    background-color: rgba(240, 248, 255, 0.358);
}
</style>
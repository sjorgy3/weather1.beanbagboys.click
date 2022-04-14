<template>

<div>
  <link rel="stylesheet" href="styles.css">
  <h1>Worday</h1>
  <div id = "explanation"><p> As of now we are running worday on a mock database. Because of this we have limited the number of words to learn. Pretty soon however you will be able to Click the 'new word' button below to receive a new word along with its definition and pronunciation.<br> Happy learning!</p></div>
  <div id="word" v-for="product in products" v-bind:key="product.word"> {{product.id}}
      <div id ="definition">Word: {{product.word}}</div>
      <div id ="pronunciation">Definition: {{product.definition}}</div>
  </div>
  

</div>

    
</template>
<script>
export default {
  data() {
      
    return {
    }
  },

  computed: {
    products() {
      return this.$root.$data.words;
    },
  },
}
</script>



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
}

#word{
    color: rgb(0, 27, 51);
    display: flex;
    font-size: 100px;
    font-family: monospace  ;
    padding: 40px;
    justify-content: left;
    
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

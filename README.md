# Se acaba el tiempo


En otro desafío, intenta usar lo que hemos aprendido para hacer un reloj con manecillas móviles. Similar a `setTimeout()`, que hemos usado para crear un retraso. También podemos usar `setInterval()` para ejecutar alguna función cada período de tiempo. En el caso de nuestro reloj, queremos que se actualice cada `1000 milliseconds`.

### CSS para comenzar

```
#face {
  background-color: #f3f3f3;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 6px solid black;
  position: relative;
}
  
#minutes, #hour, #seconds {
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: top center;
}
  
#seconds {
  background-color: red;
  height: 130px;
  width: 2px;
}
  
#hour {
  background-color: black;
  height: 100px;
  width: 8px;
  transform: rotate(125deg);
}
  
#minutes {
  background-color: grey;
  height: 120px;
  width: 4px;
  transform: rotate(255deg);
}copy
```

### Sin `setInterval()`

<iframe src="https://codepen.io/wgoode3/full/eYzodWE" width="330" height="390"></iframe>

### JS para comenzar

```
function getSecondsSinceStartOfDay() {
  return new Date().getSeconds() + 
    new Date().getMinutes() * 60 + 
    new Date().getHours() * 3600;
}
  
setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    // your code here
}, 1000);copy
```

### Ejemplo de trabajo

<iframe src="https://codepen.io/wgoode3/full/OJXqwZq" width="330" height="390"></iframe>

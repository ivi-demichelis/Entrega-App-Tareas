const tareas = [
    {
      Titulo: "Aprender JS",
      Estado: "Pendiente"
    },
    {
      Titulo: "Aprender CSS",
      Estado: "En progreso"
    },
    {
      Titulo: "Aprender HTML",
      Estado: "Terminado"
    },
   ]
   
    
   function $(elementoDeHtml) {
    return document.querySelector(elementoDeHtml)
  }
  
  window.addEventListener("load", () => {
  
  
  
  //MODAL
  const $openButton = document.querySelector("#open-modal")
  const $containModal = document.querySelector(".contain-modal")
  const $closeButton = document.querySelector("#close-modal")
  
  
  //CONTENEDORES
  const $containTareas = document.querySelector(".contain-tareas")
  const $containPending = document.querySelector(".contain-pending")
  const $containInProgress = document.querySelector(".contain-inProgress")
  const $containFinished = document.querySelector(".contain-finished")
  
  
  //BODY DARK-MODE
  const $body = $("body")
  const $btnDarkMode = $("#btn-darkmode")
  
  
  
  
  //EVENTOS VENTANA MODAL
  $openButton.addEventListener("click", (event) => {
    event.preventDefault();
    $containModal.classList.add("show-modal")
  })
  
  $closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    $containModal.classList.remove("show-modal")
  }) 
  
   $openButton.onClick = (event) => {
    event.preventDefault();
    $containModal.classList.add("show-modal")
  } 
  
  
  
  //*********************************************************+
  
  function paint (nodo, tareas) {
    // nodo.innerHTML = "";
    console.log(tareas);
    tareas.forEach(tarea => {
      nodo.innerHTML += `<div class="card">
      <p>${tarea.Titulo}</p>
      <p>${tarea.Estado}</p>
      <button>Editar</button>
      <button>Eliminar</button>
  </div>`
})
  }


  
  
////DESAFIO 2 - FILTROS
  
  const tareasPendientes = tareas.filter(elem => elem.Estado === "Pendiente")
  const tareasEnProgreso = tareas.filter(elem => elem.Estado === "En progreso")
  const tareasTerminadas = tareas.filter(elem => elem.Estado === "Terminado")
     
   
  // console.log(tareasPendientes, tareasEnProgreso, tareasTerminadas);



   
  

//  DESAFIO 3   //MODO OSCURO
  
    $btnDarkMode.addEventListener("click", () => {
        
      $body.classList.toggle("btn-darkmode")
     if($body.classList.contains("btn-darkmode")){
      $btnDarkMode.innerText = "☀" 
     }else {
     $btnDarkMode.innerText = "🌚" 
     }
 })
  
  })
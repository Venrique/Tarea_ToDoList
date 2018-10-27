window.onload = init;
   
 function init() {
     let todoList = {
         listHTML: document.getElementById("todoList"),
         listTask: [],
         add(task, priority = false) {
             let element = document.createElement("li");
             element.innerText = task;

            // Añadir un boton para marcar de finalizado
            let btn_tachar = document.createElement("button");
            let t1 = document.createTextNode("Tachar");
            btn_tachar.appendChild(t1);

            btn_tachar.addEventListener("click", function(){
                if(element.style.textDecoration == "line-through"){
                    element.style.textDecoration = "none";
                }else{
                    element.style.textDecoration = "line-through";
                }
             });
            // Elmine de la lista
            let btn_eliminar = document.createElement("button");
            let t2 = document.createTextNode("Eliminar");
            btn_eliminar.appendChild(t2);

            btn_eliminar.addEventListener("click", function(){
                let parent = element.parentNode;
                if(parent){
                    parent.removeChild(element);
                }
            });

            element.appendChild(btn_tachar);
            element.appendChild(btn_eliminar);
            
             if (priority) {
                 this.listTask.unshift({
                     element,
                     task
                 });
                 this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
             } else {
                 this.listTask.push({
                     element,
                     task
                 });
                 this.listHTML.appendChild(element);
             }
         }
     }

     let form = document.managerTask;
     form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         let task = form.task.value;

         let validTask = /.{2,}/;
         if (!validTask.test(task)) {
             console.log("Ingrese una descripcion clara");
             return false;
         }

         todoList.add(task, form.important.checked);

     });
 }
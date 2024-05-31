var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var bookMarkContent = document.getElementById("bookMarkContent");
var bookMarkArray=[]
//! var regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/gm;
//! هندسة انا مش عارف اكتب كود الـ ريجيكس واقف خالص معايا ممكن توضحه ليا
if (localStorage.getItem("allBookMarks") != null) {
    bookMarkArray = JSON.parse(localStorage.getItem("allBookMarks"))
    displayTask()
}

function addTask(){
    var bookMarkValue ={
        name: siteName.value ,
        Url: siteUrl.value
    }
    
    bookMarkArray.push(bookMarkValue);
    localStorage.setItem("allBookMarks",JSON.stringify(bookMarkArray))
    clearBookmarkInput()
    displayTask();   
    console.log(bookMarkArray)
}

function clearBookmarkInput() {
    siteName.value = null;
    siteUrl.value = null;
}

function displayTask(){
    var taskbox="";
    for(i=0 ; i<bookMarkArray.length ; i++){
        taskbox += `<div class="row pt-3 pb-1">
        <div class="col-2">${i+1}</div>
        <div class="col-4">${bookMarkArray[i].name}</div>
        <div class="col-3">
        <a href="https://${bookMarkArray[i].Url}"><button type="button" id="add" class=" btn btn-outline-success ms-2 text-center"><i class="fa-solid fa-eye"></i> Visit</button></a>  
        </div>
        <div class="col-3">
            <button type="button" id="add" class=" btn btn-outline-danger ms-2 text-center" onclick="deleteTask(${i})" ><i class="fa-solid fa-trash " ></i> Delete</button> 
        </div>
    </div>`
    }
    bookMarkContent.innerHTML=taskbox;
}

function deleteTask(i) {
    bookMarkArray.splice(i, 1)
    localStorage.setItem("allBookMarks",JSON.stringify(bookMarkArray))
    displayTask()
}



document.addEventListener('DOMContentLoaded', () => {

function myFetch(){
     fetch('https://student-attendance-tracker-mu.vercel.app/students')
    .then(res=>res.json())
    .then(data=>{
        data.forEach(student=>renderingStudents(student))
    })
}

myFetch()

function renderingStudents(student){
    const listCreate=document.createElement("li")
    const myUl=document.getElementById("myUl")
    listCreate.classList.add("theeLi")
    let List= listCreate.textContent=`${student.name}`
    const btn1Create=document.createElement("button")
    btn1Create.textContent="present"
    btn1Create.style.color='green'
    btn1Create.classList.add("mybtns")
    const btn2Create=document.createElement("button")
    btn2Create.textContent="Absent"
    btn2Create.style.color="red"
    btn2Create.classList.add("mybtns")
    const btn3Create=document.createElement("button")
    btn3Create.classList.add("mybtns")
    btn3Create.textContent="Late"
    
    const createClick=document.createElement("button")
    createClick.textContent="X"
    createClick.classList.add("myClick")

    const createEdit=document.createElement("button")
    createEdit.textContent="EDT"
    createEdit.classList.add("myEdit")
    
    listCreate.appendChild(btn1Create)
    listCreate.appendChild(btn2Create)
    listCreate.appendChild(btn3Create)
    listCreate.appendChild(createClick)
    listCreate.appendChild(createEdit)
    
    myUl.appendChild(listCreate)
    // const namei=document.getElementById("theeName").value

    createEdit.addEventListener("click",()=>{
        const newPrompt=prompt('Edit here',student.name)
        if(!newPrompt){
            return;
        }
        const newName={
            name:newPrompt
        }
        
        fetch(`${student.id}`,{
            method:"PATCH",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newName)
        })
        .then(res=>res.json())
        .then(student=>{
            student.id
            
        })
        })

    const myAttendance={
        attendance:'present'
    }
    btn1Create.addEventListener("click",(e)=>{
        e.preventDefault()
        if(student.attendance!=="present" ){
            alert(`Ooops!!!...${student.name} is actually ${student.attendance}.`)
            alert("Change it please")
        }
        fetch(`https://student-attendance-tracker-mu.vercel.app/students${student.id}`,{
            method:"PATCH",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(myAttendance)
        })
        .then(res=>res.json())
        .then(student=>{
            student.id

        })
    })

    const myAttendance2={
        attendance:'absent'
    }

    btn2Create.addEventListener("click",(e)=>{
        e.preventDefault()
        if(student.attendance!=="absent"){
            alert(`Ooops!!!...${student.name} is actually ${student.attendance}.`)
            alert("Change it please")
        }
        fetch(`https://student-attendance-tracker-mu.vercel.app/students${student.id}`,{
            method:"PATCH",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(myAttendance2)
        })
        .then(res=>res.json())
        .then(student=>{
            student.id

        })
    })

    const myAttendance3={
        attendance:'late'
    }

    btn3Create.addEventListener("click",(e)=>{
        e.preventDefault()
        if(student.attendance!=="late"){
            alert(`Oooops!!!!...${student.name} is actually ${student.attendance}.`)
            alert("Change it please")

        }
        fetch(`https://student-attendance-tracker-mu.vercel.app/students${student.id}`,{
            method:"PATCH",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(myAttendance3)
        })
        .then(res=>res.json())
        .then(student=>{
            student.id

        })
    })

    createClick.addEventListener("click",()=>{
        fetch(`https://student-attendance-tracker-mu.vercel.app/students${student.id}`,{
            method:"DELETE"
        })
        .then(()=>{
            listCreate.remove()
        })
    })

}

function myAdd(){
    
    const bttn=document.getElementById("bttn")
    bttn.addEventListener("click",(e)=>{
        e.preventDefault()
        const namei=document.getElementById("theeName").value
        const classi=document.getElementById("theeClass").value
        if(namei==="" && classi===""){
            return;
        }
        
        const theeStudent={
            name:namei,
            class_no:classi,
            attendance:"absent"
            
        };
            fetch('https://student-attendance-tracker-mu.vercel.app/students',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(theeStudent)
            })
            .then(res=>res.json())
            .then(student=>{
                student.id

            })
    })

    
}
myAdd()
  
})


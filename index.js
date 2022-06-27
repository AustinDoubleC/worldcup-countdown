const inputEmail = document.getElementById("input-text")
const message = document.getElementById("message")

const countDown=()=>{
    const timeNow = new Date()
    const tournament = new Date(2022,10,21,10,00)
    const gap = tournament-timeNow

    const second = 1000
    const minute = second * 60
    const hour = minute*60
    const day  = hour*24

    const gapDay = Math.floor(gap/day)
    const gapHour = Math.floor((gap%day/hour))
    const gapMinute = Math.floor((gap%hour/minute))

    document.getElementById("num-day").innerText = gapDay
    document.getElementById("num-hour").innerText = gapHour
    document.getElementById("num-min").innerText = gapMinute

}
setInterval(countDown, 1000)

document.getElementById("btn-detail").addEventListener("click",()=>showTable())
const showTable=()=>{
    document.getElementById("groupAD").style.opacity=1
    document.getElementById("groupEH").style.opacity=1
    document.getElementById("groupAD").style.zIndex=2
    document.getElementById("groupEH").style.zIndex=2
    document.getElementById("groupAD").style.top="0px"
    document.getElementById("groupEH").style.top= "50%"
}

document.getElementById("btn-close-table").addEventListener("click",()=>hideTable())
const hideTable=()=>{
    document.getElementById("groupAD").style.opacity=0
    document.getElementById("groupEH").style.opacity=0
    document.getElementById("groupAD").style.zIndex=-1
    document.getElementById("groupEH").style.zIndex=-1
    document.getElementById("groupAD").style.top="-50%"
    document.getElementById("groupEH").style.top="100vh"
}

document.getElementById("btnSubmit").addEventListener("click",()=>checkEmail())

const checkEmail = ()=>{
    if (inputEmail.value){
        if (inputEmail.value.includes("@")){
            let tempEmail = inputEmail.value.split("@")
            if (tempEmail[0] && tempEmail[1]){
                message.innerText ="Thank you for subscription."
                inputEmail.value=""
            }else message.innerText = "Error: Invalid email"
        }else message.innerText ="Error: email should contains @"
    }else message.innerText ="Error: Enter your email"
    showMessage()
}

const showMessage=()=>{
    document.getElementById("message-container-out").style.display="block"
}

document.getElementById("btn-close-message").addEventListener("click",()=>hideMessage())
const hideMessage=()=>{
    document.getElementById("message-container-out").style.display="none"
}
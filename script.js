let currentTab = 'all';
const tabActive = ["bg-[#3B82F6]", "text-white"];
const tabInactive = ["bg-white", "text-[#64748B]]"];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");




function switchTab(tab){
    console.log(tab);
    const tabs = ["all", "interview", "rejected"];

    for(const t of tabs){
        const tabName = document.getElementById("btn-"+t);
        if(t===tab){
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }
        else{
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }

    }

    const pages = [allContainer, interviewContainer, rejectedContainer];

    for(const section of pages){
        section.classList.add("hidden");
    }
    
    if (tab==="all") {
        allContainer.classList.remove("hidden");
    }
    else if(tab=== "interview"){
        interviewContainer.classList.remove("hidden");
    }
    else{
        rejectedContainer.classList.remove("hidden");
    }
        
}

// stat update
const totalStat = document.getElementById("stat-total");
const interviewStat =document.getElementById("stat-interview");
const rejectedStat =document.getElementById("stat-rejected");

totalStat.innerText = allContainer.children.length;


switchTab(currentTab);

document.getElementById("jobs-container").addEventListener("click",function(event){
    const clickedElement = event.target;
    const card = clickedElement.closest(".card");
    const status = card.querySelector(".status");
    

    if (clickedElement.classList.contains("interview")) {
        status.innerText = "Interviewed";
        interviewContainer.appendChild(card);
        
    }
    if (clickedElement.classList.contains("rejected")) {
        status.innerText = "Rejected";
        rejectedContainer.appendChild(card);
        
    }
    if (clickedElement.closest(".delete")) {
        // console.log("delete clicked");
        
    }
    
})

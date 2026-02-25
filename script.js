let currentTab = 'all';
const tabActive = ["bg-[#3B82F6]", "text-white"];
const tabInactive = ["bg-white", "text-[#64748B]]"];

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
    
}

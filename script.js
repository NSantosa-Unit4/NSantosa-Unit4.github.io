// logic
 function CreateAccordionTabInsideTabsClass(){
   let tabs = document.querySelector(".tabs");
   let i = 0;
   
   for(var category in referrals)
   {
     let categoryName = (Object.keys(referrals)[i]);
     
     let tab = document.createElement("div");
     tab.className = "tab";
     tabs.appendChild(tab);
     
     let checkbox = document.createElement("input");  
     checkbox.type = "checkbox";
     checkbox.id = "chck"+i;
     tab.appendChild(checkbox);
     
     let label = document.createElement("label");
     label.className = "tab-label";
     label.htmlFor = "chck"+i;
     label.innerHTML = categoryName.replaceAll("_", " ");
     tab.appendChild(label);
     
     let tabContent = document.createElement("div");
     tabContent.className = "tab-content";
     tab.appendChild(tabContent);
     
     categories = (referrals[categoryName]);
     categories.forEach((val)=>{
       let unorderedList = document.createElement("ul");
       tabContent.appendChild(unorderedList);
       
       let list = document.createElement("li");
       
       list.innerHTML = val.title+": <a href = \""+val.link+"\">Click Here</a";
       unorderedList.appendChild(list);
     });
     
     i++;
   }
 }

CreateAccordionTabInsideTabsClass();
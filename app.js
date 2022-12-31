// link up 
const currentDate = document.getElementById('current-date');
const days = document.getElementById('days');
const icons = document.querySelectorAll('.icons span');
let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

// console.log(date,currentYear,currentMonth);

const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];


//main function   
const calendar = () =>{
    let firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay(), 
    lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate(),//ekhane +1 or 0 diye bujhay mashta 30 naki 31 er hobe
    lastDayofMonth = new Date(currentYear, currentMonth, lastDateofMonth).getDay(),
    lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate();
    
    // console.log(lastDateofMonth); 
    let liTag = '';
    

    for (let i = firstDayofMonth; i > 0; i--) { 
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) { 
        let isToday = i === date.getDate() && currentMonth === new Date().getMonth() 
                     && currentYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) { 
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currentMonth]} ${currentYear}`; 
    days.innerHTML = liTag;
}
calendar()


icons.forEach(icon => { 
    icon.addEventListener("click", () => { 
        currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;
        if(currentMonth < 0 || currentMonth > 11) { 
            date = new Date(currentYear, currentMonth);
            currentYear = date.getFullYear(); //new year
            currentMonth = date.getMonth(); //new month
        } else {
            date = new Date(); 
        }
        calendar(); 
    });
});
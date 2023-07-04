const months = [31,28,31,30,31,30,31,30,31,30,31,30];
function ageCalculate(){
    let today=new Date();
    let inputDate=new Date(document.getElementById("date-input").value);
    let birthMonth,birthDate,birthYear;
    let birthDeatils={
        months: inputDate.getMonth(),
        date: inputDate.getDate()+1,
        years: inputDate.getFullYear()
    }
    let currentYear= today.getFullYear();
    let currentMonth= today.getMonth()+1;
    let currentDate= today.getDate();

    leapChecker(currentYear);

    if(birthDeatils.years > currentYear || (birthDeatils.months > currentMonth && birthDeatils.years==currentYear) || (birthDeatils.date > currentDate && birthDeatils.months==currentMonth && birthDeatils.years==currentYear) ){
        alert("Not Born Yet");
        return;
    }
    birthYear= currentYear-birthDeatils.years;
    if(currentMonth>=birthDeatils.months){
        birthMonth= currentMonth-birthDeatils.months;
    }else{
        birthYear--;
        birthMonth= 12 + currentMonth - birthDeatils.months;
    }
    if(currentDate>=birthDeatils.date){
        birthDate= currentDate - birthDeatils.date;
    }else{
        birthMonth--;
        let days= months[currentMonth-2];
        birthDate=days+ currentDate -birthDeatils.date;
        if(birthMonth<0){
            birthMonth=11;
            birthYear--;

        }
    }
    console.log (birthYear,birthMonth,birthDate);
}
function leapChecker(years){
    if(years %4 == 0 || (years%100==0 && years%400==0)){
        months[1]= 29;
    }else{
        months[1]= 28;
    }
}
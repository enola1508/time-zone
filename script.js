let selctdDate = document.querySelector("#city");

function getDateTime(event) {
 

if (event.target.value!=="") {
  let CurrentDate = moment()
  .tz(event.target.value)
  .format("dddd, MMMM D, YYYY h:mm A");
  let time=document.querySelector("#time");
time.innerHTML=(`It is ${CurrentDate} in ${event.target.value}`);

}


}
selctdDate.addEventListener("change", getDateTime);
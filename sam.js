alert("Your're Mom Gay");
let count = 0;

function urmomgay()
{
  if (count === 241) {
    document.querySelector('#page_sam').innerHTML += "MOM GAY";
    count++;
  }
  if (count === 242) {
    return;
  }
  document.querySelector('#page_sam').innerHTML += "YOUR'RE MOM GAY ";
  count ++;
}
urmomgay();
window.setInterval(urmomgay, 50);

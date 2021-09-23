function addMore() {
    document.getElementById('error').innerHTML = "";
    let name = document.getElementById('name').value;
    if (name == '') {
        document.getElementById('error').innerHTML = "Please enter value!";
    } else {
        let box = document.getElementById('box');
        let li = document.createElement('li');
        li.textContent = name;
        box.appendChild(li);
        let a=document.createElement('a');
        a.textContent="x";
        a.href="javascript:void(0);"
        a.className="remove";
        li.appendChild(a);
   
    }
    document.getElementById('name').value="";

}
let btn=document.querySelector('ol');
btn.addEventListener('click',function(e){
    let box=document.getElementById('box');
    let li=e.target.parentNode;
    box.removeChild(li);
});
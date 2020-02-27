let x = 0;
let array = Array();
function addelement() {
    array[x] = document.getElementById("inputnum").value;
    alert(array[x] + " đã được thêm vào mảng tại vị trí số " + x);
    x++;
    document.getElementById("inputnum").value = "";
}
function displayarray() {
    let e = "<hr/>";
    for (i = 0; i < array.length; i++) {
        e += "Đối tượng " + i + " = " + array[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = e;
}
function tryRemoveFromArray(length) {
    let arr = [];
    let resultX = false;
    let display = '';
    let displayArr = '';
    let i = 0;
    for (let i = 0; i < length; i++) {
        arr[i] = parseFloat(prompt("Nhap vao phan tu thu " + (i + 1) + ":"));
    }

    let xInput = prompt("Nhap 1 so tu ban phim");
    for (i = 0; i < length; i++) {
        display += arr[i] + " ";
    }
    i = 0;
    while (i < arr.length) {
        if (xInput == arr[i]) {
            resultX = true;
            arr.splice(i, 1);
            continue;
        }
        i++;
    }

    for (let i = 0; i < arr.length; i++) {
        displayArr += arr[i] + " ";
    }
    document.getElementById('Ex2xInput').innerHTML =
        "Mang nhap vao : [" + display + "].Phan tu x nhap vao la : " + xInput;
    if (resultX) {
        document.getElementById('resultX').innerHTML = xInput + ' is in the array';
        document.getElementById('resultEx2').innerHTML = "Ham duoc viet lai :[" + displayArr + "]";
    } else {
        document.getElementById('resultX').innerHTML = xInput + ' is not in the array';
    }
}
function findMax(length) {
    let arr = [];

    for (let i = 0; i < length; i++) {
        arr[i] = parseFloat(prompt("Nhap vao phan tu thu " + (i + 1) + ":"));
    }
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= max) {
            max = arr[i];
        }
    }
    document.getElementById("resultEx1").innerHTML = "Diem so cao nhat la : " + max;
}


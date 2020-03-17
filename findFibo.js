function isFibonacci(N) {
    let arr = [];
    if (N % 1 !== 0) {
        document.getElementById("resultEx3").innerHTML = N + " khong phai la so nguyen ";
    } else if (N < 0)
        document.getElementById("resultEx3").innerHTML = N + " khong phai la so trong day Fibonacci ";
    else {
        if (N == 0 || N == 1 || N == 2 || N == 3) {
            document.getElementById("resultEx3").innerHTML = N + " la 1 so Fibonacci";
        } else {
            arr[0] = 0;
            arr[1] = 1;
            for (let i = 2; i <= N; i++) {
                arr[i] = arr[i - 1] + arr[i - 2];
                if (N == arr[i]) {
                    document.getElementById("resultEx3").innerHTML = N + " la 1 so Fibonacci";
                    break;
                }
                if (N == i) {
                    document.getElementById("resultEx3").innerHTML = N + " khong phai la so trong day Fibonacci ";
                    break;
                }
            }
        }
    }
}
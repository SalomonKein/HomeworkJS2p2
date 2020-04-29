let m = +prompt('Введіть просте число "m"', ' ');
let n = +prompt('Введіть просте число "n", "n">"m"', ' ');

do {
    console.log('error');
    m = +prompt('Введіть просте число "m"', ' ');
    n = +prompt('Введіть просте число "n", "n">"m"', ' ');
}
while (n < m || (!Number.isInteger(m)) || (!Number.isInteger(m)))
let i;
nextStep2:
    for (m; m <= n; m++) {
        for (i = 2; i < m; i++) {
            if (m % i == 0)
                continue nextStep2;
        }


        console.log(m);
    }
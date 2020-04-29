let m = +prompt('Введіть число "m"', ' ');
let n = +prompt('Введіть число "n", "n">"m"', ' ');


while (n < m || (!Number.isInteger(m)) || (!Number.isInteger(n))) {
    console.log('error');
    m = +prompt('Введіть число "m"', ' ');
    n = +prompt('Введіть число "n", "n">"m"', ' ');

}




let i;
nextStep2:
    for (m; m <= n; m++) {
        for (i = 2; i < m; i++) {
            if (m % i == 0)
                continue nextStep2;
        }


        console.log(m);
    }
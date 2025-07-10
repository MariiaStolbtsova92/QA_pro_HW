
function pow(arg1, arg2)
{
    let result = 1;
    for (let x = 0; x < arg2; x++) {
        result *= arg1;
    }
    return result;
}

console.log(pow(2, 3));

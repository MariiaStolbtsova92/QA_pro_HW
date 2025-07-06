console.log((+null == false) < 1 ** 5);

//'number' + 3 + 3 - User should see result: number33.The reason for this result
//  is that the value "number"  is written as a string, so during the + operation,
//  concatenation occurs.

//null + 3 - User should see result: 3 . The reason for this result 
// is that the value "null" is converting to 0, and summ of 0 and 3 will be 3.

//5 && "qwerty" - User should see result: qwerty. The reason for this result is 
// value "5" and value "qwerty" both are return "True".
//  With operator && should back last true.(if all values True)

//+'40' + +'2' + "hillel" - User should see result: 42hillel. Because "+" before values "40" and "2" 
//confirm that string are became the numbers. They are summarized. After this string "hillel" added 
//in result of concationation. ALSO, if in this example write in the end ";" there should be error, 
//because this sign we should use after ()

//'10' - 5 === 6 - User should see result: false. Because, string with value "10" converting to number,
//after that 10 minus 5 will be 5. After that strict equal shows false, because 5 not equal to 6.
// ALSO, if in this example write in the end ";" there should be error, 
//because this sign we should use after ()

//true + false - User should see result 1. Because true revert 1 nad false revert 0. After that 1 and 0
//summarized and we have 1 in result.

//'4px' - 3 - User should see result NaN. It is because "-" doesn't concatinate results, it is 
//arifmetical operation. Value "4px" is NaN and NaN minus 3 in result NaN.

//'4' - 3 - User should see result "1". It is because string "4" transformed to number, 
//and 4-3 is 1.

//'6' + 3 ** 0; - User should see result "61". Because, ** it is involution, this operation should be 
//perform first. 3 in 0 extent will be 1. After that string "6" concatinate with "1". 

//12 / '6' - User should see result - 2. Because the string "6" transformed to number. 12/6 equals 2.

//'10' + (5 === 6) - User should see result - 10false. In the beggining should be this operation
//(5===6) and it False. After that string '10' concatinate with false.

//null == '' - user should see result False.In non-strict comparison, 
// null is not converted to any other type, so as a result, null is not equal to a string.

//3 ** (9 / 3) - user should see result - 27. It is all arifmetical operations, 
//first (9/3)=3. And second operation 3 in 3 extent = 27.

//(!!'false' == !!'true')- user should see result - true. Because values "false" and "true" is a string.
//It is not boolean type. Not empty string - it is True value. After confirm two negation values still
// true. And True == True.

//0 || '0' && 1 - user should see result - 1. In the beginning perform operation &&. 
//"0" this is not empty string - so it is true. 1 is also true. Should back last true =1.
// || - 0 or 1, this operator back first True - it is 1.


//(+null == false) < 1 - user should see result - false. Because, +null is transform to 0.
// 0 == false - it is true. True it is 1. 1<1 - false.

//false && true || true) - user should see result - true. The first operation is AND. 
// False and true returns the first false.Then comes OR. False or true returns the first true.

// false && (false || true) - user should see -false. First operation in brackets, return first true. 
// After that operation AND, return first false.

//(+null == false) < 1 ** 5 - user should see - false. +null is transform in 0.
//  0==false - this operation is true. 1**5 is 1.
//  Then 1 not <1 . It is the reason of result false
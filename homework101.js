var arr = `[
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        <email:"dmitro.porohov@yahoo.com">
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    }
]`;

var cleanedString = arr
    .replace(/<|>/g, '')              
    .replace(/\/\/.*$/gm, '')         
    .replace(/(\w+):/g, '"$1":');     

var parsedArray = JSON.parse(cleanedString);

var emailRegex = /@(gmail\.com|yahoo\.com)$/;

var trustedEmails = parsedArray.filter(item => emailRegex.test(item.email));

console.log(trustedEmails);
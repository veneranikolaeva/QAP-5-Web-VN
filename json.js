fetch('/data.json')
.then(response => response.json())
.then(data => {
    data.forEach(record=> {
        checkAge
        console.log(record.name); //Display the 'name' field to the browser console
        console.log(record.email); //Display the 'email' field to the browser console
        console.log(record.age); //Display the 'age' field to the browser console
        const age = 20;
        const result = checkAge(age);
        console.log(result); //Output Adult or Teenager
    })
})
.catch(error => 
console.error(error));


function checkAge(age)
{if (age >= 18) {return 'Adult'; } else {return 'Teenager';}}

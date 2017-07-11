function canDrive(age) {
    if (age >= 16) {
        return true;
    }
    return false
}

var myAge = 50;
var iCanDrive = canDrive(myAge);
console.log(iCanDrive);


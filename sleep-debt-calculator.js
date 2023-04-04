//calculate number of hours one is getting during the week. It covers:
// How many hours should one sleep? IS he getting enough sleep or less sleep?

var getSleepHours = (day) => {
    switch (day) {
       case 'monday':
      return 8;
      break;
       case 'tuesday':
      return 8;
      break;
       case 'wednesday':
      return 8;
      break;
       case 'thursday':
      return 8;
      break;
       case 'friday':
      return 8;
      break;
       case 'saturday':
      return 7;
      break;
       case 'sunday':
      return 8;
      break;
    }
  }
  //testing the function whether it works or not
  // console.log(getSleepHours('saturday'));
  
  let getActualSleepHours = () => {
    let getSleepHoursSum = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); 
    return getSleepHoursSum;
  }
  
  let getIdealSleepHours = () => {
    var idealHours = 9;
    return idealHours*7;
  }
  
  // console.log(getActualSleepHours());
  // console.log(getIdealSleepHours());
  let calculateSleepDebt = () => {
    var actualSleepHours = getActualSleepHours();
    var idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
    console.log('got the perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('got more sleep than needed');
    //covers the 'less than' case
  } else {
    console.log('get some rest');
  }
  }
  
  calculateSleepDebt();
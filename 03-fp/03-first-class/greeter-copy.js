const greeter = (target) => {
  const sayHello = () => {
    //console.log(`Hi, ${target}!`);
    console.log(`Hi, target!`);
  };

  return sayHello;
  //return sayHello();
};

//const greet = greeter('Step Jun');
//greet();
//greeter('Step Jun');
greeter('Step Jun')();

//Once you complete a problem, open up Chrome and check the answer in the console.


//Create an object called me. Give it a key of name with the value being your name, and another key of age with the value being your age. Then alert your name using dot notation.

 var me = {name: "Tim", age: 27};

alert(me.name);


//NEXT PROBLEM




//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  var favoriteThings = {
  band: "Coldplay", 
  food: "french toast", 
  book: "The Lost Symbol", 
  movie: "The Shawshank Redemption", 
  holiday: "Christmast"
};
console.log(favoriteThings);

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

 favoriteThings.car = "Acura";


//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'.

 favoriteThings.food = "lettuce";
 favoriteThings.book = "50 Shades of Gray";
 console.log(favoriteThings);




//NEXT PROBLEM



/*Create an empty Object called backPack. Now, create a variable called 'item'
and set it equal to the string 'firstPocket'. Using bracket notation,
add a 'firstPocket' key (or property) to backPack, using 'item'.
Set the value of that key to 'chapstick'.

Using dot notation, add another key (or property) to your backPack object
that is named color, with the value being the color of your backpack. */

 var backPack = {}
 var item = 'firstPocket';
backPack[item] = "chapstick" //item is becoming a key in backPack and chapstick is a value assigned to the key item.

//After you do the above, alert your entire backPack object.

  alert(backPack)

/*You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console. */

 console.log(backPack);




//NEXT PROBLEM




//Create another 'me' object with the following properties name, age, height, gender, married, eyeColor, hairColor. Fill those properties in with the appropriate values.

  var me = {
    name: "Tim", 
    age: 27, 
    height: "5ft 9in", 
    gender: "male", 
    eyeColor: "green", 
    hairColor: "brown",

  }

//Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

  for (myself in me){

    alert(me[myself]); //myself is a variable with a value of one of the key names of the object me which will change as it loops through.
    // I had to use bracket notation because it is dynamic and will find the value associated with myself. if I did me.myself it would just look for the key name myself
}



//NEXT PROBLEM




//Create an Object called 'album' with 5 keys named different song titles that you make up, with the values being the length of each song.

  var album = {
    happy: "3:00", 
    sad: "2:00", 
    mad: ":10", 
    funny: "3:05", 
    hyper: "4:50"
  }

//Now, loop through your album object alerting every song title individually.

  for (songTitle in album) {
    alert(songTitle);
  }




//NEXT PROBLEM




//Create an object called states that has 5 US states as properties with the values being their population (doesn't have to be accurate).

  var states = {
    Utah: 2000000, 
    Cali: 30000000, 
    Wyoming: 20000, 
    Idaho: 200000, 
    Texas: 30000000
  };

//Now, loop through your states object and if the states population is greater than 30K, alert that state.

 for (greater in states) {
  if (states[greater] > 30000) {
    alert(greater + " " +  states[greater]);
  }
 }




//NEXT PROBLEM




var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}
/*Above you're given a user object. Loop through the user object checking to make sure
that each value is truthy. If it's not truthy, remove it from the object. */

 for (truth in user) {
  if (!user[truth]){
    delete user[truth]
 }
}
console.log(user);
//Once you get your truthy Object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  //Code Here

user.name = "Tim Garlick"; // or you could change it like this user['name'] = "Tim Garlick"
user.username= "timgarlick";
user.pwHash = "abc123";
console.log(user);


//NEXT PROBLEM




var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(test){
            alert(test + this.email);
        }
};
//Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.

  user.name = "Tyler S. McGinnis";
  user.email = "tyler.mcginnis@devmounta.in"

//Now call the sayName method that's on the user object which will alert the users email

  //Code Here

user.sayName("My Teachers and my teachers email is: "); // this will call the function within the object


//NEXT PROBLEM




//Create an empty object called methodCollection.

  var methodCollection = {};

/*Now add two methods (functions that are properties on objects) to your methodCollection
object. One called 'alertHello' which alerts 'hello' and another method called logHello
 which logs 'hello' to the console. */

  methodCollection.alertHello = function() {
    alert("hello");
  }
  methodCollection.logHello = function() {
    console.log("hello");
  }
//Now call your alertHello and logHello methods.

  //Code Here
methodCollection.alertHello();
methodCollection.logHello();



//NEXT PROBLEM




var devMountainEmployees = [];

var tyler = {
    name: 'Tyler',
    position: 'Lead Instructor/Engineer',
    spiritAnimal: 'Honey Badger'
};

var cahlan = {
    name: 'Cahlan',
    position: 'CEO',
    spiritAnimal: 'butterfly'
};

var ryan = {
    name: 'Ryan',
    position: 'Marketing',
    spiritAnimal: 'fox'
};

var colt = {
    name: 'Colt',
    position: 'Everything really',
    spiritAnimal: 'Young Male Horse'
}

/*Above you're given an empty array with four objects. Fill the devMountainEmployees
array with those four objects. After that console.log the length of the Array and make
sure that it's equal to 4. */

  devMountainEmployees.push(tyler, cahlan, ryan, colt);

/*Now let's say Cahlan has a mental breakdown and has to take a leave of absense to 'find himself'.
Loop through your devMountainEmployees until you find cahlan, then remove him from the array.*/

 for (var i = 0; i < devMountainEmployees.length; i++) {
   if (devMountainEmployees[i] === cahlan) {
    delete devMountainEmployees[i]; // or you could do devMountainEmployees.splice(i,1) basically it is saying remove the item at index i and only remove one item
   }
 };
 console.log(devMountainEmployees);




//NEXT PROBLEM




/*Now we're going to combine what we've learned today (objects) with what we learned
yesterday (arrays). Yeah, take a deep breathe. You're ready for this, promise.
Let's think back to our itunes example (tylermcginnis.com/itunes).
Notice that when you type in an artist name, iTunes gives us back a LOT of data.
What they're really giving us is an Array full of Objects. It probably looks something
like this. */

var data = [
    {
        artist: 'shakira',
        album: 'hips don\'t lie',
        tracks: 16,
    },
    {
        artist: 'shakira',
        album: 'mariposa',
        tracks: 12,
    },
    {
        artist: 'shakira',
        album: 'greatest hits',
        tracks: 19
    }
];



/*A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects)
of Data is to have an Array full of objects. */

//Create an empty array called users.
var user = [];

/*Now add three user objects to your users array. Each user object should contain the
following properties. name, email, password, username.*/
//include this as one of the objects in your array.
var user1 = {
    name: 'Tyler McGinnis',
    email: 'tylermcginnis33@gmail.com',
    password: 'iLoveJavaScript',
    username: 'infiniateLoop'
}

var user2 = {
  name: "Tim Garlick",
  email: "timgarlick11@gmail.com",
  password: "abc123",
  username: "tgarlick"
}
var user3 = {
  name: "Natalie Garlick",
  email: "natgarlick@gmail.com",
  password: "abc123",
  username: "ngarlick"
}
user.push(user1, user2, user3);




/*Now you have a very common data structure. Twitter is a good use case.
It's easy to imagine that your followers list on Twitter is an Array full or objects
and those objects contain properties about the specific person you follow.*/

/*Now let's say that Tyler decided to delete his account. Loop through your array of
objects until you find Tyler's account (use tylermcginnis33@gmail.com to find him).
Once you find the particular indice he's located in, delete him from the array.*/

  for (var i = 0; i < user.length; i++) {
    if (user[i].email === 'tylermcginnis33@gmail.com') { // you need to compare user at index i and there email just like you use user1.email you use user[i].email and then compare it to the strings. 
   user.splice(i, 1);
}
  };


//The activity we just did is very much how data works in 'the real world'.




// Day6 

class Movies {
    constructor(title,studio,rating ="pg") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

 const m1 = new Movies ("Leo", "AGE Productions", "PG42");
 const m2 = new  Movies("Leo", "Age Productions", );

 console.log(m1.title);
 console.log(m1.studio);
 console.log(m1.rating);

 console.log(m2.rating);



 class Circle {
    constructor(radius, color) {
        this.radius =radius;
        this.color = color;
    }

    get radiusCircle() {
        return this.radius;
    }

    set radiusCircle(radius) {
        this.radius = radius;

    }
    get colorCircle(){

    return this.color;

     }

     set colorCircle(color) {
        this.color = color;
     }

     get circumferenceCricle() {
        return '"Circle [radius=${this.radius}, colors=${this.color}]"'
     }
     get areaCricle(){
        return Math.PI*this.radius * this.radius;
     }

     get circumferenceCricle(){
        return 2*Math.PI* this.radius;
     }

 }

 var c1 = new Circle(1.0, "red");

 console.log(c1.radiusCircle);
 c1.radiusCircle= 3.2

 console.log(c1.radiusCircle);

 console.log(c1.colorCircle);
 c1.colorCircle = "blue";
 console.log(c1.colorCircle);

 console.log(c1.toString);
 console.log(c1.areaCricle);

 console.log(c1.circumferenceCricle);


 // 3.Write a PERSON class to hold all the details.

 class person {
    constructor(firstname,lastname,Dob, location) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.Dob = Dob;
        this.location = location;
    }
 }
    var p1 = new person ("suriya", "priyan", "05-06-1998", "chennai");
    var p2 = new person ("ranjith", "kumer", "12-07-1996", "chennai");
    var p3 = new person ("ranjith", "suriya", "11-10-1997", "chennai");
    var p4 = new person ("gowtham", "sam", "05-12-1999", "chennai");
    var p5 = new person ("selva", "dinesh", "05-02-1995", "chennai");

    console.log(p1.firstname);
    console.log(p1.lastname);
    console.log(p1.Dob);
    console.log(p1.location);


    console.log(p2.firstname);
    console.log(p2.lastname);
    console.log(p2.Dob);
    console.log(p2.location);
    
    console.log(p3.firstname);
    console.log(p3.lastname);
    console.log(p3.Dob);
    console.log(p3.location);

    console.log(p4.firstname);
    console.log(p4.lastname);
    console.log(p4.Dob);
    console.log(p4.location);

    console.log(p5.firstname);
    console.log(p5.lastname);
    console.log(p5.Dob);
    console.log(p5.location);


    // console.log('All the person Names are "p1" : ${p1.firstname}
    // "p2" : ${p2.firstname}
    // "p3": ${p3.firstname}
    // "p4": ${p4.firstname}
    // "p5": ${p5.firstname}
    console.log(p1.firstname);
    console.timeLog(p2.firstname);
    console.log(p3.firstname);
    console.log(p4.firstname);
    console.log(p5.firstname)
    
    

    // 4 Uber calculate price.

    class UberPriceCalculator {
        constructor(){
            this.baseFare =60;
            this.costperKilometer = 15;
            this.costperMinute = 25;
            this.bookingFee = 30;
        }

        calculatePrice(distanceInKilometers,timeInMinutes) {
            const distanceCost = this.costperKilometer*distanceInKilometers;
            const timecost = this.costperMinute * timeInMinutes;


            const totalprice = this.baseFare + distanceCost + timecost + this.bookingFee;

            return totalprice;
        }

    }

    const calculate = new UberPriceCalculator();
    const distanceInKilometers = 6.5;
    const timeInMinutes = 10;

    const timedprice = calculate.calculatePrice(distanceInKilometers,timeInMinutes);

    console.log('timedprice');
    
    
    
 



var myObject = {

    name: "Adalab",
 
    func: function() {
 
        var self = this;
 
        console.log("outer func:  this.name = " + this.name);
 
        console.log("outer func:  self.name = " + self.name);
 
        (function() {
 
            console.log("inner func:  this.name = " + this.name);
 
            console.log("inner func:  self.name = " + self.name);
 
        }());
 
    }
 
 };
 
 myObject.func();



//  JavaScript CAT

// 3. In your own words, explain how the script for moving the carousel works. (5

// marks)

// It may set a time after which the carousel moves to display another image/ slide.
// It may also respond to a button click to play another element in the slides.



// 4. What will the code below output to the console and why?
 


// It will output the name of the property of the object, but the 
// second function will not access the name property of the object, and the 
// output is undefined because the function executed does not have a key. 
// This function is not a declared property of the object “myObject”

 
/*
 * This is functionally exactly the same as micro-equals.js, but documented, unrolled, and with unnecessary bits re-added to
 * help make it more easily understood. Note, also, that this is NOT the same as if whitespace had been added to micro-equals.js
 * 
 * !! DO NOT USE THIS in a production environment !!
 * This file is 3,030 Bytes, and micro-equals.js is only 157 Bytes.
 */


/**
 * This is a very small, fully-functional JavaScript global .equals() implementation.
 * It can be used in every way a language's .equals() method should be usable.
 * To use this, simply place it at the earliest possible point in your application and let it run. It will add a .equals()
 * method to every existing and future JavaScript object.
 * 
 * 
 * Comparing two objects:
 * 		Simply call yourObject.equals(anotherObject);
 * 		
 * 		example:
 * 			var myObject      = {"is mine" : true};
 * 			var myOtherObject = {"is mine" : true};
 * 			console.log(myObject.equals(myOtherObject);           // prints "true"
 * 			var yourObject    = {"is mine" : false};
 * 			console.log(myObject.equals(yourObject);              // prints "false"
 * 			myOtherObject     = {"is mine" : true, "mood" : "happy"};
 * 			console.log(myObject.equals(myOtherObject);           // prints "false"
 * 
 * 
 * 
 * @param o any other object
 * 
 * @license MIT
 * @author Kyli Rouge of Blue Husky Studios
 * @since 2014-08-18
 * @version 1.0.0
 */

Object.prototype.equals = // create an object named "equals" in the definition of every Object
	function(o) // this "equals" object is a function that takes in one argument, o
	{
		/**
		 * Iterates through every last key-value pair and checks their equivalence. If any one is not equivalent, false is
		 * returned. If they're all equivalent, true is returned.
		 * 
		 * @param a the first object to be compared for equivalence
		 * @param b the second object to be compared for equivalence
		 * 
		 * @license MIT
		 * @author Kyli Rouge of Blue Husky Studios
		 * @since 2014-08-18
		 * @version 1.0.0
		 */
		function checkAllEquivalencies(a, b)
		{
			for (i in a) // for every value in a
			{
				if (typeof(a[i]) == "object") // if this is an object
				{
					if (!checkAllEquivalencies(a[i], b[i]) // if one of its values isn't equivalent
					{
						return false; // a and b are not equal
					}
				}
				else if (a[i] != b[i]) // else, if this value in a is NOT exactly equal to the value with the same key in b
				{
					return false; // a and b are not equal
				}
				
				return true; // if we've gotten here, then all those values we've checked so far are exactly equal
			}
		}
		
		return
			checkAllEquivalencies(this, o) // compare the values for all keys in this to those for this' keys in o
			&& checkAllEquivalencies(o,this); // compare the values for all keys in o to those for o' keys in this
		// we do both these in case one has all the same key/value pairs as the other, then plus some.
	}
;
/**
    Created by: Michael Synovic
    on: 01/12/2003
    
    This is a Javascript implementation of the Java Hashtable object.
    
    Contructor(s):
     Hashtable()
              Creates a new, empty hashtable
    
    Method(s):
     void clear() 
              Clears this hashtable so that it contains no keys. 
     boolean containsKey(String key) 
              Tests if the specified object is a key in this hashtable. 
     boolean containsValue(Object value) 
              Returns true if this Hashtable maps one or more keys to this value. 
     Object get(String key) 
              Returns the value to which the specified key is mapped in this hashtable. 
     boolean isEmpty() 
              Tests if this hashtable maps no keys to values. 
     Array keys() 
              Returns an array of the keys in this hashtable. 
     void put(String key, Object value) 
              Maps the specified key to the specified value in this hashtable. A NullPointerException is thrown is the key or value is null.
     Object remove(String key) 
              Removes the key (and its corresponding value) from this hashtable. Returns the value of the key that was removed
     int size() 
              Returns the number of keys in this hashtable. 
     String toString() 
              Returns a string representation of this Hashtable object in the form of a set of entries, enclosed in braces and separated by the ASCII characters ", " (comma and space). 
     Array values() 
              Returns a array view of the values contained in this Hashtable. 
            
*/
function Hashtable(){
    this.clear = hashtable_clear;
    this.containsKey = hashtable_containsKey;
    this.containsValue = hashtable_containsValue;
    this.get = hashtable_get;
    this.isEmpty = hashtable_isEmpty;
    this.keys = hashtable_keys;
    this.put = hashtable_put;
    this.remove = hashtable_remove;
    this.size = hashtable_size;
    this.toString = hashtable_toString;
    this.values = hashtable_values;
    this.hashtable = new Array();
}

/*=======Private methods for internal use only========*/

function hashtable_clear(){
    this.hashtable = new Array();
}

function hashtable_containsKey(key){
    var exists = false;
    for (var i in this.hashtable) {
        if (i == key && this.hashtable[i] != null) {
            exists = true;
            break;
        }
    }
    return exists;
}

function hashtable_containsValue(value){
    var contains = false;
    if (value != null) {
        for (var i in this.hashtable) {
            if (this.hashtable[i] == value) {
                contains = true;
                break;
            }
        }
    }
    return contains;
}

function hashtable_get(key){
    return this.hashtable[key];
}

function hashtable_isEmpty(){
    return (parseInt(this.size()) == 0) ? true : false;
}

function hashtable_keys(){
    var keys = new Array();
    for (var i in this.hashtable) {
        if (this.hashtable[i] != null) 
            keys.push(i);
    }
    return keys;
}

function hashtable_put(key,value){
    if (key == null || value == null) {
        throw "NullPointerException {" + key + "},{" + value + "}";
    }else{
        this.hashtable[key] = value;
    }
}

function hashtable_remove(key){
    var rtn = this.hashtable[key];
    this.hashtable[key] = null;
    return rtn;
}

function hashtable_size(){
    var size = 0;
    for (var i in this.hashtable) {
        if (this.hashtable[i] != null) 
            size ++;
    }
    return size;
}

function hashtable_toString(){
    var result = "";
    for (var i in this.hashtable)
    {      
        if (this.hashtable[i] != null) 
            result += "{" + i + "},{" + this.hashtable[i] + "}\n";   
    }
    return result;
}

function hashtable_values(){
    var values = new Array();
    for (var i in this.hashtable) {
        if (this.hashtable[i] != null) 
            values.push(this.hashtable[i]);
    }
    return values;
}

function CodeItem(id,pid,treeId,name,spell,abbr,status,layer,pnode){
	this.name = name;
	this.id = id;
	this.pid =pid;
	this.treeId=treeId;
	this.spell=spell;
	this.layer=layer;//1: any 0: bottom
	this.status=status;
	this.abbr=abbr;	
	this.pnode=pnode;//0:child 1:parent
}



      
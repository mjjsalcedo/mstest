/*jshint esversion: 6 */
var expect = require('chai').expect;

describe('starter', function(){

    it('start', function(){
      console.log('sanity check');
    });
});

console.log('done');


describe('Person', function(){

    class Person {

    }

    var human =  new Person();

     it('should be a function', function(){
      expect(human).to.be.a('function');
     });

     it('should have a name', function (){
      expect(human.name).to.be.a('String');
     });

     it('should have an age', function (){
      expect(human.age).to.be.a('Number');
     });

     it('should have a method sayHello()', function(){
      expect(human.sayHello()).to.equal('Hello!');
     });

     it('should have a method sayName()', function(){
      expect(human.sayName()).to.equal('My name is ' + human.name);
     });

     it('should have a method sayAge()', function(){
      expect(human.sayAge()).to.equal('I am ' + human.age + ' years old');
     });

});

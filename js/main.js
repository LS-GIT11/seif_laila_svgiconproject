console.log('JS file connected')

//I want to write my though process as I write. Notes and ways to remember how to do it like example file. Also using example file as reference as I go.

//I logged my indvidual icons... I noticed that in example file the first half is the querySelector/querySelectorAll's together and both labled 'document.' and not 'this.' (like how I had my old javascript).
// I first wrote out
//      const Icon = document.querySelectorAll('svg')

// but noticed that heading towards like last time. So to start off I did
//      const almondIcon = document.querySelector('#almond')
//and the rest for each flavour (nut)


const almondIcon = document.querySelector('#almond')
function logIt() {
    console.log(this.id)
}
almondIcon.addEventListener('click', logIt);

/*I really wanted to do it like this
      almondIcon.addEventListener ('click', function(){
      console.log('Almond Alert Icon clicked!')})
but the example file didn't have that... so I was wondering where the differenced were. I can read what I wrote above (not in pro terms by any means) variable called almondIcon, add an EventListener, add function where if I 'click' on that almondIcon already connected here with #almond, then callback 'Almond Alert Icon clicked!' in console.

what I am not getting how example files do it, but I read the notes and i tried 
      const almondIcon = document.querySelector('#almond')
      console.log("#almond" + this.id);
the console said "almondundefined"
I noticed I didn't have a function and that is why it said "almondundefined"...I am wondering where I had to put my callback at this point.

I then got
      const almondIcon = document.querySelector('#almond')
      function logIt() {
      console.log("#almond" + this.id);
      };
      almondIcon.addEventListener('click', logIt);    });

the }); is showing up red though?
I took out the end and moved }; to the bottom and that seemed to get rid of thr error, but I know it is not correct... I stopped and just read the example file more because at this point I was unsure.
Eventually, I saw my mistake was at console.log("#almond" + this.id); I added the id when I was not supposed to. Even visually after fixing it, it makes way more scense and looks more correct.*/

/*I then did the same for the other icons... but after pistachio the rest didnt work. I just added }; at the end of one to try and see if it just needed an end, but that was an error... turns out... my id was not #pista... it was #pist. then it worked.*/


const hazelIcon = document.querySelector('#hazel')
function logIt() {
    console.log(this.id)
}
hazelIcon.addEventListener('click', logIt);


const pistaIcon = document.querySelector('#pist')
function logIt() {
    console.log(this.id)
}
pistaIcon.addEventListener('click', logIt);


const macaIcon = document.querySelector('#maca')
function logIt() {
    console.log(this.id)
}
macaIcon.addEventListener('click', logIt);


const almondVIcon = document.querySelector('#almo-v')
function logIt() {
    console.log(this.id)
}
almondVIcon.addEventListener('click', logIt);


const cocoIcon = document.querySelector('#coco')
function logIt() {
    console.log(this.id)
}
cocoIcon.addEventListener('click', logIt);

// 


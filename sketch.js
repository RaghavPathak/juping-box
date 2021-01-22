var canvas,main_box,box1,box2,nox3,box4,edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);
main_box= createSprite(40,200,40,40) ;

box1 = createSprite(50,390,100,10);
box1.shapeColor="blue";
box2 = createSprite(140,390,100,10)  ;
box2.shapeColor="green" ;
box3 = createSprite(250,390,100,10);
box3.shapeColor="red";
box4 = createSprite(350,390,100,10) ;
box4.shapeColor="yellow";
//create 4 different surfaces

edges=createEdgeSprites()

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    if(main_box.isTouching(box1)) {
        main_box.velocityY = -12;
        main_box.velocityX = 3.9;
        main_box.shapeColor="blue";
    } 

    if(main_box.isTouching(box2)) {
        main_box.velocityY = -12;
        main_box.shapeColor="green";
    } 
    if(main_box.isTouching(box3)) {
        main_box.velocityY = -12;
        main_box.shapeColor="red";
    } 
    if(main_box.isTouching(box4)) {
        main_box.velocityY = -12;
        main_box.shapeColor="yellow";
    } 

main_box.velocityY = main_box.velocityY+0.8;

  

main_box.bounceOff(edges)

    //create edgeSprite
drawSprites();


    //add condition to check if box touching surface and make it box
}

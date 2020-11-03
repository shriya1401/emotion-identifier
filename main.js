Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:'90'
    });

    camera=document.getElementById("camera");

    Webcam.attach("#camera");

function capture (){
    Webcam.snap(function(pic){
        document.getElementById("result").innerHTML=`<img id="snap" src=${pic}>`
}
)}


console.log("ml5 version=", ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json", modelloaded);

function modelloaded(){
    console.log("modelloaded");
    
}

function identify() {
img=document.getElementById("snap");
classifier.classify(img,getresults);
}

function getresults(error,results){
    if(error){
        console.log(error);
    }
        
        else {
            console.log(results);
            document.getElementById("emotion1_name").innerHTML=results[0].label;
            document.getElementById('emotion2_name').innerHTML=results[1].label;
            if(results[0].label=="angry"){
                document.getElementById("emoji_1").innerHTML="&#128545";
               
            }

            if(results[0].label=="sad"){
                document.getElementById("emoji_1").innerHTML="&#128532";
               
            }
            if(results[0].label=="happy"){
                document.getElementById("emoji_1").innerHTML="&#128512";
            }

            if(results[1].label=="angry"){
                document.getElementById("emoji_2").innerHTML="&#128545";
               
            }

            if(results[1].label=="sad"){
                document.getElementById("emoji_2").innerHTML="&#128532";
               
            }
            if(results[1].label=="happy"){
                document.getElementById("emoji_2").innerHTML="&#128512";
            }


        
        }

    }


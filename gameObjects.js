AFRAME.registerComponent("wirefence",{
    init:function(){
        posX=-20,
        posZ=-4
    

    for(var i=0; i<10;i++){
        var w1=document.createElement("a-entity")
        var w2=document.createElement("a-entity")
        var w3=document.createElement("a-entity")
        var w4=document.createElement("a-entity")

        posX+=5;
        PosY=2;
        posZ-=10;

        var scale ={x:2, y: 2, z: 2};

        w1.setAttribute("id", "w1" + i);
        w2.setAttribute("id", "w2" + i);
        w3.setAttribute("id", "w3" + i);
        w4.setAttribute("id", "w4" + i);

        w1.setAttribute("scale", scale);
        w2.setAttribute("scale", scale);
        w3.setAttribute("scale", scale);
        w4.setAttribute("scale", scale);

        w1.setAttribute("gltf-model", "./models/shooter/barbed_wire_fence/scene.gltf");
        w2.setAttribute("gltf-model", "./models/shooter/barbed_wire_fence/scene.gltf");
        w3.setAttribute("gltf-model", "./models/shooter/barbed_wire_fence/scene.gltf");
        w4.setAttribute("gltf-model", "./models/shooter/barbed_wire_fence/scene.gltf");

        w1.setAttribute("rotation", {x:0, y:180, z:0});
        w2.setAttribute("rotation", {x:0, y:180, z:0});
        w3.setAttribute("rotation", {x:0, y:180, z:0});
        w4.setAttribute("rotation", {x:0, y:180, z:0});

        w1.setAttribute("position", {x:posX, y:PosY, z:-35});
        w2.setAttribute("position", {x:posX, y:PosY, z:85});
        w3.setAttribute("position", {x:-30, y:PosY, z:posZ});
        w4.setAttribute("position", {x:50, y:PosY, z:posZ});

        w1.setAttribute("static-body", {});
        w2.setAttribute("static-body", {});
        w3.setAttribute("static-body", {});
        w4.setAttribute("static-body", {});

        var scene= document.querySelector("#scene");

        scene.appendChild(w1);
        scene.appendChild(w2);
        scene.appendChild(w3);
        scene.appendChild(w4);

    }
    }

})

AFRAME.registerComponent("woodenblock",{
    init:function(){
        for(i=0; i<20; i++){
            var box = document.createElement("a-entity")
            box.setAttribute("id", "box"+i)

            px = [22.86, -17.35, -12.81, 0.44, -30.18, -25.89, 15.61, 29.68, 11.95, -15.40, -14.09, 34.76, 2.29, 21.77, 1.57, 34.72, 12.04, -10.90, 6.48, 15.66];

            pz = [54.56, -4.71, 14.91, 56.74, 41.13, 50.76, 57.84, 7.02, -5.24, -26.82, 27.59, -35.78, 34.52, 31.32, -9.22, 26.72, 48.90, 27.24, 9.94, 54.29 ];


            posX = px[i];
            posY = 2;
            posZ = pz[i];

            box.setAttribute("position",{
                x:posX, y:posY, z:posZ
            })

            box.setAttribute("geometry",{
                primitive: "box",
                height: 3,
                width:3,
                depth:3
            });

            box.setAttribute("material",{
                src:"./images/boxtexture1.jpg"
            });

            box.setAttribute("static-body",{

                
            })

            var scene = document.querySelector("#scene");

            scene.appendChild(box)
        
        }    
        
    }
})
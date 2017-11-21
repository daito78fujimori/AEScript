﻿function buildUI(thisObj){
    var w;
    if(thisObj instanceof Panel){
        w = thisObj;
    }else{
        w = new Window("palette","title",[0,0,500,250]);
    }
    
    var a = w.add("button",[10,10,150-10,50-10],"a");
    a.onClick = function(){
        app.beginUndoGroup('buttonA'); 
        var test = app.project.activeItem.selectedLayers[0]

        var pricomp = app.project.activeItem.layers.precompose([test.index],"煙","true");

        var thirdLayer = app.project.activeItem.selectedLayers[0].source.layer(1);
        //複製
        thirdLayer.duplicate();
        var fx01 = app.project.activeItem.selectedLayers[0].source.layer(1);
        //エフェクト
        var FX = fx01("Effects").addProperty("ブラー(滑らか)");
        FX(1).setValue(50);
        FX(3).setValue(1);

        fx01("opacity").setValue(60);  
        app.endUndoGroup();
    }
    var b = w.add("button",[150,10,300-10,50-10],"b");
    
   
   
   
   b.onClick = function(){
       app.beginUndoGroup('buttonB'); 
        var test = app.project.activeItem.selectedLayers[0]
    
        var pricomp = app.project.activeItem.layers.precompose([test.index],"Tkou","true");
        
        var thirdLayer = app.project.activeItem.selectedLayers[0].source.layer(1);
        //複製
        thirdLayer.duplicate();
        var fx02 = app.project.activeItem.selectedLayers[0].source.layer(1);
        var FX,FX2,FX3;
        //エフェクト
        FX = fx02("Effects").addProperty("ドロップシャドウ");
        FX(2).setValue(255); 
        FX(4).setValue(0);
        FX(5).setValue(100);

        FX2 = fx02("Effects").addProperty("ドロップシャドウ");
        FX(2).setValue(255); 
        FX(4).setValue(0);
        FX(5).setValue(100);
        
        FX3 = fx02("Effects").addProperty("塗り");
        FX(4).setValue(150);
        app.endUndoGroup();
        
    }        
        
        return w;
}


var myToolsPanel = buildUI(this);


if(!(myToolsPanel instanceof Panel)){
        myToolsPanel.center();
        myToolsPanel.show();
}        

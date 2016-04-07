
var app = {
    
initialize: function() {
    this.bindEvents();
},
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
},
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
onDeviceReady: function() {
    app.receivedEvent('deviceready');
},
    // Update DOM on a Received Event
receivedEvent: function(id) {
    log("ready","");
    
    inAppBrowserXwalk.addEventListener('onScreenshot', onScr);
    log("addedListener","");
    
}
};



app.initialize();


var br=new Array();
function addw(){
    wd=$("frame");
    s=$("main_sel");
    c=s.options.length*1;
    if (c>0){
        sv=s.options[s.selectedIndex].value;
    }else{
        
    }
    if (c==6) return; // only 6 browsers supported
    var option = document.createElement("option");
    option.text = c;
    s.add(option);
    //log(br,"addw1");
    //alert("addw1");
    //self.webviews[0] = inAppBrowserXwalk.open(0,'about:blank','left=0,top=0,width=320,height=280');
    //br[c*1] = cordova.inAppBrowserXwalk.open(c*1,encodeURI('empty.html'), 'left=0,top=0,width=320,height=280',{loadstop:ldstop});
    //br[c]=cordova.inAppBrowserXwalk.addEventListener('loadstop', ldstop);
    //log(br,"addw2");
    br[c*1] = inAppBrowserXwalk.open(c*1,encodeURI('empty.html'), 'left=0,top=0,width=320,height=280');
    br[c*1].show();
    //alert("added win");
    //log(br,"addw3");
    br[c*1].setPosition(c*1,(c*50),(c*50));
    if (c>0){
        s.selectedIndex=s.selectedIndex+1;
    }else{
        s.selectedIndex=0;// s.selectedIndex=c;
    }
    arrange();
}


function set(){
    s=$("main_sel");
    n=s.options.length;
    if (n==0) return;
    
    sv=s.options[s.selectedIndex].value*1;
    
    
    x=$("x").value;
    y=$("y").value;
    w=$("w").value;
    h=$("h").value;
    //u=$("url").value;
    u=$("url").options[$("url").selectedIndex].value;
    prot=u.substring(0,6).toLowerCase();
    if ( u!="" && (prot!="http:/" || prot!="https:")){
        u="http://"+u;
    }
    
    
    
    //alert(sv);
    //alert(u);
    br[sv].load(u);
    if (x!="" && y!="")br[sv].setPosition(sv,x,y);
    if (w!="" && h!="")br[sv].setSize(sv,w,h);
    
    
}
function arrange(){
    s=$("main_sel");
    //sv=s.options[s.selectedIndex].value;
    x=0;
    y=0;
    n=s.options.length;
    /*var w1= window.window.innerWidth * window.devicePixelRatio;
     var h1 = window.window.innerHeight * window.devicePixelRatio;*/
    var w1= window.window.innerWidth ;
    var h1 = window.window.innerHeight ;
    w=Math.round(w1/n);
    console.log(w);
    log(w,"arrange w=");
    
    //if (w>640) w=640;
    if (w<320) w=Math.round(w1/3)-1;
    log(w,"arrange - w ");
    //h=Math.round((window.innerHeight* window.devicePixelRatio-$("tool").offsetHeight* window.devicePixelRatio)/2)-10;
    h=Math.round((window.innerHeight-$("tool").offsetHeight)/2)-10;
    //alert("h:"+h+" w:"+w+" window/2:"+Math.round(window.innerHeight* window.devicePixelRatio/2)+" tool: "+$("tool").offsetHeight* window.devicePixelRatio);
    if (h>640) h=640;
    //if (h<320) h=320;
    //alert("h:"+h+" w:"+w+" window/2:"+Math.round(window.innerHeight* window.devicePixelRatio/2)+" tool: "+$("tool").offsetHeight* window.devicePixelRatio);
    for(var i=0;i<s.options.length;i++){
        br[i].setPosition(x,y);
        br[i].setSize(w,h);
        x=x+w;
        //if (x+w > window.innerWidth * window.devicePixelRatio){		x=0;y=y+h+50 * devicePixelRatio;		}
        if (x+w > window.innerWidth ){		x=0;y=y+h+5;		}
    }
}




function removew(){
    s=$("main_sel");
    sv=s.options.length-1;
    if (sv>-1){
        s.remove(sv);
        br[sv].close();
    }
    
}


function gobck(){
    test=JSON.parse('{"test":"test","test2":5}');
    log(test,"test");
    log(test.test2,"test2--5");
    s=$("main_sel");
    n=s.options.length;
    if (n==0) return;
    sv=s.options[s.selectedIndex].value*1;
    br[sv].goBack();
}

function hashist(){
    s=$("main_sel");
    n=s.options.length;
    if (n==0) return;
    sv=s.options[s.selectedIndex].value*1;
    br[sv].hasHistory();
}
function histcall(a){
    if (typeof( a)=="object")
        a=JSON.stringify(a)
        alert ("Histcall: "+a);
    log (a,"HistCall");
    console.log(a);
}



function ldstop(a){
    log(a,'LoadStop');
}
function ldstart(a){
    //alert("LdStart: "+a);
    log(a,'LoadStart');
}




function scrShootImage(){
    s=$("main_sel");
    n=s.options.length;
    if (n==0) return;
    sv=s.options[s.selectedIndex].value*1;
    //br[sv].getScreenshot(sv,1,scrtoImg);
    br[sv].getScreenshot(1);
}
function scrtoImg(a){
    log("","scrtoImg start");
    $("img1").src="data:image/jpeg;base64,"+a;
    log("","scrtoImg end");
}

function onScr(a){
    scrtoImg(a.data);
}

function backMain(){
    var s=$("minmenu");
    s.selectedIndex=0;
    var c=s.options.length*1
    $("maintab").style.display="block";
    for (var j=1;j<c;j++)
        $("tab"+j).style.display="none";
}

function opentab(){
    var s=$("minmenu");
    var i=s.selectedIndex;
    var c=s.options.length*1;
    if (i==0){
        backMain();
    }else{
        $("maintab").style.display="none";
        for (var j=1;j<c;j++)
            $("tab"+j).style.display="none";
        $("tab"+i).style.display="block";
    }
}
function $(a){	return document.getElementById(a);}



function log(a,b){
    var currentdate = new Date();
    var datetime = ""
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds()+" ";
    l=$("tlog");
    
    if (typeof( a)=="object")
        a=JSON.stringify(a)
        if (b!="")b=" - "+b+" - ";
    l.innerHTML=datetime+typeof(a)+" "+b+a+"\n"+l.innerHTML;
}
function clearlog(){
    $('tlog').innerHTML="";
}

function injectJS1(){
    s=$("main_sel");	n=s.options.length;	if (n==0) return;	sv=s.options[s.selectedIndex].value*1;
    var js=$("ta1").value;
    log(js,"injectJS");
    br[sv].executeScript(js);
}

function injectCSS(){
    s=$("main_sel");	n=s.options.length;	if (n==0) return;	sv=s.options[s.selectedIndex].value*1;
    var js=$("ta2").value;
    log(js,"injectCSS");
    br[sv].insertCSS(js);
}




function injectCSSFile(){
    s=$("main_sel");	n=s.options.length;	if (n==0) return;	sv=s.options[s.selectedIndex].value*1;
    var path=document.location+"";
    path=path.replace("index.html","green.css");
    //alert(path);
    //br[sv].insertCSSFile({file:'file:///android_asset/www/green.css'});
    br[sv].insertCSSFile(path);
    
}
function injectJSFile(){
    s=$("main_sel");	n=s.options.length;	if (n==0) return;	sv=s.options[s.selectedIndex].value*1;
    var path=document.location+"";
    path=path.replace("index.html","red.js");
    br[sv].insertScript(path);
    
}

function checkWK(){
    if (window.webkit && window.webkit.messageHandlers){
        alert("IS wkWebView");
    }else{
        alert("not WK");
    }
    
}
function hideall(){
    s=$("main_sel");	n=s.options.length;	if (n==0) return;	sv=s.options[s.selectedIndex].value*1;
    for(i=0;i<n;i++)br[i].hide();
    
}
function showall(){
    s=$("main_sel");	n=s.options.length;	if (n==0) return;	sv=s.options[s.selectedIndex].value*1;
    for(i=0;i<n;i++)br[i].show();
}

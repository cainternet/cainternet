
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_cta-button}","mouseover",function(sym,e){sym.getSymbol("cta-button").$("cta-button").play(100);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Background'
(function(symbolName){})("Background");
//Edge symbol end:'Background'

//=========================================================

//Edge symbol: 'cta-button'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",100,function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",600,function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",900,function(sym,e){sym.stop();});
//Edge binding end
})("cta-button");
//Edge symbol end:'cta-button'

//=========================================================

//Edge symbol: 'slideOne'
(function(symbolName){})("slideOne");
//Edge symbol end:'slideOne'
})(jQuery,AdobeEdge,"EDGE-9921758");
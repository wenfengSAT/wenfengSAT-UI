
var mouseDowned=false;
var dragSource=null;
var moveConfirm = "";

function doDragStart(source){
   if( !isHistoryChart ){
       window.dragtext.innerText = source.treeNode.name;
       window.dragicon.style.display = "block";
       window.dragicon.style.left = window.event.clientX + document.body.scrollLeft+1 ;
       window.dragicon.style.top = window.event.clientY + document.body.scrollTop+1 ;
   }
}

function doDrag(source){
   if( !isHistoryChart ){
       window.dragicon.style.left = window.event.clientX + document.body.scrollLeft+1 ;
       window.dragicon.style.top = window.event.clientY + document.body.scrollTop+1 ;
   }
}

function doDragEnd(source){
   mouseDowned=false;
   dragSource=null;
   window.dragicon.style.display = "none";
}

function doDragEnter(target){
   window.event.returnValue=!checkDrop(window.event,target);
}

function doDragOver(target){
   window.event.returnValue=!checkDrop(window.event,target);
}

function doDragLeave(target){
   window.event.returnValue=!checkDrop(window.event,target);
}

function doDrop(target){
   var isSort=false,viewOrder,upperUnitOid,i;
   
   /*
   if( dragSource.treeNode.parent == target.treeNode.parent ){
      isSort = confirm("do you want to sort the unit?click ok to sort the unit,click cancel to move the unit.");
   }*/
   
   if( !confirm(moveConfirm) )
       return ;
   
   if( isSort ){
      for(i=0;i<target.treeNode.parent.subnode.length;i++){
         if( target.treeNode.parent.subnode[i]==target.treeNode ){
            viewOrder = i+1;
            break;
         }
      }
      upperUnitOid = target.treeNode.parent.oid;
   }else{
      if( target.treeNode.subnode == null )
        viewOrder = 1;
      else
        viewOrder = target.treeNode.subnode.length +1;
      upperUnitOid = target.treeNode.oid;
   }
   
   window.location.replace( contextPath + "/structureContent.do?state=moveUnitUpdate"+
                            "&values(structureOid)=" + structureOid + 
                            "&values(hiberarchyOid)=" + hiberarchyOid +
                            "&values(unitOid)=" + dragSource.treeNode.oid + 
                            "&values(upperUnitOid)=" + upperUnitOid +
                            "&values(viewOrder)="+ viewOrder +
                            "&values(version)=" + chartVersion );
   
}

function doMouseDown(source){
   if( !isHistoryChart )
      mouseDowned=true;
   else
      mouseDowned=false;
}

function doMouseMove(source){
  if(mouseDowned){
     dragSource=source;
     source.dragDrop();
     mouseDowned=false;
     dragSource=null;
  }
}

function doMouseUp(source){
   mouseDowned=false;
}

function checkDrop(e,source){
   if( isHistoryChart )
        return false;

   if( dragSource!=null && dragSource.tagName=="DIV" && dragSource.treeNode!=undefined && dragSource.treeNode!=null){
      if(dragSource==source)
         return false;
      
      if(dragSource.treeNode.parent == source.treeNode )
        return false;
        
      var node = source.treeNode;
      while( node.parent!=null ){
         if( node.parent==dragSource.treeNode )
            return false;
         node = node.parent;
      }
      
      return true;
   }
   
   return false;
}
 
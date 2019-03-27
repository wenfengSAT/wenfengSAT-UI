if (document.all)    {n=0;ie=1;fShow="visible";fHide="hidden";}
if (document.layers) {n=1;ie=0;fShow="show";   fHide="hide";}
// Node Class Constructor.

/*
 * Global Varibles
 */
var rightX, bottomY, leftX, topY;   //Rect of floating menu of which id is actionbar

// array to store the node need to adapt position , only when the view mode is "chart", it is useful .
var adaptNodes = new Array();
var adaptImages = new Array();

// array to store the level information.only when the view mode is "chart",it is useful .
var levelNodes = new Array();    //store the viewNodes of each level
var levelMaxHeight = new Array(); //store the maxHeight value of each level
var levelAdaptedCount = new Array(); //store hadAdapted node count of each level

/*
 * A organiztion unit node
 */
function Node(oid,code,name,level,open) {
  this.oid = oid;
  this.code = code;
  this.name = name;
  this.level = level;
  this.open = open;  

  this.parent = null;
  this.viewNode =null;
  this.subnode = null;

  this.addSubnode = NodeAddSubnode;
  this.getSubnode = NodeGetSubnode;
  this.createAllNode = NodeCreateAllNodes;
  this.createAllNodeH = NodeCreateAllNodesH;
  this.createAllNodeV = NodeCreateAllNodesV;
  this.createAllNodeT = NodeCreateAllNodesT;

  this.createViewNode = NodeCreateViewNode;
  this.createViewNodeV = NodeCreateViewNodeV;
  this.createViewNodeH = NodeCreateViewNodeH;
  this.createViewNodeT = NodeCreateViewNodeT;
}

// Node Class Methods.

function NodeAddSubnode(node) {
   if( this.subnode==null )
      this.subnode =new Array();

  this.subnode[this.subnode.length] = node;
  node.parent = this;
}

function NodeGetSubnode(index){
    if( this.subnode==null)
        return null;
    if( index<0 || index>=this.subnode.length )
        return null;
    return this.subnode[index];
}



// createAllNode-----------------------------------------------------------------------------

function NodeCreateAllNodes(inParentIndex,parentChildCount){
    if( mode=="chart" ){
        return this.createAllNodeH(inParentIndex,parentChildCount);
    }else{
        return this.createAllNodeT(inParentIndex,parentChildCount);
    }
}


function NodeCreateAllNodesT(inParentIndex,parentChildCount,level,isLast,emptyPrexCount){
    //set level value
    if( this.parent==null ){
       level=0;
       isLast = new Array();
       emptyPrexCount = new Array();
    }
    isLast[level] = (inParentIndex+1==parentChildCount);
    if( this.parent==null )
        emptyPrexCount[level] = 0;
    else
        emptyPrexCount[level] = this.level - this.parent.level - 1;

    //create whole table;
    var wholeTable = document.createElement("<table width='100%' height='1' border='0' cellpadding='0' cellspacing='0' >");
    var curRow = wholeTable.insertRow();

    //create all the prex image
    //modify by liudq, to show the level relation
    var i,curCell,curImage;
    for(i=0;i<level;i++){
        for(var j=0;j<emptyPrexCount[i];j++){
            curCell = curRow.insertCell();
            curCell.width = "1";
            curCell.noWrap = true;
            curImage = document.createElement( "<img src='' border='0' width='40' height='36' >" );
            curCell.appendChild(curImage);
            curImage.src = contextPath + "/images/orgtreeempty.gif";
        }

        curCell = curRow.insertCell();
        curCell.width = "1";
        curCell.noWrap = true;
        curImage = document.createElement( "<img src='' border='0' width='40' height='36' >" );
        curCell.appendChild(curImage);

        if( i==level-1 ){
           if( inParentIndex+1==parentChildCount )
              curImage.src = contextPath + "/images/orgtreebottom.gif";
           else
              curImage.src = contextPath + "/images/orgtreecenter.gif";
        }else{
           if( isLast[i+1] )
              curImage.src = contextPath + "/images/orgtreeempty.gif";
           else
              curImage.src = contextPath + "/images/orgtreevertical.gif";
        }
    }

    for(var j=0;j<emptyPrexCount[level];j++){
        curCell = curRow.insertCell();
        curCell.width = "1";
        curCell.noWrap = true;
        curImage = document.createElement( "<img src='' border='0' width='40' height='36' >" );
        curCell.appendChild(curImage);
        curImage.src = contextPath + "/images/orgtreehorizontal.gif";
    }

    //create the open image
    curCell = curRow.insertCell();
    curCell.width = "1";
    curCell.noWrap = true;
    if( this.subnode!=null && this.subnode.length>0 ){
       curImage = document.createElement( "<img src='' onclick='doOpen(this.viewNode);' style='cursor:hand' border='0' width='40' height='36'>" );
       if( this.open ){
          if( this.parent==null )
             curImage.src = contextPath + "/images/orgtreerootopen.gif";
          else
             curImage.src = contextPath + "/images/orgtreeopen.gif";
       }else{
          if( this.parent==null )
             curImage.src = contextPath + "/images/orgtreerootclose.gif";
          else
             curImage.src = contextPath + "/images/orgtreeclose.gif";
       }
    }else{
       curImage = document.createElement( "<img src='' border='0' width='40' height='36'>" );
       if( this.parent!=null )
          curImage.src = contextPath + "/images/orgtreehorizontal.gif";
       else
          curImage.src = contextPath + "/images/orgtreeempty.gif";
    }
    curCell.appendChild(curImage);

    //create viewnode
    curCell = curRow.insertCell();
    curCell.width = "1";
    curCell.noWrap = true;
    var viewNode = this.createViewNode(this.oid);
    curCell.appendChild(viewNode);
    viewNode.openImage = curImage;
    curImage.viewNode = viewNode;

    curCell = curRow.insertCell();
    curCell.width = "90%";

    //create subnode's row
    var subTable,colSpan;
    colSpan = curRow.cells.length;
    if( this.subnode!=null && this.subnode.length>0 ){
       curRow = wholeTable.insertRow();
       curRow.style.display = this.open?"block":"none";
       curCell = curRow.insertCell();
       curCell.colSpan = colSpan;

       for( i=0;i<this.subnode.length;i++){
          subTable = this.getSubnode(i).createAllNodeT(i, this.subnode.length, level+1, isLast, emptyPrexCount);
          curCell.appendChild(subTable);
       }
    }

    return wholeTable;
}


function NodeCreateAllNodesV(inParentIndex,parentChildCount){
    //create wholetable and init
    var length;
    if( this.subnode == null || this.subnode.length==0 )
        length=1;
    else
        length=this.subnode.length;

    var wholeTable = document.createElement("<table border='0' cellpadding='0' cellspacing='0' >");
    var i,curRow,curCell,j;
    for(i=0;i<length;i++){
        curRow = wholeTable.insertRow();

        curCell = curRow.insertCell();
        curCell.width = "20";
        curCell.noWrap = true;
        curRow.insertCell();
        curRow.insertCell();

        if( i!=length-1 ){
           curRow = wholeTable.insertRow();

           curCell = curRow.insertCell();
	   curCell.width = "20";
	   curCell.noWrap = true;
	   curRow.insertCell();
           curRow.insertCell();

           if( !(length%2==0 && i==length/2-1) )
               curCell.height="13";
        }
    }

    for(i=0;i< wholeTable.rows.length;i++){
        wholeTable.rows[i].cells[2].align = "left";
    }

    //create viewNode
    var viewNode = this.createViewNode(this.oid);
    wholeTable.rows[length-1].cells[1].appendChild(viewNode);
    wholeTable.rows[length-1].cells[1].align="center";
    wholeTable.rows[length-1].cells[1].vAlign="center";

    //create top line
    var curImage;
    if( this.parent!=null ){

        if( inParentIndex==0 ){
           if( parentChildCount==1 ){
               //insert "   |   "
              curImage = document.createElement("<img src='" +contextPath+ "/images/orghorizontalshort.gif' width='20' height='60'>");
    	      wholeTable.rows[length-1].cells[0].appendChild(curImage);
    	      wholeTable.rows[length-1].cells[0].align="center";
    	      wholeTable.rows[length-1].cells[0].vAlign="center";
           }else{
              //insert "   ©°©¤©¤"
               subTable = document.createElement("<table width='100%' height='100%' border='0' cellspacing='0' cellpadding='0'>");

	       curRow = subTable.insertRow();
	       curCell = curRow.insertCell();
	       curCell.height="50%";

	       curRow = subTable.insertRow();
	       curCell = curRow.insertCell();
	       curImage = document.createElement("<img src='" +contextPath+ "/images/orgverticaltop.gif' width='20' height='60'>");
               curCell.appendChild(curImage);

	       curRow = subTable.insertRow();
	       curCell = curRow.insertCell();
	       curCell.height="50%";
	       curCell.background = contextPath + "/images/orgverticallong.gif";

    	       wholeTable.rows[length-1].cells[0].appendChild(subTable);
    	       wholeTable.rows[length-1].cells[0].height="100%";
    	       wholeTable.rows[length-1].cells[0].align="center";
               for(i=length;i<length*2-1;i++)
    	          wholeTable.rows[i].cells[0].background = contextPath + "/images/orgverticallong.gif";
           }
        }else if( parentChildCount%2==1 && inParentIndex==(parentChildCount-1)/2 ){
             //insert "©¤©¤©à©¤©¤"
            for(i=0;i<length*2-1;i++){
               if( i==length-1 ) {
                   curImage = document.createElement("<img src='" +contextPath+ "/images/orgverticalcross.gif' width='20' height='60'>");
                   wholeTable.rows[length-1].cells[0].appendChild(curImage);
                   wholeTable.rows[length-1].cells[0].align="center";
               }
               wholeTable.rows[i].cells[0].background = contextPath + "/images/orgverticallong.gif";
            }
        }else if( inParentIndex==parentChildCount-1 ){
             //insert "©¤©¤©´"
            subTable = document.createElement("<table width='100%' height='100%' border='0' cellspacing='0' cellpadding='0'>");

	    curRow = subTable.insertRow();
	    curCell = curRow.insertCell();
	    curCell.height="50%";
	    curCell.background = contextPath + "/images/orgverticallong.gif";

	    curRow = subTable.insertRow();
	    curCell = curRow.insertCell();
	    curImage = document.createElement("<img src='" +contextPath+ "/images/orgverticalbottom.gif' width='20' height='60'>");
	    curCell.appendChild(curImage);

	    curRow = subTable.insertRow();
	    curCell = curRow.insertCell();
	    curCell.height="50%";

            wholeTable.rows[length-1].cells[0].appendChild(subTable);
            wholeTable.rows[length-1].cells[0].height="100%";
            wholeTable.rows[length-1].cells[0].align="center";
            for(i=0;i<length-1;i++)
	        wholeTable.rows[i].cells[0].background = contextPath + "/images/orgverticallong.gif";
        }else{
             //insert "©¤©¤©Ð©¤©¤"
            for(i=0;i<length*2-1;i++){
               if( i==length-1 ){
        	   curImage = document.createElement("<img src='" +contextPath+ "/images/orgverticalcenter.gif' width='20' height='60'>");
        	   wholeTable.rows[i].cells[0].appendChild(curImage);
        	   wholeTable.rows[i].cells[0].align="center";
               }
               wholeTable.rows[i].cells[0].background = contextPath + "/images/orgverticallong.gif";
            }
        }
    }


    //create bottomY line
    var subTable;
    if( this.subnode!=null && this.subnode.length>0 ){

       for(i=0;i<wholeTable.rows.length;i++)
           wholeTable.rows[i].cells[2].style.display = this.open?"block":"none";

       for(i=0;i<length-1;i++){

         if( length%2==0 && i==length/2-1 ){
   	    //insert "©¤©¤©Ø©¤©¤"
	    subTable = document.createElement("<table height='100%' width='20' border='0' cellspacing='0' cellpadding='0'>");
	    wholeTable.rows[i*2+1].cells[2].appendChild(subTable);
	    wholeTable.rows[i*2+1].cells[2].height="100%";
	    curCell = subTable.insertRow().insertCell();
	    curCell.width="20";
	    curCell.height="100%";
	    curCell.vAlign="center";
	    curCell.background = contextPath + "/images/orgverticallong.gif";

	    curImage = document.createElement("<img src='" +contextPath+ "/images/orgverticalcenter2.gif' width='20' height='60'>");
	    curCell.appendChild( curImage );

         }else{
	    //insert "©¤©¤©¤©¤©¤"
	    subTable = document.createElement("<table height='100%' width='20' border='0' cellspacing='0' cellpadding='0'>");
	    wholeTable.rows[i*2+1].cells[2].appendChild(subTable);
	    curCell = subTable.insertRow().insertCell();
	    curCell.width="100%";
	    curCell.height="100%";
	    curCell.background = contextPath + "/images/orgverticallong.gif";
         }
       }

       //call the child's createAllNode() method
       if( this.open ){
          var subViewNode;
          for(i=0;i<length;i++){
             subViewNode = this.getSubnode(i).createAllNodeV(i,length);
             wholeTable.rows[i*2].cells[2].appendChild(subViewNode);
          }
       }

    }

    return wholeTable;
}


function adaptPosition(){
    var childViewNode ;
    for(var i=adaptNodes.length-1;i>=0;i--){
        if( adaptNodes[i].treeNode.open){
            if (adaptNodes[i].offsetHeight == 0) continue;
            adaptNodes[i].parentNode.height = adaptNodes[i].offsetHeight;
            adaptNodes[i].parentNode.width = adaptNodes[i].offsetWidth;
            adaptNodes[i].style.position = "absolute";
            childViewNode = adaptNodes[i].treeNode.subnode[(adaptNodes[i].treeNode.subnode.length-1)/2].viewNode;
            if( childViewNode.style.position!="absolute" )
                adaptNodes[i].style.left = calculateSumOffset(childViewNode, "offsetLeft");
            else
                adaptNodes[i].style.left = childViewNode.style.left;
            adaptNodes[i].style.top = calculateSumOffset(adaptNodes[i].parentNode, "offsetTop");
            if( adaptImages[i]!=null ){
               adaptImages[i].parentNode.height = adaptImages[i].offsetHeight;
               adaptImages[i].parentNode.width = adaptImages[i].offsetWidth;
               adaptImages[i].style.position = "absolute";
               adaptImages[i].style.left = parseInt(adaptNodes[i].style.left) + ( parseInt(adaptNodes[i].offsetWidth)-parseInt(adaptImages[i].offsetWidth) )/2;
               adaptImages[i].style.top = calculateSumOffset(adaptImages[i].parentNode, "offsetTop" );
            }
        }else{
            adaptNodes[i].style.position = "static";
            if( adaptImages[i]!=null )
                adaptImages[i].style.position = "static";
        }
    }

}

function NodeCreateAllNodesH(inParentIndex,parentChildCount){
    var needAdapt=false;
    if( this.subnode!=null && this.subnode.length!=0 && this.subnode.length%2==1 ){
        var child = this.subnode[(this.subnode.length-1)/2];
        needAdapt = (child.subnode!=null && child.subnode.length>0) ;
    }

    //create wholetable and init
    var length;
    if( this.subnode == null || this.subnode.length==0 )
        length=1;
    else
        length=this.subnode.length;

    var wholeTable = document.createElement("<table border='0' cellpadding='0' cellspacing='0' >");
    var i,curRow,curCell,j;

    for(i=0;i<3;i++){
        if (i<=1) {
			curRow = wholeTable.insertRow();
			if (length == 1) {
				curCell = curRow.insertCell();
				curCell.noWrap = false;
			} else {
				curCell = curRow.insertCell();
				curCell.noWrap = false;
				curCell.colSpan=length-1;
				curCell.style.display="none";

				curCell = curRow.insertCell();
				curCell.noWrap = true;

				curCell = curRow.insertCell();
				curCell.noWrap = false;
				curCell.colSpan=length-1;
				curCell.style.display="none";
			}
        } else {
			curRow = wholeTable.insertRow();
			for(j=0;j<length;j++){
				curCell = curRow.insertCell();
				curCell.noWrap = false;

				if( j!=length-1 ){
				   curCell = curRow.insertCell();
				   curCell.noWrap = true;

				   if( !(length%2==0 && j==length/2-1) )
					  curCell.width="13";
				}
			}
        }
    }
    wholeTable.rows[0].cells[0].height="20";
    curRow = wholeTable.rows[2];
    for(i=0;i< curRow.cells.length;i++){
        curRow.cells[i].vAlign = "top";

    }

    //create viewNode
    var viewNode = this.createViewNode(this.oid);
	if (length == 1) {
		initLevelViewNode(wholeTable.rows[1].cells[0] ,viewNode);
		wholeTable.rows[1].cells[0].align="center";
	} else {
		initLevelViewNode(wholeTable.rows[1].cells[1] ,viewNode);
		wholeTable.rows[1].cells[1].align="center";
	}
    if( needAdapt ){
        adaptNodes[adaptNodes.length] = viewNode;
    }

    //create top line
    var curImage = null ;
    if( this.parent!=null ){
        curRow = wholeTable.rows[0];
        if( inParentIndex==0 ){
           if( parentChildCount==1 ){
               //insert "   |   "
              curImage = document.createElement("<img src='" +contextPath+ "/images/orgvertical.gif' width='100' height='20'>");
              if (length == 1) {
                  curRow.cells[0].appendChild(curImage);
                  curRow.cells[0].align="center";
              } else {
                  curRow.cells[1].appendChild(curImage);
                  curRow.cells[1].align="center";
              }
           }else{
              //insert "   ©°©¤©¤"
               subTable = document.createElement("<table width='100%' border='0' cellspacing='0' cellpadding='0'>");
               subTable.insertRow();
               subTable.rows[0].insertCell().width="50%";
               subTable.rows[0].insertCell();
               subTable.rows[0].insertCell().width="50%";

               curImage = document.createElement("<img src='" +contextPath+ "/images/orgleft.gif' width='100' height='20'>");
               subTable.rows[0].cells[1].appendChild(curImage);
               subTable.rows[0].cells[2].background = contextPath + "/images/orghorizontal.gif";

				if (length == 1) {
				   curRow.cells[0].appendChild(subTable);
				   curRow.cells[0].align="center";
				} else {
				   curRow.cells[1].appendChild(subTable);
				   curRow.cells[1].align="center";
    	           curRow.cells[2].background = contextPath + "/images/orghorizontal.gif";
				}
           }
        }else if( parentChildCount%2==1 && inParentIndex==(parentChildCount-1)/2 ){
             //insert "©¤©¤©à©¤©¤"
			if (length == 1) {
			   curImage = document.createElement("<img src='" +contextPath+ "/images/orgcross.gif' width='100' height='20'>");
			   curRow.cells[0].appendChild(curImage);
			   curRow.cells[0].align="center";
			   curRow.cells[0].background = contextPath + "/images/orghorizontal.gif";
			} else {
			   curImage = document.createElement("<img src='" +contextPath+ "/images/orgcross.gif' width='100' height='20'>");
			   curRow.cells[1].appendChild(curImage);
			   curRow.cells[1].align="center";
			   curRow.cells[0].background = contextPath + "/images/orghorizontal.gif";
			   curRow.cells[1].background = contextPath + "/images/orghorizontal.gif";
			   curRow.cells[2].background = contextPath + "/images/orghorizontal.gif";
			}
        }else if( inParentIndex==parentChildCount-1 ){
             //insert "©¤©¤©´"
            subTable = document.createElement("<table width='100%' border='0' cellspacing='0' cellpadding='0'>");
            subTable.insertRow();
            subTable.rows[0].insertCell().width="50%";
            subTable.rows[0].insertCell();
            subTable.rows[0].insertCell().width="50%";

            curImage = document.createElement("<img src='" +contextPath+ "/images/orgright.gif' width='100' height='20'>");
            subTable.rows[0].cells[1].appendChild(curImage);
            subTable.rows[0].cells[0].background = contextPath + "/images/orghorizontal.gif";

			if (length == 1) {
				curRow.cells[0].appendChild(subTable);
				curRow.cells[0].align="center";
			} else {
				curRow.cells[1].appendChild(subTable);
				curRow.cells[1].align="center";
          		curRow.cells[0].background = contextPath + "/images/orghorizontal.gif";
			}

        }else{
             //insert "©¤©¤©Ð©¤©¤"
			if (length == 1) {
			   curImage = document.createElement("<img src='" +contextPath+ "/images/orgcenter.gif' width='100' height='20'>");
			   curRow.cells[0].appendChild(curImage);
			   curRow.cells[0].align="center";
			   curRow.cells[0].background = contextPath + "/images/orghorizontal.gif";
			} else {
			   curImage = document.createElement("<img src='" +contextPath+ "/images/orgcenter.gif' width='100' height='20'>");
			   curRow.cells[1].appendChild(curImage);
			   curRow.cells[1].align="center";
			   curRow.cells[0].background = contextPath + "/images/orghorizontal.gif";
			   curRow.cells[1].background = contextPath + "/images/orghorizontal.gif";
			   curRow.cells[2].background = contextPath + "/images/orghorizontal.gif";
			}
        }
    }
    if( needAdapt ){
        adaptImages[adaptImages.length] = curImage;
    }

    //create bottomY line
    var subTable;
    if( this.subnode!=null && this.subnode.length>0 ){
       curRow = wholeTable.rows[2];
       wholeTable.rows[2].style.display = this.open?"block":"none";
       if (wholeTable.rows[0].cells.length > 1) {
		   wholeTable.rows[0].cells[0].style.display=this.open?"block":"none";
		   wholeTable.rows[0].cells[2].style.display=this.open?"block":"none";
		   wholeTable.rows[1].cells[0].style.display=this.open?"block":"none";
		   wholeTable.rows[1].cells[2].style.display=this.open?"block":"none";
	   }
       for(i=0;i<length-1;i++){

         if( length%2==0 && i==length/2-1 ){
   	    //insert "©¤©¤©Ø©¤©¤"
	    subTable = document.createElement("<table width='100%' border='0' cellspacing='0' cellpadding='0'>");
	    curRow.cells[i*2+1].appendChild(subTable);
	    subTable.insertRow();
	    curCell = subTable.rows[0].insertCell();
	    curCell.width="50%";
	    curCell = subTable.rows[0].insertCell();
	    curCell.align="center";
	    curCell = subTable.rows[0].insertCell();
	    curCell.width="50%";

	    subTable.rows[0].cells[0].background = contextPath + "/images/orghorizontal.gif";
	    curImage = document.createElement("<img src='" +contextPath+ "/images/orgtop.gif' width='100' height='20'>");
	    subTable.rows[0].cells[1].appendChild(curImage);
	    subTable.rows[0].cells[2].background = contextPath + "/images/orghorizontal.gif";

         }else{
	    //insert "©¤©¤©¤©¤©¤"
	    subTable = document.createElement("<table width='100%' border='0' cellspacing='0' cellpadding='0'>");
	    curRow.cells[i*2+1].appendChild(subTable);
	    curCell = subTable.insertRow().insertCell();
	    curCell.height="20";
	    curCell.background = contextPath + "/images/orghorizontal.gif";

	    }
       }

       //call the child's createAllNode() method
       if( this.open ){
          var subViewNode;
          for(i=0;i<length;i++){
             subViewNode = this.getSubnode(i).createAllNodeH(i,length);
             wholeTable.rows[2].cells[i*2].appendChild(subViewNode);
          }
       }

    }

    return wholeTable;
}


//create view Node --------------------------------------------------------------------------------------------------------

function NodeCreateViewNode(oid){
    if( mode=="chart" ){
       return this.createViewNodeH(oid);
    }else{
       return this.createViewNodeT(oid);
    }
}


//show organization unit by tree model
function NodeCreateViewNodeT(oid){
    var idUnitItem = "unititem" + oid;
    var idItem = "item" + oid;

    var aDiv = document.createElement("<div  class='orgunitchartitemcell'>");
    aDiv.treeNode = this;
    this.viewNode = aDiv;

    //create the Whole table
    var wholeTable = document.createElement("<table width='100%' height='25' border='0' cellspacing='0' cellpadding='0' style='PADDING-RIGHT: 4px; PADDING-LEFT: 4px' >");
    aDiv.appendChild(wholeTable);
    var curRow = wholeTable.insertRow();

    //create the first col
    var curCell = curRow.insertCell();
    curCell.height = "25";
    curCell.width = "1%";
    curCell.noWrap = true;
    curCell.className = "subtableheader";

    
    var clickHandle = "doEditNode(this.viewNode," + "this" + ");";        
    var curImage = document.createElement("<img id='" + idItem + "' onmouseover='" +clickHandle+ "' src='" +contextPath+ "/images/edit.gif' width='16' height='16' border='0' style='cursor:hand;' >");
    curCell.appendChild( curImage );
    curImage.viewNode = aDiv;
    aDiv.editImage = curImage;
   
  //create the second col
    curCell = curRow.insertCell();
    curCell.width = "50%";
    curCell.height = "25";
    curCell.noWrap = true;
    curCell.innerText = this.name;

    //create the third col
    curCell = curRow.insertCell();
    curCell.width = "49%";
    curCell.height = "25";
    curCell.noWrap = true;

    return aDiv;
}



function NodeCreateViewNodeV(oid){
    var idUnitItem = "unititem" + oid;
    var idItem = "item" + oid;

    var aDiv = document.createElement("<div class='orgunitchartitemcell'>");
    aDiv.treeNode = this;
    this.viewNode = aDiv;

    //create the Whole table
    var wholeTable = document.createElement("<table width='100%' border='0' cellspacing='0' cellpadding='0' style='PADDING-RIGHT: 2px; PADDING-LEFT: 2px' >");
    aDiv.appendChild(wholeTable);
       //create the first col of whole table.
    var curCell = curRow.insertCell();
    curCell.className = "subtableheader";
    curCell.noWrap = true;

    //create the subtable of first col
    var subTable = document.createElement( "<table width='1' border='0' cellspacing='0' cellpadding='0'>" );
    curCell.appendChild(subTable);
    
    
    curRow = subTable.insertRow();
    curRow.align="center";
    curCell = curRow.insertCell();
    curCell.height = "16";
    var clickHandle = "doEditNode(this.viewNode," + "this" + ");";
    var curImage = document.createElement("<img id='" + idItem + "' onmouseover='" +clickHandle+ "' src='" +contextPath+ "/images/edit.gif' width='16' height='16' border='0' style='cursor:hand;' >");
    curCell.appendChild( curImage );
    curImage.viewNode = aDiv;
    aDiv.editImage = curImage;
    
    curRow = subTable.insertRow();
    curRow.align="center";
    curCell = curRow.insertCell();
    curCell.height = "16"
    clickHandle = 'assignJob(this.viewNode.treeNode.oid);';
    curImage = document.createElement("<img onclick='" +clickHandle + "' src='" +contextPath+ "/images/userbro.gif' width='16' height='16' border='0' style='cursor:hand;' >");
//    curImage.alt = assignJobAltLabel;
    curCell.appendChild( curImage );
    curImage.viewNode = aDiv;
    aDiv.assignJobImage = curImage;

    //create the second col of whole table
    curCell = wholeTable.rows[0].insertCell();
    curCell.className = "subalterbar";
    curCell.noWrap = true;
    
    //create subtable of second col
    subTable = document.createElement( "<table width='100' border='0' cellspacing='0' cellpadding='2'>" );
    curCell.appendChild(subTable);
    
    if( !isCompact ){
        curRow = subTable.insertRow();
        curCell = curRow.insertCell();
        curCell.width = "1%";
        curCell.align = "right";
        curCell.noWrap = true;
        curCell.innerText = codeKeyValue;
        curCell = curRow.insertCell();
        curCell.width = "100%";
        curCell.noWrap = true;
        curCell.innerText = this.code;
    }

    curRow = subTable.insertRow();
    if( !isCompact ){
        curCell = curRow.insertCell();
        curCell.width = "1%";
        curCell.align = "right";
        curCell.vAlign = "top";
        curCell.noWrap = true;
        curCell.innerText = nameKeyValue;
    }
    curCell = curRow.insertCell();
    curCell.width = "100%";
    curCell.noWrap = true;
    curCell.innerText = this.name;

    if( !isCompact ){
        curRow = subTable.insertRow();
        curCell = curRow.insertCell();
        curCell.width = "1%";
        curCell.align = "right";
        curCell.vAlign = "top";
        curCell.noWrap = true;        
        curCell = curRow.insertCell();
        curCell.width = "100%";
        curCell.noWrap = true;        
    }

    //create subtable of second col
    subTable = document.createElement( "<table width='100' border='0' cellspacing='0' cellpadding='2'>" );
    wholeTable.rows[0].cells[1].appendChild(subTable);
    aDiv.chiefJobTable = subTable;
    
    curRow = subTable.insertRow();
    curCell = curRow.insertCell();
    curCell.width = "100%";
    curCell.align = "left";
    curCell.vAlign = "center";
    curCell.noWrap = true;

    //create the third col of whole table
    curCell = wholeTable.rows[0].insertCell();
    curCell.noWrap = true;
    curCell.align = "center";
    curCell.vAlign = "center";
    curCell.className = "subalterbar";
    if( this.subnode!=null && this.subnode.length>0 ){
        if( this.open )
            curImage = document.createElement("<img onclick='doOpen(this.viewNode);' src='" +contextPath+ "/images/expand.gif' width='18' height='18' style='cursor=hand;' >");
        else
            curImage = document.createElement("<img onclick='doOpen(this.viewNode);' src='" +contextPath+ "/images/shrink.gif' width='18' height='18' style='cursor=hand;' >");
        curImage.viewNode = aDiv;
        aDiv.openImage = curImage;
        curCell.appendChild(curImage);
    }else{
        curCell.width="18";
    }
    return aDiv;
}


//show organization unit by char model
function NodeCreateViewNodeH(oid){
    var idUnitItem = "unititem" + oid;
    var idItem = "item" + oid;

    var aDiv = document.createElement("<div class='orgunitchartitemcell'>");
    aDiv.treeNode = this;
    this.viewNode = aDiv;

    //create the Whole table
    var wholeTable = document.createElement("<table width='100' height='100%' border='0' cellpadding='0' cellspacing='0'>");
    aDiv.appendChild(wholeTable);

       //create the first Row of whole table.
    var curRow = wholeTable.insertRow();
    var curCell = curRow.insertCell();
    curCell.className = "subtableheader";
    curCell.align = "right";
    
    //create the subtable of first row
    var subTable = document.createElement( "<table style='padding-left:2px;padding-right:2px;' width='100' border='0' cellspacing='0' cellpadding='0'>" );
    curCell.appendChild(subTable);
    curRow = subTable.insertRow();
    curRow.align="center";
    
    curCell = curRow.insertCell();
    curCell.width = "33%"
    var clickHandle = "viewUnitInfo(this.viewNode.treeNode.oid);";
    var curImage = document.createElement("<img id='" + idItem + "' onclick='" +clickHandle+ "' src='" +contextPath+ "/images/edit.gif' width='16' height='16' border='0' style='cursor:hand;' >");
    curImage.alt = viewUnitInfoAltLabel;
    curCell.appendChild( curImage );
    curImage.viewNode = aDiv;
    aDiv.editImage = curImage;
    
    curCell = curRow.insertCell();
    curCell.width = "33%"
      

    curCell = curRow.insertCell();
    curCell.width = "33%"
      
    clickHandle = 'viewEmployees(this.viewNode.treeNode.oid);';
    curImage = document.createElement("<img onclick='" +clickHandle + "' src='" +contextPath+ "/images/begro.gif' width='16' height='16' border='0' style='cursor:hand;' >");
    curImage.alt = viewEmployeeAltLabel;
    curCell.appendChild( curImage );
    curImage.viewNode = aDiv;
    aDiv.viewEmployeesImage = curImage;

    //create the second row of whole table
    curRow = wholeTable.insertRow();
    curCell = curRow.insertCell();
    curCell.className = "subalterbar";
    
    //create subtable of second row
    subTable = document.createElement( "<table style='padding-left:2px;padding-right:2px;' width='100' border='0' cellspacing='0' cellpadding='2'>" );
    curCell.appendChild(subTable);

    if( !isCompact ){
        curRow = subTable.insertRow();
        curCell = curRow.insertCell();
        curCell.width = "1%";
        curCell.align = "right";
        curCell.noWrap = true;
        curCell.innerText = codeKeyValue;
        curCell = curRow.insertCell();
        curCell.width = "100%";
        curCell.noWrap = false;
        curCell.innerText = this.code;
    }
    
    curRow = subTable.insertRow();
    if( !isCompact ){
        curCell = curRow.insertCell();
        curCell.width = "1%";
        curCell.align = "right";
        curCell.vAlign = "top";
        curCell.noWrap = true;
        curCell.innerText = nameKeyValue;
    }
    curCell = curRow.insertCell();
    curCell.width = "100%";
    curCell.noWrap = false;
    curCell.innerText = this.name;

    if( !isCompact ){
         curRow = subTable.insertRow();
         curCell = curRow.insertCell();
         curCell.width = "1%";
         curCell.align = "right";
         curCell.vAlign = "top";
         curCell.noWrap = true;         
         curCell = curRow.insertCell();
         curCell.width = "49%";
         curCell.noWrap = false;         
    }

    
    //create the third row of whole table
    curRow = wholeTable.insertRow();
    curCell = curRow.insertCell();
    curCell.className = "subalterbar";

    //create subtable of third row
	subTable = document.createElement( "<table style='padding-left:2px;padding-right:2px;' width='100' border='0' cellspacing='0' cellpadding='2'>" );
    curCell.appendChild(subTable);
    aDiv.chiefJobTable = subTable;
    
    curRow = subTable.insertRow();
    curCell = curRow.insertCell();
    curCell.width = "100%";
    curCell.align = "left";
    curCell.vAlign = "center";
    curCell.noWrap = false;
    
    
    //create the fourth row of whole table
    curRow = wholeTable.insertRow();
    curCell = curRow.insertCell();
    curCell.align = "center";
    curCell.className = "subalterbar";
    if( this.subnode!=null && this.subnode.length>0 ){
        if( this.open )
            curImage = document.createElement("<img onclick='doOpen(this.viewNode);' src='" +contextPath+ "/images/expand.gif' width='18' height='18' style='cursor=hand;' >");
        else
            curImage = document.createElement("<img onclick='doOpen(this.viewNode);' src='" +contextPath+ "/images/shrink.gif' width='18' height='18' style='cursor=hand;' >");
        curImage.viewNode = aDiv;
        aDiv.openImage = curImage;
        curCell.appendChild(curImage);
    }else{
        curCell.height = "18";
    }

    return aDiv;
}


function initLevelViewNode(td,aDiv){
    //deal with level
    var treeNode = aDiv.treeNode;
    var curLevelIndex = treeNode.level-1 ;
    var curNodes,curMax;
    if( levelNodes.length<=curLevelIndex || levelNodes[curLevelIndex]==null )
        levelNodes[curLevelIndex] = new Array();
    curNodes = levelNodes[curLevelIndex];
    curNodes[curNodes.length] = aDiv;

    if( treeNode.parent!=null ){
        for(var i=treeNode.parent.level;i<treeNode.level-1;i++){
            if( levelNodes.length<=i || levelNodes[i]==null )
                levelNodes[i] = new Array();
            curNodes = levelNodes[i];

            var tempDiv = document.createElement("<div align='center'></div>");
            tempDiv.style.height = (isCompact?"100":"120");
            var tempTable = document.createElement("<table width='100' height='100%' ></table>");
            tempTable.insertRow().insertCell();
            tempDiv.appendChild(tempTable);
            tempTable.background = contextPath + "/images/orgvertical.gif";

            curNodes[curNodes.length] = tempDiv ;
            td.appendChild(tempDiv);
            td.appendChild( document.createElement("<img border='0' src='" + contextPath + "/images/orgvertical.gif' >") );
        }
    }
    td.appendChild(aDiv);
}


function adaptLevelViewNode(){
    var adaptedCount,curNodes,curMax;
    var tempMax;
    for(var i=0;i<levelNodes.length;i++){
        if( levelAdaptedCount.length<=i || levelAdaptedCount[i]==null )
            levelAdaptedCount[i] = 0;
        adaptedCount = levelAdaptedCount[i];

        if( levelNodes.length<=i || levelNodes[i]==null )
            levelNodes[i] = new Array();
        curNodes = levelNodes[i];

        if( levelMaxHeight.length<=i || levelMaxHeight[i]==null )
            levelMaxHeight[i] = 0;
        curMax = levelMaxHeight[i];

        if( adaptedCount<curNodes.length ){
            tempMax = curMax;
            for(var j=adaptedCount;j<curNodes.length;j++){
                if( tempMax<curNodes[j].offsetHeight )
                    tempMax = curNodes[j].offsetHeight;
            }

            if( tempMax>curMax ){
                for(var j=0;j<adaptedCount;j++)
                    curNodes[j].style.height = tempMax;
            }
            for( var j=adaptedCount;j<curNodes.length;j++)
                curNodes[j].style.height = tempMax;

            levelMaxHeight[i] = tempMax;
            levelAdaptedCount[i] = curNodes.length;
        }
    }
}

//Global Var
var contextPath = ".";
var codeKeyValue = "code";
var nameKeyValue = "name";
var isCompact=true;
var mode="chart";

var rootNode = null;
var selectedNode = null;

//Global method
function doEditNode(viewNode, idItem){
  if(actionbar.style.display=="none"){
      actionbar.treeNode = viewNode.treeNode;
      showActionbar(viewNode, idItem);
   }else{
      if( actionbar.treeNode != viewNode.treeNode ){
          actionbar.treeNode = viewNode.treeNode;
          showActionbar(viewNode, idItem);
      }
   }
}

function showActionbar(viewNode, idItem){
    
    var actionbarHeight = 150;
    var y = document.body.scrollTop + document.body.clientHeight;
    var currenty = eval( calculateSumOffset(idItem, 'offsetTop') + 16 + actionbarHeight);
    if( currenty > y){
        //yangc change for show the actionbar to up when therer is no space in the end page, 2003.10.16
        actionbar.style.top = y - actionbarHeight;
    }else{
        actionbar.style.top = calculateSumOffset(idItem, 'offsetTop') + 16;
    }
    //shig change for end, 2003.07.26
    actionbar.style.left = calculateSumOffset(idItem, 'offsetLeft');
    actionbar.style.display="block";

    leftX  = document.all["actionbar"].style.posLeft;
    rightX = leftX + document.all["actionbar"].offsetWidth;

    //shig change for show the actionbar to up when therer is no space in the end page, 2003.07.26
    if( currenty > y){
        topY = document.all["actionbar"].style.posTop;
        bottomY = topY + document.all["actionbar"].offsetHeight;
    }else{
        topY = document.all["actionbar"].style.posTop - 18 ;
        bottomY = topY + document.all["actionbar"].offsetHeight + 18 ;
    }

}

function calculateSumOffset(idItem, offsetName)
{
	var totalOffset = 0;
	var item = idItem;
	do
	{
		totalOffset += eval('item.'+offsetName);
		item = eval('item.offsetParent');
	} while (item != null);
	return totalOffset;
}

function hideActionbar(){
    actionbar.style.display="none";
}

function doOpen(viewNode){
   if( mode=="chart" )
      doOpenH(viewNode)
   else
      doOpenT(viewNode)

   adaptPosition();   
   hideActionbar();
}

function doOpenH(viewNode){
   var atable=viewNode;
   var i;
   do{
      atable=atable.parentElement;
   }while(atable.tagName!="TABLE");

   if( viewNode.treeNode.open){
       atable.rows[2].style.display="none";
       if (atable.rows[0].cells.length > 1) {
		   atable.rows[0].cells[0].style.display="none";
		   atable.rows[0].cells[2].style.display="none";
		   atable.rows[1].cells[0].style.display="none";
		   atable.rows[1].cells[2].style.display="none";
	   }
       viewNode.treeNode.open=false;
       viewNode.openImage.src = contextPath+"/images/shrink.gif";
   }else{
       var treeNode = viewNode.treeNode;
       var needAdapt = false;
       if( treeNode.getSubnode(0).viewNode==null ){
           var subViewNode;
           needAdapt = true;
           for(i=0;i<treeNode.subnode.length;i++){
              subViewNode = treeNode.getSubnode(i).createAllNode(i,treeNode.subnode.length);
              atable.rows[2].cells[i*2].appendChild(subViewNode);
           }
       }

       atable.rows[2].style.display="block";
       if (atable.rows[0].cells.length > 1) {
		   atable.rows[0].cells[0].style.display="block";
		   atable.rows[0].cells[2].style.display="block";
		   atable.rows[1].cells[0].style.display="block";
		   atable.rows[1].cells[2].style.display="block";
	   }
       viewNode.treeNode.open=true;
       viewNode.openImage.src = contextPath+"/images/expand.gif";
       if( needAdapt )
          adaptLevelViewNode();
   }
}

function doOpenV(viewNode){
   var atable=viewNode;
   var i;
   do{
      atable=atable.parentElement;
   }while(atable.tagName!="TABLE");

   if( viewNode.treeNode.open){
       for(i=0;i<atable.rows.length;i++)
          atable.rows[i].cells[2].style.display = "none";
       viewNode.treeNode.open=false;
       viewNode.openImage.src = contextPath+"/images/shrink.gif";
   }else{
       var treeNode = viewNode.treeNode;
       if( treeNode.getSubnode(0).viewNode==null ){
           var subViewNode;
           for(i=0;i<treeNode.subnode.length;i++){
              subViewNode = treeNode.getSubnode(i).createAllNode(i,treeNode.subnode.length);
              atable.rows[i*2].cells[2].appendChild(subViewNode);
           }
       }

       for(i=0;i<atable.rows.length;i++)
          atable.rows[i].cells[2].style.display = "block";
       viewNode.treeNode.open=true;
       viewNode.openImage.src = contextPath+"/images/expand.gif";
   }
}

function doOpenT(viewNode){
   var atable=viewNode;
   do{
      atable=atable.parentElement;
   }while(atable.tagName!="TABLE");

   viewNode.treeNode.open = !viewNode.treeNode.open;
   atable.rows[1].style.display = viewNode.treeNode.open?"block":"none";
   if( viewNode.treeNode.parent==null )
      viewNode.openImage.src = contextPath + (viewNode.treeNode.open?"/images/orgtreerootopen.gif":"/images/orgtreerootclose.gif");
   else
      viewNode.openImage.src = contextPath + (viewNode.treeNode.open?"/images/orgtreeopen.gif":"/images/orgtreeclose.gif");
}


function hideAll(){
	if (actionbar != null) {hideActionbar();actionbar.left = 0;}
}

function updateIt(e){
	if (ie)
	{
		var x = window.event.clientX + document.body.scrollLeft;
		var y = window.event.clientY + document.body.scrollTop;

		if (x > rightX || x < leftX) {
		    hideAll();
		}
		else if (y > bottomY || y < topY) {
		    hideAll();
		}
	}
	if (n)
	{
		var x = e.pageX+document.body.scrollLeft;
		var y = e.pageY+document.body.scrollTop;

		if (x > rightX || x < leftX) hideAll();
		else if (y > bottomY || y < topY) hideAll();
	}
}

if (document.all){
	if( document.body !=null ){
	   document.body.onclick=hideAll;
	   document.body.onscroll=hideAll;
	   document.body.onmousemove=updateIt;
	}
}
if (document.layers){
	document.onmousedown=hideAll;
	window.captureEvents(Event.MOUSEMOVE);
	window.onmousemove=updateIt;
}

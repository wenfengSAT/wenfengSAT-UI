//ÆÁ±ÎÊó±êÓÒ¼ü
///document.oncontextmenu = contextmenu ;
function contextmenu ()
{
 event.returnValue = false ;
 return false ;
}
/**************************************************************************
	Copyright (c) 2001 Geir Landrö (drop@destroydrop.com)
	JavaScript Tree - www.destroydrop.com/hugi/javascript/tree/
	Version 0.96

	This script can be used freely as long as all copyright messages are
	intact.
**************************************************************************/

// Arrays for nodes and icons
var nodes		= new Array();;
var openNodes	= new Array();
var icons		= new Array(6);

// Loads all icons that are used in the tree
function preloadIcons() {
	icons[0] = new Image();
	icons[0].src = "/images/orgtree/plus.gif";
	icons[1] = new Image();
	icons[1].src = "/images/orgtree/plusbottom.gif";
	icons[2] = new Image();
	icons[2].src = "/images/orgtree/minus.gif";
	icons[3] = new Image();
	icons[3].src = "/images/orgtree/minusbottom.gif";
	icons[4] = new Image();
	icons[4].src = "/images/orgtree/folder.gif";
	icons[5] = new Image();
	icons[5].src = "/images/orgtree/folderopen.gif";
}
function openfolder(thespan)
{
  thespan.style.display="inline";
}
function closefolder(thespan)
{
  thespan.style.display="none";
}
function changedeal(nodetype)
{
   if(nodetype=="1"||nodetype=="2")
  {
	openfolder(s03);
	closefolder(s04);
  }
  else if(nodetype=="0"||nodetype=="3")
  {
	closefolder(s03);
	openfolder(s04);
  }
} 
// Create the tree
function createTree(arrName, startNode, openNode) {
	nodes = arrName;
	if (nodes.length > 0) {
		preloadIcons();
		if (startNode == null) startNode = 0;
		if (openNode != 0 || openNode != null) setOpenNodes(openNode);

		if (startNode !=0) {
			var nodeValues = nodes[getArrayId(startNode)].split("|");
			if (nodeValues[3].indexOf("#")>-1){
				var ss="<a href='#' onclick=\"parent.seldept('"+nodeValues[5]+"','"+nodeValues[2]+"','"+nodeValues[4]+ "','"+nodeValues[6]+ "')\" onmouseover=\"window.status='" + nodeValues[2] + "';return true;\" onmouseout=\"window.status=' ';return true;\"><img src=\"/images/orgtree/folderopen.gif\" align=\"absbottom\" alt=\"\" />" + nodeValues[2] + "</a><br />";
				document.write(ss);
			}else{
				document.write(" <a href=\"" + nodeValues[3] + "\" onmouseover=\"window.status='" + nodeValues[2] + "';return true;\" onmouseout=\"window.status=' ';return true;\"><img src=\"/images/orgtree/folderopen.gif\" align=\"absbottom\" alt=\"\" />" + nodeValues[2] + "</a><br />");
			}

		} else document.write("<img src=\"/images/orgtree/base.gif\" align=\"absbottom\" alt=\"\" />Website<br />");

		var recursedNodes = new Array();
		addNode(startNode, recursedNodes);
	}
}
// Returns the position of a node in the array
function getArrayId(node) {
	for (i=0; i<nodes.length; i++) {
		var nodeValues = nodes[i].split("|");
		if (nodeValues[0]==node) return i;
	}
}
// Puts in array nodes that will be open
function setOpenNodes(openNode) {
	for (i=0; i<nodes.length; i++) {
		var nodeValues = nodes[i].split("|");
		if (nodeValues[0]==openNode) {
			openNodes.push(nodeValues[0]);
			setOpenNodes(nodeValues[1]);
		}
	}
}
// Checks if a node is open
function isNodeOpen(node) {
	for (i=0; i<openNodes.length; i++)
		if (openNodes[i]==node) return true;
	return false;
}
// Checks if a node has any children
function hasChildNode(parentNode) {
	for (i=0; i< nodes.length; i++) {
		var nodeValues = nodes[i].split("|");
		if (nodeValues[1] == parentNode) return true;
	}
	return false;
}
// Checks if a node is the last sibling
function lastSibling (node, parentNode) {
	var lastChild = 0;
	for (i=0; i< nodes.length; i++) {
		var nodeValues = nodes[i].split("|");
		if (nodeValues[1] == parentNode)
			lastChild = nodeValues[0];
	}
	if (lastChild==node) return true;
	return false;
}
// Adds a new node in the tree
function addNode(parentNode, recursedNodes) {
	for (var i = 0; i < nodes.length; i++) {

		var nodeValues = nodes[i].split("|");
		if (nodeValues[1] == parentNode) {

			var ls	= lastSibling(nodeValues[0], nodeValues[1]);
			var hcn	= hasChildNode(nodeValues[0]);
			var ino = isNodeOpen(nodeValues[0]);

			// Write out line & empty icons
			for (g=0; g<recursedNodes.length; g++) {
				if (recursedNodes[g] == 1) document.write("<img src=\"/images/orgtree/line.gif\" align=\"absbottom\" alt=\"\" />");
				else  document.write("<img src=\"/images/orgtree/empty.gif\" align=\"absbottom\" alt=\"\" />");
			}

			// put in array line & empty icons
			if (ls) recursedNodes.push(0);
			else recursedNodes.push(1);

			// Write out join icons
			if (hcn) {
				if (ls) {
					document.write("<a href=\"javascript: oc(" + nodeValues[0] + ", 1);\"><img id=\"join" + nodeValues[0] + "\" src=\"/images/orgtree/");
					 	if (ino) document.write("minus");
						else document.write("plus");
					document.write("bottom.gif\" align=\"absbottom\" alt=\"Open/Close node\" /></a>");
				} else {
					document.write("<a href=\"javascript: oc(" + nodeValues[0] + ", 0);\"><img id=\"join" + nodeValues[0] + "\" src=\"/images/orgtree/");
						if (ino) document.write("minus");
						else document.write("plus");
					document.write(".gif\" align=\"absbottom\" alt=\"Open/Close node\" /></a>");
				}
			} else {
				if (ls) document.write("<img src=\"/images/orgtree/join.gif\" align=\"absbottom\" alt=\"\" />");
				else document.write("<img src=\"/images/orgtree/joinbottom.gif\" align=\"absbottom\" alt=\"\" />");
			}

			// Start link
			//document.write("<a href=\"" + nodeValues[3] + "\" onmouseover=\"window.status='" + nodeValues[2] + "';return true;\" onmouseout=\"window.status=' ';return true;\">");

///////////////////////
			//add
			if (nodeValues[3].indexOf("#")>-1){
			  if (nodeValues[1]!="1"){
		      document.write("<a href='#' onclick=\"parent.seldept('"+nodeValues[5]+"','"+nodeValues[2]+"','"+nodeValues[4]+ "','"+nodeValues[6]+ "')\" onmouseover=\"window.status='" + nodeValues[2] + "';return true;\" onmouseout=\"window.status=' ';return true;\">");
			  }
			  else{
			     document.write("<input type=radio class=chkbox name=sel onclick=\"changedeal("+nodeValues[5]+");return true;\" value='"+nodeValues[4]+","+nodeValues[5]+","+nodeValues[6]+"'> <a href='#' onclick=\"parent.seldept('"+nodeValues[5]+"','"+nodeValues[2]+"','"+nodeValues[4]+ "','"+nodeValues[6]+ "')\" onmouseover=\"window.status='" + nodeValues[2] + "';return true;\" onmouseout=\"window.status=' ';return true;\">");
			  }
			}else{
				document.write("<a href=\"" + nodeValues[3] + "\" onmouseover=\"window.status='" + nodeValues[2] + "';return true;\" onmouseout=\"window.status=' ';return true;\">");
			}
			//end
///////////////////////

			// Write out folder & page icons
			if (hcn) {
				document.write("<img id=\"icon" + nodeValues[0] + "\" src=\"/images/orgtree/folder")
					if (ino) document.write("open");
				document.write(".gif\" align=\"absbottom\" alt=\"Folder\" />");
			} else document.write("<img id=\"icon" + nodeValues[0] + "\" src=\"/images/orgtree/page.gif\" align=\"absbottom\" alt=\"Page\" />");

			// Write out node name
			document.write(nodeValues[2]);

			// End link
			if (nodeValues[4]!="1"&& nodeValues[4]!="0"){
			document.write("</a><img class='specialimg' border='0' src='../../../images/delete_msg.gif' alt='É¾³ýÐÅÏ¢¼¯' onclick=\" delitem('"+nodeValues[6]+"','"+nodeValues[4]+"')\" ><br />");
			}
            else{
			document.write("</a><br />");
			}

			// If node has children write out divs and go deeper
			if (hcn) {
				document.write("<div id=\"div" + nodeValues[0] + "\"");
					if (!ino) document.write(" style=\"display: none;\"");
				document.write(">");
				addNode(nodeValues[0], recursedNodes);
				document.write("</div>");
			}

			// remove last line or empty icon
			recursedNodes.pop();
		}
	}
}
// Opens or closes a node
function oc(node, bottom) {
	var theDiv = document.getElementById("div" + node);
	var theJoin	= document.getElementById("join" + node);
	var theIcon = document.getElementById("icon" + node);

	if (theDiv.style.display == 'none') {
		if (bottom==1) theJoin.src = icons[3].src;
		else theJoin.src = icons[2].src;
		theIcon.src = icons[5].src;
		theDiv.style.display = '';
	} else {
		if (bottom==1) theJoin.src = icons[1].src;
		else theJoin.src = icons[0].src;
		theIcon.src = icons[4].src;
		theDiv.style.display = 'none';
	}
}
// Push and pop not implemented in IE(crap!    don´t know about NS though)
if(!Array.prototype.push) {
	function array_push() {
		for(var i=0;i<arguments.length;i++)
			this[this.length]=arguments[i];
		return this.length;
	}
	Array.prototype.push = array_push;
}
if(!Array.prototype.pop) {
	function array_pop(){
		lastElement = this[this.length-1];
		this.length = Math.max(this.length-1,0);
		return lastElement;
	}
	Array.prototype.pop = array_pop;
}

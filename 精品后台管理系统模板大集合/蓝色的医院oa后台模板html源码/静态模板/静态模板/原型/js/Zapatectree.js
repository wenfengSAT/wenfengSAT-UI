/**
 * The Zapatec DHTML Calendar
 *
 * Copyright (c) 2004-2005 by Zapatec, Inc.
 * http://www.zapatec.com
 * 1700 MLK Way, Berkeley, California,
 * 94709, U.S.A.
 * All rights reserved.
 *
 *
 * Tree Widget
 */
// if (_zapatec_tree_url)
// 	_zapatec_tree_url = _zapatec_tree_url.replace(/\/*$/, '/');

/**
 * The Zapatec.Tree object constructor.  Pass to it the ID of an UL element (or
 * a reference to the element should you have it already) and an optional
 * configuration object.  This function creates and initializes the tree widget
 * according to data existent in the nested list, and applies the configuration
 * specified.
 *
 * The configuration object may contain the following options (the following
 * shows default values):
 *
 * \code
 * {
 *    hiliteSelectedNode : true,     // boolean
 *    compact            : false,    // boolean
 *    dynamic            : false,    // boolean
 *    initLevel          : false,    // false or number
 *    defaultIcons       : null      // null or string
 * }
 * \endcode
 *
 * - hiliteSelectedNode -- if \b false is passed, the tree will not highlight
 *   the currently selected node.
 * - compact -- if \b true is passed the tree will work in a "compact" mode; in
 *   this mode it automatically closes sections not relevant to the current
 *   one.
 * - dynamic -- if \b true is passed the tree will use the "dynamic initialization"
 *   technique which greatly improves generation time.  Some functionality is
 *   not available in this mode until all the tree was generated.  In "dynamic"
 *   mode the tree is initially collapsed and levels are generated "on the fly"
 *   as the end user expands them.  You can't retrieve nodes by ID (which
 *   implies you can't synchronize to certain nodes) until they have been
 *   generated.
 * - initLevel -- when this is a numeric value, it specifies the maximum
 *   "expand level" that the tree will use initially.  Therefore, if for
 *   instance you specify 1 then the tree will be initially expanded one level.
 *   Pass here 0 to have the tree fully collapsed, or leave it \b false to have
 *   the tree fully expanded.
 * - defaultIcons -- you can pass here a string.  If so, all tree items will
 *   get an additional TD element containing that string in the \b class
 *   attribute.  This helps you to include custom default icons without
 *   specifying them as IMG tags in the tree.  See our examples.
 *
 * @param el [string or HTMLElement] -- the UL element
 * @param config [Object, optional] -- the configuration options
 *
 * @return
 */
Zapatec.Tree = function(el, config) {
	if (typeof config == "undefined")
		config = {};
	function param_default(name, value) {
	    if (typeof config[name] == "undefined")
	        config[name] = value;
	};
	param_default('d_profile', false);
	param_default('hiliteSelectedNode', true);
	param_default('compact', false);
	param_default('dynamic', false);
	param_default('initLevel', false);
	if (config.dynamic)
		config.initLevel = 0;
	this.config = config;
	// <PROFILE>
	if (this.config.d_profile) {
		var T1 = new Date().getTime();
		profile = {
			items : 0,
			trees : 0,
			icons : 0
		};
	}
	// </PROFILE>
	if (typeof el == "string")
		el = document.getElementById(el);
	this.list = el;
	this.items = {};
	this.trees = {};
	this.selectedItem = null;
	this.id = el.id || Zapatec.Utils.generateID("tree");
	var top = this.top_parent = Zapatec.Utils.createElement("div");
	top.className = "tree tree-top";
	this.createTree(el, top, 0);
	el.parentNode.insertBefore(top, el);
	el.parentNode.removeChild(el);
	Zapatec.Tree.all[this.id] = this;
	// check if we have an initially selected node and sync. the tree if so
	if (this.selectedItem)
		this.sync(this.selectedItem.__msh_item);
	// <PROFILE>
	if (this.config.d_profile) {
		alert("Generated in " + (new Date().getTime() - T1) + " milliseconds\n" +
		      profile.items + " total tree items\n" +
		      profile.trees + " total (sub)trees\n" +
		      profile.icons + " total icons");
	}
	// </PROFILE>
};

/**
 * This global variable keeps a "hash table" (that is, a plain JavaScript
 * object) mapping ID-s to references to Zapatec.Tree objects.  It's helpful if
 * you want to operate on a tree but you don't want to keep a reference to it.
 * Example:
 *
 * \code
 *   // the following makes a tree for the <ul id="tree-id"> element
 *   var tree = new Zapatec.Tree("tree-id");
 *   // ... later
 *   var existing_tree = Zapatec.Tree.all("tree-id");
 *   // and now we can use \b existing_tree the same as we can use \b tree
 *   // the following displays \b true
 *   alert(existing_tree == tree);
 * \endcode
 *
 * So in short, this variable remembers values returned by "new
 * Zapatec.Tree(...)" in case you didn't.
 */
Zapatec.Tree.all = {};

/**
 * \internal Function that creates a (sub)tree.  This function walks the UL
 * element, computes and assigns CSS class names and creates HTML elements for
 * a subtree.  Each time a LI element is encountered, createItem() is called
 * which effectively creates the item.  Beware that createItem() might call
 * back this function in order to create the item's subtree. (so createTree and
 * createItem form an indirect recursion).
 *
 * @param list [HTMLElement] -- reference to the UL element
 * @param parent [HTMLElement] -- reference to the parent element that should hold the (sub)tree
 * @param level [integer] -- the level of this (sub)tree in the main tree.
 *
 * @return id -- the (sub)tree ID; might be automatically generated.
 */
Zapatec.Tree.prototype.createTree = function(list, parent, level) {
	if (this.config.d_profile) // PROFILE
		++profile.trees; // PROFILE
	var id = list.id || Zapatec.Utils.generateID("tree.sub"),
		self = this;
	function _makeIt() {
		self.creating_now = true;
		var
			last_li = null,
			next_li,
			i = list.firstChild,
			items = parent.__msh_items = [];
		self.trees[id] = parent;
		parent.__msh_level = level;
		parent.__msh_treeid = id;
		while (i) {
			if (last_li)
				last_li.className += " tree-lines-c";
			if (i.nodeType != 1)
				i = i.nextSibling;
			else {
				next_li = Zapatec.Utils.getNextSibling(i, 'li');
				if (i.tagName.toLowerCase() == 'li') {
					last_li = self.createItem(i, parent, next_li, level);
					if (last_li) { //false when webmaster creates malformed tree 
						items[items.length] = last_li.__msh_item;
					}
				}
				i = next_li;
			}
		}
		i = parent.firstChild;
		if (i && !level) {
			i.className = i.className.replace(/ tree-lines-./g, "");
			i.className += (i === last_li) ? " tree-lines-s" : " tree-lines-t";
		}
		if (last_li && (level || last_li !== i)) {
			last_li.className = last_li.className.replace(/ tree-lines-./g, "");
			last_li.className += " tree-lines-b";
		}
		self.creating_now = false;
	};
	if (this.config.dynamic && level > 0)
		this.trees[id] = _makeIt;
	else
		_makeIt();
	return id;
};

/**
 * \internal This function walks through a LI element and creates the HTML
 * elements associated with that tree item.  When it encounters an UL element
 * it calls createTree() in order to create the item's subtree.  This function
 * may also call item_addIcon() in order to add the +/- buttons or icons
 * present in the item definition as IMG tags, or item_addDefaultIcon() if the
 * tree configuration specifies "defaultIcons" and no IMG tag was present.
 *
 * @param li [HTMLElement] -- reference to the LI element
 * @param parent [HTMLElement] -- reference to the parent element where the HTML elements should be created
 * @param next_li [HTMLLiElement] -- reference to the next LI element, if this is not the last one
 * @param level [integer] -- the level of this item in the main tree
 *
 * @return [HTMLElement] -- a reference to a DIV element holding the HTML elements of the created item
 */
Zapatec.Tree.prototype.createItem = function(li, parent, next_li, level) {
	if (this.config.d_profile) // PROFILE
		++profile.items; // PROFILE
	if (!li.firstChild)
		return;
	var
		id = li.id || Zapatec.Utils.generateID("tree.item"),
		item = this.items[id] = Zapatec.Utils.createElement("div", parent),
		t = Zapatec.Utils.createElement("table", item),
		tb = Zapatec.Utils.createElement("tbody", t),
		tr = Zapatec.Utils.createElement("tr", tb),
		td = Zapatec.Utils.createElement("td", tr),
		is_list,
		tmp,
		i = li.firstChild,
		has_icon = false;
	t.className = "tree-table";
	t.cellSpacing = 0;
	t.cellPadding = 0;
	
	td.className = "label";
	
	item.className = "tree-item";
	item.__msh_item = id;
	item.__msh_tree = this.id;
	item.__msh_parent = parent.__msh_treeid;   
	
	//add wanglj
	item._id=li.id;

	item._code=li.codeId ;
	item._pid=li.codeSuperId;
	item._treeId=li.treeId;
	item._name=li.name;
	item._abbr=li.abbr;
	item._spell=li.spell;
	item._status=li.status;
	item._layer=li.layer ;
	item._pNode=li.pNode ;	
	//end
	while (i) {
		is_list = i.nodeType == 1 && /^[ou]l$/i.test(i.tagName);
		if (i.nodeType != 1 || !is_list) {
			if (i.nodeType == 3) {
				// remove whitespace, it seems to cause layout trouble
				tmp = i.data.replace(/^\s+/, '');
				tmp = tmp.replace(/\s+$/, '');
				li.removeChild(i);
				if (tmp) {
					i = Zapatec.Utils.createElement("span");
					i.className = "label";
					i.innerHTML = tmp;
					i.onclick = Zapatec.Tree.onItemToggle;
					td.appendChild(i);
				}
			} else if (i.tagName.toLowerCase() == 'img') {
				this.item_addIcon(item, i);
				has_icon = true;
			} else {
				i.onclick = Zapatec.Tree.onItemToggle;
				td.appendChild(i);
			}
			i = li.firstChild;
			continue;
		}
		if (is_list) {
			this.item_addIcon(item, null);
			var np = Zapatec.Utils.createElement("div", item.parentNode);
			np.__msh_item = id;
			np.className = "tree";
			if (next_li)
				np.className += " tree-lined";
			item.__msh_subtree = this.createTree(i, np, level+1);
			if ((this.config.initLevel !== false && this.config.initLevel <= level) ||
			    (this.config.compact && !/(^|\s)expanded(\s|$)/i.test(li.className))
			    || /(^|\s)collapsed(\s|$)/i.test(li.className)) {
				item.className += " tree-item-collapsed";
				this.toggleItem(id);
			} else
				item.className += " tree-item-expanded";
			if (/(^|\s)selected(\s|$)/i.test(li.className))
				this.selectedItem = item;
			break;
		}
	}
	if (!has_icon)
		this.item_addDefaultIcon(item, this.config.defaultIcons);
	return item;
};

/**
 * \internal This function adds a TD element having a certain class attribute
 * which helps having a tree containing icons without defining IMG tags for
 * each item.  The class name will be "tgb icon className" (where "className"
 * is the specified parameter).  Further, in order to customize the icons, one
 * should add some CSS lines like this:
 *
 * \code
 *  div.tree-item td.customIcon {
 *    background: url("themes/img/fs/document2.png") no-repeat 0 50%;
 *  }
 *  div.tree-item-expanded td.customIcon {
 *    background: url("themes/img/fs/folder-open.png") no-repeat 0 50%;
 *  }
 *  div.tree-item-collapsed td.customIcon {
 *    background: url("themes/img/fs/folder.png") no-repeat 0 50%;
 *  }
 * \endcode
 *
 * As you can see, it's very easy to customize the default icons for a normal
 * tree item (that has no subtrees) or for expanded or collapsed items.  For
 * the above example to work, one has to pass { defaultIcons: "customIcon" } in
 * the tree configuration object.
 *
 * This function does nothing if the \b className parameter has a false logical
 * value (i.e. is null).
 *
 * @param item [HTMLElement] -- reference to the DIV element holding the item
 * @param className -- a string containing the additional class name
 */
Zapatec.Tree.prototype.item_addDefaultIcon = function(item, className) {
	if (!className)
		return;
	var last_td = item.firstChild.firstChild.firstChild.lastChild, td;
	var td = Zapatec.Utils.createElement("td");
	td.className = "tgb icon " + className;
	td.onclick = Zapatec.Tree.onItemToggle;
	last_td.parentNode.insertBefore(td, last_td);
};

/** 
 * \internal This function does different things, depending on whether the \b
 * img parameter is passed or not.  If the \b img is passed, then this function
 * adds it as an icon for the given item.  If not passed, this function creates
 * a "+/-" button for the given item.
 * 
 * @param item [HTMLElement] -- reference to the DIV holding the item elements
 * @param img [HTMLImgElement, optional] -- reference to an IMG element; normally one found in the <LI>
 */
Zapatec.Tree.prototype.item_addIcon = function(item, img) {
	if (this.config.d_profile) // PROFILE
		++profile.icons; // PROFILE
	var last_td = item.firstChild.firstChild.firstChild, td;
	last_td = img ? last_td.lastChild : last_td.firstChild;
	if (!img || !item.__msh_icon) {
		td = Zapatec.Utils.createElement("td");
		td.className = "tgb " + (img ? "icon" : "minus");
		last_td.parentNode.insertBefore(td, last_td);
		td.onclick = Zapatec.Tree.onImgToggle;    //modify wanglj     		
	} else {
		td = item.__msh_icon;
		img.style.display = "none";		
	}
	if (!img) {
		td.innerHTML = "&nbsp;";
		item.className += " tree-item-more";
		item.__msh_state = true; // expanded
		item.__msh_expand = td;
	} else {
		td.appendChild(img);
		item.__msh_icon = td;
	}
};

/** 
 * This function gets called from a global event handler when some item was
 * clicked.  It selects the item and toggles it if it has a subtree (expands or
 * collapses it).
 * 
 * @param item_id [string] -- the item ID
 */
Zapatec.Tree.prototype.itemClicked = function(item_id) {
	this.selectedItem = this.toggleItem(item_id);
	if (this.config.hiliteSelectedNode && this.selectedItem)
		Zapatec.Utils.addClass(this.selectedItem, "tree-item-selected");
	this.onItemSelect(this.selectedItem);
};

/** 
 * This function toggles an item if the \b state parameter is not specified.
 * If \b state is \b true then it expands the item, and if \b state is \b false
 * then it collapses the item.
 * 
 * @param item_id [string] -- the item ID
 * @param state [boolean, optional] -- the desired item state
 * 
 * @return a reference to the item element if found, null otherwise
 */
Zapatec.Tree.prototype.toggleItem = function(item_id, state) {
	if (item_id) {
		if (this.config.hiliteSelectedNode && this.selectedItem)
			Zapatec.Utils.removeClass(this.selectedItem, "tree-item-selected");
		var item = this.items[item_id];
		if (typeof state == "undefined")
			state = !item.__msh_state;
		if (state != item.__msh_state) {
			var subtree = this._getTree(item.__msh_subtree, this.creating_now);
			if (subtree) {
				subtree.style.display = state ? "block" : "none";
				Zapatec.Utils.removeClass(item, "tree-item-expanded");
				Zapatec.Utils.removeClass(item, "tree-item-collapsed");
				Zapatec.Utils.addClass(item, state ? "tree-item-expanded" : "tree-item-collapsed");
			}
			var img = item.__msh_expand;
			if (img)
				img.className = "tgb " + (state ? "minus" : "plus");
			item.__msh_state = state;
			img = item.__msh_icon;
			if (img) {
				img.firstChild.style.display = "none";
				img.appendChild(img.firstChild);
				img.firstChild.style.display = "block";
			}
			if (this.config.compact && state) {
				var a = this._getTree(item.__msh_parent).__msh_items;
				for (var i = a.length; --i >= 0;)
					if (a[i] != item_id)
						this.toggleItem(a[i], false);
			}
		}
		return item;
	}
	return null;
};

/** 
 * Call this function to collapse all items in the tree.
 */
Zapatec.Tree.prototype.collapseAll = function() {
	for (var i in this.trees)
		this.toggleItem(this._getTree(i).__msh_item, false);
};

/**
 * Call this function to expand all items in the tree.
 */
Zapatec.Tree.prototype.expandAll = function() {
	for (var i in this.trees)
		this.toggleItem(this._getTree(i).__msh_item, true);
};

/** 
 * Call this function to toggle all items in the tree.
 */
Zapatec.Tree.prototype.toggleAll = function() {
	for (var i in this.trees)
		this.toggleItem(this._getTree(i).__msh_item);
};

/** 
 * Call this function to synchronize the tree to a given item.  This means that
 * all items will be collapsed, except that item and the full path to it.
 * 
 * @param item_id [string] -- the ID of the item to sync to.
 */
Zapatec.Tree.prototype.sync = function(item_id) {
	var item = this.items[item_id];  	
	if (item) {
		this.collapseAll();
		this.selectedItem = item;
		var a = [];
		while (item.__msh_parent) {
			a[a.length] = item;
			var pt = this._getTree(item.__msh_parent);
			if (pt.__msh_item)
				item = this.items[pt.__msh_item];
			else
				break;
		}
		for (var i = a.length; --i >= 0;)
			this.toggleItem(a[i].__msh_item, true);
		Zapatec.Utils.addClass(this.selectedItem, "tree-item-selected");
	}
};


/** 
 * Destroys the tree.  Removes all elements.  Does not destroy the Zapatec.Tree
 * object itself (actually there's no proper way in JavaScript to do that).
 */
Zapatec.Tree.prototype.destroy = function() {
	var p = this.top_parent;
	p.parentNode.removeChild(p);
};

/** 
 * \internal This function is used when "dynamic initialization" is on.  It
 * retrieves a reference to a subtree if already created, or creates it if it
 * wasn't yet and \b dont_call is \b false (returns null in that case).
 * 
 * @param tree_id [string] the ID of the subtree
 * @param dont_call [boolean] pass true here if you don't want the subtree to be created
 * 
 * @return reference to the tree if it was found or created, null otherwise.
 */
Zapatec.Tree.prototype._getTree = function(tree_id, dont_call) {
	var tree = this.trees[tree_id];
	if (typeof tree == "function") {
		if (dont_call)
			tree = null;
		else {
			tree();
			tree = this.trees[tree_id];
		}
	}
	return tree;
};

// CUSTOMIZABLE EVENT HANDLERS; default action is "do nothing"

/** 
 * Third party code can override this member in order to add an event handler
 * that gets called each time a tree item is selected.  It receives a single
 * string parameter containing the item ID.
 */
Zapatec.Tree.prototype.onItemSelect = function(item) { 
    doThis(item._id,item._name,item._layer,item._pNode);
};
//add wanglj
// GLOBAL EVENT HANDLERS (to workaround the stupid Microsoft memory leak)

/** 
 * \internal This is a global event handler that gets called when a tree item
 * is clicked.  Don't override! ;-)
 */
Zapatec.Tree.onItemToggle = function() {    
	var item = this;
	var body = document.body;
	while (item && item !== body && !/tree-item/.test(item.className))
		item = item.parentNode;
	Zapatec.Tree.all[item.__msh_tree].itemClicked(item.__msh_item);
};  

Zapatec.Tree.onImgToggle = function() {    
	var item = this;
	var body = document.body;
	while (item && item !== body && !/tree-item/.test(item.className))
		item = item.parentNode;
	Zapatec.Tree.all[item.__msh_tree].imgClicked(item.__msh_item);
};   

Zapatec.Tree.prototype.imgClicked = function(item_id) {
    
	this.selectedItem = this.toggleItem(item_id);	
	if (this.config.hiliteSelectedNode && this.selectedItem)
		Zapatec.Utils.addClass(this.selectedItem, "tree-item-selected");
	
};

/**
 * \internal This is a global event handler that gets called when a tree item
 * is assigned.  Don't override! ;-)
 */
Zapatec.Tree.prototype.expandItem= function(item_id) {
    var arg=item_id.split("|");
    for(i=0;i<arg.length;i++){
        if(arg[i]!=null&&arg[i]!=""){
            var item = this.items[arg[i]];
            if(item==null) continue;
            Zapatec.Tree.all[item.__msh_tree].imgClicked(item.__msh_item);
        }
	}
};

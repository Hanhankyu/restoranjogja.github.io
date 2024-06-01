// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:jimu/dijit/templates/_TreeNode.html":'\x3cdiv class\x3d"dijitTreeNode" role\x3d"presentation"\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"rowNode" class\x3d"dijitTreeRow" role\x3d"presentation"\x3e\r\n\t\t\x3cspan data-dojo-attach-point\x3d"expandoNode" class\x3d"dijitInline dijitTreeExpando" role\x3d"presentation"\x3e\x3c/span\x3e\r\n\t\t\x3cspan data-dojo-attach-point\x3d"expandoNodeText" class\x3d"dijitExpandoText" role\x3d"presentation"\x3e\x3c/span\x3e\r\n\t\t\x3cspan data-dojo-attach-point\x3d"contentNode" class\x3d"dijitTreeContent" role\x3d"presentation"\x3e\r\n\t\t\t\x3cspan role\x3d"presentation" class\x3d"dijitInline dijitIcon dijitTreeIcon" data-dojo-attach-point\x3d"iconNode"\x3e\x3c/span\x3e\r\n\t\t\t\x3cspan data-dojo-attach-point\x3d"labelNode,focusNode" class\x3d"dijitTreeLabel" role\x3d"treeitem" tabindex\x3d"-1" aria-selected\x3d"false"\x3e\x3c/span\x3e\r\n\t\t\x3c/span\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"containerNode" class\x3d"dijitTreeNodeContainer" role\x3d"presentation" style\x3d"display: none;"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./templates/_TreeNode.html dojo/_base/lang dojo/_base/html dojo/_base/array dojo/_base/event dojo/query dojo/aspect dojo/on dojo/keys dojo/Evented dijit/registry dijit/Tree jimu/utils".split(" "),function(h,x,y,q,e,d,f,r,t,u,k,l,m,n,p,v){var w=h([p._TreeNode,m],{templateString:q,declaredClass:"jimu._TreeNode",isLeaf:!1,groupId:"",postCreate:function(){this.inherited(arguments);d.addClass(this.domNode,"jimu-tree-node");this.isLeaf=
!!this.isLeaf;this.groupId?(this.checkNode=d.toDom('\x3cinput type\x3d"radio" /\x3e'),this.checkNode.name=this.groupId):this.checkNode=d.toDom('\x3cinput type\x3d"checkbox" /\x3e');d.addClass(this.checkNode,"jimu-tree-check-node");d.place(this.checkNode,this.contentNode,"first");this.own(k(this.checkNode,"click",e.hitch(this,this._onClick)));this.own(k(this.rowNode,"keydown",e.hitch(this,function(a,b){b.target=a;b.keyCode!==l.ENTER&&b.keyCode!==l.SPACE||this._onClick(b)},this.checkNode)));this.isLeaf?
this.groupId?d.setStyle(this.checkNode,"display","none"):d.setStyle(this.checkNode,"display","inline"):d.setStyle(this.checkNode,"display","none");this.isLeaf?d.addClass(this.domNode,"jimu-tree-leaf-node"):d.addClass(this.domNode,"jimu-tree-not-leaf-node")},select:function(){this.isLeaf&&(this.checkNode.checked=!0,d.addClass(this.domNode,"jimu-tree-selected-leaf-node"))},unselect:function(){this.isLeaf&&(this.checkNode.checked=!1,d.removeClass(this.domNode,"jimu-tree-selected-leaf-node"))},toggleSelect:function(){this.isLeaf&&
(this.checkNode.checked?this.unselect():this.select())},_onClick:function(a){(a.target||a.srcElement)===this.checkNode?this.tree._onCheckNodeClick(this,this.checkNode.checked,a):this.tree._onClick(this,a)},_onChange:function(){this.isLeaf&&setTimeout(e.hitch(this,function(){this.checkNode.checked?this.emit("tn-select",this):this.emit("tn-unselect",this)}),100)},destroy:function(){delete this.tree;this.inherited(arguments)}});return h([p,m],{declaredClass:"jimu._Tree",openOnClick:!0,multiple:!0,uniqueId:"",
showRoot:!1,postMixInProperties:function(){this.inherited(arguments);this.uniqueId="tree_"+v.getRandomString()},postCreate:function(){this.inherited(arguments);d.addClass(this.domNode,"jimu-tree");this.own(u.before(this,"onClick",e.hitch(this,this._jimuBeforeClick)));this.rootLoadingIndicator&&d.setStyle(this.rootLoadingIndicator,"display","none");this.dndController.singular=!0;d.setAttr(this.domNode,"tabindex",0)},removeItem:function(a){this.model.store.remove(a)},getAllItems:function(){var a=this.getAllTreeNodeWidgets();
return f.map(a,e.hitch(this,function(b){var c=b.item;c.selected=b.checkNode.checked;return c}))},getSelectedItems:function(){var a=this.getAllTreeNodeWidgets();a=f.filter(a,e.hitch(this,function(b){return b.checkNode.checked}));return f.map(a,e.hitch(this,function(b){return b.item}))},getFilteredItems:function(a){var b=this.getAllTreeNodeWidgets();b=f.map(b,e.hitch(this,function(c){var g=c.item;g.selected=c.checkNode.checked;return g}));return f.filter(b,e.hitch(this,function(c){return a(c)}))},getTreeNodeByItemId:function(a){for(var b=
this._getAllTreeNodeDoms(),c=0;c<b.length;c++){var g=n.byNode(b[c]);if(g.item.id.toString()===a.toString())return g}return null},selectItem:function(a){(a=this.getTreeNodeByItemId(a))&&a.isLeaf&&this.selectNodeWidget(a)},unselectItem:function(a){(a=this.getTreeNodeByItemId(a))&&a.isLeaf&&a.unselect()},getAllLeafTreeNodeWidgets:function(){var a=this.getAllTreeNodeWidgets();return f.filter(a,e.hitch(this,function(b){return b.isLeaf}))},getAllTreeNodeWidgets:function(){var a=this._getAllTreeNodeDoms();
return f.map(a,e.hitch(this,function(b){return n.byNode(b)}))},isLeafItem:function(a){return a&&a.isLeaf},_getAllTreeNodeDoms:function(){return t(".dijitTreeNode",this.domNode)},_createTreeNode:function(a){a.isLeaf=this.isLeafItem(a.item);this.multiple||(a.groupId=this.uniqueId);return new w(a)},_onTreeNodeSelect:function(a){this.emit("item-select",{item:a.item,treeNode:a})},_onTreeNodeUnselect:function(a){this.emit("item-unselect",{item:a.item,treeNode:a})},selectNodeWidget:function(a){this.multiple||
this.unselectAllLeafNodeWidgets();a.select()},_jimuBeforeClick:function(a,b,c){b.isLeaf&&(d.hasClass(c.target||c.srcElement,"jimu-tree-check-node")||(this.multiple?b.toggleSelect():this.selectNodeWidget(b)));return arguments},_onCheckNodeClick:function(a,b,c){!this.multiple&&b&&this.unselectAllLeafNodeWidgets();r.stop(c);this.focusNode(a);setTimeout(e.hitch(this,function(){b?this.selectNodeWidget(a):a.unselect();this.onClick(a.item,a,c)}),0)},unselectAllLeafNodeWidgets:function(){var a=this.getAllLeafTreeNodeWidgets();
f.forEach(a,e.hitch(this,function(b){b.unselect()}))}})});
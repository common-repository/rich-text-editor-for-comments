(function(b) {
  function f() {
    this.controls = {bold:{groupIndex:0, visible:!0, tags:["b", "strong"], css:{fontWeight:"bold"}, tooltip:"Bold", hotkey:{ctrl:1, key:66}}, copy:{groupIndex:1, visible:!1, tooltip:"Copy"}, createLink:{groupIndex:6, visible:!0, exec:function() {
      var a = this;
      b.wysiwyg.controls && b.wysiwyg.controls.link ? b.wysiwyg.controls.link.init(this) : b.wysiwyg.autoload ? b.wysiwyg.autoload.control("wysiwyg.link.js", function() {
        a.controls.createLink.exec.apply(a)
      }) : h.error("$.wysiwyg.controls.link not defined. You need to include wysiwyg.link.js file")
    }, tags:["a"], tooltip:"Create link"}, cut:{groupIndex:1, visible:!1, tooltip:"Cut"}, decreaseFontSize:{groupIndex:3, visible:!0, tags:["small"], tooltip:"Decrease font size", exec:function() {
      this.decreaseFontSize()
    }}, h1:{groupIndex:4, visible:!1, className:"h1", command:b.browser.msie || b.browser.safari ? "FormatBlock" : "heading", arguments:b.browser.msie || b.browser.safari ? "<h1>" : "h1", tags:["h1"], tooltip:"Header 1"}, h2:{groupIndex:4, visible:!1, className:"h2", command:b.browser.msie || b.browser.safari ? "FormatBlock" : "heading", arguments:b.browser.msie || b.browser.safari ? "<h2>" : "h2", tags:["h2"], tooltip:"Header 2"}, h3:{groupIndex:4, visible:!0, className:"h3", command:b.browser.msie || 
    b.browser.safari ? "FormatBlock" : "heading", arguments:b.browser.msie || b.browser.safari ? "<h3>" : "h3", tags:["h3"], tooltip:"Header 3"}, highlight:{tooltip:"Highlight", className:"highlight", groupIndex:8, visible:!0, css:{backgroundColor:"#ffff00"}, exec:function() {
      var a, c;
      a = b.browser.msie || b.browser.safari ? "backcolor" : "hilitecolor";
      if(b.browser.msie) {
        c = this.getInternalRange().parentElement()
      }else {
        c = this.getInternalSelection();
        for(c = c.extentNode || c.focusNode;void 0 === c.style;) {
          if(c = c.parentNode, c.tagName && "body" === c.tagName.toLowerCase()) {
            return
          }
        }
      }
      this.editorDoc.execCommand(a, !1, "#ffff00" === c.style.backgroundColor || "#ffff00" === c.style.backgroundColor ? "#ffffff" : "#ffff00")
    }}, html:{groupIndex:11, visible:!0, exec:function() {
      var a;
      this.options.resizeOptions && b.fn.resizable && (a = this.element.height());
      this.viewHTML ? (this.setContent(this.original.value), b(this.original).hide(), this.editor.show(), this.options.resizeOptions && b.fn.resizable && (a === this.element.height() && this.element.height(a + this.editor.height()), this.element.resizable(b.extend(!0, {alsoResize:this.editor}, this.options.resizeOptions))), this.ui.toolbar.find("li").each(function() {
        var a = b(this);
        a.hasClass("html") ? a.removeClass("active") : a.removeClass("disabled")
      })) : (this.saveContent(), b(this.original).css({width:this.element.outerWidth() - 6, height:this.element.height() - this.ui.toolbar.height() - 6, resize:"none"}).show(), this.editor.hide(), this.options.resizeOptions && b.fn.resizable && (a === this.element.height() && this.element.height(this.ui.toolbar.height()), this.element.resizable("destroy")), this.ui.toolbar.find("li").each(function() {
        var a = b(this);
        a.hasClass("html") ? a.addClass("active") : !1 === a.hasClass("fullscreen") && a.removeClass("active").addClass("disabled")
      }));
      this.viewHTML = !this.viewHTML
    }, tooltip:"View source code"}, increaseFontSize:{groupIndex:3, visible:!0, tags:["big"], tooltip:"Increase font size", exec:function() {
      this.increaseFontSize()
    }}, indent:{groupIndex:7, visible:!0, tooltip:"Indent"}, insertHorizontalRule:{groupIndex:7, visible:!0, tags:["hr"], tooltip:"Insert Horizontal Rule"}, insertImage:{groupIndex:6, visible:!0, exec:function() {
      var a = this;
      b.wysiwyg.controls && b.wysiwyg.controls.image ? b.wysiwyg.controls.image.init(this) : b.wysiwyg.autoload ? b.wysiwyg.autoload.control("wysiwyg.image.js", function() {
        a.controls.insertImage.exec.apply(a)
      }) : h.error("$.wysiwyg.controls.image not defined. You need to include wysiwyg.image.js file")
    }, tags:["img"], tooltip:"Insert image"}, insertOrderedList:{groupIndex:9, visible:!0, tags:["ol"], tooltip:"Insert Ordered List"}, insertTable:{groupIndex:9, visible:!1, exec:function() {
      var a = this;
      b.wysiwyg.controls && b.wysiwyg.controls.table ? b.wysiwyg.controls.table(this) : b.wysiwyg.autoload ? b.wysiwyg.autoload.control("wysiwyg.table.js", function() {
        a.controls.insertTable.exec.apply(a)
      }) : h.error("$.wysiwyg.controls.table not defined. You need to include wysiwyg.table.js file")
    }, tags:["table"], tooltip:"Insert table"}, insertUnorderedList:{groupIndex:9, visible:!0, tags:["ul"], tooltip:"Insert Unordered List"}, italic:{groupIndex:0, visible:!0, tags:["i", "em"], css:{fontStyle:"italic"}, tooltip:"Italic", hotkey:{ctrl:1, key:73}}, justifyCenter:{groupIndex:5, visible:!0, tags:["center"], css:{textAlign:"center"}, tooltip:"Justify Center"}, justifyFull:{groupIndex:5, visible:!0, css:{textAlign:"justify"}, tooltip:"Justify Full"}, justifyLeft:{visible:!0, groupIndex:5, 
    css:{textAlign:"left"}, tooltip:"Justify Left"}, justifyRight:{groupIndex:5, visible:!0, css:{textAlign:"right"}, tooltip:"Justify Right"}, ltr:{groupIndex:12, visible:!1, exec:function() {
      var a = this.dom.getElement("p");
      if(!a) {
        return!1
      }
      b(a).attr("dir", "ltr");
      return!0
    }, tooltip:"Left to Right"}, outdent:{groupIndex:7, visible:!0, tooltip:"Outdent"}, paragraph:{groupIndex:8, visible:!1, className:"paragraph", command:"FormatBlock", arguments:b.browser.msie || b.browser.safari ? "<p>" : "p", tags:["p"], tooltip:"Paragraph"}, paste:{groupIndex:1, visible:!1, tooltip:"Paste"}, redo:{groupIndex:2, visible:!1, tooltip:"Redo"}, removeFormat:{groupIndex:11, visible:!0, exec:function() {
      this.removeFormat()
    }, tooltip:"Remove formatting"}, rtl:{groupIndex:12, visible:!1, exec:function() {
      var a = this.dom.getElement("p");
      if(!a) {
        return!1
      }
      b(a).attr("dir", "rtl");
      return!0
    }, tooltip:"Right to Left"}, strikeThrough:{groupIndex:0, visible:!0, tags:["s", "strike"], css:{textDecoration:"line-through"}, tooltip:"Strike-through"}, subscript:{groupIndex:10, visible:!0, tags:["sub"], tooltip:"Subscript"}, superscript:{groupIndex:10, visible:!0, tags:["sup"], tooltip:"Superscript"}, underline:{groupIndex:0, visible:!0, tags:["u"], css:{textDecoration:"underline"}, tooltip:"Underline", hotkey:{ctrl:1, key:85}}, undo:{groupIndex:2, visible:!0, tooltip:"Undo"}, code:{visible:!0, 
    groupIndex:8, tooltip:"Code snippet", exec:function() {
      var a = this.getInternalRange(), c = b(a.commonAncestorContainer), a = a.commonAncestorContainer.nodeName.toLowerCase();
      c.parent("code").length ? c.unwrap() : "body" !== a && c.wrap("<code/>")
    }}, cssWrap:{visible:!1, groupIndex:12, tooltip:"CSS Wrapper", exec:function() {
      b.wysiwyg.controls.cssWrap.init(this)
    }}};
    this.defaults = {html:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" style="margin:0"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></head><body style="margin:0;">INITIAL_CONTENT</body></html>', debug:!1, controls:{}, css:{}, events:{}, autoGrow:!1, autoSave:!0, brIE:!0, formHeight:300, formWidth:600, iFrameClass:null, initialContent:"<p>*</p>", maxHeight:1E4, 
    maxLength:0, messages:{nonSelection:"first select the text you wish to link"}, toolbarHtml:'<ul role="menu" class="toolbar"></ul>', removeHeadings:!1, replaceDivWithP:!1, resizeOptions:!1, rmUnusedControls:!1, rmUnwantedBr:!0, tableFiller:"Text Here!", initialMinHeight:null, controlImage:{forceRelativeUrls:!1}, controlLink:{forceRelativeUrls:!1}, plugins:{autoload:!1, i18n:!1, rmFormat:{rmMsWordMarkup:!1}}, dialog:"default"};
    this.availableControlProperties = "arguments,callback,className,command,css,custom,exec,groupIndex,hotkey,icon,tags,tooltip,visible".split(",");
    this.element = this.editorDoc = this.editor = null;
    this.options = {};
    this.savedRange = this.original = null;
    this.timers = [];
    this.validKeyCodes = [8, 9, 13, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46];
    this.isDestroyed = !1;
    this.dom = {ie:{parent:null}, w3c:{parent:null}};
    this.dom.parent = this;
    this.dom.ie.parent = this.dom;
    this.dom.w3c.parent = this.dom;
    this.ui = {};
    this.ui.self = this;
    this.ui.toolbar = null;
    this.ui.initialHeight = null;
    this.dom.getAncestor = function(a, b) {
      for(b = b.toLowerCase();a && "undefined" != typeof a.tagName && "body" !== a.tagName.toLowerCase();) {
        if(b === a.tagName.toLowerCase()) {
          return a
        }
        a = a.parentNode
      }
      if(!a.tagName && (a.previousSibling || a.nextSibling)) {
        if(a.previousSibling && a.previousSibling.tagName.toLowerCase() == b) {
          return a.previousSibling
        }
        if(a.nextSibling && a.nextSibling.tagName.toLowerCase() == b) {
          return a.nextSibling
        }
      }
      return null
    };
    this.dom.getElement = function(a) {
      a = a.toLowerCase();
      return window.getSelection ? this.w3c.getElement(a) : this.ie.getElement(a)
    };
    this.dom.ie.getElement = function(a) {
      var b = this.parent, e = b.parent.getInternalSelection(), d = e.createRange();
      if("Control" === e.type) {
        if(1 === d.length) {
          e = d.item(0)
        }else {
          return null
        }
      }else {
        e = d.parentElement()
      }
      return b.getAncestor(e, a)
    };
    this.dom.w3c.getElement = function(a) {
      var b = this.parent, e = b.parent.getInternalRange(), d;
      if(!e) {
        return null
      }
      d = e.commonAncestorContainer;
      3 === d.nodeType && (d = d.parentNode);
      d === e.startContainer && (d = d.childNodes[e.startOffset]);
      if(!d.tagName && (d.previousSibiling || d.nextSibling)) {
        if(d.previousSibiling && d.previousSibiling.tagName.toLowerCase() == a) {
          return d.previousSibiling
        }
        if(d.nextSibling && d.nextSibling.tagName.toLowerCase() == a) {
          return d.nextSibling
        }
      }
      return b.getAncestor(d, a)
    };
    this.ui.addHoverClass = function() {
      b(this).addClass("wysiwyg-button-hover")
    };
    this.ui.appendControls = function() {
      var a = this, c = this.self.parseControls(), e = !0, d = [], g = {}, i, f = function(b, c) {
        c.groupIndex && i !== c.groupIndex && (i = c.groupIndex, e = !1);
        c.visible && (e || (a.appendItemSeparator(), e = !0), c.custom ? a.appendItemCustom(b, c) : a.appendItem(b, c))
      };
      b.each(c, function(a, b) {
        var c = "empty";
        void 0 !== b.groupIndex && (c = "" === b.groupIndex ? "empty" : b.groupIndex);
        void 0 === g[c] && (d.push(c), g[c] = {});
        g[c][a] = b
      });
      d.sort(function(a, b) {
        if("number" === typeof a && typeof a === typeof b) {
          return a - b
        }
        a = a.toString();
        b = b.toString();
        return a > b ? 1 : a === b ? 0 : -1
      });
      0 < d.length && (i = d[0]);
      for(c = 0;c < d.length;c += 1) {
        b.each(g[d[c]], f)
      }
    };
    this.ui.appendItem = function(a, c) {
      var e = this.self, d = c.className || c.command || a || "empty", g = c.tooltip || c.command || a || "";
      return b('<li role="menuitem" unselectable="on">' + d + "</li>").addClass(d).attr("title", g).hover(this.addHoverClass, this.removeHoverClass).click(function(d) {
        if(b(this).hasClass("disabled")) {
          return!1
        }
        e.triggerControl.apply(e, [a, c]);
        var d = b(d.target), g;
        for(g in e.controls) {
          if(d.hasClass(g)) {
            e.ui.toolbar.find("." + g).toggleClass("active");
            e.editorDoc.rememberCommand = !0;
            break
          }
        }
        this.blur();
        e.ui.returnRange();
        e.ui.focus();
        return!0
      }).appendTo(e.ui.toolbar)
    };
    this.ui.appendItemCustom = function(a, c) {
      var e = this.self, d = c.tooltip || c.command || a || "";
      c.callback && b(window).bind("trigger-" + a + ".wysiwyg", c.callback);
      return b('<li role="menuitem" unselectable="on" style="background: url(\'' + c.icon + "') no-repeat;\"></li>").addClass("custom-command-" + a).addClass("wysiwyg-custom-command").addClass(a).attr("title", d).hover(this.addHoverClass, this.removeHoverClass).click(function() {
        if(b(this).hasClass("disabled")) {
          return!1
        }
        e.triggerControl.apply(e, [a, c]);
        this.blur();
        e.ui.returnRange();
        e.ui.focus();
        e.triggerControlCallback(a);
        return!0
      }).appendTo(e.ui.toolbar)
    };
    this.ui.appendItemSeparator = function() {
      var a = this.self;
      return b('<li role="separator" class="separator"></li>').appendTo(a.ui.toolbar)
    };
    this.autoSaveFunction = function() {
      this.saveContent()
    };
    this.ui.checkTargets = function(a) {
      var c = this.self;
      b.each(c.options.controls, function(e, d) {
        var g = d.className || d.command || e || "empty", i, f, h, l = function(a, b) {
          "function" === typeof b ? b(h.css(a).toString().toLowerCase(), c) && c.ui.toolbar.find("." + g).addClass("active") : h.css(a).toString().toLowerCase() === b && c.ui.toolbar.find("." + g).addClass("active")
        };
        "fullscreen" !== g && c.ui.toolbar.find("." + g).removeClass("active");
        if(d.tags || d.options && d.options.tags) {
          i = d.tags || d.options && d.options.tags;
          for(f = a;f && 1 === f.nodeType;) {
            -1 !== b.inArray(f.tagName.toLowerCase(), i) && c.ui.toolbar.find("." + g).addClass("active"), f = f.parentNode
          }
        }
        if(d.css || d.options && d.options.css) {
          i = d.css || d.options && d.options.css;
          for(h = b(a);h && 1 === h[0].nodeType;) {
            b.each(i, l), h = h.parent()
          }
        }
      })
    };
    this.ui.designMode = function() {
      var a = this.self, b;
      b = function(e) {
        if("on" === a.editorDoc.designMode) {
          a.timers.designMode && window.clearTimeout(a.timers.designMode), a.innerDocument() !== a.editorDoc && a.ui.initFrame()
        }else {
          try {
            a.editorDoc.designMode = "on"
          }catch(d) {
          }
          e -= 1;
          0 < e && (a.timers.designMode = window.setTimeout(function() {
            b(e)
          }, 100))
        }
      };
      b(3)
    };
    this.destroy = function() {
      this.isDestroyed = !0;
      var a, c = this.element.closest("form");
      for(a = 0;a < this.timers.length;a += 1) {
        window.clearTimeout(this.timers[a])
      }
      c.unbind(".wysiwyg");
      this.element.remove();
      b.removeData(this.original, "wysiwyg");
      b(this.original).show();
      return this
    };
    this.getRangeText = function() {
      var a = this.getInternalRange();
      a.toString ? a = a.toString() : a.text && (a = a.text);
      return a
    };
    this.execute = function(a, b) {
      "undefined" === typeof b && (b = null);
      this.editorDoc.execCommand(a, !1, b)
    };
    this.extendOptions = function(a) {
      var c = {};
      "object" === typeof a.controls && (c = a.controls, delete a.controls);
      a = b.extend(!0, {}, this.defaults, a);
      a.controls = b.extend(!0, {}, c, this.controls, c);
      a.rmUnusedControls && b.each(a.controls, function(b) {
        c[b] || delete a.controls[b]
      });
      return a
    };
    this.ui.focus = function() {
      var a = this.self;
      a.editor.get(0).contentWindow.focus();
      return a
    };
    this.ui.returnRange = function() {
      var a = this.self, b;
      if(null !== a.savedRange) {
        if(window.getSelection) {
          b = window.getSelection();
          0 < b.rangeCount && b.removeAllRanges();
          try {
            b.addRange(a.savedRange)
          }catch(e) {
            h.error(e)
          }
        }else {
          window.document.createRange ? window.getSelection().addRange(a.savedRange) : window.document.selection && a.savedRange.select()
        }
        a.savedRange = null
      }
    };
    this.increaseFontSize = function() {
      if(b.browser.mozilla || b.browser.opera) {
        this.editorDoc.execCommand("increaseFontSize", !1, null)
      }else {
        if(b.browser.safari) {
          var a = this.getInternalRange(), c = this.getInternalSelection(), e = this.editorDoc.createElement("big");
          if(!0 === a.collapsed && 3 === a.commonAncestorContainer.nodeType) {
            var d = a.commonAncestorContainer.nodeValue.toString(), g = d.lastIndexOf(" ", a.startOffset) + 1, d = -1 === d.indexOf(" ", a.startOffset) ? d : d.indexOf(" ", a.startOffset);
            a.setStart(a.commonAncestorContainer, g);
            a.setEnd(a.commonAncestorContainer, d);
            a.surroundContents(e)
          }else {
            a.surroundContents(e), c.removeAllRanges()
          }
          c.addRange(a)
        }else {
          h.error("Internet Explorer?")
        }
      }
    };
    this.decreaseFontSize = function() {
      if(b.browser.mozilla || b.browser.opera) {
        this.editorDoc.execCommand("decreaseFontSize", !1, null)
      }else {
        if(b.browser.safari) {
          var a = this.getInternalRange(), c = this.getInternalSelection(), e = this.editorDoc.createElement("small");
          if(!0 === a.collapsed && 3 === a.commonAncestorContainer.nodeType) {
            var d = a.commonAncestorContainer.nodeValue.toString(), g = d.lastIndexOf(" ", a.startOffset) + 1, d = -1 === d.indexOf(" ", a.startOffset) ? d : d.indexOf(" ", a.startOffset);
            a.setStart(a.commonAncestorContainer, g);
            a.setEnd(a.commonAncestorContainer, d);
            a.surroundContents(e)
          }else {
            a.surroundContents(e), c.removeAllRanges()
          }
          c.addRange(a)
        }else {
          h.error("Internet Explorer?")
        }
      }
    };
    this.getContent = function() {
      this.viewHTML && this.setContent(this.original.value);
      return this.events.filter("getContent", this.editorDoc.body.innerHTML)
    };
    this.events = {_events:{}, bind:function(a, b) {
      "object" !== typeof this._events.eventName && (this._events[a] = []);
      this._events[a].push(b)
    }, trigger:function(a, c) {
      if("object" === typeof this._events.eventName) {
        var e = this.editor;
        b.each(this._events[a], function(a, b) {
          "function" === typeof b && b.apply(e, c)
        })
      }
    }, filter:function(a, c) {
      if("object" === typeof this._events[a]) {
        var e = this.editor, d = Array.prototype.slice.call(arguments, 1);
        b.each(this._events[a], function(a, b) {
          "function" === typeof b && (c = b.apply(e, d))
        })
      }
      return c
    }};
    this.getElementByAttributeValue = function(a, c, e) {
      for(var d, g = this.editorDoc.getElementsByTagName(a), a = 0;a < g.length;a += 1) {
        if(d = g[a].getAttribute(c), b.browser.msie && (d = d.substr(d.length - e.length)), d === e) {
          return g[a]
        }
      }
      return!1
    };
    this.getInternalRange = function() {
      var a = this.getInternalSelection();
      return!a ? null : a.rangeCount && 0 < a.rangeCount ? a.getRangeAt(0) : a.createRange ? a.createRange() : null
    };
    this.getInternalSelection = function() {
      if(this.editor.get(0).contentWindow) {
        if(this.editor.get(0).contentWindow.getSelection) {
          return this.editor.get(0).contentWindow.getSelection()
        }
        if(this.editor.get(0).contentWindow.selection) {
          return this.editor.get(0).contentWindow.selection
        }
      }
      return this.editorDoc.getSelection ? this.editorDoc.getSelection() : this.editorDoc.selection ? this.editorDoc.selection : null
    };
    this.getRange = function() {
      var a = this.getSelection();
      if(!a) {
        return null
      }
      if(a.rangeCount && 0 < a.rangeCount) {
        a.getRangeAt(0)
      }else {
        if(a.createRange) {
          return a.createRange()
        }
      }
      return null
    };
    this.getSelection = function() {
      return window.getSelection ? window.getSelection() : window.document.selection
    };
    this.ui.grow = function() {
      var a = this.self, c = b(a.editorDoc.body), e = b.browser.msie ? c[0].scrollHeight : c.height() + 2 + 20, e = Math.max(e, a.ui.initialHeight), e = Math.min(e, a.options.maxHeight);
      a.editor.attr("scrolling", e < a.options.maxHeight ? "no" : "auto");
      c.css("overflow", e < a.options.maxHeight ? "hidden" : "");
      a.editor.get(0).height = e;
      return a
    };
    this.init = function(a, c) {
      var e = this, d = b(a).closest("form"), g = a.width || a.clientWidth || 0, i = a.height || a.clientHeight || 0;
      this.options = this.extendOptions(c);
      this.original = a;
      this.ui.toolbar = b(this.options.toolbarHtml);
      b.browser.msie && 8 > parseInt(b.browser.version, 10) && (this.options.autoGrow = !1);
      0 === g && a.cols && (g = 8 * a.cols + 21);
      0 === i && a.rows && (i = 16 * a.rows + 16);
      this.editor = b("https:" === window.location.protocol ? '<iframe src="javascript:false;"></iframe>' : "<iframe></iframe>").attr("frameborder", "0");
      this.options.iFrameClass ? this.editor.addClass(this.options.iFrameClass) : (this.editor.css({minHeight:(i - 6).toString() + "px", width:50 < g ? (g - 8).toString() + "px" : ""}), b.browser.msie && 7 > parseInt(b.browser.version, 10) && this.editor.css("height", i.toString() + "px"));
      a.id && (i = a.id + "-wysiwyg-iframe", document.getElementById(i) || this.editor.attr("id", i));
      this.editor.attr("tabindex", b(a).attr("tabindex"));
      this.element = b("<div/>").addClass("wysiwyg");
      this.options.iFrameClass || this.element.css({width:0 < g ? g.toString() + "px" : "100%"});
      b(a).hide().before(this.element);
      this.viewHTML = !1;
      this.initialContent = b(a).val();
      this.ui.initFrame();
      this.options.resizeOptions && b.fn.resizable && this.element.resizable(b.extend(!0, {alsoResize:this.editor}, this.options.resizeOptions));
      this.options.autoSave && d.bind("submit.wysiwyg", function() {
        e.autoSaveFunction()
      });
      d.bind("reset.wysiwyg", function() {
        e.resetFunction()
      })
    };
    this.ui.initFrame = function() {
      var a = this.self, c;
      a.ui.appendControls();
      a.element.append(a.ui.toolbar).append(b("<div><\!-- --\></div>").css({clear:"both"})).append(a.editor);
      a.editorDoc = a.innerDocument();
      if(a.isDestroyed) {
        return null
      }
      a.ui.designMode();
      a.editorDoc.open();
      a.editorDoc.write(a.options.html.replace(/INITIAL_CONTENT/, function() {
        return a.wrapInitialContent()
      }));
      a.editorDoc.close();
      b.wysiwyg.plugin.bind(a);
      b(a.editorDoc).trigger("initFrame.wysiwyg");
      b(a.editorDoc).bind("click.wysiwyg", function(b) {
        a.ui.checkTargets(b.target ? b.target : b.srcElement)
      });
      setInterval(function() {
        var c = null;
        try {
          var e = a.getInternalRange();
          e && (c = {range:e, parent:b.browser.msie ? e.parentElement() : e.endContainer.parentNode, width:(b.browser.msie ? e.boundingWidth : e.startOffset - e.endOffset) || 0})
        }catch(i) {
          h.error(i)
        }
        c && 0 == c.width && !a.editorDoc.rememberCommand && a.ui.checkTargets(c.parent)
      }, 400);
      b(a.original).focus(function() {
        0 !== b(this).filter(":visible").length && a.ui.focus()
      });
      b(a.editorDoc).keydown(function(b) {
        var c;
        if(8 === b.keyCode && (c = /^<([\w]+)[^>]*>(<br\/?>)?<\/\1>$/, c.test(a.getContent()))) {
          return b.stopPropagation(), !1
        }
        a.editorDoc.rememberCommand = !1;
        return!0
      });
      b.browser.msie ? a.options.brIE && b(a.editorDoc).keydown(function(b) {
        return 13 === b.keyCode ? (b = a.getRange(), b.pasteHTML("<br/>"), b.collapse(!1), b.select(), !1) : !0
      }) : b(a.editorDoc).keydown(function(b) {
        var c;
        if(b.ctrlKey || b.metaKey) {
          for(c in a.controls) {
            if(a.controls[c].hotkey && a.controls[c].hotkey.ctrl && b.keyCode === a.controls[c].hotkey.key) {
              return a.triggerControl.apply(a, [c, a.controls[c]]), !1
            }
          }
        }
        return!0
      });
      a.options.plugins.rmFormat.rmMsWordMarkup && b(a.editorDoc).bind("keyup.wysiwyg", function(c) {
        if(c.ctrlKey || c.metaKey) {
          86 === c.keyCode && b.wysiwyg.rmFormat && ("object" === typeof a.options.plugins.rmFormat.rmMsWordMarkup ? b.wysiwyg.rmFormat.run(a, {rules:{msWordMarkup:a.options.plugins.rmFormat.rmMsWordMarkup}}) : b.wysiwyg.rmFormat.run(a, {rules:{msWordMarkup:{enabled:!0}}}))
        }
      });
      a.options.autoSave && b(a.editorDoc).keydown(function() {
        a.autoSaveFunction()
      }).keyup(function() {
        a.autoSaveFunction()
      }).mousedown(function() {
        a.autoSaveFunction()
      }).bind(b.support.noCloneEvent ? "input.wysiwyg" : "paste.wysiwyg", function() {
        a.autoSaveFunction()
      });
      a.options.autoGrow && (a.ui.initialHeight = null !== a.options.initialMinHeight ? a.options.initialMinHeight : b(a.editorDoc).height(), b(a.editorDoc.body).css("border", "1px solid white"), c = function() {
        a.ui.grow()
      }, b(a.editorDoc).keyup(c), b(a.editorDoc).bind("editorRefresh.wysiwyg", c), a.ui.grow());
      a.options.css && (String === a.options.css.constructor ? b.browser.msie ? (c = a.editorDoc.createStyleSheet(a.options.css), b(c).attr({media:"all"})) : (c = b("<link/>").attr({href:a.options.css, media:"all", rel:"stylesheet", type:"text/css"}), b(a.editorDoc).find("head").append(c)) : a.timers.initFrame_Css = window.setTimeout(function() {
        b(a.editorDoc.body).css(a.options.css)
      }, 0));
      0 === a.initialContent.length && ("function" === typeof a.options.initialContent ? a.setContent(a.options.initialContent()) : a.setContent(a.options.initialContent));
      0 < a.options.maxLength && b(a.editorDoc).keydown(function(c) {
        b(a.editorDoc).text().length >= a.options.maxLength && -1 === b.inArray(c.which, a.validKeyCodes) && c.preventDefault()
      });
      b.each(a.options.events, function(c, e) {
        b(a.editorDoc).bind(c + ".wysiwyg", function(b) {
          e.apply(a.editorDoc, [b, a])
        })
      });
      b.browser.msie ? b(a.editorDoc).bind("beforedeactivate.wysiwyg", function() {
        a.savedRange = a.getInternalRange()
      }) : b(a.editorDoc).bind("blur.wysiwyg", function() {
        a.savedRange = a.getInternalRange()
      });
      b(a.editorDoc.body).addClass("wysiwyg");
      a.options.events && a.options.events.save && (c = a.options.events.save, b(a.editorDoc).bind("keyup.wysiwyg", c), b(a.editorDoc).bind("change.wysiwyg", c), b.support.noCloneEvent ? b(a.editorDoc).bind("input.wysiwyg", c) : (b(a.editorDoc).bind("paste.wysiwyg", c), b(a.editorDoc).bind("cut.wysiwyg", c)));
      if(a.options.xhtml5 && a.options.unicode) {
        var e = {ne:8800, le:8804, para:182, xi:958, darr:8595, nu:957, oacute:243, Uacute:218, omega:969, prime:8242, pound:163, igrave:236, thorn:254, forall:8704, emsp:8195, lowast:8727, brvbar:166, alefsym:8501, nbsp:160, delta:948, clubs:9827, lArr:8656, Omega:937, Auml:196, cedil:184, and:8743, plusmn:177, ge:8805, raquo:187, uml:168, equiv:8801, laquo:171, rdquo:8221, Epsilon:917, divide:247, fnof:402, chi:967, Dagger:8225, iacute:237, rceil:8969, sigma:963, Oslash:216, acute:180, frac34:190, 
        lrm:8206, upsih:978, Scaron:352, part:8706, exist:8707, nabla:8711, image:8465, prop:8733, zwj:8205, omicron:959, aacute:225, Yuml:376, Yacute:221, weierp:8472, rsquo:8217, otimes:8855, kappa:954, thetasym:977, harr:8596, Ouml:214, Iota:921, ograve:242, sdot:8901, copy:169, oplus:8853, acirc:226, sup:8835, zeta:950, Iacute:205, Oacute:211, crarr:8629, Nu:925, bdquo:8222, lsquo:8216, apos:39, Beta:914, eacute:233, egrave:232, lceil:8968, Kappa:922, piv:982, Ccedil:199, ldquo:8220, Xi:926, 
        cent:162, uarr:8593, hellip:8230, Aacute:193, ensp:8194, sect:167, Ugrave:217, aelig:230, ordf:170, curren:164, sbquo:8218, macr:175, Phi:934, Eta:919, rho:961, Omicron:927, sup2:178, euro:8364, aring:229, Theta:920, mdash:8212, uuml:252, otilde:245, eta:951, uacute:250, rArr:8658, nsub:8836, agrave:224, notin:8713, ndash:8211, Psi:936, Ocirc:212, sube:8838, szlig:223, micro:181, not:172, sup1:185, middot:183, iota:953, ecirc:234, lsaquo:8249, thinsp:8201, sum:8721, ntilde:241, scaron:353, 
        cap:8745, atilde:227, lang:10216, __replacement:65533, isin:8712, gamma:947, Euml:203, ang:8736, upsilon:965, Ntilde:209, hearts:9829, Alpha:913, Tau:932, spades:9824, dagger:8224, THORN:222, "int":8747, lambda:955, Eacute:201, Uuml:220, infin:8734, rlm:8207, Aring:197, ugrave:249, Egrave:200, Acirc:194, rsaquo:8250, ETH:208, oslash:248, alpha:945, Ograve:210, Prime:8243, mu:956, ni:8715, real:8476, bull:8226, beta:946, icirc:238, eth:240, prod:8719, larr:8592, ordm:186, perp:8869, Gamma:915, 
        reg:174, ucirc:251, Pi:928, psi:968, tilde:732, asymp:8776, zwnj:8204, Agrave:192, deg:176, AElig:198, times:215, Delta:916, sim:8764, Otilde:213, Mu:924, uArr:8657, circ:710, theta:952, Rho:929, sup3:179, diams:9830, tau:964, Chi:935, frac14:188, oelig:339, shy:173, or:8744, dArr:8659, phi:966, iuml:239, Lambda:923, rfloor:8971, iexcl:161, cong:8773, ccedil:231, Icirc:206, frac12:189, loz:9674, rarr:8594, cup:8746, radic:8730, frasl:8260, euml:235, OElig:338, hArr:8660, Atilde:195, Upsilon:933, 
        there4:8756, ouml:246, oline:8254, Ecirc:202, yacute:253, auml:228, permil:8240, sigmaf:962, iquest:191, empty:8709, pi:960, Ucirc:219, supe:8839, Igrave:204, yen:165, rang:10217, trade:8482, lfloor:8970, minus:8722, Zeta:918, sub:8834, epsilon:949, yuml:255, Sigma:931, Iuml:207, ocirc:244};
        a.events.bind("getContent", function(a) {
          return a.replace(/&(?:amp;)?(?!amp|lt|gt|quot)([a-z][a-z0-9]*);/gi, function(a, b) {
            e[b] || (b = b.toLowerCase(), e[b] || (b = "__replacement"));
            return String.fromCharCode(e[b])
          })
        })
      }
      b(a.original).trigger("ready.jwysiwyg", [a.editorDoc, a])
    };
    this.innerDocument = function() {
      var a = this.editor.get(0);
      if("iframe" === a.nodeName.toLowerCase()) {
        if(a.contentDocument) {
          return a.contentDocument
        }
        if(a.contentWindow) {
          return a.contentWindow.document
        }
        if(this.isDestroyed) {
          return null
        }
        h.error("Unexpected error in innerDocument")
      }
      return a
    };
    this.insertHtml = function(a) {
      var c;
      if(!a || 0 === a.length) {
        return this
      }
      b.browser.msie ? (this.ui.focus(), this.editorDoc.execCommand("insertImage", !1, "#jwysiwyg#"), (c = this.getElementByAttributeValue("img", "src", "#jwysiwyg#")) && b(c).replaceWith(a)) : b.browser.mozilla ? 1 === b(a).length ? (c = this.getInternalRange(), c.deleteContents(), c.insertNode(b(a).get(0))) : this.editorDoc.execCommand("insertHTML", !1, a) : this.editorDoc.execCommand("insertHTML", !1, a) || (this.editor.focus(), this.editorDoc.execCommand("insertHTML", !1, a));
      this.saveContent();
      return this
    };
    this.parseControls = function() {
      var a = this;
      b.each(this.options.controls, function(c, e) {
        b.each(e, function(d) {
          if(-1 === b.inArray(d, a.availableControlProperties)) {
            throw c + '["' + d + '"]: property "' + d + '" not exists in Wysiwyg.availableControlProperties';
          }
        })
      });
      return this.options.parseControls ? this.options.parseControls.call(this) : this.options.controls
    };
    this.removeFormat = function() {
      b.browser.msie && this.ui.focus();
      this.options.removeHeadings && this.editorDoc.execCommand("formatBlock", !1, "<p>");
      this.editorDoc.execCommand("removeFormat", !1, null);
      this.editorDoc.execCommand("unlink", !1, null);
      b.wysiwyg.rmFormat && b.wysiwyg.rmFormat.enabled && ("object" === typeof this.options.plugins.rmFormat.rmMsWordMarkup ? b.wysiwyg.rmFormat.run(this, {rules:{msWordMarkup:this.options.plugins.rmFormat.rmMsWordMarkup}}) : b.wysiwyg.rmFormat.run(this, {rules:{msWordMarkup:{enabled:!0}}}));
      return this
    };
    this.ui.removeHoverClass = function() {
      b(this).removeClass("wysiwyg-button-hover")
    };
    this.resetFunction = function() {
      this.setContent(this.initialContent)
    };
    this.saveContent = function() {
      if(!this.viewHTML) {
        if(this.original) {
          var a;
          a = this.getContent();
          this.options.rmUnwantedBr && (a = a.replace(/<br\/?>$/, ""));
          this.options.replaceDivWithP && (a = b("<div/>").addClass("temp").append(a), a.children("div").each(function() {
            var a = b(this), e = a.find("p"), d;
            if(0 === e.length) {
              e = b("<p></p>");
              if(0 < this.attributes.length) {
                for(d = 0;d < this.attributes.length;d += 1) {
                  e.attr(this.attributes[d].name, a.attr(this.attributes[d].name))
                }
              }
              e.append(a.html());
              a.replaceWith(e)
            }
          }), a = a.html());
          b(this.original).val(a);
          this.options.events && this.options.events.save && this.options.events.save.call(this)
        }
        return this
      }
    };
    this.setContent = function(a) {
      this.editorDoc.body.innerHTML = a;
      this.saveContent();
      return this
    };
    this.triggerControl = function(a, b) {
      var e = b.command || a, d = b.arguments || [];
      if(b.exec) {
        b.exec.apply(this)
      }else {
        this.ui.focus();
        this.ui.withoutCss();
        try {
          this.editorDoc.execCommand(e, !1, d)
        }catch(g) {
          h.error(g)
        }
      }
      this.options.autoSave && this.autoSaveFunction()
    };
    this.triggerControlCallback = function(a) {
      b(window).trigger("trigger-" + a + ".wysiwyg", [this])
    };
    this.ui.withoutCss = function() {
      var a = this.self;
      if(b.browser.mozilla) {
        try {
          a.editorDoc.execCommand("styleWithCSS", !1, !1)
        }catch(c) {
          try {
            a.editorDoc.execCommand("useCSS", !1, !0)
          }catch(e) {
          }
        }
      }
      return a
    };
    this.wrapInitialContent = function() {
      var a = this.initialContent;
      return!a.match(/<\/?p>/gi) ? "<p>" + a + "</p>" : a
    }
  }
  var h = window.console ? window.console : {log:b.noop, error:function(a) {
    b.error(a)
  }};
  b.wysiwyg = {messages:{noObject:"Something goes wrong, check object"}, addControl:function(a, c, e) {
    return a.each(function() {
      var a = b(this).data("wysiwyg"), g = {};
      if(!a) {
        return this
      }
      g[c] = b.extend(!0, {visible:!0, custom:!0}, e);
      b.extend(!0, a.options.controls, g);
      g = b(a.options.toolbarHtml);
      a.ui.toolbar.replaceWith(g);
      a.ui.toolbar = g;
      a.ui.appendControls()
    })
  }, clear:function(a) {
    return a.each(function() {
      var a = b(this).data("wysiwyg");
      if(!a) {
        return this
      }
      a.setContent("")
    })
  }, console:h, destroy:function(a) {
    return a.each(function() {
      var a = b(this).data("wysiwyg");
      if(!a) {
        return this
      }
      a.destroy()
    })
  }, document:function(a) {
    a = a.data("wysiwyg");
    return!a ? void 0 : b(a.editorDoc)
  }, getContent:function(a) {
    a = a.data("wysiwyg");
    return!a ? void 0 : a.getContent()
  }, getSelection:function(a) {
    a = a.data("wysiwyg");
    return!a ? void 0 : a.getRangeText()
  }, init:function(a, c) {
    return a.each(function() {
      var a = b.extend(!0, {}, c), d;
      "textarea" !== this.nodeName.toLowerCase() || b(this).data("wysiwyg") || (d = new f, d.init(this, a), b.data(this, "wysiwyg", d), b(d.editorDoc).trigger("afterInit.wysiwyg"))
    })
  }, insertHtml:function(a, c) {
    return a.each(function() {
      var a = b(this).data("wysiwyg");
      if(!a) {
        return this
      }
      a.insertHtml(c)
    })
  }, plugin:{listeners:{}, bind:function(a) {
    var c = this;
    b.each(this.listeners, function(e, d) {
      var g, f;
      for(g = 0;g < d.length;g += 1) {
        f = c.parseName(d[g]), b(a.editorDoc).bind(e + ".wysiwyg", {plugin:f}, function(c) {
          b.wysiwyg[c.data.plugin.name][c.data.plugin.method].apply(b.wysiwyg[c.data.plugin.name], [a])
        })
      }
    })
  }, exists:function(a) {
    if("string" !== typeof a) {
      return!1
    }
    a = this.parseName(a);
    return!b.wysiwyg[a.name] || !b.wysiwyg[a.name][a.method] ? !1 : !0
  }, listen:function(a, c) {
    var e;
    e = this.parseName(c);
    if(!b.wysiwyg[e.name] || !b.wysiwyg[e.name][e.method]) {
      return!1
    }
    this.listeners[a] || (this.listeners[a] = []);
    this.listeners[a].push(c);
    return!0
  }, parseName:function(a) {
    if("string" !== typeof a) {
      return!1
    }
    a = a.split(".");
    return 2 > a.length ? !1 : {name:a[0], method:a[1]}
  }, register:function(a) {
    a.name || h.error("Plugin name missing");
    b.each(b.wysiwyg, function(b) {
      b === a.name && h.error("Plugin with name '" + a.name + "' was already registered")
    });
    b.wysiwyg[a.name] = a;
    return!0
  }}, removeFormat:function(a) {
    return a.each(function() {
      var a = b(this).data("wysiwyg");
      if(!a) {
        return this
      }
      a.removeFormat()
    })
  }, save:function(a) {
    return a.each(function() {
      var a = b(this).data("wysiwyg");
      if(!a) {
        return this
      }
      a.saveContent()
    })
  }, selectAll:function(a) {
    var b = a.data("wysiwyg");
    if(!b) {
      return this
    }
    a = b.editorDoc.body;
    window.getSelection ? (b = b.getInternalSelection(), b.selectAllChildren(a)) : (b = a.createTextRange(), b.moveToElementText(a), b.select())
  }, setContent:function(a, c) {
    return a.each(function() {
      var a = b(this).data("wysiwyg");
      if(!a) {
        return this
      }
      a.setContent(c)
    })
  }, triggerControl:function(a, c) {
    return a.each(function() {
      var a = b(this).data("wysiwyg");
      if(!a) {
        return this
      }
      a.controls[c] || h.error("Control '" + c + "' not exists");
      a.triggerControl.apply(a, [c, a.controls[c]])
    })
  }, support:{prop:"prop" in b.fn && "removeProp" in b.fn}, utils:{extraSafeEntities:[["<", ">", "'", '"', " "], [32]], encodeEntities:function(a) {
    var c = this, e, d = [];
    0 === this.extraSafeEntities[1].length && b.each(this.extraSafeEntities[0], function(a, b) {
      c.extraSafeEntities[1].push(b.charCodeAt(0))
    });
    e = a.split("");
    b.each(e, function(a) {
      var f = e[a].charCodeAt(0);
      b.inArray(f, c.extraSafeEntities[1]) && (65 > f || 127 < f || 90 < f && 97 > f) ? d.push("&#" + f + ";") : d.push(e[a])
    });
    return d.join("")
  }}};
  b.wysiwyg.dialog = function(a, c) {
    var e = new b.wysiwyg.dialog.createDialog(a && a.options && a.options.dialog ? a.options.dialog : c.theme ? c.theme : "default"), d = this, f = b(d);
    this.options = {modal:!0, draggable:!0, title:"Title", content:"Content", width:"auto", height:"auto", zIndex:2E3, open:!1, close:!1};
    this.isOpen = !1;
    b.extend(this.options, c);
    this.object = e;
    this.open = function() {
      this.isOpen = !0;
      e.init.apply(d, []);
      var a = e.show.apply(d, []);
      f.trigger("afterOpen", [a])
    };
    this.show = function() {
      this.isOpen = !0;
      f.trigger("beforeShow");
      e.show.apply(d, []);
      f.trigger("afterShow")
    };
    this.hide = function() {
      this.isOpen = !1;
      f.trigger("beforeHide");
      var a = e.hide.apply(d, []);
      f.trigger("afterHide", [a])
    };
    this.close = function() {
      this.isOpen = !1;
      var a = e.hide.apply(d, []);
      f.trigger("beforeClose", [a]);
      e.destroy.apply(d, []);
      f.trigger("afterClose", [a])
    };
    this.options.open && f.bind("afterOpen", this.options.open);
    this.options.close && f.bind("afterClose", this.options.close);
    return this
  };
  b.extend(!0, b.wysiwyg.dialog, {_themes:{}, _theme:"", register:function(a, c) {
    b.wysiwyg.dialog._themes[a] = c
  }, deregister:function(a) {
    delete b.wysiwyg.dialog._themes[a]
  }, createDialog:function(a) {
    return new b.wysiwyg.dialog._themes[a]
  }, getDimensions:function() {
    var a = document.body.scrollWidth, c = document.body.scrollHeight;
    b.browser.opera && (c = Math.max(b(document).height(), b(window).height(), document.documentElement.clientHeight));
    return[a, c]
  }});
  b(function() {
    jQuery.ui && b.wysiwyg.dialog.register("jqueryui", function() {
      var a = this;
      this._$dialog = null;
      this.init = function() {
        var c = this.options.content;
        "object" === typeof c && ("function" === typeof c.html ? c = c.html() : "function" === typeof c.toString && (c = c.toString()));
        a._$dialog = b("<div></div>").attr("title", this.options.title).html(c);
        a._$dialog.dialog({modal:this.options.modal, draggable:this.options.draggable, height:"auto" == this.options.height ? 300 : this.options.height, width:"auto" == this.options.width ? 450 : this.options.width});
        return a._$dialog
      };
      this.show = function() {
        a._$dialog.dialog("open");
        return a._$dialog
      };
      this.hide = function() {
        a._$dialog.dialog("close");
        return a._$dialog
      };
      this.destroy = function() {
        a._$dialog.dialog("destroy");
        return a._$dialog
      }
    });
    b.wysiwyg.dialog.register("default", function() {
      var a = this;
      this._$dialog = null;
      this.init = function() {
        var c = this, e = this.options.content;
        "object" === typeof e && ("function" === typeof e.html ? e = e.html() : "function" === typeof e.toString && (e = e.toString()));
        a._$dialog = b('<div class="wysiwyg-dialog"></div>').css({"z-index":this.options.zIndex});
        var d = b('<div class="wysiwyg-dialog-topbar"><div class="wysiwyg-dialog-close-wrapper"></div><div class="wysiwyg-dialog-title">' + this.options.title + "</div></div>"), f = b('<a href="#" class="wysiwyg-dialog-close-button">X</a>');
        f.click(function() {
          c.close()
        });
        d.find(".wysiwyg-dialog-close-wrapper").prepend(f);
        e = b('<div class="wysiwyg-dialog-content">' + e + "</div>");
        a._$dialog.append(d).append(e);
        d = "auto" == this.options.height ? 300 : this.options.height;
        e = "auto" == this.options.width ? 450 : this.options.width;
        a._$dialog.hide().css({width:e, height:d, left:(b(window).width() - e) / 2, top:(b(window).height() - d) / 3});
        b("body").append(a._$dialog);
        return a._$dialog
      };
      this.show = function() {
        if(this.options.modal) {
          var c = b.wysiwyg.dialog.getDimensions(), c = b('<div class="wysiwyg-dialog-modal-div"></div>').css({width:c[0], height:c[1]});
          a._$dialog.wrap(c)
        }
        if(this.options.draggable) {
          var e = !1;
          a._$dialog.find("div.wysiwyg-dialog-topbar").bind("mousedown", function(a) {
            a.preventDefault();
            b(this).css({cursor:"move"});
            var c = b(this), f = b(this).parents(".wysiwyg-dialog"), h = a.pageX - parseInt(f.css("left"), 10), k = a.pageY - parseInt(f.css("top"), 10);
            e = !0;
            b(this).css({cursor:"move"});
            b(document).bind("mousemove", function(a) {
              a.preventDefault();
              e && f.css({top:a.pageY - k, left:a.pageX - h})
            }).bind("mouseup", function(a) {
              a.preventDefault();
              e = !1;
              c.css({cursor:"auto"});
              b(document).unbind("mousemove").unbind("mouseup")
            })
          })
        }
        a._$dialog.show();
        return a._$dialog
      };
      this.hide = function() {
        a._$dialog.hide();
        return a._$dialog
      };
      this.destroy = function() {
        this.options.modal && a._$dialog.unwrap();
        this.options.draggable && a._$dialog.find("div.wysiwyg-dialog-topbar").unbind("mousedown");
        a._$dialog.remove();
        return a._$dialog
      }
    })
  });
  b.fn.wysiwyg = function(a) {
    var c = arguments, e;
    if("undefined" !== typeof b.wysiwyg[a]) {
      return c = Array.prototype.concat.call([c[0]], [this], Array.prototype.slice.call(c, 1)), b.wysiwyg[a].apply(b.wysiwyg, Array.prototype.slice.call(c, 1))
    }
    if("object" === typeof a || !a) {
      return Array.prototype.unshift.call(c, this), b.wysiwyg.init.apply(b.wysiwyg, c)
    }
    if(b.wysiwyg.plugin.exists(a)) {
      return e = b.wysiwyg.plugin.parseName(a), c = Array.prototype.concat.call([c[0]], [this], Array.prototype.slice.call(c, 1)), b.wysiwyg[e.name][e.method].apply(b.wysiwyg[e.name], Array.prototype.slice.call(c, 1))
    }
    h.error("Method '" + a + "' does not exist on jQuery.wysiwyg.\nTry to include some extra controls or plugins")
  };
  b.fn.getWysiwyg = function() {
    return this.data("wysiwyg")
  }
})(jQuery);
(function(b) {
  if(void 0 === b.wysiwyg) {
    throw"wysiwyg.image.js depends on $.wysiwyg";
  }
  b.wysiwyg.controls || (b.wysiwyg.controls = {});
  b.wysiwyg.controls.image = {groupIndex:6, visible:!0, exec:function() {
    b.wysiwyg.controls.image.init(this)
  }, tags:["img"], tooltip:"Insert image", init:function(f) {
    var h = this, a, c, e, d, g, i = {alt:"", self:f.dom ? f.dom.getElement("img") : null, src:"http://", title:""};
    d = {legend:"Insert Image", preview:"Preview", url:"URL", title:"Title", description:"Description", width:"Width", height:"Height", original:"Original W x H", "float":"Float", floatNone:"None", floatLeft:"Left", floatRight:"Right", submit:"Insert Image", reset:"Cancel", fileManagerIcon:"Select file from server"};
    c = '<form class="wysiwyg" id="wysiwyg-addImage"><fieldset><div class="form-row"><span class="form-row-key">{preview}:</span><div class="form-row-value"><img src="" alt="{preview}" style="margin: 2px; padding:5px; max-width: 100%; overflow:hidden; max-height: 100px; border: 1px solid rgb(192, 192, 192);"/></div></div><div class="form-row"><label for="name">{url}:</label><div class="form-row-value"><input type="text" name="src" value=""/>';
    b.wysiwyg.fileManager && b.wysiwyg.fileManager.ready && (c += '<div class="wysiwyg-fileManager" title="{fileManagerIcon}"/>');
    c += '</div></div><div class="form-row"><label for="name">{title}:</label><div class="form-row-value"><input type="text" name="imgtitle" value=""/></div></div><div class="form-row"><label for="name">{description}:</label><div class="form-row-value"><input type="text" name="description" value=""/></div></div><div class="form-row"><label for="name">{width} x {height}:</label><div class="form-row-value"><input type="text" name="width" value="" class="width-small"/> x <input type="text" name="height" value="" class="width-small"/></div></div><div class="form-row"><label for="name">{original}:</label><div class="form-row-value"><input type="text" name="naturalWidth" value="" class="width-small" disabled="disabled"/> x <input type="text" name="naturalHeight" value="" class="width-small" disabled="disabled"/></div></div><div class="form-row"><label for="name">{float}:</label><div class="form-row-value"><select name="float"><option value="">{floatNone}</option><option value="left">{floatLeft}</option><option value="right">{floatRight}</option></select></div></div><div class="form-row form-row-last"><label for="name"></label><div class="form-row-value"><input type="submit" class="button" value="{submit}"/> <input type="reset" value="{reset}"/></div></div></fieldset></form>';
    for(g in d) {
      b.wysiwyg.i18n && (e = b.wysiwyg.i18n.t(d[g], "dialogs.image"), e === d[g] && (e = b.wysiwyg.i18n.t(d[g], "dialogs")), d[g] = e), e = RegExp("{" + g + "}", "g"), c = c.replace(e, d[g])
    }
    i.self && (i.src = i.self.src ? i.self.src : "", i.alt = i.self.alt ? i.self.alt : "", i.title = i.self.title ? i.self.title : "", i.width = i.self.width ? i.self.width : "", i.height = i.self.height ? i.self.height : "", i.styleFloat = b(i.self).css("float"));
    a = new b.wysiwyg.dialog(f, {title:d.legend, content:c});
    b(a).bind("afterOpen", function(c, d) {
      d.find("form#wysiwyg-addImage").submit(function(b) {
        b.preventDefault();
        h.processInsert(d.container, f, i);
        a.close();
        return false
      });
      b.wysiwyg.fileManager && b("div.wysiwyg-fileManager").bind("click", function() {
        b.wysiwyg.fileManager.init(function(a) {
          d.find("input[name=src]").val(a);
          d.find("input[name=src]").trigger("change")
        })
      });
      b("input:reset", d).click(function() {
        a.close();
        return false
      });
      b("fieldset", d).click(function(a) {
        a.stopPropagation()
      });
      h.makeForm(d, i)
    });
    a.open();
    b(f.editorDoc).trigger("editorRefresh.wysiwyg")
  }, processInsert:function(f, h, a) {
    var c = b('input[name="src"]', f).val(), e = b('input[name="imgtitle"]', f).val(), d = b('input[name="description"]', f).val(), g = b('input[name="width"]', f).val(), i = b('input[name="height"]', f).val(), f = b('select[name="float"]', f).val(), j = [], k = "", l;
    h.options.controlImage && h.options.controlImage.forceRelativeUrls && (l = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : ""), 0 === c.indexOf(l) && (c = c.substr(l.length)));
    a.self ? (b(a.self).attr("src", c).attr("title", e).attr("alt", d).css("float", f), g.toString().match(/^[0-9]+(px|%)?$/) ? b(a.self).css("width", g) : b(a.self).css("width", ""), i.toString().match(/^[0-9]+(px|%)?$/) ? b(a.self).css("height", i) : b(a.self).css("height", ""), h.saveContent()) : ((a = g.toString().match(/^[0-9]+(px|%)?$/)) && (a[1] ? j.push("width: " + g + ";") : j.push("width: " + g + "px;")), (a = i.toString().match(/^[0-9]+(px|%)?$/)) && (a[1] ? j.push("height: " + i + ";") : 
    j.push("height: " + i + "px;")), 0 < f.length && j.push("float: " + f + ";"), 0 < j.length && (k = ' style="' + j.join(" ") + '"'), h.insertHtml("<img src='" + c + "' title='" + e + "' alt='" + d + "'" + k + "/>"))
  }, makeForm:function(b, h) {
    b.find("input[name=src]").val(h.src);
    b.find("input[name=imgtitle]").val(h.title);
    b.find("input[name=description]").val(h.alt);
    b.find('input[name="width"]').val(h.width);
    b.find('input[name="height"]').val(h.height);
    b.find('select[name="float"]').val(h.styleFloat);
    b.find("img").attr("src", h.src);
    b.find("img").bind("load", function() {
      b.find("img").get(0).naturalWidth ? (b.find('input[name="naturalWidth"]').val(b.find("img").get(0).naturalWidth), b.find('input[name="naturalHeight"]').val(b.find("img").get(0).naturalHeight)) : b.find("img").attr("naturalWidth") && (b.find('input[name="naturalWidth"]').val(b.find("img").attr("naturalWidth")), b.find('input[name="naturalHeight"]').val(b.find("img").attr("naturalHeight")))
    });
    b.find("input[name=src]").bind("change", function() {
      b.find("img").attr("src", this.value)
    });
    return b
  }};
  b.wysiwyg.insertImage = function(f, h, a) {
    return f.each(function() {
      var c = b(this).data("wysiwyg"), e, d;
      if(!c || !h || 0 === h.length) {
        return this
      }
      b.browser.msie && c.ui.focus();
      if(a) {
        if(c.editorDoc.execCommand("insertImage", !1, "#jwysiwyg#"), e = c.getElementByAttributeValue("img", "src", "#jwysiwyg#")) {
          for(d in e.src = h, a) {
            a.hasOwnProperty(d) && e.setAttribute(d, a[d])
          }
        }
      }else {
        c.editorDoc.execCommand("insertImage", !1, h)
      }
      c.saveContent();
      b(c.editorDoc).trigger("editorRefresh.wysiwyg");
      return this
    })
  }
})(jQuery);
(function(b) {
  if(void 0 === b.wysiwyg) {
    throw"wysiwyg.link.js depends on $.wysiwyg";
  }
  b.wysiwyg.controls || (b.wysiwyg.controls = {});
  b.wysiwyg.controls.link = {init:function(f) {
    var h, a, c, e, d, g, i, j;
    d = {legend:"Insert Link", url:"Link URL", title:"Link Title", target:"Link Target", submit:"Insert Link", reset:"Cancel"};
    j = '<form class="wysiwyg"><fieldset><legend>{legend}</legend><label>{url}: <input type="text" name="linkhref" value=""/></label><label>{title}: <input type="text" name="linktitle" value=""/></label><label>{target}: <input type="text" name="linktarget" value=""/></label><input type="submit" class="button" value="{submit}"/> <input type="reset" value="{reset}"/></fieldset></form>';
    for(a in d) {
      b.wysiwyg.i18n && (c = b.wysiwyg.i18n.t(d[a], "dialogs.link"), c === d[a] && (c = b.wysiwyg.i18n.t(d[a], "dialogs")), d[a] = c), c = RegExp("{" + a + "}", "g"), j = j.replace(c, d[a])
    }
    h = f.dom.getElement("a");
    a = "http://";
    e = c = "";
    h && (a = h.href ? h.href : a, c = h.title ? h.title : "", e = h.target ? h.target : "");
    if(b.fn.dialog) {
      d = b(j);
      d.find("input[name=linkhref]").val(a);
      d.find("input[name=linktitle]").val(c);
      d.find("input[name=linktarget]").val(e);
      if(b.browser.msie) {
        try {
          g = d.appendTo(f.editorDoc.body)
        }catch(k) {
          g = d.appendTo("body")
        }
      }else {
        g = d.appendTo("body")
      }
      g.dialog({modal:!0, open:function() {
        b("input:submit", g).click(function(a) {
          a.preventDefault();
          var a = b('input[name="linkhref"]', g).val(), c = b('input[name="linktitle"]', g).val(), d = b('input[name="linktarget"]', g).val(), e;
          if(f.options.controlLink.forceRelativeUrls) {
            e = window.location.protocol + "//" + window.location.hostname;
            0 === a.indexOf(e) && (a = a.substr(e.length))
          }
          if(h) {
            "string" === typeof a && (a.length > 0 ? b(h).attr("href", a).attr("title", c).attr("target", d) : b(h).replaceWith(h.innerHTML))
          }else {
            b.browser.msie && f.ui.returnRange();
            i = f.getRangeText();
            e = f.dom.getElement("img");
            if(i && i.length > 0 || e) {
              b.browser.msie && f.ui.focus();
              "string" === typeof a && (a.length > 0 ? f.editorDoc.execCommand("createLink", false, a) : f.editorDoc.execCommand("unlink", false, null));
              h = f.dom.getElement("a");
              b(h).attr("href", a).attr("title", c);
              b(h).attr("target", d)
            }else {
              f.options.messages.nonSelection && window.alert(f.options.messages.nonSelection)
            }
          }
          f.saveContent();
          b(g).dialog("close")
        });
        b("input:reset", g).click(function(a) {
          a.preventDefault();
          b(g).dialog("close")
        })
      }, close:function() {
        g.dialog("destroy");
        g.remove()
      }})
    }else {
      h ? (d = window.prompt("URL", a), f.options.controlLink.forceRelativeUrls && (j = window.location.protocol + "//" + window.location.hostname, 0 === d.indexOf(j) && (d = d.substr(j.length))), "string" === typeof d && (0 < d.length ? b(h).attr("href", d) : b(h).replaceWith(h.innerHTML))) : (i = f.getRangeText(), j = f.dom.getElement("img"), i && 0 < i.length || j ? b.browser.msie ? (f.ui.focus(), f.editorDoc.execCommand("createLink", !0, null)) : (d = window.prompt(d.url, a), f.options.controlLink.forceRelativeUrls && 
      (j = window.location.protocol + "//" + window.location.hostname, 0 === d.indexOf(j) && (d = d.substr(j.length))), "string" === typeof d && (0 < d.length ? f.editorDoc.execCommand("createLink", !1, d) : f.editorDoc.execCommand("unlink", !1, null))) : f.options.messages.nonSelection && window.alert(f.options.messages.nonSelection)), f.saveContent()
    }
    b(f.editorDoc).trigger("editorRefresh.wysiwyg")
  }};
  b.wysiwyg.createLink = function(f, h) {
    return f.each(function() {
      var a = b(this).data("wysiwyg"), c;
      if(!a || !h || 0 === h.length) {
        return this
      }
      (c = a.getRangeText()) && 0 < c.length ? (b.browser.msie && a.ui.focus(), a.editorDoc.execCommand("unlink", !1, null), a.editorDoc.execCommand("createLink", !1, h)) : a.options.messages.nonSelection && window.alert(a.options.messages.nonSelection);
      return this
    })
  }
})(jQuery);

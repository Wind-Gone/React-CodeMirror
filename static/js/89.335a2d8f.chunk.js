(this.webpackJsonpzeroknowledge=this.webpackJsonpzeroknowledge||[]).push([[89],{706:function(e,r,t){!function(e){"use strict";e.defineMode("rpm-changes",(function(){var e=/^-+$/,r=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)  ?\d{1,2} \d{2}:\d{2}(:\d{2})? [A-Z]{3,4} \d{4} - /,t=/^[\w+.-]+@[\w.-]+/;return{token:function(n){if(n.sol()){if(n.match(e))return"tag";if(n.match(r))return"tag"}return n.match(t)?"string":(n.next(),null)}}})),e.defineMIME("text/x-rpm-changes","rpm-changes"),e.defineMode("rpm-spec",(function(){var e=/^(i386|i586|i686|x86_64|ppc64le|ppc64|ppc|ia64|s390x|s390|sparc64|sparcv9|sparc|noarch|alphaev6|alpha|hppa|mipsel)/,r=/^[a-zA-Z0-9()]+:/,t=/^%(debug_package|package|description|prep|build|install|files|clean|changelog|preinstall|preun|postinstall|postun|pretrans|posttrans|pre|post|triggerin|triggerun|verifyscript|check|triggerpostun|triggerprein|trigger)/,n=/^%(ifnarch|ifarch|if)/,a=/^%(else|endif)/,c=/^(\!|\?|\<\=|\<|\>\=|\>|\=\=|\&\&|\|\|)/;return{startState:function(){return{controlFlow:!1,macroParameters:!1,section:!1}},token:function(o,i){if("#"==o.peek())return o.skipToEnd(),"comment";if(o.sol()){if(o.match(r))return"header";if(o.match(t))return"atom"}if(o.match(/^\$\w+/))return"def";if(o.match(/^\$\{\w+\}/))return"def";if(o.match(a))return"keyword";if(o.match(n))return i.controlFlow=!0,"keyword";if(i.controlFlow){if(o.match(c))return"operator";if(o.match(/^(\d+)/))return"number";o.eol()&&(i.controlFlow=!1)}if(o.match(e))return o.eol()&&(i.controlFlow=!1),"number";if(o.match(/^%[\w]+/))return o.match("(")&&(i.macroParameters=!0),"keyword";if(i.macroParameters){if(o.match(/^\d+/))return"number";if(o.match(")"))return i.macroParameters=!1,"keyword"}return o.match(/^%\{\??[\w \-\:\!]+\}/)?(o.eol()&&(i.controlFlow=!1),"def"):(o.next(),null)}}})),e.defineMIME("text/x-rpm-spec","rpm-spec")}(t(66))}}]);
//# sourceMappingURL=89.335a2d8f.chunk.js.map
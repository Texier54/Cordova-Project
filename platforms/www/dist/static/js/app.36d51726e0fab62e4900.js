webpackJsonp([1],{"2vSa":function(t,e){},EGOt:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("mvHQ"),a=s.n(n),i=s("7+uW"),o={name:"MembreCreation",data:function(){return{fullname:"",email:"",password:""}},methods:{creerMembre:function(){var t=this;window.axios.post("members",{fullname:this.fullname,email:this.email,password:this.password}).then(function(e){console.log(e.data),alert("Le membre "+e.data.fullname+" a été créé. Vous pouvez vous connecter"),t.$router.push({path:"/connexion"})}).catch(function(t){alert(t.response.data.error.join("\n"))})}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-card"},[t._m(0),t._v(" "),s("section",{staticClass:"container modal-card-body"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-5"},[s("form",{on:{submit:t.creerMembre}},[s("label",{staticClass:"label"},[t._v("Fullname")]),t._v(" "),s("div",{staticClass:"field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.fullname,expression:"fullname"}],staticClass:"input",attrs:{type:"text",placeholder:"Fullname"},domProps:{value:t.fullname},on:{input:function(e){e.target.composing||(t.fullname=e.target.value)}}})]),t._v(" "),s("label",{staticClass:"label"},[t._v("Email")]),t._v(" "),s("div",{staticClass:"field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),s("label",{staticClass:"label"},[t._v("Mot de passe")]),t._v(" "),s("div",{staticClass:"field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Mot de passe"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),s("input",{staticClass:"button is-primary",attrs:{type:"submit",value:"Créer compte"}}),t._v(" "),s("router-link",{staticClass:"button is-text",attrs:{to:"/connexion"}},[t._v("Annuler")])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"modal-card-head"},[e("p",{staticClass:"modal-card-title"},[this._v("Co'op - Inscription")])])}]},l=s("VU/8")(o,r,!1,null,null,null).exports,c={name:"Connexion",data:function(){return{email:"yt@google.com",password:"yt"}},methods:{seConnecter:function(){var t=this;window.axios.post("members/signin",{email:this.email,password:this.password}).then(function(e){t.$store.commit("setMember",e.data),t.$store.commit("setToken",e.data.token),axios.get("members").then(function(e){t.$store.commit("setListeMember",e.data)}).catch(function(t){}),window.axios.defaults.params.token=e.data.token,t.$router.push({path:"/"})}).catch(function(t){alert(t)})}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-ons-page",[s("v-ons-toolbar",[s("div",{staticClass:"center"},[t._v("Co'op - Identification")])]),t._v(" "),s("v-ons-list",[s("v-ons-list-item",[s("div",{staticClass:"center"},[s("form",{on:{submit:t.seConnecter}},[s("v-ons-input",{staticClass:"input",attrs:{placeholder:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),s("br"),t._v(" "),s("v-ons-input",{staticClass:"input",attrs:{placeholder:"Mot de passe",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),s("br"),t._v(" "),s("v-ons-input",{staticClass:"connexion",attrs:{placeholder:"Mot de passe",type:"submit",value:"Connexion"}}),t._v(" "),s("router-link",{staticClass:"button is-text",attrs:{to:"/membre-creation"}},[t._v("Créer un compte")])],1)])])],1)],1)},staticRenderFns:[]},m=s("VU/8")(c,u,!1,function(t){s("2vSa")},"data-v-276d703b",null).exports,d={name:"app",components:{MembreCreation:l,Connexion:m},mounted:function(){var t=this;this.$store.state.member?window.axios.defaults.params.token=this.$store.state.token:this.$router.push({path:"/connexion"}),window.bus.$on("logout",function(){window.axios.delete("members/signout"),t.$store.commit("setMember",!1),t.$store.commit("setToken",!1),t.$router.push({path:"/connexion"})})}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},v=s("VU/8")(d,p,!1,function(t){s("tl4u")},null,null).exports,h=s("/ocq"),f={name:"navBar",data:function(){return{}},methods:{logOut:function(){window.bus.$emit("logout")}},mounted:function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);t.length>0&&t.forEach(function(t){t.addEventListener("click",function(){var e=t.dataset.target,s=document.getElementById(e);t.classList.toggle("is-active"),s.classList.toggle("is-active")})})}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-ons-toolbar",[e("div",{staticClass:"center"},[this._v("Co'op")]),this._v(" "),e("a",{staticClass:"right",on:{click:this.logOut}},[e("v-ons-toolbar-button",[e("i",{staticClass:"fas fa-sign-out-alt"},[this._v("Deconnexion")])])],1)])},staticRenderFns:[]},_=s("VU/8")(f,b,!1,function(t){s("X1on")},"data-v-187ea5fe",null).exports,w={name:"conversation",props:["conv"],data:function(){return{}},methods:{suprConv:function(){confirm("Voulez vous supprimer la conversation ?")&&window.axios.delete("channels/"+this.conv._id).then(function(t){window.bus.$emit("updateConv")})}}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-ons-list-item",[e("router-link",{staticClass:"btn",attrs:{to:{name:"messages",params:{id:this.conv._id}}}},[e("strong",[this._v(this._s(this.conv.label))])]),this._v("\n     \n    "+this._s(this.conv.topic)+"\n\n  ")],1)},staticRenderFns:[]},C={name:"ConversationsListe",components:{NavBar:_,Conversation:s("VU/8")(w,g,!1,function(t){s("zuHy")},null,null).exports},data:function(){return{liste:[]}},mounted:function(){var t=this;window.axios.get("channels").then(function(e){t.liste=e.data}).catch(function(t){}),window.bus.$on("updateConv",function(){window.axios.get("channels").then(function(e){t.liste=e.data}).catch(function(t){})})}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-ons-page",[e("nav-bar"),this._v(" "),e("br"),e("br"),e("br"),this._v(" "),e("v-ons-list",[e("v-ons-list-header",[this._v("Conversations")]),this._v(" "),this._l(this.liste,function(t){return e("conversation",{attrs:{conv:t}})})],2),this._v(" "),e("a",{staticClass:"btn-plus",attrs:{href:"#/newConv"}},[e("ons-fab",[e("ons-icon",{attrs:{icon:"md-plus"}})],1)],1)],1)},staticRenderFns:[]},k=s("VU/8")(C,x,!1,function(t){s("y3xd")},"data-v-591c98a2",null).exports,$={name:"newConv",data:function(){return{label:"",topic:""}},methods:{creerConversation:function(){var t=this;window.axios.post("channels",{label:this.label,topic:this.topic}).then(function(e){t.$router.push({path:"/conversations"})}).catch(function(t){alert(t.response.data.error.join("\n"))})}}},M={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-ons-list",[s("v-ons-list-item",[s("div",{staticClass:"center"},[s("form",{on:{submit:t.creerConversation}},[s("v-ons-input",{staticClass:"input",attrs:{placeholder:"Nom"},model:{value:t.label,callback:function(e){t.label=e},expression:"label"}}),t._v(" "),s("br"),t._v(" "),s("v-ons-input",{staticClass:"input",attrs:{placeholder:"Description"},model:{value:t.topic,callback:function(e){t.topic=e},expression:"topic"}}),t._v(" "),s("br"),t._v(" "),s("v-ons-input",{staticClass:"connexion",attrs:{placeholder:"Mot de passe",type:"submit",value:"Créer conversation"}}),t._v(" "),s("router-link",{staticClass:"button is-text",attrs:{to:"/conversations"}},[s("i",{staticClass:"icon-remove"},[t._v(" Annuler")])])],1)])])],1)},staticRenderFns:[]},y=s("VU/8")($,M,!1,function(t){s("vS0T")},"data-v-0c98d2ea",null).exports,E={name:"ConversationModification",data:function(){return{label:"",topic:""}},mounted:function(){var t=this;window.axios.get("channels/"+this.$route.params.id).then(function(e){t.label=e.data.label,t.topic=e.data.topic}).catch(function(t){})},methods:{modifConversation:function(){var t=this;window.axios.put("channels/"+this.$route.params.id,{label:this.label,topic:this.topic}).then(function(e){t.$router.push({path:"/conversations"})}).catch(function(t){alert(t)})}}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-card"},[t._m(0),t._v(" "),s("section",{staticClass:"modal-card-body"},[s("form",{on:{submit:t.modifConversation}},[s("div",{staticClass:"field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.label,expression:"label"}],attrs:{type:"text",placeholder:"Nom"},domProps:{value:t.label},on:{input:function(e){e.target.composing||(t.label=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.topic,expression:"topic"}],attrs:{type:"text",placeholder:"Description"},domProps:{value:t.topic},on:{input:function(e){e.target.composing||(t.topic=e.target.value)}}})]),t._v(" "),t._m(1),t._v(" "),s("router-link",{staticClass:"button is-text",attrs:{to:"/conversations"}},[t._v("Annuler")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"modal-card-head"},[e("p",{staticClass:"modal-card-title"},[this._v("Modification")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("input",{staticClass:"button is-link",attrs:{type:"submit",value:"Modifier"}})])}]},T=s("VU/8")(E,N,!1,null,null,null).exports,V=s("NC6I"),I=s.n(V),R={name:"member",props:["memb"],data:function(){return{result:"",ok:!1}},mounted:function(){this.result="https://www.gravatar.com/avatar/"+I()(this.memb.email)+"?d=https://api.adorable.io/avatars/285/abott@adorable.png",this.memb._id!=this.$store.state.member._id&&(this.ok=!0)},methods:{suprMember:function(){confirm("Voulez vous supprimer le membre ?")&&window.axios.delete("members/"+this.memb._id).then(function(t){window.bus.$emit("updateMember")})}}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel-block"},[e("figure",{staticClass:"media-left"},[e("p",{staticClass:"image is-32x32"},[e("img",{attrs:{src:this.result}})])]),this._v(" "),e("b",[this._v(this._s(this.memb.fullname))]),this._v("  \n\n  "),e("span",{staticClass:"tag"},[this._v("\n    "+this._s(this.memb.email)+"\n  ")]),this._v("  \n\n  "),this.ok?e("span",{staticClass:"panel-icon"},[e("a",{on:{click:this.suprMember}},[e("i",{staticClass:"icon-trash"})])]):this._e()])},staticRenderFns:[]},F={name:"MembersListe",components:{NavBar:_,Member:s("VU/8")(R,S,!1,null,null,null).exports},data:function(){return{liste:[],unMembre:""}},mounted:function(){var t=this;window.axios.get("members").then(function(e){t.liste=e.data}).catch(function(t){}),window.bus.$on("updateMember",function(){window.axios.get("members").then(function(e){t.liste=e.data}).catch(function(t){})})}},U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav-bar"),t._v(" "),s("section",{staticClass:"section coop-accueil"},[s("div",{staticClass:"panel"},[s("p",{staticClass:"panel-heading"},[t._v("\n          Membres ("+t._s(t.liste.length)+" membre(s))\n        ")]),t._v(" "),t._l(t.liste,function(t){return s("member",{attrs:{memb:t}})})],2)]),t._v(" "),s("v-ons-tabbar",[s("router-view",{attrs:{slot:"pages"},slot:"pages"}),t._v(" "),t._l(["Conversations","Membres"],function(e){return s("v-ons-tab",{key:e,attrs:{label:e,active:t.$route.name===e},on:{click:function(s){s.preventDefault(),t.$router.push({name:e})}}})})],2)],1)},staticRenderFns:[]},L=s("VU/8")(F,U,!1,null,null,null).exports,O={name:"message",props:["mess"],data:function(){return{member:"",result:"",ok:!1,date:"",editerChannel:!1,editerChannelInv:!0}},mounted:function(){this.date=new Date(this.mess.created_at).toISOString().slice(0,10);var t=this.$store.state.listemember;for(var e in t)t[e]._id==this.mess.member_id&&(this.member=t[e]);this.result="https://www.gravatar.com/avatar/"+I()(this.member.email)+"?d=https://api.adorable.io/avatars/285/abott@adorable.png",this.mess.member_id==this.$store.state.member._id&&(this.ok=!0)},methods:{modifMess:function(){this.editerChannel=!0,this.editerChannelInv=!1},saveMess:function(){var t=this;window.axios.put("channels/"+this.mess.channel_id+"/posts/"+this.mess._id,{message:this.mess.message}).then(function(e){t.editerChannel=!1,t.editerChannelInv=!0,window.bus.$emit("updateMessage")}).catch(function(t){alert(t)})},suprMess:function(){confirm("Voulez vous supprimer le membre ?")&&window.axios.delete("channels/"+this.mess.channel_id+"/posts/"+this.mess._id).then(function(){return window.bus.$emit("updateMessage")})}}},z={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-ons-list-item",[s("div",{staticClass:"left"},[s("img",{staticClass:"img",attrs:{src:t.result}}),t._v(" \n  ")]),t._v(" "),s("div",{staticClass:"center"},[s("span",{staticClass:"list-item__title"},[s("strong",[t._v(t._s(t.member.fullname))]),t._v("  \n      "),s("small",[t._v(t._s(t.member.email))]),t._v("  \n      "),s("span",{staticClass:"date",attrs:{title:"2017-12-15T10:56:48.975+01:00"}},[t._v(t._s(t.date))]),t._v(" \n\n\n      "),t.ok?s("span",[s("a",{on:{click:t.modifMess}},[s("i",{staticClass:"icon-edit"})])]):t._e(),t._v(" "),t.ok?s("span",[s("a",{on:{click:t.suprMess}},[s("i",{staticClass:"icon-trash"})])]):t._e(),t._v(" "),t.editerChannel?s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.mess.message,expression:"mess.message"}],domProps:{value:t.mess.message},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.saveMess(e)},input:function(e){e.target.composing||t.$set(t.mess,"message",e.target.value)}}})]):t._e()]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.editerChannelInv,expression:"editerChannelInv"}],staticClass:"list-item__subtitle"},[t._v("\n        "+t._s(t.mess.message)+"\n    ")])])])},staticRenderFns:[]},P={name:"MessagesListe",components:{NavBar:_,Message:s("VU/8")(O,z,!1,function(t){s("x/bE")},null,null).exports},data:function(){return{state:"initial",liste:[],message:""}},mounted:function(){var t=this;window.axios.get("channels/"+this.$route.params.id+"/posts").then(function(e){t.liste=e.data,setTimeout(function(){window.scrollTo(0,document.body.scrollHeight)},3e3)}).catch(function(t){}),window.bus.$on("updateMessage",function(){window.axios.get("channels/"+t.$route.params.id+"/posts").then(function(e){t.liste=e.data}).catch(function(t){})})},methods:{envoyer:function(){var t=this;window.axios.post("channels/"+this.$route.params.id+"/posts",{message:this.message}).then(function(e){window.axios.get("channels/"+t.$route.params.id+"/posts").then(function(e){t.liste=e.data,t.message=""}).catch(function(t){}),setTimeout(function(){window.scrollTo(0,document.body.scrollHeight)},100)}).catch(function(t){alert(t)})},refresh:function(){var t=this;window.axios.get("channels/"+this.$route.params.id+"/posts").then(function(e){t.liste=e.data,setTimeout(function(){window.scrollTo(0,document.body.scrollHeight)},100)}).catch(function(t){})},back:function(){this.$router.push({path:"/conversations"})},loadItem:function(t){var e=this;setTimeout(function(){window.bus.$on("updateMessage",function(){window.axios.get("channels/"+e.$route.params.id+"/posts").then(function(t){e.liste=t.data}).catch(function(t){})}),t()},400)}}},A={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-ons-page",[s("v-ons-pull-hook",{attrs:{action:t.loadItem},on:{changestate:function(e){t.state=e.state}}},[s("span",{directives:[{name:"show",rawName:"v-show",value:"initial"===t.state,expression:"state === 'initial'"}]},[t._v(" Pull to refresh ")]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:"preaction"===t.state,expression:"state === 'preaction'"}]},[t._v(" Release ")]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:"action"===t.state,expression:"state === 'action'"}]},[t._v(" Loading... ")])]),t._v(" "),s("v-ons-toolbar",[s("v-ons-back-button",{on:{click:t.back}},[t._v("Retour")])],1),t._v(" "),s("v-ons-list",[s("v-ons-list-header",[t._v("Messages")]),t._v(" "),t._l(t.liste,function(t){return s("message",{attrs:{mess:t}})})],2),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{width:"100%",placeholder:"Entrez votre message et appuyez sur entrée",type:"text"},domProps:{value:t.message},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.envoyer(e)},input:function(e){e.target.composing||(t.message=e.target.value)}}})],1)},staticRenderFns:[]},H=s("VU/8")(P,A,!1,function(t){s("EGOt")},null,null).exports;i.a.use(h.a);var B=new h.a({routes:[{path:"/connexion",component:m},{path:"/membre-creation",component:l},{path:"/",component:k},{path:"/conversations",component:k,name:"Conversations"},{path:"/newConv",component:y},{name:"conversation-modification",path:"/conversation-modification/:id",component:T},{path:"/membres",component:L,name:"Membres"},{name:"messages",path:"/messages/:id",component:H},{path:"*",component:k}]}),D=s("woOf"),j=s.n(D),q=s("NYxO");i.a.use(q.a);var G=new q.a.Store({state:{member:!1,token:!1,listemember:!1},mutations:{setMember:function(t,e){t.member=e},setListeMember:function(t,e){t.listemember=e},setToken:function(t,e){t.token=e},initialiseStore:function(t){localStorage.getItem("store")&&this.replaceState(j()(t,JSON.parse(localStorage.getItem("store"))))},getToken:function(){return state.token},getMember:function(t,e){var s=this.state.listemember;for(var n in s)if(s[n]._id==e)return s[n]}}}),J=s("mtWM"),W=s.n(J),X=s("EOUi"),Q=s.n(X);i.a.use(Q.a),window.axios=W.a.create({baseURL:"http://coop.api.netlor.fr/api/",params:{token:!1},headers:{Authorization:"Token token=ad5b154ecef64f1b88b65873b3f336e2"}}),i.a.config.productionTip=!1,G.subscribe(function(t,e){localStorage.setItem("store",a()(e))}),window.bus=new i.a,new i.a({el:"#app",router:B,store:G,beforeCreate:function(){this.$store.commit("initialiseStore")},template:"<App/>",components:{App:v}})},X1on:function(t,e){},tl4u:function(t,e){},vS0T:function(t,e){},"x/bE":function(t,e){},y3xd:function(t,e){},zuHy:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.36d51726e0fab62e4900.js.map
import Vue from 'vue'
import Router from 'vue-router'
import Connexion from '@/components/Connexion'
import MembreCreation from '@/components/MembreCreation'
import ConversationsListe from '@/components/ConversationsListe'
import newConv from '@/components/newConv'
import ConversationModification from '@/components/ConversationModification.vue'
import Members from '@/components/MembersListe.vue'
import Messages from '@/components/MessagesListe.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/connexion',
      component: Connexion
    },
    {
      path: '/membre-creation',
      component: MembreCreation
    },
    {
      path: '/',
      component: ConversationsListe
    },
    {
      path: '/conversations',
      component: ConversationsListe,
      name: 'Conversations',
    },
    {
      path: '/newConv',
      component: newConv
    },
    {
      name: 'conversation-modification',
      path: '/conversation-modification/:id',
      component: ConversationModification
    },
    {
      path: '/membres',
      component: Members,
      name: 'Membres'
    },
    {
      name: 'messages',
      path: '/messages/:id',
      component: Messages
    },
    { path: '*', component: ConversationsListe}
  ]
})

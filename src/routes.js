import About from './About.vue';
import Home from './Home.vue';
import Contact from './Contact.vue';

export const routes = [
  { path: '', component: Home},
  { path: '/contact', component: Contact, name: 'contact' },
  { path: '/about', component: About},
  { path: '*', redirect: '/'}
];

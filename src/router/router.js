import Vue from 'vue'
import Router from 'vue-router'
import Skills from '../components/Skills.vue'
import About from '../components/About.vue'
import AddNew from '../components/AddNew.vue'
import ProductEdit from '../components/Edit.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'skills',
			component: Skills
		},
		{
			path: '/about/:name',
			name: 'about',
			component: About
		},
		{
			path: '/about',
			name: 'about1',
			component: About
		},
		{
			path: '/add-new',
			name: 'AddNew',
			component: AddNew
		},
		// {
		// 	path: '/edit',
		// 	name: 'edit',
		// 	component: Edit
		// },
		{
			path: '/product/:product_id/edit', component: ProductEdit, name: 'product-edit'
		}
	]
})
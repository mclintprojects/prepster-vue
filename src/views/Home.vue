<template>
    <div>
        <navbar>
            <div @click="navigateTo('home')" class="main-menu-item" :class="{highlight: shouldHighlight('home')}">
                <img src="https://res.cloudinary.com/mclint-cdn/image/upload/v1532679294/prepster/twotone-home-24px.svg" />
                <p>Home</p>
            </div>
            <div @click="navigateTo('collections')" class="main-menu-item" :class="{highlight: shouldHighlight('collections')}">
                <img src="https://res.cloudinary.com/mclint-cdn/image/upload/v1532679298/prepster/twotone-shopping_basket-24px.svg" />
                <p>Collections</p>
            </div>
            <div @click="navigateTo('search')" :class="{highlight: shouldHighlight('search')}" class="main-menu-item">
                <img src="https://res.cloudinary.com/mclint-cdn/image/upload/v1532679298/prepster/twotone-search-24px.svg" />
                <p>Search</p>
            </div>
            <div class="main-menu-item" @click="logoutUser">
                <img src="https://res.cloudinary.com/mclint-cdn/image/upload/v1530450965/present-sir/twotone-exit_to_app-24px.svg" />
                <p>Logout</p>
            </div>
        </navbar>
        <div class="container">
            <router-view />
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar';

const TOP_LEVEL_ROUTES = ['home', 'collections', 'search'];
export default {
	components: { Navbar },
	data() {
		return {
			selectedComponent: 'home'
		};
	},
	watch: {
		$route(to, from) {
			this.highlight(to);
		}
	},
	methods: {
		shouldHighlight(name) {
			return name === this.selectedComponent;
		},
		logoutUser() {
			this.$store.dispatch('logout');
		},
		navigateTo(name) {
			this.$router.push({ name });
			this.selectedComponent = name;
		},
		highlight(to) {
			TOP_LEVEL_ROUTES.forEach(route => {
				if (to.name == route) this.selectedComponent = route;
			});
		}
	},
	created() {
		this.$router.push({ name: 'home' });
	}
};
</script>

<style lang="scss">
#greeting {
	font-size: 20px;
	color: var(--primary-text-color);
	font-weight: bold;

	+ p {
		font-size: 11px;
		color: var(--secondary-text-color);
		text-transform: uppercase;
	}
}

#welcome-container {
	justify-content: space-between;
}
</style>

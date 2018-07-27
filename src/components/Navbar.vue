<template>
    <div>
        <div id="nav-bar" class="flex center-vertical">
            <p>Prepster</p>
            <div class="flex center-vertical">
                <el-badge is-dot v-if="showNotif">
                    <img src="https://res.cloudinary.com/mclint-cdn/image/upload/v1530450965/present-sir/twotone-notifications-24px.svg" />
                </el-badge>
                <img @click="collapsed = !collapsed" id="main-menu-toggle" style="margin-left: 32px;" src="https://res.cloudinary.com/mclint-cdn/image/upload/v1530446060/present-sir/twotone-menu-24px.svg" />
            </div>
        </div>
        <div :class="{hidden: collapsed}">
            <div id="main-menu">
				<slot></slot>
			</div>
        </div>
    </div>
</template>

<script>
export default {
	props: { showNotif: { type: Boolean, default: false } },
	data() {
		return {
			collapsed: false
		};
	},
	computed: {
		user() {
			return this.$store.getters.user;
		}
	},
	created() {
		this.$nextTick(() => {
			window.addEventListener('resize', () => {
				if (window.innerWidth > 567) this.collapsed = false;
				else this.collapsed = true;
			});
		});
	}
};
</script>

<style lang="scss">
#nav-bar {
	padding: 16px;
	justify-content: space-between;
	background: white;
	border-bottom: 1px solid rgba(192, 192, 192, 0.3);
}

#main-menu {
	display: flex;
	align-items: center;
	justify-content: center;
	background: white;
	box-shadow: 0px 2px 6px 0px rgb(236, 236, 236);
}

#main-menu-toggle {
	display: none;

	&:hover {
		cursor: pointer;
	}
}

.nav-greeting {
	color: rgba(0, 0, 0, 0.54);
	font-size: 13px;
	margin-right: 16px;
	padding: 16px;
}

.main-menu-item {
	padding: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: rgba(0, 0, 0, 0.54);

	img {
		margin-right: 16px;
	}

	p {
		font-size: 12px;
	}

	&:hover {
		background: rgb(243, 243, 243);
		border-bottom: 2px solid var(--primary-color-dark);
		cursor: pointer;
	}
}

.highlight {
	border-bottom: 2px solid var(--primary-color-dark);
}

@media only screen and (max-width: 567px) {
	#main-menu {
		flex-direction: column;
	}

	.main-menu-item {
		width: calc(100% - 32px);
		justify-content: flex-start;

		img {
			margin-left: 16px;
		}
	}

	#greeting-slot {
		width: 100%;
		text-align: left;

		p {
			margin-left: 16px;
		}
	}

	#main-menu-toggle {
		display: initial;
	}
}
</style>

<template>
    <div id="navbar" class="flex">
        <p id="brand">Prepster</p>
        <div class="flex center-vertical">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#navbar {
	background: white;
	justify-content: space-between;
	padding: 15px 30px;
	color: var(--primary-text-color);

	#brand {
		font-size: 16px;
		font-weight: bold;
	}

	div.flex {
		p {
			text-transform: uppercase;
			font-size: 14px;
			color: var(--secondary-text-color);
			margin-right: 36px;

			&:hover {
				cursor: pointer;
				color: var(--primary-text-color);
			}
		}

		p:nth-last-child(1) {
			margin-right: 0px;
		}
	}
}
</style>

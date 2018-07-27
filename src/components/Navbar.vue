<template>
    <div id="navbar" class="flex">
        <p id="brand">Prepster</p>
        <div class="flex center-vertical">
            <p>Login</p>
            <p>Signup</p>
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
	}

	div.flex {
		p {
			text-transform: uppercase;
			font-size: 12px;
			color: var(--secondary-text-color);

			&:hover {
				cursor: pointer;
				color: var(--primary-text-color);
			}
		}

		p:nth-child(1) {
			margin-right: 36px;
		}
	}
}
</style>

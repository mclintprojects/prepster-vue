<template>
    <div class="flex flex-column center-horizontal center-vertical" style="margin-top: 30px">
        <img class="empty-state-icon" :src="src" :style="{width: iconWidth, height: iconHeight}" />
        <p class="empty-state-title">{{title}}</p>
        <p class="empty-state-subtitle">{{subtitle}}</p>
    </div>
</template>

<script>
export default {
	props: {
		src: { type: String, default: '' },
		title: { type: String, default: '' },
		subtitle: { type: String, default: '' },
		iconWidth: { type: String, default: '72px' },
		iconHeight: { type: String, default: '72px' }
	}
};
</script>

<style>
.empty-state-subtitle {
	font-size: 13px;
	color: var(--secondary-text-color);
	text-align: center;
}
.empty-state-title {
	color: var(--primary-text-color);
	font-weight: bold;
	font-size: 16px;
	padding-top: 16px;
	text-align: center;
}
</style>
<template>
    <div class="question flex center-vertical shadow">
        <div class="flex center-vertical">
            <div class="flex center-vertical center-horizontal">{{index + 1}}</div>
            <div>
                <p>{{question.text}}</p>
                <p>{{question.answers.length}} possible answers added</p>
            </div>
        </div>
        <div>
            <img src="https://res.cloudinary.com/mclint-cdn/image/upload/v1532758269/prepster/twotone-close-24px.svg"/>
        </div>
    </div>
</template>

<script>
export default {
	props: { index: Number, question: Object }
};
</script>

<style lang="scss">
.question {
	background: white;
	padding: 16px;
	border-radius: 10px;
	justify-content: space-between;

	&:hover {
		background: var(--primary-color);

        div:nth-child(1) {
		    div:nth-child(1) {
			    background: white;
		    }
        }
	}

	div:nth-child(1) {
		div:nth-child(1) {
			background: var(--primary-color);
			width: 56px;
			height: 56px;
			border-radius: 50%;
			margin-right: 16px;
		}
	}

	div:nth-child(2) {
		p:nth-child(1) {
			font-weight: bold;
			font-size: 14px;
			color: var(--primary-text-color);
		}

		p:nth-child(2) {
			font-size: 12px;
			color: var(--secondary-text-color);
		}

        img {
			cursor: pointer;
		}
	}
}
</style>

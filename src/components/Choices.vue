<template>
    <div style="margin-top: 8px">
        <el-row v-for="(answer, index) in question.answers" :key="index" class="answer flex center-vertical">
            <el-col :span="2">
                <div @click="choiceMade(index)" class="checkbox" :class="{'checkbox-selected': isSelected(index)}"></div>
            </el-col>
            <el-col :span="22">
                <p>{{answer.text}}</p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
	props: { question: Object, onChoiceMade: Function },
	data() {
		return {
			selected: -1
		};
	},
	methods: {
		isSelected(index) {
			return this.selected == index;
		},
		choiceMade(index) {
			this.selected = index;
			this.onChoiceMade(this.question.id, this.question.answers[index].id);
			this.selected = -1;
		}
	}
};
</script>

<style lang="scss">
.answer {
	background: white;
	padding: 16px;
	border-bottom: 1px solid #e4e3e3;

	.checkbox {
		width: 24px;
		height: 24px;
		border: 4px solid #bfbfbf;
		border-radius: 50%;

		&:hover {
			cursor: pointer;
			background: var(--primary-color);
			border: 4px solid var(--primary-color-dark);
		}
	}
}

.answer:nth-last-child(1) {
	border-bottom: none;
}

#btn-add-possible-answer {
	background: white;
	border-radius: 10px;
	margin-top: 16px;
	padding: 16px;
	color: var(--primary-text-color);
	padding-left: 70px;

	&:hover {
		background: var(--primary-color-dark);
		cursor: pointer;
	}
}

.checkbox-selected {
	background: var(--primary-color) !important;
	border: 4px solid var(--primary-color-dark) !important;
}
</style>

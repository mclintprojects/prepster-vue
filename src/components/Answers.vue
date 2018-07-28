<template>
    <div style="margin-top: 8px">
        <el-row v-for="(answer, index) in answers" :key="index" class="answer flex center-vertical">
            <el-col :span="2">
                <div @click="itemSelected(index)" class="checkbox" :class="{'checkbox-selected': isSelected(index)}"></div>
            </el-col>
            <el-col :span="22">
                <el-input v-model="answers[index].text" type="text" placeholder="Enter a possible answer here">
                    <el-button @click="deletePossibleAnswer(index)" v-if="answers.length > 1" slot="append" type="danger" icon="el-icon-delete" round/>
                </el-input>
            </el-col>
        </el-row>
        <div id="btn-add-possible-answer" @click="addPossibleAnswer">
            <p>+ Add a new possible answer</p>
        </div>
    </div>
</template>

<script>
export default {
	props: { answers: Array, onItemSelected: Function },
	data() {
		return {
			selected: -1
		};
	},
	methods: {
		addPossibleAnswer() {
			this.answers.push({});
		},
		deletePossibleAnswer(index) {
			this.answers.splice(index, 1);
		},
		isSelected(index) {
			return this.selected == index;
		},
		itemSelected(index) {
			this.selected = index;
			this.onItemSelected(index);
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

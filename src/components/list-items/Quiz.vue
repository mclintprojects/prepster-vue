<template>
    <div @click="showQuizDetails" id="quiz" class="flex center-vertical shadow">
        <div>
            <p>{{quiz.is_completed ? '' : '(Draft)'}} {{quiz.title}}</p>
            <p>{{quiz.questions_count}} {{quiz.questions_count == 1 ? 'question' : 'questions'}} added</p>
        </div>
		<el-button @click="deleteQuiz($event)" size="small" type="danger" :disabled="isDeletingQuiz" :loading="isDeletingQuiz" round>Delete</el-button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: {
        quiz: { type: Object, default: () => {} },
        onQuizDeleted: Function,
        index: Number
    },
    data() {
        return {
            isDeletingQuiz: false
        };
    },
    methods: {
        showQuizDetails() {
            this.$router.push({
                name: 'quiz-detail',
                params: { quiz: this.quiz, id: this.quiz.id }
            });
        },
        async deleteQuiz(event) {
            event.stopPropagation();
            try {
                this.isDeletingQuiz = true;
                const response = await axios.delete(
                    `/quiz?quiz_id=${this.quiz.id}`
                );

                if (response.status == 200) {
                    this.onQuizDeleted(this.index);
                    this.isDeletingQuiz = false;
                }
            } catch (err) {
                this.isDeletingQuiz = false;
            }
        }
    }
};
</script>

<style lang="scss">
#quiz {
    background: white;
    padding: 16px;
    border-radius: 10px;
    justify-content: space-between;
    margin-bottom: 16px;

    &:hover {
        background: var(--primary-color);
        cursor: pointer;

        .bg-primary {
            background: white !important;
        }
    }

    > div {
        p:nth-child(1) {
            font-size: 18px;
            font-weight: bold;
            color: var(--primary-text-color);
        }

        p:nth-child(2) {
            font-size: 12px;
            color: var(--secondary-text-color);
        }
    }
}
</style>

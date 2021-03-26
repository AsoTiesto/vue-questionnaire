<template>
    <div>
        <form @submit.prevent="addMessage"
              class="mb-3">
            <div v-if="error"
                 class="alert alert-dismissible alert-warning">
                <button type="button"
                        class="close"
                        data-dismiss="alert">&times;</button>
                <span class="alert-heading">Error!</span>
                <p class="mb-0">{{error}}</p>
            </div>
            <div class="form-group">
                <label for="ques1">對我們的產品您了解多少呢？可否具體說明呢？</label>
                <br>
                <textarea v-model="message.ques1"
                          type="text"
                          class="form-control"
                          id="ques1"
                          rows="5"
                          cols="30"></textarea>
            </div>
            <div class="form-group">
                <label for="ques2">對於使用我們的遠端服務功能您是否可以提供可改善的空間呢？</label>
                <br>
                <textarea v-model="message.ques2"
                          type="text"
                          class="form-control"
                          id="ques2"
                          rows="5"
                          cols="30"></textarea>
            </div>
            <div class="form-group">
                <label for="ques3">您是否可以提供更多能夠幫助您企業成長的規劃？可否具體說明呢？</label>
                <br>
                <textarea v-model="message.ques3"
                          class="form-control"
                          id="ques3"
                          rows="5"
                          cols="30"></textarea>
            </div>
            <button type="submit"
                    class="btn btn-primary">提交</button>
        </form>
    </div>
</template>

<script>
const API_URL = "http://localhost:4000/messages";

export default {
    name: "QuesPaper",
    data: () => ({
        error: "",
        message: {
            ques1: "",
            ques2: "",
            ques3: "",
        },
    }),
    mounted() {},
    methods: {
        addMessage() {
            const vm = this;
            console.log(vm.message);
            fetch(API_URL, {
                method: "POST",
                body: JSON.stringify(vm.message),
                headers: {
                    "content-type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((result) => {
                    if (result.created && result._id) {
                        vm.$router.push({
                            path: "/ques-answer",
                        });
                    }
                    if (result.details) {
                        const error = result.details
                            .map((detail) => detail.message)
                            .join(". ");
                        vm.error = error;
                    } else {
                        vm.error = "";
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>

<style>
img {
    max-width: 300px;
    height: auto;
}
</style>
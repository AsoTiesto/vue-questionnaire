<template>
    <div>
        <div class="form-group">
            <label for="username">帳號：</label>
            <input v-model="body.username"
                   type="text"
                   class="form-control"
                   id="username">
        </div>
        <div class="form-group">
            <label for="password">密碼：</label>
            <input v-model="body.password"
                   type="text"
                   class="form-control"
                   id="password">
        </div>
        <button class="btn btn-primary"
                @click="loginBtn">
            登入
        </button>
        <button class="btn btn-primary"
                @click="createBtn">
            創建
        </button>
    </div>
</template>

<script>
const API_URL = "http://localhost:4000/getUsers";

export default {
    name: "Login",
    data: () => ({
        body: {
            username: "",
            password: "",
        },
    }),
    mounted() {},
    methods: {
        async loginBtn() {
            const vm = this;
            await vm.loginJudgment(vm.body);
        },
        async loginJudgment(obj) {
            const vm = this;
            if (obj.username === "" && obj.password === "") {
                return;
            } else {
                fetch(API_URL, {
                    method: "POST",
                    body: JSON.stringify(vm.body),
                    headers: {
                        "content-type": "application/json",
                    },
                })
                    .then((response) => response.json())
                    .then((result) => {
                        if (
                            result.username === vm.body.username &&
                            result.password === vm.body.password
                        ) {
                            vm.$router.push({
                                path: "/ques-paper",
                                params: { username: result.username },
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
            }
        },
        createBtn() {
            const vm = this;
            vm.$router.push({ path: "/create-account" });
        },
    },
};
</script>

<style>
</style>
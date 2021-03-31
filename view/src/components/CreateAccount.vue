<template>
    <div>
        <div class="form-group">
            <label for="username">創建帳號：</label>
            <input v-model="body.username"
                   type="text"
                   class="form-control"
                   id="username">
        </div>
        <div class="form-group">
            <label for="password">創建密碼：</label>
            <input v-model="body.password"
                   type="text"
                   class="form-control"
                   id="password">
        </div>
        <button class="btn btn-primary"
                @click="createAccount">
            創建
        </button>
    </div>
</template>

<script>
const API_URL = "http://localhost:4000/createUser";

export default {
    name: "CreateAccount",
    data: () => ({
        body: {
            username: "",
            password: "",
        },
    }),
    mounted() {},
    methods: {
        async createAccount() {
            const vm = this;
            await vm.createJudgment();
        },
        async createJudgment() {
            const vm = this;
            if (vm.body.username === "" && vm.body.password === "") {
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
                        console.log(result);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        },
    },
};
</script>

<style>
</style>
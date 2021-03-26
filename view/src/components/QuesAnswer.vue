<template>
    <div id="QuesAnswer">
        <div class="list-unstyled"
             v-for="message in reversedMessages"
             :key="message._id">

            <div class="media-body">
                <span class="mt-0 mb-1">{{message.ques1}}</span><br>
                <span class="mt-0 mb-1">{{message.ques2}}</span><br>
                <span class="mt-0 mb-1">{{message.ques3}}</span>
                {{message.message}}
                <br />
                <small>{{message.created}}</small>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
const GET_API_URL = "http://localhost:4000/getMessages";

export default {
    name: "QuesAnswer",
    data: () => ({
        messages: [],
        message: {
            ques1: "",
            ques2: "",
            ques3: "",
        },
    }),
    computed: {
        reversedMessages() {
            const vm = this;
            return vm.messages.slice().reverse();
        },
    },
    mounted() {
        const vm = this;
        fetch(GET_API_URL)
            .then((response) => response.json())
            .then((result) => {
                vm.messages = result;
            });
    },
};
</script>

<style>
</style>
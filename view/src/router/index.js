import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    routes: [
        {
            name: "QuesAnswer",
            path: "/ques-answer",
            components: {
                QuesAnswer: (resolve) => require(["@/components/QuesAnswer"], resolve),
            },
        },
        {
            name: "QuesPaper",
            path: "/ques-paper",
            components: {
                QuesPaper: (resolve) => require(["@/components/QuesPaper"], resolve),
            },
        },
        {
            name: "Login",
            path: "/login",
            components: {
                Login: (resolve) => require(["@/components/Login"], resolve),
            },
        },
    ],
});

export default router;

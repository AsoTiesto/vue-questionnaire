<template>
    <div id="app">
        <!-- <QuesPaper msg="Welcome to Your question" /> -->
        <router-view name="Login"></router-view>
        <router-view name="QuesPaper"></router-view>
        <router-view name="QuesAnswer"></router-view>
    </div>
</template>

<script>
// import QuesPaper from "./components/QuesPaper";

export default {
    name: "App",
    // components: {
    //     QuesPaper,
    // },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

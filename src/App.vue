<template>
  <div id="app">
    <div class="layout">
      <!-- 左側選單 -->
      <nav class="menu">
        <router-link to="/a">A 頁面</router-link>
        <router-link to="/b">B 頁面</router-link>
        <router-link to="/c">C 頁面</router-link>
      </nav>

      <!-- 主內容區域 -->
      <main class="content">
        <router-view />
      </main>

      <!-- 右下角聊天室，使用 keep-alive 保持狀態 -->
      <div class="chatroom">
        <keep-alive>
          <ChatRoomComponent/>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import ChatRoomComponent from './components/ChatRoomComponent.vue';

export default {
  components: {
    ChatRoomComponent,
  },
};
</script>

<style>
.layout {
  display: flex;
}

.menu {
  width: 200px;
  background-color: #f0f0f0;
  padding: 10px;
}

.content {
  flex: 1;
  padding: 20px;
}

.chatroom {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  height: 400px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>

<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
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
</style> -->

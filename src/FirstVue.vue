<template>
  <div id="app">
    <user-name name="Flavio">
      James Chan
      <div slot="migulu">
        <h1>Fuck Migulu</h1>
      </div>
      <!--slot的實驗 -->
      <template v-slot:fuck>
        <h1>Fuck Vue</h1>
      </template>
    </user-name>
    <!--
      {{message}}<br>{{reverseMessage}}
    -->
    <ul id="example-1">
      <li v-for="item in items" :key="item.id">
        <div>
          {{ item.message }}
        </div>
        <!-- <div v-for="item.keys()">
        {{key}}
      </div> -->
        <div v-for="(value, key) in item" :key="key">
          {{ key }} = {{ value }}
        </div>
      </li>
    </ul>
    <div>
      <custom-input v-bind:value="value" v-on:input="value = $event"
        >One</custom-input
      >
    </div>
    <div>
      <custom-input v-model="value">Two</custom-input>
    </div>
    <div id="dynamic-component-demo" class="demo">
      <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: currentTab === tab }]"
        v-on:click="currentTab = tab"
      >
        {{ tab }}
      </button>

      <component v-bind:is="currentTabComponent" class="tab"></component>
    </div>
  </div>
</template>

<script>
import UserName from "./components/UserName";
import CustomInput from "./components/CustomInput";
import TabHome from "./components/TabHome";
import TabPosts from "./components/TabPosts";
import TabArchive from "./components/TabArchive";

export default {
  name: "App",
  components: {
    UserName,
    CustomInput,
    TabHome,
    TabPosts,
    TabArchive,
  },
  data() {
    return {
      msg: "這是一個 Vue 組件檔！",
      message: "Hello",
      currentTab: "Home",
      tabs: ["Home", "Posts", "Archive"],
      items: [
        {
          message: "Foo",
          id: 1,
        },
        {
          message: "Bar",
          id: 4,
        },
        {
          message: "James",
          id: 2,
        },
        {
          message: "Sylvia",
          id: 3,
        },
      ],
      //searchtext: 'Please input somthing...',
      value: "Input...",
    };
  },
  computed: {
    reverseMessage: function () {
      return this.message.split("").reverse().join("");
    },
    currentTabComponent: function () {
      return "tab-" + this.currentTab.toLowerCase();
    },
  },
};
/* Vue.component("user-name", {
  props: ["name"], //變成javascript 的變數
  template: ``, //取這個變數的值
});

Vue.component("custom-input", {
  props: ["value"],
  template: ``,
}); */
</script>

<style>
body {
  background: #20262E;
  padding: 20px;
  font-family: Helvetica;
}

#app {
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  transition: all 0.2s;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}

.tab-button:hover {
  background: #e0e0e0;
}

.tab-button.active {
  background: #e0e0e0;
}

.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
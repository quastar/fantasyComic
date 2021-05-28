<script lang="ts" src='./index.ts'/>
<style lang="less">
@import url('./index.less');
</style>
<template>
  <div class="main-home">
    <im-home v-if="Page==='home'" :conversations="conversations" @switchPage="switchPage"></im-home>
    <im-im  v-if="Page==='im'" :chosedConversation="chosedConversation" @switchPage="switchPage"></im-im>
  </div>
</template>

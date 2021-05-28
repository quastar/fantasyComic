<script lang="ts" src="./index.ts"/>
<style lang="less">
@import url("./index.less");
</style>
<template>
  <div class="im">
    <div class="im-header">
      <Vicon name="arrow-left" color="#fff" @click="changeShow()" />
      <div class="person-info">
        <p>{{ chosedConversation.isGroup?chosedConversation.groupName:judgeAvatar(chosedConversation.messageBody).name}}</p>
        <!-- <div class="person-status">
          <span :class="{ online: chosedConversation.status === 0 }"></span>
          <p>在线</p>
        </div> -->
      </div>
      <Vicon name="setting-o" color="#fff" />
    </div>
    <PullRefresh v-model="isFreshing" :head-height="80" @refresh="onRefresh">
      <div class="home-body">
        <div></div>
      </div>
    </PullRefresh>
    <div class="im-bottom">
      <Vfield
        v-model="message"
        rows="1"
        autosize
        type="textarea"
        placeholder="请输入"
      >
        <template slot="button">
          <Vbutton round type="info" :disabled="!message" @click="sendMessage()">发送</Vbutton>
        </template>
      </Vfield>
    </div>
  </div>
</template>
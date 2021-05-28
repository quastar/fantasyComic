<script lang="ts" src="./index.ts"/>
<style lang="less">
@import url("./index.less");
</style>
<template>
  <div class="home">
    <div
      class="home-header"
    >
      <van-Image
        round
        class="header-avatar"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
        @click="
        showSetting = true;
        hideSetting = false;
      "
      />
      <div class="person-info">
        <p>{{person.name}}</p>
        <div class="person-status">
          <span :class="{'online':person.status===0}"></span>
          <p>
            在线
          </p>
        </div>
      </div>
    </div>
    <PullRefresh
      v-model="isFreshing"
      :head-height="80"
      @refresh="onRefresh"
      success-text="刷新成功"
    >
      <div class="home-body">
        <div>
          <Search v-model="searchKeyWord" shape="round" placeholder="搜索" />
        </div>
        <div>
          <div
            v-for="conversation in conversations"
            :key="conversation.conversationId"
            :class="{
              'message-box': true,
              'message-box-active': touch_this === conversation.conversationId,
            }"
            @touchend="check_message_detail(conversation)"
            @touchstart="touch_this = conversation.conversationId"
          >
            <van-Image round class="header-avatar" :src="conversation.avatar?conversation.avatar:judgeAvatar(conversation.messageBody).avatar" />
            <div class="message-box-details">
              <p>{{conversation.isGroup?conversation.groupName:judgeAvatar(conversation.messageBody).name }}</p>
              <div>
                <p v-if="conversation.isGroup">{{ conversation.messageBody[conversation.messageBody.length-1].talkerName }}：</p>
                <p>{{ conversation.messageBody[conversation.messageBody.length-1].message }}</p>
              </div>
            </div>
            <div class="message-box-tag">
              <Badge :content="conversation.tag" max="99" />
            </div>
          </div>
        </div>
      </div>
    </PullRefresh>
    <Tabbar v-model="active">
      <TabbarItem badge="3">
        <span>自定义</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </TabbarItem>
      <TabbarItem icon="search">标签</TabbarItem>
      <TabbarItem icon="setting-o">标签</TabbarItem>
    </Tabbar>
    <div
      :class="{
        'setting-page-show': showSetting,
        'setting-page-hide': hideSetting,
      }"
      
    >
      <span
        class="setting-page-close"
        @click="
          hideSetting = true;
          showSetting = false;
        "
      >
        <VIcon name="close" />
      </span>
    </div>
  </div>
</template>
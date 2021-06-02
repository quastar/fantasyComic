<script lang="ts" src="./index.ts"/>
<style lang="less">
@import url("./index.less");
</style>
<template>
  <div class="home">
    <div class="home-header">
      <VIcon name="arrow-left" color="#fff" @click="backDir" />
      <VIcon name="plus" color="#fff" @click="addDir" />
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
        <div class="dir_box">
          <ul>
            <li v-for="dir in dirShowOnPage" :key="dir.dirId" @click="intoDir(dir.dirId)">
              <div></div>
              <span>{{ dir.name }}</span>
            </li>
          </ul>
        </div>
        <!-- <Uploader :after-read="afterRead" accept="*/*" multiple></Uploader> -->
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
    <van-dialog
      v-model="showDialog"
      title="新建文件夹"
      show-cancel-button
      :before-close="confirmDirName"
    >
      <Field v-model="dirName" label="文件夹名称" v-if="!showMounts"></Field>
      <Field v-model="totalChapters" label="总话数" v-if="showMounts"></Field>
    </van-dialog>
  </div>
</template>
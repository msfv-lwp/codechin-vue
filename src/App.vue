<template>
  <header>
    <div class="container">
      <div class="header mt-3">
        <div class="header-logo">
          <img class="logo" src="./assets/images/logo.png" />
        </div>
        <div class="header-search">
          <form>
            <input
              type="search"
              class="search-bar"
              placeholder="چی نیاز داری؟"
            />
          </form>
        </div>
        <div class="header-btn">
          <div class="row">
            <div class="col col-xl-6">
              <button type="button" class="btn-login">ورود</button>
            </div>
            <div class="col col-xl-6">
              <button type="button" class="btn-register">عضویت</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-one mt-5">
      <div class="container">
        <div class="row">
          <div id="navbarItem">
            <router-link to="/">صفحه اصلی</router-link>
            <router-link to="/about">مقالات</router-link>
            <a href="#"> داشبورد </a>
            <a href="#"> سوالات متداول </a>
            <a href="#"> معرفی سایت </a>
            <a href="#"> ارتباط باما </a>
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </header>
</template>
<style>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.rtl.min.css";
@import "./assets/stylesheet/style.css";
</style>

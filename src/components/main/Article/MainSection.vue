<template>
  <div class="row">
    <div v-for="item in articles" :key="item.id" class="col col-xl-4 col-md-6 col-12">
      <div class="item-section-two">
        <a class="ist-link" href="#">
          <div class="dist-pic">
            <img class="ist-pic" :src="require(`@/assets/images/istp.jpg`)" />
          </div>
          <div class="ist-text mt-3">
            <h5>{{ item.title }}</h5>
            <p>
              {{ item.description }}
            </p>
          </div>
          <div class="ist-footer">
            <svg
              height="15"
              fill="gray"
              viewBox="0 0 512 512"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm121.75 388.414062c-4.160156 4.160157-9.621094 6.253907-15.082031 6.253907-5.460938 0-10.925781-2.09375-15.082031-6.253907l-106.667969-106.664062c-4.011719-3.988281-6.25-9.410156-6.25-15.082031v-138.667969c0-11.796875 9.554687-21.332031 21.332031-21.332031s21.332031 9.535156 21.332031 21.332031v129.835938l100.417969 100.414062c8.339844 8.34375 8.339844 21.824219 0 30.164062zm0 0"
              />
            </svg>
            ۳ دقیقه |
            <svg
              id="Capa_1"
              fill="gray"
              enable-background="new 0 0 511.977 511.977"
              height="15"
              viewBox="0 0 511.977 511.977"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="m14.977 390.988h392c3.516 0 6.914-1.23 9.609-3.472 3.765-3.153 89.652-77.038 94.889-236.528h-421c-5.217 144.774-84.315 212.822-85.137 213.501-4.819 4.072-6.592 10.723-4.424 16.641 2.153 5.903 7.764 9.858 14.063 9.858z"
                />
                <path
                  d="m496.976 60.988h-75v-15c0-8.4-6.6-15-15-15s-15 6.6-15 15v15h-76v-15c0-8.4-6.6-15-15-15s-15 6.6-15 15v15h-75v-15c0-8.4-6.6-15-15-15s-15 6.6-15 15v15h-75c-8.4 0-15 6.6-15 15v45h421v-45c0-8.4-6.6-15-15-15z"
                />
                <path
                  d="m435.849 410.515c-8.145 6.782-18.369 10.474-28.872 10.474h-316v45c0 8.291 6.709 15 15 15h391c8.291 0 15-6.709 15-15v-168.146c-28.92 70.951-69.276 106.937-76.128 112.672z"
                />
              </g>
            </svg>
            {{ item.created_at }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_API_URL_DOMAIN+"api/v1/articles")
      .then((response) => {
        this.articles = [...response.data].slice(0, 10);
      });
  },
};
</script>
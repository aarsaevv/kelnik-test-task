<template>
  <section class="catalog">
    <h1 class="catalog__title">{{ t("catalog.title") }}</h1>
    <div class="catalog__table table">
      <ul class="table__header">
        <li>{{ t("catalog.table.header.plan") }}</li>
        <li>{{ t("catalog.table.header.flat") }}</li>
        <li>{{ t("catalog.table.header.area") }}</li>
        <li>{{ t("catalog.table.header.floor") }}</li>
        <li>{{ t("catalog.table.header.price") }}</li>
      </ul>
      <ul>
        <li v-for="flat in flats">
          <div class="">
            {{ flat.plan }}
          </div>
          <div class="">
            {{ flat.title }}
          </div>
          <div class="">
            {{ flat.area }}
          </div>
          <div class="">
            {{ flat.floor }} из {{ flat.total_floors }}
          </div>
          <div class="">
            {{ flat.price }}
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
// TODO: Сверстать до конца
// TODO: Сделать кнопки
// TODO: Сделать фильтры

import { t } from "../code/translate";
import flats from "../__mocks__/flats.json";
</script>

<style lang="scss">
@use "../assets/fonts" as fonts;

.catalog {
  &__title {
    padding-top: var(--g-spacing-96);

    @include fonts.Heading-1();
  }

  &__table {
    padding-top: var(--g-spacing-48);
  }
}

.table {
  &__header {
    display: flex;

    @include fonts.Caption-1();
  }
}
</style>

<template>
  <h1 class="heading-1">h1 Typography</h1>
  <h2 class="heading-1">h2 Heading 1</h2>
  <h2 class="heading-2">h2 Heading 2</h2>
  <h2 class="heading-3">h2 Heading 3</h2>
</template>

<style lang="scss">
h1,
h2 {
  margin: 0 0 20px 0;
}

.heading {
  * {
    text-transform: uppercase;
  }

  &-1 {
    font-size: 34px;
    font-weight: 700;
    text-transform: uppercase;
  }

  &-2 {
    font-size: 22px;
    font-weight: 700;
    text-transform: uppercase;
  }

  &-3 {
    font-size: 17px;
    font-weight: 700;
    text-transform: uppercase;
  }
}

@media (min-width: 768px) and (max-width: 1199px) {
  .heading {
    &-1 {
      font-size: 20px;
    }

    &-2 {
      font-size: 18px;
    }

    &-3 {
      font-size: 15px;
    }
  }
}
</style>
